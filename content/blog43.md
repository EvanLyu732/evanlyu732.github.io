+++
title = "控制论与科学方法论读后感"
date = 2024-12-21
+++

大概在上周的时候, 我看完了[控制论与科学方法论](https://www.goodreads.com/zh/book/show/37419698). 很少有书籍在看完之后能让人有方法论提升的感觉. 如果你还没看过这本书, 这本书值得放到你的书单里面. 里面有非常多精彩的观点和例子. 这本书值得被翻译成英文版. 其中关于"曹冲称象"的例子令人印象深刻. 先让我们来快速回顾一下: 

> 孙权给曹操送了一头大象，曹操想知道大象有多重. 但是没有这么大的秤, 大臣们都没办法, 这时候曹冲想出来了一个办法. 先将大象牵到岸边的一艘船上. 记录下这时候的水位线. 再把大象替换成石头块，使得两次水位线高度一样. 最后记录石头块的总重量就是大象的重量.

曹冲的这种思想方法在控制论叫做**共轭控制(Inferential Control)**:

1. 大象的重量等于等价石头的重量, 把这一步变换过程用L表示
2. 称出石头的重量,这一步用A表示
3. 等价石头的重量等于大象的重量. 把这一步变换过程用L-1(L的逆)表示

<img src="https://raw.githubusercontent.com/EvanLyu732/evanlyu732.github.io/main/static/images/lal.png" height="100" width="100"/>

共轭变换的思想可以说是解决问题的一种经典范式(scheme). 举个例子, 在自动驾驶问题当中, 有一种解决思路就是将感知域的信息映射到文本域, 在文本域处理完结果, 再映射到车辆的执行状态. 比如[DriveGPT](https://leimao.github.io/blog/DriveGPT/)系列. 再比如最近的科研界Meta今年年初发的[Beyond A*: Better Planning with Transformers via Search Dynamics Bootstrapping](https://arxiv.org/abs/2402.14083)也是一样的思路, 将基于离散图的规划问题映射到文本域从而变成symbolic planning. [在现有的牛顿范式的方法中进行采样变成开普勒范式方法的输入, 从而使得开普勒范式方法能够与牛顿范式的方法达到一样甚至超越的效果.](https://evanlyu732.github.io/blog12/#:~:text=%E5%9C%A8%22The%20Dawning,llms%20take%20all.)

此外这本书关于系统的类型以及演化，黑盒认识论, 量变与质变的论述都非常精彩. 将书中的方法论套用到自己生活所面临的场景中有不一样的思路. 另外有一本非常值得推荐的书是[Psycho-Cybernetics](https://www.amazon.com/Psycho-Cybernetics-Updated-Expanded-Maxwell-Maltz/dp/0399176136)里面讲如何运用控制论的方法改变自己的self-image. 不同于传统的鸡汤文学. 我个人在尝试了书中的练习后觉得效果很好. 













