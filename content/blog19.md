+++
title = "热力学第二定律"
date = 2024-07-24
+++

# 前言

在["From Eternity to Here"](https://en.wikipedia.org/wiki/From_Eternity_to_Here), 一本研讨时间为什么是单向而不是双向的书里(aka. 时间之箭), 看到了这样一个观点, 大致的中文意思是"如果你只能选择相信一条物理定律, 那一定是热力学第二定律.". 

what? 难道不是万有引力之类的定律吗? 为什么热力学第二定律会有那么大的影响力? 以及现在流行说的"熵增"到底是什么? 现在让我们重温一下热力学第二定律的发展史.


# 正文

下面这张图展示了热力学发展历史历程中的关键人物. 图片来自["How Did We Get Here? The Tangled History of the Second Law of Thermodynamics"](https://writings.stephenwolfram.com/2023/01/how-did-we-get-here-the-tangled-history-of-the-second-law-of-thermodynamics/). 如果对热力学历史感兴趣强烈推荐阅读原文.

<img src="https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/history.png" height="100" width="100"/>

简而言之, 卡诺(Sadi Carnot)提出了卡诺热机(aka. 永动机), 但是卡诺的著作在他的时代不受待见. 直到去世后, 开尔文(Lord Kelvin)通过卡诺学弟整理的资料了解了卡诺的研究, 开尔文在卡诺热机的基础上提出了[热力学的另一种说法](https://thermodynamics.dlut.edu.cn/fazhanjianshi/relixuesidadinglv.htm). 而克劳修斯(Rudolf Julius Emmanuel Clausius)在此基础上提出了熵(entropy)的概念. 并且正式确立(formalization)了热力学第二定律的描述.


<img src="https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/entropy.png" height="100" width="100"/>

此外, 克劳修斯在提出热力学第二定律时, 将范围放大到了宇宙(universe). 

<img src="https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/uni_entropy.png" height="100" width="100"/>

至此, 也就有所谓的热寂(Heat death of the universe)假说.

ok, 现在回到我们默认所说的"熵增". 现在口语语境中的"熵增"默认代表的是混乱度. 克劳修斯最开始提出的熵的概念是两个热系统进行能量传输时所损失掉的能量. 不过确实直接的影响是, 既然无用能量增加了, 系统混乱度会随着时间的推移而增加. 因此理解成混乱度没有什么问题.

很有意思的是, Stephen Wolfram对热力学第二定律的理解. Stephen Wolfram以rule30元胞自动机举例. 简单的规则不断演变最终导致了整体系统复杂性增加. 这里有一点, Stephen Wolfram说的复杂性表现为混论度, 但是不太一样. 复杂性是站在观察者的视角上看得, 而混乱度是站在系统内部的视角上. 我们先继续往下走, 有意思的事来了.
Wolfram说宇宙就像一台超级超级计算机, 由于人类的计算能力始终跟不上宇宙. 因此, 复杂度总是增加的(宇宙运算不会停止). 但是假如人类的计算能力跟上了, 那么理论上给定人类所有的先验宇宙定律, 随便在路边找一块石头. 都能够推算出现在时刻到宇宙大爆炸之间甚至之前的事.

Which means, if 宇宙是有意识的. 算命和占卜是科学不是迷信. 自由意志也不存在. Really interesting.

# 参考资料

  - [Computational Foundations for the Second Law of Thermodynamics](https://writings.stephenwolfram.com/2023/02/computational-foundations-for-the-second-law-of-thermodynamics/)
  - [How Did We Get Here? The Tangled History of the Second Law of Thermodynamics](https://writings.stephenwolfram.com/2023/01/how-did-we-get-here-the-tangled-history-of-the-second-law-of-thermodynamics/)
  - [History of entropy](https://en.wikipedia.org/wiki/History_of_entropy)
  - [熱力學發展簡史](http://hsiaoscu.pbworks.com/w/file/fetch/69026626/%E7%86%B1%E5%8A%9B%E5%AD%B8%E7%99%BC%E5%B1%95%E7%B0%A1%E5%8F%B2.pdf)
  - [What is the second law of thermodynamics?](https://www.livescience.com/50941-second-law-thermodynamics.html)