# Sony Walkman Firmware Patcher

This tool is a utility for patching firmware updates for sony walkman devices.

It has only been tested on my personal device (NW-ZX300) but should™ work* on all devices with V2 update encryption, listed below:

 - NW-WM1A
 - NW-WM1Z
 - NW-ZX300
 - NW-A30
 - NW-A40
 - NW-A50
 - DMP-Z1

*\* With the exception of the injector, which will only work on the NW-ZX300.*

I welcome PRs, or working with people with the following devices to add support for V1 update encryption:

 - NWZ-A10
 - NW-A20
 - NWZ-E350
 - NWZ-E450
 - NWZ-E460
 - NWZ-A860
 - NWZ-A850
 - NWZ-A840
 - NWZ-E470
 - NWZ-E580
 - NWZ-S750
 - NWZ-X1000
 - NW-ZX100
 - NW-A820
 - NW-S10
 - NWZ-S610

I'd also love help from anyone with devices other than the NW-ZX300 to add injector support for your device.

## How to use

first, you'll need to install all packages with:
`npm i`

then you'll need to grab your update UPG and place it in the root project directory with the name `FW.UPG`

you can then run the script with `ts-node index` (if you have ts-node), or you can compile the typescript and run with `tsc -p .` followed by `node index`

the script will then unpack all the files in the update into a directory called `./bins`

once you finish modifying the files, you can then hit enter in the script. It will detect modified files and repack them into a UPG called `FW_MOD.UPG`

it will also attempt to run the injector on this modified binary, by copying the file into `inject/Data/Device/NW_WM_FM.UPG` and running `inject/SoftwareUpdateTool.exe`

## Assumptions made by the script

1. You are running windows
2. The connected device is an NW-ZX300
3. The 7th data sector in the UPG is compressed
4. The 2nd data sector in the UPG contains a hash for the 7th data sector

While this script was orignally made for my use, i'd love to work with people to reduce and modularize these assumptions.

## [Documentation on the UPG files](./upgDocs.md)
