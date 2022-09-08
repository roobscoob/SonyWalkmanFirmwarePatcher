import { findModel } from "./src/upg/utils";
import * as cp from "child_process"
import { Upg } from "./src/upg";
import * as crypto from "crypto";
import * as stream from "stream";
import * as zlib from "zlib";
import * as util from "util";
import * as fs from "fs";
import * as path from "path";

const keypress = async () => {
  process.stdin.setRawMode(true)
  return new Promise<void>(resolve => 
    process.stdin.once('data', () => {
      process.stdin.setRawMode(false)
      resolve()
    })
  )
}


(async () => {
  const upg = Upg.fromFile("./FW.UPG", findModel("nw-zx300"));

  const hashes = [];

  for (let i = 0; i < upg.getFileCount(); i++) {
    const element = upg.getFile(i, i == 6);

    console.log("Writing: " + i);
    fs.writeFileSync("./bins/" + i + ".bin", element);
    hashes[i] = crypto.createHash("md5").update(element).digest();
  }

  console.log("Modify the files, hit enter when done");

  await keypress();

  const six = fs.readFileSync("./bins/6.bin");
  const sixUpdated = crypto.createHash("md5").update(six).digest() == hashes[6];
  const oneUpdated = crypto.createHash("md5").update(fs.readFileSync("./bins/1.bin")).digest() == hashes[1];

  if (sixUpdated && !oneUpdated) {
    const fileName = fs.readFileSync("./1.bin", "utf-8").split(" ")[2];
    fs.writeFileSync("./bins/1.bin", `${six.length} ${hashes[6]} ${fileName}`);
  }

  for (let i = 0; i < upg.getFileCount(); i++) {
    const file = fs.readFileSync("./bins/" + i + ".bin");
    const newHash = crypto.createHash("md5").update(file).digest()

    if (!newHash.equals(hashes[i])) {
      console.log("File " + i + " changed. Updating...");
      upg.setFile(i, file, i == 6);
    }
  }

  fs.writeFileSync("./FW_MOD.UPG", upg.toBinary());
  fs.writeFileSync("./inject/Data/Device/NW_WM_FW.UPG", upg.toBinary());

  cp.execFileSync(path.join(__dirname, "inject", "SoftwareUpdateTool.exe"), { cwd: path.join(__dirname, "inject") })

  process.exit();
})()
