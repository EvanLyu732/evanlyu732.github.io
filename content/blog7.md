+++
title = "2024百度Create ai大会"
date = 2024-04-17
+++

# 参会记录

记录一下本周线下参加的2024百度Create ai大会, 大会回放链接点击[这里](https://create.baidu.com/?lng=en). 大会的主要内容是百度的ai产品发布会. 我当时看大部分演讲的内容其实更多的是偏应用方面. 我个人对技术方面的内容更感兴趣就只参加了主论坛并且只听了前三场讲座.

![intro](https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/baidu-create00.jpg)

首先开场的是李彦宏, 他讲的大部分内容都是偏向产品端. 我印象比较深刻的是开场没多久就说了下面这张图. "未来大型的AI原生应用基本都是MOE." .并且他说明这里的MOE指的是混合模型(Mixture Of Engine)并不是技术上的MOE, 出于对技术上指代的MOE的好奇, 我开始去研究Mixture Of Experts. [这个链接 ](https://twitter.com/karpathy/status/1723140519554105733?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1723140519554105733%7Ctwgr%5E07d2037d9d6cbc882a44890ce223b50c270f617e%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fkarpathy%2Fstatus%2F17231405195541057333Fs3D4626t3DuuEcj3Up_XwhDshmNCpLBQimage%3Dhttps3A%2F%2Fabs.twimg.com%2Ferrors%2Flogo46x38.png)是非常好的资料. 现有很多大模型会包含Mixture Of Experts Layer. 因此在提示词工程里面需要有角色扮演, 相当于激活特定分支的Expert来让优化输出结果.

![moe](https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/baidu-create01.png)

之后是王海峰介绍的多模型推理部分. 也是从输入端会经过路由模型. 再由路由模型分发输入给不同的模型. 实际上所谓的Mixture Of Engine与Mixture Of Experts的思想是一致的. 只不过是宏观(多个模型)与微观(单个模型)之间的区别.
![infer](https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/baidu-create02.png)

最后是沈抖介绍的万源智能操作系统, 与Andrej Karpathy所提及的[LLM-OS](https://twitter.com/karpathy/status/1723140519554105733?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1723140519554105733%7Ctwgr%5E07d2037d9d6cbc882a44890ce223b50c270f617e%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext2Fhtmlkey%3Da19fcc184b9711e1b4764040d3dc5c07schema%3Dtwitterurl%3Dhttps3A%2F%2Ftwitter.com%2Fkarpathy%2Fstatus%2F17231405195541057333Fs3D4626t3DuuEcj3Up_XwhDshmNCpLBQimage%3Dhttps3A%2F%2Fabs.twimg.com%2Ferrors%2Flogo46x38.png)是相同的. 之前看过Andrej的一个talk里面就讲到基本所有人都在往LLM-OS发力. 将一个复杂任务拆解的话, 现有的LLM已经具有相当的理解能力, 但是缺少对工具的使用能力. 如果要让LLM能够使用工具的话, 许多现有的应用都要重新开发. 或许也是未来的一个风口所在.

![wanyuan](https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/baidu-create06.png)



# 参考资料

下面是对于了解Mixutre Of Experts有帮助的链接:

* https://developer.nvidia.com/blog/applying-mixture-of-experts-in-llm-architectures/ 
* https://stackoverflow.blog/2024/04/04/how-do-mixture-of-experts-layers-affect-transformer-models/
* https://developer.nvidia.com/blog/mastering-llm-techniques-training/
