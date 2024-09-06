+++
title = "深度强化学习101"
date = 2024-09-03
+++

记录一下接触深度强化学习的学习历程. 材料选自Pieter Abbeel的[Foundation of Deep RL Series.](https://www.youtube.com/watch?v=2GwBez0D20A). 整篇文章追求知识点的连惯性. 所以会补充详细的公式和历史背景. 这篇文章会一直持续更新. 也算是对之前说要写的llya30做一次原型测试吧. 由于会采用不用来源的资料所以概念会有重叠, 好处是可以从不同角度看到一个概念的描述. 方便更方便的理解.

## 目录

- [Foundations of Deep Reinforcement Learning with Pieter Abbeel](#foundations-of-deep-reinforcement-learning-with-pieter-abbeel)
  - [Lecture 1: MDPs, Exact Solution Methods, Max-ent RL](#lecture-1-mdps-exact-solution-methods-max-ent-rl)
  - [Lecture 2: Deep Q-Learning](#lecture-2-deep-q-learning)
  - [Lecture 3: Policy Gradients, Advantage Estimation](#lecture-3-policy-gradients-advantage-estimation)
  - [Lecture 4: TRPO, PPO](#lecture-4-trpo-ppo)
  - [Lecture 5: DDPG, SAC](#lecture-5-ddpg-sac)
  - [Lecture 6: Model-based RL](#lecture-6-model-based-rl)
- [CS 285:Deep Reinforcement Learning](#cs-285deep-reinforcement-learning)
- [UCL Course on RL](#ucl-course-on-rl)
- [项目](#项目)

<a id="foundations-of-deep-reinforcement-learning-with-pieter-abbeel"></a>
# Foundations of Deep Reinforcement Learning with Pieter Abbeel

<a id="lecture-1-mdps-exact-solution-methods-max-ent-rl"></a>
## Lecture 1: MDPs, Exact Solution Methods, Max-ent RL

点击[这里](https://www.dropbox.com/scl/fi/rvbpc40ozhstnwhk7h5b7/l1-mdps-exact-methods.pdf?rlkey=5bibe5t8cqmpm9dhth969iiq6&e=1&dl=0)进入lecture1的slides. 一句话总结lecture1的内容: 强化学习可以表示为马尔可夫决策过程(Markov Decision Processes, MDPs). 解MDP有两种基本策略, Value Iteration和Policy Iteration. 另外, 引入Entropy带MDP可以提升MDP的鲁棒性.

* MDP: 需要了解什么是MDP. 先要了解什么是马尔可夫链(Markov chain). Markov为了证明独立同分布不是大数定律(Law of large numbers)满足的前提, 在1906年发表的文章里面提出了马尔可夫链(Markov chain). 如果需要进一步了解Markov chain, 推荐这个[视频](https://www.youtube.com/watch?v=CIe869Rce2k)

  * Markov chain: 前提下一颗的状态 只取决于当前时刻 ,转移矩阵 
  * frist-order Markov chain & n-order Markov chain:
  * Markov chains convergence: 我们在前面说到了Markov chain的提出是为了证明大数定律在非独立同分布的假设前提下, 依然成立. 那么Markov chain是如何收敛的呢?


* Value Iteration:
* Policy Iteration:
* Maximum Entropy Formulation:


我们这里通过slide里面的grid world并结合代码来理解一下整个过程.

* 小结:

<a id="lecture-2-deep-q-learning"></a>
## Lecture 2: Deep Q-Learning

点击[这里](https://www.dropbox.com/scl/fi/rvbpc40ozhstnwhk7h5b7/l1-mdps-exact-methods.pdf?rlkey=5bibe5t8cqmpm9dhth969iiq6&e=1&dl=0)进入lecture2的slides. 一句话总结lecture2的内容: 由于实际情况下MDP的状态空间通常很大, 不适合直接用value iteration和policy iteration来解复杂的MDP. Q-Learning通过在样本空间进行采样来解复杂的MDP. 而Q-Learning也需要表格存储状态转移信息. DQN通过使用神经网络去采样来近似Q函数.

* Q-Learning:

* DQN:

<a id="lecture-3-policy-gradients-advantage-estimation"></a>
## Lecture 3: Policy Gradients, Advantage Estimation

点击[这里](https://www.dropbox.com/scl/fi/htn2r6ac807oluoxeihdt/l3-policy-gradient-and-advantage-estimation.pdf?rlkey=26hsbd5qvthb8ozq53vdfjrr4&e=1&dl=0)进入lecture3的slides. 一句话总结lecture3的内容: 由于Value Iteration无法表示下一步的动作, 并且Q-learning在高维空间下没办法有效求解. 相比与Value Iteration和Q-learning, Policy Gradients的表示更加简单. 而Policy Gradients通过Likelihood Ratio Graident求解出来的是Path. 需要使用Temporal decomposition分解成State和Action. 需要使用Baseline subtraction去改变最终选择的Path. 在使用公式去分解的时候, 需要使用Value function estimation求解. 而在Advantage Estimation介绍一些更加进阶的Value function estimation方法.


* Policy Gradients:
* Temporal Decomposition:
* Baseline subtraction:
* Value function estimation:
* Advantage Estimation(A2C/A3C/GAE):



<a id="lecture-4-trpo-ppo"></a>
## Lecture 4: TRPO, PPO

点击[这里](https://www.dropbox.com/scl/fi/z0ev7f53yoyilrkfl9jck/l4-TRPO-PPO.pdf?rlkey=1y8f0am0bpqyxysxq3adnkobu&e=1&dl=0)进入lecture4的slides. 一句话总结lecture4的内容: 在Lecture 3中, 我们知道Policy Gradients可以求解出特定的Path. 但是在求解特定的Path的过程中, 步长(step-size)的大小该如何确定呢? TRPO解决了这个问题. 而TRPO需要second order来求解, 而不太方便做优化. PPO作为TRPO的改进, 降阶为first-order优化问题.

* Surrogate loss: 
* Step-sizing and Trust Region Policy Optimization (TRPO):
* Proximal Policy Optimization (PPO):



<a id="lecture-5-ddpg-sac"></a>
## Lecture 5: DDPG, SAC

点击[这里](https://www.dropbox.com/scl/fi/302ef41a9929yvtedc77l/l5-DDPG-SAC.pdf?rlkey=xc21zgliwfjynjse1je8oo6mx&dl=0)进入lecture5的slides. 一句话总结lecture5的内容: 对于特定场景, on-policy方法采样复杂度会比较高. 而DDPG解决了这个问题. SAC通过引入entropy保证了更好的收敛和防止过拟合.

* Deep Deterministic Policy Gradient (DDPG):
* Soft Actor Critic (SAC):


<a id="lecture-6-model-based-rl"></a>
## Lecture 6: Model-based RL

点击[这里](https://www.dropbox.com/scl/fi/pnv0k74lbajh2uahoegwr/l6-model-based-rl.pdf?rlkey=psemgw6b6a4c4owmc16liyba0&dl=0)进入lecture6的slides. 一句话总结lecture6的内容: 前面5个lecture讲的都是model-free RL. 所谓model-free RL是指agent直接通过action来迭代policy而不需要学习环境.  model-based RL通过对环境建模再进行policy迭代.


* Model-based RL:
* Robust Model-based RL:Model-EnsembleTRPO (ME-TRPO):
* Adaptive Model-based RL: Model-based Meta-Policy Optimization (MB-MPO):

<a id="cs-285deep-reinforcement-learning"></a>
# CS 285:Deep Reinforcement Learning

这一部分采用CS 285来补充一下上一部分没提到的一些内容.


<a id="ucl-course-on-rl"></a>
# UCL Course on RL


<a id="项目"></a>
# 项目