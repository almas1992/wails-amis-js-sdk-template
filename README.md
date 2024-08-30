# README

## About

Create GUI apps with [Wails](https://wails.io/) + [Amis](https://aisuda.bce.baidu.com/amis/zh-CN/docs/index)!

## Dev env requirements

- setup a [golang toolchain](https://go.dev/doc/install)
- setup a [wails toolchain](https://wails.io/docs/next/gettingstarted/installation)

## Create a project

Run the following command:

```bash
wails init -n wails-hello-world -t https://github.com/almas1992/wails-amis-js-sdk-template
```

> If you want to update amis sdk version, you can download [amis sdk](https://github.com/baidu/amis/releases) and extract to `frontend/src/assets/amis` folder, then run the `adapt-amis.sh` script in the `scripts` folder.
