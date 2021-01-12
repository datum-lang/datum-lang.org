---
title: Datum Typography Parser (Draft)
date: '2020-12-16T01:37:21.950Z'
author:
    name: Phodal
slug: datum-typography-parser-draft
---

Typography is a DSL-base parser for build common AST. features:

 - extends
 - data struct binding
 - template match

Inspired by [Fall](https://github.com/matklad/fall) and [Antlr 4](https://github.com/antlr/antlr4)

```lex
// options for movable config
options {
  name  -> "c";
}

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
// todo: for future
ast {
  node parameters {
    parameters parameter*;
  }
}
```

