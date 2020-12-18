---
title: 'Introduction'
date: '2020-11-27T13:25:07.322Z'
author:
  name: Phodal
---

# Charj

Charj Lang 是一个使用 Rust 编写的**描述式**、**中间**编程语言。其主要用途是：

![Charj Build](https://github.com/charj-lang/charj-poc/workflows/Charj%20Build/badge.svg)

> A easy maintain(read/write) language for transform **from**/**to** other languages.

Design for:

 - legacy system migration.
 - multiple-targets compiled languages. (by LLVM)
 - quick pseudocode.
 - simple DSL design. (TBD)
     - domain model design for languages.
     - visualize architecture.

上下游支撑项目：

1. IDEA 插件: [Intellij Charj](https://github.com/charj-lang/intellij-charj)
2. Charj 项目：[Charj](https://github.com/charj-lang/charj)
3. Scie 语言识别引擎：[Scie](https://github.com/charj-lang/scie)
4. Movable DSL: [movable](https://github.com/charj-lang/movable)
5. Typography parser: [Typography](https://github.com/charj-lang/movable/tree/master/typography)

![流程图](https://github.com/charj-lang/arts/blob/master/charj-process.svg?raw=true)

## 流程设计

### 1. 解析（Stage 1.0）

Visual Studio Code 使用 Textmate 的语法来解析不同的语言。如下的语言

```c
#include <stdio.h>
int main() {
  printf(\"Hello, World!\");
  return 0;
}
```

将会被解析为：

```bash
- token from 0 to 1 () with scopes C
- token from 0 to 1 (#) with scopes C, meta.preprocessor.include.c, , punctuation.definition.directive.c
- token from 1 to 8 (include) with scopes C, meta.preprocessor.include.c,
- token from 8 to 9 ( ) with scopes C, meta.preprocessor.include.c
- token from 9 to 10 (<) with scopes C, meta.preprocessor.include.c, string.quoted.other.lt-gt.include.c, punctuation.definition.string.begin.c
- token from 10 to 17 (stdio.h) with scopes C, meta.preprocessor.include.c, string.quoted.other.lt-gt.include.c
- token from 17 to 18 (>) with scopes C, meta.preprocessor.include.c, string.quoted.other.lt-gt.include.c, punctuation.definition.string.end.c
- token from 0 to 3 (int) with scopes C, storage.type.built-in.primitive.c
- token from 3 to 4 ( ) with scopes C
- token from 4 to 8 (main) with scopes C, meta.function.c, meta.function.definition.parameters.c, entity.name.function.c
- token from 8 to 9 (() with scopes C, meta.function.c, meta.function.definition.parameters.c, punctuation.section.parameters.begin.bracket.round.c
- token from 9 to 10 ()) with scopes C, meta.function.c, meta.function.definition.parameters.c, punctuation.section.parameters.end.bracket.round.c
- token from 10 to 11 ( ) with scopes C
- token from 11 to 12 ({) with scopes C, meta.block.c, punctuation.section.block.begin.bracket.curly.c
- token from 0 to 6 (printf) with scopes C, meta.block.c, meta.function-call.c, entity.name.function.c
- token from 6 to 7 (() with scopes C, meta.block.c, meta.function-call.c, punctuation.section.arguments.begin.bracket.round.c
- token from 7 to 8 (") with scopes C, meta.block.c, meta.function-call.c, string.quoted.double.c, punctuation.definition.string.begin.c
- token from 8 to 21 (Hello, World!) with scopes C, meta.block.c, meta.function-call.c, string.quoted.double.c
- token from 21 to 22 (") with scopes C, meta.block.c, meta.function-call.c, string.quoted.double.c, punctuation.definition.string.end.c
- token from 22 to 23 ()) with scopes C, meta.block.c, meta.function-call.c, punctuation.section.arguments.end.bracket.round.c
- token from 23 to 24 (;) with scopes C, meta.block.c, punctuation.terminator.statement.c
- token from 0 to 6 (return) with scopes C, meta.block.c, keyword.control.c
- token from 6 to 7 ( ) with scopes C, meta.block.c
- token from 7 to 8 (0) with scopes C, meta.block.c, constant.numeric.decimal.c
- token from 8 to 9 (;) with scopes C, meta.block.c, punctuation.terminator.statement.c
```

从这一步，我们可以拿到一个 Tokenizer 后的结果，如我们 include 的情况等等。

#### Stage 2.0 使用 Typography

### 2. DSL 转换

随后，我们要将上述的 Token 进行转换，转换到特定的 Movable DSL。

Movable DSL 将映射到 Poet DSL 上。

### 3. 生成 Charj 代码

即，代码中的：https://github.com/charj-lang/charj-poet

### 4. Charj 编辑与代码优化

[https://github.com/charj-lang/charj](https://github.com/charj-lang/charj)

### 5. 再次转换

理想情况下，通过我们的 Translator DSL，就可以再度将代码转换为新的语言。

