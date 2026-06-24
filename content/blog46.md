+++
title = "The Interlude"
date = 2026-06-23
+++

距离上一篇博客，已经过了两年。这两年里，AI agent 与大模型的发展很快：从两年前的 prompt engineering，到如今的 harness engineering、loop engineering；存储成本持续下降，人们也开始 token maxing。一层叠一层，技术趋势似乎正在收敛。

还有一个更大的趋势：人们一直在往上层寻找模式。

## 个人工具的变化

两年前，我曾写过[对笔记系统的反思](/blog42/)，认为最适合个人的系统或许是 Obsidian。两年后，这个看法有了一些变化。现在我觉得，更接近答案的可能是 Notion 加 Cursor，再配一个 Claude 或 Codex 这样的编程工具。

这个转变本身，就是「往上层走」的一个例子。Obsidian 解决的是**怎么记**：卡片、双向链接、图谱，把信息从脑子里搬出来，再在不同笔记之间建立联系。Notion 加 Cursor 和 Claude，解决的更多是**记什么、怎么用**：意图怎么表达，上下文怎么组织，输出怎么验证。个人知识管理里，中间那层「把想法翻译成结构化笔记、再把笔记翻译成行动」的工作，正在被 Agent 压缩。

如果把 AI 模型看作符号世界里的计算机，那么很多个人的 know-how，在足够大的数据量面前，并没有想象中那么珍贵。A2A 一定会在社会群体中蔓延；而当所有人开始拥抱 Agent——连微信今天都能推出 Agent 去总结朋友圈——以后我们面对的，往往不再是一个软件，而是一个软件 Agent。

## 组织里被吃掉的那一层

[Ajey Gore 最近写了一篇文章](https://ajeygore.in/content/the-anatomy-of-an-ai-native-org)，把这件事讲得很清楚。过去三十年，软件公司的组织图几乎都是同一个形状：顶层少数人决定 **Why**——为什么做、为什么是现在；中间一层决定 **What**——做什么、不做什么；最宽的那一层是 **How**——工程师、项目经理、Scrum Master、Tech Lead，把 What 翻译成 ticket、PR、部署、release note，再把进度翻译回业务语言。

Gore 说，我们其实一直是 **glorified translators**——光荣的翻译官。业务意图翻译成产品 spec，spec 翻译成 JIRA ticket，ticket 翻译成 branch 和 PR，PR 翻译成部署和 release note，release note 再翻译回 status update。Agile、SAFe、Spotify model，本质上都是在让这条翻译流水线跑得更快。

AI 没有来抢某个 job title。它来抢的是一种 **task type**：把定义清晰的输入，转换成定义清晰的输出。自然语言到 SQL，需求到代码，ticket 到 PR，设计稿到组件——这类工作被压缩了一个数量级。中间层被吃掉，而中间层恰恰是 org chart 里人头最多的地方。

两端反而变难了。定义 Why 更难——因为执行一个错误 Why 的成本几乎降到了零，更多错误的 Why 会以更快的速度、更大的信心被 ship 出去。定义 What 也更难——执行越便宜，选项越多，在 abundance 下做 judgement 本身就是一门学问。

## 新的形状

Gore 画出的新 org chart 是这样的：

- **Why** 层依然很薄，conviction 不会随 headcount 线性增长
- **What** 层会比以前更大——不是写 ticket 的产品经理，而是能在 Why 和 Agent 之间 hold context、每天做几十次「什么叫 good」判断的人
- **How** 层大幅收缩，但留下来的人会处理最难的 How：架构、trust system、Agent 不该 unsupervised 碰的那 5% 代码、harness 本身的设计
- **Agent** 做大部分 conversion 工作——写 PR、更新 doc、起草 release note、互相 review

What 和 How 的比例即将翻转。中间协调翻译的 manager，如果不开始向 Why、What 或 trust system 贡献，角色本身就在溶解。hands-on 也不再等于写代码——设计 eval suite、定义 Agent 必须遵守的 contract、写驱动 Agent roadmap 的 prompt，都是 hands-on。跑 standup、批 JIRA、开 status meeting，那层工作正在缩小。

这和 engineering 侧的收敛是对得上的：prompt engineering 是在教 Agent **怎么翻译**；harness engineering 是在设计 **翻译流水线本身**——spec、eval、golden build、agent-of-agent review；loop engineering 则是在 **Why 和 What 的边界上** 决定什么时候继续、什么时候停、什么时候换方向。

## 往上层，还是往中间

现在有很多文章讨论 AI 时代组织架构的变化。Gore 的框架和这些讨论有一条共同的共识：最底层执行层所负责的具体事项，可以被 AI 极大程度地替代；而原本处于这一层的人，身份将更多地迁移到决策层。

但「迁移到决策层」这个说法容易让人误以为只要往上爬就行。更精确的说法或许是：**中间那层 translation work 在消失，两端和 harness 在变厚。** 危险的位置不是「中间的人不好」，而是如果你的主要价值仍然集中在 translation——无论是组织里的 ticket conversion，还是个人笔记系统里的信息搬运——那块地都会被压缩得最快。

对个人来说，Obsidian 到 Notion + Cursor 的切换，和组织里 How 层收缩、What 层扩张，是同一种结构变化在不同尺度上的重复。笔记系统曾经是个人 wiki，是收集箱；现在 Agent 可以读、写、改、搜，个人更需要的是定义 good、设计 harness、验证 output，而不是亲手维护每一张卡片之间的链接。

## Interlude

Interlude 是幕间休息，是两幕之间的过渡。上一篇博客停在 Obsidian 和 PARA method 的反思里，那时我还在个人知识管理的 How 层里找最优解。两年过去，Agent 把 translation 这层吃掉了，技术栈从 prompt 收敛到 harness 再到 loop，组织图从宽 How 窄 What 走向宽 What 窄 How。

这不是说笔记不重要，或者 execution 没有价值。Gore 说得对：留下来的 How 工作反而更有趣——设计 trust system，hold 住 Agent 不能负责的 outcome。对个人也一样：Notion 还是容器，Cursor 还是界面，但真正的工作变成了怎么定义 correct、怎么 build harness、怎么在 Agent 做错的时候还能 operate 到最底层。

The Interlude 之后，下一幕会是什么，我还不知道。但至少方向清楚了：**别和 Agent 比翻译，它只会越来越快赢。** 往上层找模式，不是逃避 execution，而是去做 Agent 吃不掉的那些事——Why、What，以及围绕 Agent 的那套 harness。

---

参考：[The Anatomy of an AI-Native Org — Ajey Gore](https://ajeygore.in/content/the-anatomy-of-an-ai-native-org)

*Credit: 这篇博客是与 Cursor 共同完成。*
