import * as crypto from "crypto";
import { DES_PASSKEY, DES_IV, AES_PASSKEY, AES_IV } from "./constants";
import * as aesJs from "aes-js";

export class Kas {
  static fromBinary(kas: Buffer): Kas {
    switch (kas.length) {
      // device before WM1/NW-A30 use DES
      case 16: {
        throw new Error("V1 encryption not supported")
      }

      // device after WM1/NW-A30 use AES
      case 32: {
        const crypt = new aesJs.ModeOfOperation.cbc(AES_PASSKEY, AES_IV);
        const buf = crypt.decrypt(kas);
        return new Kas(Buffer.from(buf.slice(0, 16)), Buffer.from(buf.slice(16)))
      }
    }
  }

  protected cipher: any;

  constructor(protected readonly key: Buffer, protected readonly sig: Buffer) {
    this.cipher = new aesJs.ModeOfOperation.ecb(key);
  }

  decrypt(buffer: Buffer): Buffer {
    return Buffer.from(this.cipher.decrypt(buffer) as Uint8Array);
  }

  encrypt(buffer: Buffer): Buffer {
    return Buffer.from(this.cipher.encrypt(buffer) as Uint8Array);
  }

  resetToCbc() {
    this.cipher = new aesJs.ModeOfOperation.cbc(this.key, AES_IV);
  }

  resetToEcb() {
    this.cipher = new aesJs.ModeOfOperation.ecb(this.key);
  }

  getKey() { return this.key }
  getSignature() { return this.sig }
}
