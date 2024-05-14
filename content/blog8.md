+++
title = "LLM OS的曙光"
date = 2024-05-14
+++

在今天的OpenAI的春季发布会, OpenAI发布了[gpt-4o](https://openai.com/index/hello-gpt-4o/). 虽然前几代模型也支持语音功能, 但是在gpt-4o中, 其中任意打断的能力和更快的响应速度, 实在是难以让人区分出是机器人还是人类. 但是现在每次对话都需要重新用语音prompt, 来让模型产生预期的“性格”. 所以显而易见的, 不久后的GPT商店会上架不同“性格”的AI. 以及对自定义AI的支持.

语音和图像的联动是另一项gpt-4o所突出展示出的能力. 用语音交互的方式来让AI分析实时的摄像头数据. 并且在pc端通过桌面端应用还具备[voice copliot](https://www.youtube.com/watch?v=ZJbu3NEPJN0)的能力. 已经能让生产力提高到下一个层次. 很明显在未来能够 <u>清晰的表达想法和理解问题</u> 的能力比单纯的技能更加重要. 其实这已经是LLM OS的一个很大的突破了.

随着OpenAI开放更加便宜的AI, OpenAI的影响力肯定会进一步扩大. 他们所能获取的数据集肯定越来越多. 假如世界模型是一个向量f(x), 根据[Universal approximation theorem](https://en.wikipedia.org/wiki/Universal_approximation_theorem). 因此世界模型会被拟合, 假如未来的模型架构迭代, 比如使用[Kolmogorov–Arnold Networks](https://arxiv.org/pdf/2404.19756). 实际上变的也是拟合的基函数, 核心思想都是一致. 也是对世界模型的拟合. 因此, AI最终一定会解决现有的世界模型 f(x) 的一切问题. 但是以这种方式的AI不具备创造力.
  
如何让AI具备创造力? 这篇文章[The Next Decade in AI: Four Steps Towards Robust Artificial Intelligence](https://arxiv.org/pdf/2002.06177)的作者就很好的分析了这个问题. [现有的AI始终受限于数据集](https://nonint.com/2023/06/10/the-it-in-ai-models-is-the-dataset/). AGI需要有对知识的归纳和演化的能力.以下是原文链接.

> a reasoning system that can leverage large-scale background knowledge efficiently, even when available information is incomplete is a prerequisite to robustness. - p40

因此在未来的AGI形态，会有一个底座的知识语料, 在这个底座的知识语料当中, AI有知识关联, 归纳, 推理能力. 当AI不断的从世界模型提炼信息的时候, 也会对这个底层的知识语料进行加工. 类比于人类来说的话, 人在不断接触外部信息源的时候也会不断迭代自己的世界观(或者说每个人的人生哲学). 而当人遇到未接触的问题时, 在没有外部信息源的接触下, 也会依赖于自己的世界观进行加工和理解.

或许未来出现一种形态, 在神经网络(知识的拟合)里面嵌套专家系统(知识的推理). 能够让AI真正具有创造力.
