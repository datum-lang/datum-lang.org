---
title: Charj Dev Setup
date: '2020-12-15T21:59:07.322Z'
author:
  name: Phodal
---


# Charj Dev Setup


## macOS

1. install LLVM

```bash
brew install llvm
```

2. build in first time

```bash
LLVM_SYS_110_PREFIX=/usr/local/Cellar/llvm/11.0.0 cargo build
```

## Ubuntu

1. install LLVM

```bash
wget https://apt.llvm.org/llvm.sh && chmod +x llvm.sh && sudo ./llvm.sh 10
```

2. build


```bash
LLVM_SYS_110_PREFIX=/usr/local/Cellar/llvm/11.0.0 cargo build
```

## Beginner Documents

For beginner:

 - Rust documents: [The Rust Programming Language](https://doc.rust-lang.org/book/)
 - Charj Lexer/Parser - Lalrpop documents: [Lalrpop](https://github.com/lalrpop/lalrpop)
 - LLVM Rust Binding: [Inkwell](https://github.com/TheDan64/inkwell)

Rust + LLVM (Inkwell demo): [Rust LLVM Practises](https://github.com/phodal/rust-llvm-practises)

 - Rust LLVM hello world: [helloworld](https://github.com/phodal/rust-llvm-practises/tree/main/helloworld)
 - Rust LLVM Stdlib: [stdlib](https://github.com/phodal/rust-llvm-practises/tree/main/stdlib)
 - Rust LLVM Wasm Target: [wasm](https://github.com/phodal/rust-llvm-practises/tree/main/wasm)


