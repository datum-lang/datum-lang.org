# Datum

The home of the Datum website 

Datum Lang 是一个使用 Rust 编写的**描述式**、**中间**编程语言。其主要用途是：

 - legacy system migration.
 - domain model design for languages.
 - compile languages. for examples, JavaScript to WASM.
 - visualize architecture.
 - a quick DSL maker's infrastructure. (TBD)

## Compiler Workflow

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

1. 语言转换：[Datum Poet](https://github.com/datum-lang/datum-poet)
2. IDEA 插件: [Intellij Datum](https://github.com/datum-lang/intellij-datum)
3. Datum 项目：[Datum](https://github.com/datum-lang/datum)
4. Scie 语言识别引擎：[Scie](https://github.com/datum-lang/scie)


### Total compiler flow

```step-line
 - origin language
 - Scie (tokenizer)
 - Poet DSL 1
 - Datum Poet
 - Datum code (datum compiler)
 - Poet DSL 2
 - Datum Lang Generate API
 - other language
```

### 流程设计

#### 1. 解析

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

#### 2. DSL 转换

随后，我们要将上述的 Token 进行转换，转换到特定的 DSL，这里暂时称之为 Translator DSL。

Translator DSL 将映射到 Poet DSL 上。

#### 3. 生成 Datum 代码

即，代码中的：https://github.com/datum-lang/datum-poet

#### 4. Datum 编辑与代码优化

[https://github.com/datum-lang/datum](https://github.com/datum-lang/datum)

#### 5. 再次转换

理想情况下，通过我们的 Translator DSL，就可以再度将代码转换为新的语言。


## Related

[https://github.com/usethesource/rascal](https://github.com/usethesource/rascal) is a meta-programming language. It contains the interpreter, the parser generator, the parser run-time, the standard library, the online documentation and the type checker.

## FAQ

### 如何支持内置函数？

来源：内置函数你怎么搞，比如打开文件 Python 是 Open，C++ 是 Stream，API 都不一样？

Datum 并不会支持内置函数的转换。 Datum 关心的是语言的互转，可以简单的认为 AST 的互转，不考虑编译等场景。

对应未来可能的支持方案：对内置函数进行接口封装，等转换到新语言后，再由开发者实现这些接口。

### 是否实现虚拟机？

需要等到有精力的时间再考虑。

### C++ 的支持程度？

C++ 过于复杂，未来只会出现有限的 C++ 支持。

### Go Context？

是否要实现一些库去模拟 Context 的 Timeout Cancel？

### EBNF

### 其它 Suggestions

#### Notes

from [雾色](https://www.zhihu.com/people/yunlongyun)

> 为什么要编程语言转编程语言呢？如果可以从伪代码快速转化成编程语言不是也可以吗？并且这种抽象层次是比较稳定的。我们缺少伪代码转换成任何编程语言的工具。就像智能提示，我们可以把伪代码分解成细粒度，每个伪代码的名词都可以在网络库中找到对象，动词有方法，形容词有属性，再通过逻辑组织起来，每个细粒度的对象和逻辑都能被转换成任何编程语言。

> 我的意思是建立通用语言的标准，并尝试建立其中一门主流语言的对象库，甚至是脱离对象的通用方法和通用属性，在类似vscode这种编辑器中提供伪代码到对象或者函数的接口，每个人都能发布他的一个函数、一个对象、一个通用方法、一个通用属性到这个网络上的平台，其它人写伪代码时就可以直接提示出他选择的语言相关的对象、函数或者方法了。这样算不算实现了跨语言呢。把语言转换留给编程者去做，而这边只是提供一个平台、标准、接口或者编辑器插件。就像超强的tabnine。

> 可以把你伪代码中的任意一个词，给出许多（开源实时添加的）智能提示，比如我要实现一个算法，让篮子里的苹果增加一个。
通过nlp分词并解析出词性，再给出对应的提示，篮子、苹果的对象，增加这个方法，一个这个数词可能是调用方法的循环次数。到最后自己需要的是组织，并且实现网络提示接口中没有的对象和方法，并自动上传。粒度可以是自由的，可以实现一个复杂的功能，可以实现一个简单点方法。将这种方法按照业务领域或者主题来划分。


from [灵剑](https://www.zhihu.com/people/ling-jian-94)

> 简单听完有一些很深切的疑问：1. 不同语言的解析模型就不一样，正则表达式解析语法树这样的想法会不会太naive了一点？比如说C++的语法纯粹就是上下文相关的，a<b,c>d这样的结构有多义性，不可能单纯通过文法变成语法树；再比如说Python的语法跟缩进层级是有关的。2. 能变成语法树不代表就能做相互转码，首先不同语言的功能不一样，虽然说图灵完备的语言原则上都可以相互表达，但是这个相互转化的过程本身可能代价会超乎想象，甚至不得不以某种类似于虚拟机解释执行的方式运行；其次，标准库差异的问题难以解决，操作系统API之类的更难。更不要说跟第三方库二进制连接的问题了。



