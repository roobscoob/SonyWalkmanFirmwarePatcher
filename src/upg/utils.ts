import { DES_IV, DES_PASSKEY, MODEL_LIST, Model, AES_PASSKEY, AES_IV } from "./constants";
import * as crypto from "crypto";
import { Kas } from "./kas";

export enum CryptMode {
  Decrypt,
  Encrypt,
}

export function getKeyAndSignatureFromModel({ name, confirmed, kas: kasStr }: Model) {
  const kas = Buffer.from(kasStr, "hex");

  if (kas.length != 16 && kas.length != 32)
    throw new Error(`The KAS for model ${name} has the wrong length (expected 16 or 32 bytes, found ${kas.length} bytes)`);

  return Kas.fromBinary(kas);
}

export function findModel(name: string): Model {
  for (const model of MODEL_LIST) {
    if (model.name.toLowerCase() === name.toLowerCase())
      return model;
  }

  throw new Error(`Couldn't find model with name ${name}`)
}

export function roundUp(val: number, to: number): number {
  const base = Math.floor(val / to) * to;

  if (val % to !== 0) return base + to;

  return base;
}

export function chunkBuffer(buffer: Buffer, chunkSize: number): Buffer[] {
  var result: Buffer[] = [];
  var len = buffer.length;
  var i = 0;

  while (i < len) {
    result.push(buffer.slice(i, i += chunkSize));
  }

  return result;
}
