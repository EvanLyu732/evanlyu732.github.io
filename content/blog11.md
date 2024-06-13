
+++
title = "学习如何阅读论文"
date = 2024-06-13
+++

要了解一手最新的科技前沿, 研究以及阅读文献的能力必不可少. 最近在github上刷到了[research_tao](https://github.com/zibuyu/research_tao)这个仓库by刘知远副教授, 其中有一篇文章讲的是如何阅读文献. 阅读到其中[一章](https://github.com/zibuyu/research_tao/blob/master/02_reading_paper.md)的时候激发了思考自己阅读文献的方式是否可以再提升一步. 因此花了点时间总结了几位不同老师关于如何阅读论文(主要是计算机与人工智能方向)的材料, 希望对你有所帮助.

> Note: 几位老师都提到了如何选择材料, 但不是这篇文章的重点. 因此这里不会提及应该读什么. 

<a id="目录"></a>
# 目录

- [目录](#目录)
  - [阅读论文的方法](#阅读论文的方法)
  - [清华(刘知远)](#清华刘知远)
  - [Johns Hopkins Univeristy(Jason Eisner)](#johns-hopkins-univeristyjason-eisner)
  - [Univeristy Of Waterloo(Srinivasan Keshav)](#univeristy-of-waterloosrinivasan-keshav)
  - [Harvard University(Michael Mitzenmacher)](#harvard-universitymichael-mitzenmacher)
  - [Carnegie Mellon University(Aaditya Ramdas)](#carnegie-mellon-universityaaditya-ramdas)
- [总结](#总结)
- [参考资料](#参考资料)

<a id="阅读论文的方法"></a>
##  阅读论文的方法

<a id="清华刘知远"></a>
##  清华(刘知远)

在[research_tao](https://github.com/zibuyu/research_tao/blob/master/02_reading_paper.md)里, 刘老师主要谈到的是论文的阅读顺序.

> 阅读论文也不必需要每篇都从头到尾看完. 一篇学术论文通常包括以下结构, 我们用序号来标记建议的阅读顺序:
>   * 题目(1)
>   * 摘要(2)
>   * 正文: 导论(3), 相关工作(6), 本文工作(5), 实验结果(4), 结论(7)
>   * 参考文献(6)
>   * 附录
> 
> 按照这个顺序, 基本在读完题目和摘要后, 大致可以判断这篇论文与自己研究课题的相关性, 然后就可以决定是否要精读导论和实验结果判断学术价值, 是否阅读本文工作了解方法细节. 此外, 如果希望了解相关工作和未来工作, 则可以有针对性地阅读“相关工作”和“结论”等部分.


<a id="johns-hopkins-univeristyjason-eisner"></a>
##  Johns Hopkins Univeristy(Jason Eisner)

Jason Eisner提出Multi-pass reading. 

Multi-pass reading的过程:

* First pass: 大概浏览论文, 了解论文的主要脉络(解决的问题, 以及点子). 限制自己阅读每页的时间. 如果论文值得阅读的话, 开始Second pass.    
* Second pass: 在Second pass中, 不需要仔细阅读每篇论文. 提出问题并且回答他们[(ask yourself dumb questions and answer them)](https://terrytao.wordpress.com/career-advice/ask-yourself-dumb-questions-and-answer-them/). 至少弄清楚论文的动机(Motivation), 原理(Mathematics and algorithms). 以及实验过程(Experiments). 

此外, 在使用Multi-pass reading的要做的事. 需要一边阅读论文一边写笔记(Write as you read). 记录细节(Low-level notes)与框架(High-level notes). 

细节(Low-level notes)包括以下部分:
- 用自己的话复述在论文中不明白的要点
- 补充缺失的细节(假设, 代数步骤, 证明, 伪代码)
- 注释数学对象及其类型
- 类比具体的例子去复述作者的点子以及作者遇到的问题
- 与已知的其他方法和问题联系起来
- 提出原文未说明的地方或原文存在不合理的问题
- 挑战论文的主张或方法
- 想出应该做的后续工作


框架(High-level notes)包括以下部分:
- 总结你感兴趣的内容, 与其他论文进行对比, 并记录你自己的问题和对未来工作的想法. 写下这些摘要会在阅读论文时给你一个目标, 并且这些笔记将来会对你有用.
- 用自己的话复述点子, 确保以后再读这篇文章的时候可以快速重建概念. 花时间在难的部分(公式推导, 算法). 而不是在简单的部分.

原文虽然说是Multi-pass, 但是提到了Second-pass之后就没有继续往下提及了. 不过可以从原文发现后续pass应该做什么的蛛丝马迹, 这里引用原文来表达Multi-pass reading核心思想:

> __Practice__ the ability to __decode the entire paper__ —as if you were reviewing it critically and __trying to catch any errors, sloppy thinking, or incompleteness__. This will __sharpen your critical thinking__. You will want to __turn this practiced critical eye on yourself as you plan, execute, and write up your own research__.

通过解构论文提升自己评判性思考的能力, 再将这种能力转换到自己的研究上面. 因此假如需要有后续pass的话, 应该不断的去提炼点子直到能够解构整篇文章.

<a id="univeristy-of-waterloosrinivasan-keshav"></a>
## Univeristy Of Waterloo(Srinivasan Keshav)

Srinivasan Keshav提出three-pass method. 

* First-pass: 
   - 目的: 抓住论文主要的点子.
   - 时间: 5分钟左右
   - 做什么:
      1. 读标题, 摘要, 以及介绍
      2. 读每一节和每一小节的标题
      3. 读结论 
      4. 看引用
      5. 最后回答五个问题(five C's):
      * 类别(Category): 这篇文章的类型是什么?
      * 内容(Content): 这篇文章与什么内容有关? 理论基础是什么?
      * 准确度(Correctness): 文章的假设是否成立?
      * 贡献(Contributions): 这篇文章主要的贡献是什么?
      * 清晰程度(Clarity): 这篇文章是否清晰的表达点子?

* Second-pass:
   - 目的: 抓住论文主要的内容
   - 时间: 1小时左右
   - 做什么:
      1. 仔细读文章所附带的图片以及其他陈述信息
      2. 将未读过的有相关性参考文献加入阅读列表当中
  

* Third-pass:
   - 目的: 彻底理解论文的细节
   - 时间: 4到5个小时对于初学者， 1小时对于有经验的人
   - 做什么:
      1. 思考与作者处于同样的假设并且复现实验的情况下, 你会如何呈现一个点子, 并与作者的点子进行对比.


<a id="harvard-universitymichael-mitzenmacher"></a>
## Harvard University(Michael Mitzenmacher)

这里选择的材料是CS222-Michael Mitzenmacher的讲义: 
 
- 批判性思考: 通过提出合适的问题去批判性地思考论文, 例如: 如果作者在解决问题, 那么作者解决的问题是正确的问题吗? 是否有更简单的方法作者没有考虑到? 作者提供的方法有什么局限性?
假设是否合理? 逻辑是否合理? 作者对于文中的图表是否是合理的解释数据?
- 创造性阅读: 能否解构论文并且重建这篇文章? 这篇文章好在哪里? 这些点子是否有其他扩展以及应用是作者没有考虑到的? 点子能够更加泛化? 这些提升是否能让结果有明显的提升? 如果你要从这篇文章开始做研究, 你能够做什么?
- 阅读的时候做笔记: 在第一篇读完这篇文章之后, 尝试用一到两句话去总结这篇文章. 如果可以的话, 将这篇文章与相关工作进行比较.

<a id="carnegie-mellon-universityaaditya-ramdas"></a>
## Carnegie Mellon University(Aaditya Ramdas)

这里选用了How to I read research papers-Aaditya Ramdas的ppt讲稿, Aaditya Ramdas讲述了自己阅读论文方法不断迭代的过程.

* 阅读论文的目的: 
  1. 直接从作者身上学习, 避免信息加工.
  2. 作者在旧问题上有新点子
* 方法:
  - first-pass(5到30分钟): 
    - 阅读材料: 
      - 摘要, 问题定义, 主要的理论, 讨论
    - 回答:
      - 什么问题被解决了?
      - 大致描述一下什么有意思的点子?
      - 为什么主要的观点是这样(至少用英文, 最好能用数学公式)?
  - second-pass(30分钟到2小时): 
    - 阅读材料: 
      - 例子, 公式, 定理, 证明
    - 回答:
      - 过去的方法面临什么问题? 这篇文章是如何解决的?
      - 什么是最简单的基准线? 在什么指标上这种方法更好?
      - 有哪些与之相关的问题并且为什么论文的想法还没用应用到上面去?
      - 方法能否应用到没被考虑的问题上?
      - 什么是主要的点子并且能否对以后有所帮助的?
  - thrid-pass(几天/周): 
    - 阅读材料: 
      - 附录, 参考文献, 相关工作, 推论，定理, 证明
    - 回答:
      - 文中的公式/理论是如何被证明的?
      - 是否能够从头复现实现结果?
      - 如果不能, 是否有关键信息被忽略了? 额外的假设是否能够让复现更简单?
      - 是否能够用简单的工具简化证明? 能否用不同的方法证明?


<a id="总结"></a>
# 总结

其实上面提到的方法不仅仅适用于阅读论文, 只不过论文是一种结构化的信息材料. 通过其他信息材料(视频, 文章)学习新知识都可以采取类似的方法. 以记笔记的方式让自己与阅读的材料互动. 提出问题并且回答问题, 推动自己去理解文章. 并且以问题为导向学习让自己处于能够实验的环境之中. 通过复述以及写作总结自己的理解, 帮助自己消新知识. 读完这篇材料后, 不妨花点时间用一两句话总结一下这篇文章的主要观点是什么.


<a id="参考资料"></a>
# 参考资料

* [How to I read research papers - Aaditya Ramdas](https://www.stat.cmu.edu/~aramdas/checklists/reading-tips.pdf)
* [CS222 - Michael Mitzenmacher](http://www.eecs.harvard.edu/~michaelm/CS222/ReadPaper.pdf)
* [How to Read a Paper - S. Keshav](http://ccr.sigcomm.org/online/files/p83-keshavA.pdf)
* [How to Read a Technical Paper - Jason Eisner](https://www.cs.jhu.edu/~jason/advice/how-to-read-a-paper.html)









