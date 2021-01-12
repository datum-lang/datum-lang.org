---
title: Datum Lang Roadmap
date: '2020-12-16T01:37:21.950Z'
author:
  name: Phodal
slug: datum-lang-roadmap
---

![Datum Process](https://datum-lang.github.io/arts/datum-process.svg)

- 1.0：抽象出 Datum Lang
     - 快速的多语言 parser（当前，基于 textmate 高亮语法的  Scie 实现）
     - 设计 HIR 作为 Tier  1 级别语言的 IR
     - 使用 Movable 转换 a 步骤生成的 Token
     - 通过往复抽象，提炼出 Datum Lang
     - Datum Lang 前端实现
- 2.0：实现完整的语言转换
     - 使用 Typography 作为语法解析器
     - 设计 MIR 作为 Tier 2 级别语言的 IR
     - 完整 Datum Lang 编译器实现与优化
3.0 自举
     - 使用 Typography 实现 Datum 语法解析
     - 使用 Typography 实现 Typography 语法解析
     - 使用 Datum 编写 Datum

## Typography 语法解析器

支持继承 + AST 模型生成：参考  Antlr +  Fall

GitHub：[https://github.com/datum-lang/movable](https://github.com/datum-lang/movable)

原型：

```
// default tokenizer for extends
define default$tokenizer {
  identifier: [a-zA-Z_];
}
// define tokenizer rules
tokenizer extends default$tokenizer {
   ...
}
// define rule
rule <ruleName> {
	...
}


// ast for generate code
ast {
  node parameters {
	parameters parameter*;
  }
}
```


## 


