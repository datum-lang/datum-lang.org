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

### Suggestions

#### Notes

from [雾色](https://www.zhihu.com/people/yunlongyun)

> 为什么要编程语言转编程语言呢？如果可以从伪代码快速转化成编程语言不是也可以吗？并且这种抽象层次是比较稳定的。我们缺少伪代码转换成任何编程语言的工具。就像智能提示，我们可以把伪代码分解成细粒度，每个伪代码的名词都可以在网络库中找到对象，动词有方法，形容词有属性，再通过逻辑组织起来，每个细粒度的对象和逻辑都能被转换成任何编程语言。

> 我的意思是建立通用语言的标准，并尝试建立其中一门主流语言的对象库，甚至是脱离对象的通用方法和通用属性，在类似vscode这种编辑器中提供伪代码到对象或者函数的接口，每个人都能发布他的一个函数、一个对象、一个通用方法、一个通用属性到这个网络上的平台，其它人写伪代码时就可以直接提示出他选择的语言相关的对象、函数或者方法了。这样算不算实现了跨语言呢。把语言转换留给编程者去做，而这边只是提供一个平台、标准、接口或者编辑器插件。就像超强的tabnine。

> 可以把你伪代码中的任意一个词，给出许多（开源实时添加的）智能提示，比如我要实现一个算法，让篮子里的苹果增加一个。
通过nlp分词并解析出词性，再给出对应的提示，篮子、苹果的对象，增加这个方法，一个这个数词可能是调用方法的循环次数。到最后自己需要的是组织，并且实现网络提示接口中没有的对象和方法，并自动上传。粒度可以是自由的，可以实现一个复杂的功能，可以实现一个简单点方法。将这种方法按照业务领域或者主题来划分。


from [灵剑](https://www.zhihu.com/people/ling-jian-94)

> 简单听完有一些很深切的疑问：1. 不同语言的解析模型就不一样，正则表达式解析语法树这样的想法会不会太naive了一点？比如说C++的语法纯粹就是上下文相关的，a<b,c>d这样的结构有多义性，不可能单纯通过文法变成语法树；再比如说Python的语法跟缩进层级是有关的。2. 能变成语法树不代表就能做相互转码，首先不同语言的功能不一样，虽然说图灵完备的语言原则上都可以相互表达，但是这个相互转化的过程本身可能代价会超乎想象，甚至不得不以某种类似于虚拟机解释执行的方式运行；其次，标准库差异的问题难以解决，操作系统API之类的更难。更不要说跟第三方库二进制连接的问题了。



