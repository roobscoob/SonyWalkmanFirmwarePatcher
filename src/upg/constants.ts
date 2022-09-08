export type Model = {
  name: string,
  confirmed: boolean,
  kas: string,
}

export const DES_PASSKEY = Buffer.from("ed295076", "utf-8");
export const DES_IV = null;
export const AES_PASSKEY = Buffer.from("9cc4419c8bef488c", "utf-8");
export const AES_IV = Buffer.from("6063ce1efa1d543a", "utf-8")

export const MODEL_LIST: Model[] = [
  { name: "nwz-a10", confirmed: true, kas: "2572f4a7b8c1a08aeb5142ce9cb834d6" },
  { name: "nw-a20", confirmed: true, kas: "d91a61c7263bafc626e9a5b66f983c0b" },
  { name: "nwz-e350", confirmed: true, kas: "8a01b624bfbfde4a1662a1772220e3c5" },
  { name: "nwz-e450", confirmed: true, kas: "8a01b624bfbfde4a1662a1772220e3c5" },
  { name: "nwz-e460", confirmed: true, kas: "89d813f8f966efdebd9c9e0ea98156d2" },
  { name: "nwz-a860", confirmed: true, kas: "a7c4af6c28b8900a783f307c1ba538c5" },
  { name: "nwz-a850", confirmed: true, kas: "a2efb9168616c2e84d78291295c1aa5d" },
  { name: "nwz-a840", confirmed: true, kas: "78033fe79a67786fd79fbc138c865c68" },
  { name: "nwz-e470", confirmed: true, kas: "e4144baaa2707913f17b5634034262c4" },
  { name: "nwz-e580", confirmed: true, kas: "6e25f79812eca7ceed04819d833e80af" },
  { name: "nwz-s750", confirmed: true, kas: "6d4f4d9adec781baf197e6255cedd0f6" },
  { name: "nwz-x1000", confirmed: true, kas: "efafdee4c628fa7536de0b878cfe23af" },
  { name: "nw-zx100", confirmed: true, kas: "cdda8d5e5360fd4373154388743f84d2" },
  /* The following models use a different encryption */
  { name: "nw-wm1a", confirmed: true, kas: "e8d171a5d92f35eed9658c03fb9f86a169591659851fd7c49525f587a70b526c" },
  { name: "nw-wm1z", confirmed: true, kas: "2b07114f06d0f63b8ef8e31c8bc9332c7bd70281f7f8d2f80dab58cd36f82c82" },
  { name: "nw-zx300", confirmed: true, kas: "3ab5bbcb999463c50aaa957496b066c6b76a25f4505bf5b42c0bc4815cbe3db6" },
  { name: "nw-a30", confirmed: true, kas: "c40d91e7efff3e3aa5c8831dd85526fe4972086283419c8cd8fa3b7dcd39dee4" },
  { name: "nw-a40", confirmed: true, kas: "a0d2b1317794074aff77dd2afb9c7aa6b28d6cf24a5e5eb60df87a87eb562de5" },
  { name: "nw-a50", confirmed: true, kas: "dd49de9dab2bce5a59090c01049576d537af6a313e5c0a2c24353937a87352d6" },
  { name: "dmp-z1", confirmed: true, kas: "2b07114f06d0f63b8ef8e31c8bc9332c7bd70281f7f8d2f80dab58cd36f82c82" },
  /* The following keys were obtained by brute forcing firmware upgrades,
   * someone with a device needs to confirm that they work */
  { name: "nw-a820", confirmed: false, kas: "0c9869c268e0eaa6d1ba62daab09cebc" },
  { name: "nw-s10", confirmed: false, kas: "20f65807a9506f9bc591123cea2c2291" },
  { name: "nwz-s610", confirmed: false, kas: "fe14a16d7c5c52cf56846d04305f994c"},
]
