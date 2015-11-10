# meteo

## Introduction

> Shell command to get the weather based on location

## Installation

1. Fork the repository
If you don't have a github account, [click here](https://github.com/join).
2.  
```sh
❯ npm i
```
3.  You can configure defaults values in etc/conf.json
```sh
{"city":"Paris","unit":"f"}
```

##Use

###Options
* **-l**, (--location) -> weather location
* **-u** (--unit) -> temperature unit

###test cmd lign
```sh
❯ bin/meteo
❯ bin/meteo -l Paris
❯ bin/meteo -l Paris -u f
```
