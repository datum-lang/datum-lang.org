---
title: Charj Lang Roadmap
date: '2020-12-16T01:37:21.950Z'
author:
  name: Phodal
slug: charj-lang-roadmap
---

# Charj Roadmap

![Charj Process](https://charj-lang.github.io/arts/charj-process.svg)

- 1.0：抽象出 Charj Lang
     - 快速的多语言 parser（当前，基于 textmate 高亮语法的  Scie 实现）
     - 设计 HIR 作为 Tier  1 级别语言的 IR
     - 使用 Movable 转换 a 步骤生成的 Token
     - 通过往复抽象，提炼出 Charj Lang
     - Charj Lang 前端实现
- 2.0：实现完整的语言转换
     - 使用 Typography 作为语法解析器
     - 设计 MIR 作为 Tier 2 级别语言的 IR
     - 完整 Charj Lang 编译器实现与优化
3.0 自举
     - 使用 Typography 实现 Charj 语法解析
     - 使用 Typography 实现 Typography 语法解析
     - 使用 Charj 编写 Charj

## Typography 语法解析器

支持继承 + AST 模型生成：参考  Antlr +  Fall

GitHub：[https://github.com/charj-lang/movable](https://github.com/charj-lang/movable)

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


