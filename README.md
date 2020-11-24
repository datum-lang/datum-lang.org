# Charj

The home of the Charj website 

Charj Lang 是一个使用 Rust 编写的**描述式**、**中间**编程语言。其主要用途是：

 - legacy system migration.
 - domain model design for languages.
 - compile languages. for examples, JavaScript to WASM.
 - visualize architecture.
 - a quick DSL maker's infrastructure. (TBD)

## Workflow

```step-line
 - Code
 - Lexer
 - Paser
 - AST
 - Compiler
 - HIR
 - MIR
 - Codegen
 - LLVM IR
```

上下游支撑项目：

1. 语言转换：[Charj Poet](https://github.com/charj-lang/charj-poet)
2. IDEA 插件: [Intellij Charj](https://github.com/charj-lang/intellij-charj)
3. Charj 项目：[Charj](https://github.com/charj-lang/charj)
4. Scie 语言识别引擎：[Scie](https://github.com/charj-lang/scie)


