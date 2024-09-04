+++
title = "深度强化学习101"
date = 2024-09-03
+++

记录一下接触深度强化学习的学习历程. 材料选自Pieter Abbeel的[Foundation of Deep RL Series.](https://www.youtube.com/watch?v=2GwBez0D20A). 整篇文章追求知识点的连惯性. 所以会补充详细的公式和历史背景. 这篇文章会一直持续更新. 也算是对之前说要写的llya30做一次原型测试吧.

## 目录

- [Lecture 1: MDPs, Exact Solution Methods, Max-ent RL](#lecture-1-mdps-exact-solution-methods-max-ent-rl)
- [Lecture 2: Deep Q-Learning](#lecture-2-deep-q-learning)
- [Lecture 3: Policy Gradients, Advantage Estimation](#lecture-3-policy-gradients-advantage-estimation)
- [Lecture 4: TRPO, PPO](#lecture-4-trpo-ppo)
- [Lecture 5: DDPG, SAC](#lecture-5-ddpg-sac)
- [Lecture 6: Model-based RL](#lecture-6-model-based-rl)

<a id="lecture-1-mdps-exact-solution-methods-max-ent-rl"></a>
# Lecture 1: MDPs, Exact Solution Methods, Max-ent RL

点击[这里](https://www.dropbox.com/scl/fi/rvbpc40ozhstnwhk7h5b7/l1-mdps-exact-methods.pdf?rlkey=5bibe5t8cqmpm9dhth969iiq6&e=1&dl=0)进入lecture1的slides. 一句话总结lecture1的内容: 强化学习可以表示为马尔可夫决策过程(Markov Decision Processes, MDPs). 解MDP有两种基本策略, Value Iteration和Policy Iteration. 另外, 引入Entropy带MDP可以提升MDP的鲁棒性.

* MDP:
* Value Iteration:
* Policy Iteration:
* Maximum Entropy Formulation:


我们这里通过slide里面的grid world并结合代码来理解一下整个过程.


<a id="lecture-2-deep-q-learning"></a>
# Lecture 2: Deep Q-Learning

点击[这里](https://www.dropbox.com/scl/fi/rvbpc40ozhstnwhk7h5b7/l1-mdps-exact-methods.pdf?rlkey=5bibe5t8cqmpm9dhth969iiq6&e=1&dl=0)进入lecture2的slides. 一句话总结lecture2的内容: 由于实际情况下MDP的状态空间通常很大, 不适合直接用value iteration和policy iteration来解复杂的MDP. Q-Learning通过在样本空间进行采样来解复杂的MDP. 而Q-Learning也需要表格存储状态转移信息. DQN通过使用神经网络去采样来近似Q函数.

* Q-Learning:

* DQN:

<a id="lecture-3-policy-gradients-advantage-estimation"></a>
# Lecture 3: Policy Gradients, Advantage Estimation

点击[这里](https://www.dropbox.com/scl/fi/htn2r6ac807oluoxeihdt/l3-policy-gradient-and-advantage-estimation.pdf?rlkey=26hsbd5qvthb8ozq53vdfjrr4&e=1&dl=0)进入lecture3的slides. 一句话总结lecture3的内容: 由于Value Iteration无法表示下一步的动作, 并且Q-learning在高维空间下没办法有效求解. 相比与Value Iteration和Q-learning, Policy Gradients的表示更加简单. 而Policy Gradients通过Likelihood Ratio Graident求解出来的是Path. 需要使用Temporal decomposition分解成State和Action. 需要使用Baseline subtraction去改变最终选择的Path. 在使用公式去分解的时候, 需要使用Value function estimation求解. 而在Advantage Estimation介绍一些更加进阶的Value function estimation方法.


* Policy Gradients:
* Temporal Decomposition:
* Baseline subtraction:
* Value function estimation:
* Advantage Estimation(A2C/A3C/GAE):



<a id="lecture-4-trpo-ppo"></a>
# Lecture 4: TRPO, PPO

点击[这里](https://www.dropbox.com/scl/fi/z0ev7f53yoyilrkfl9jck/l4-TRPO-PPO.pdf?rlkey=1y8f0am0bpqyxysxq3adnkobu&e=1&dl=0)进入lecture4的slides. 一句话总结lecture4的内容: 在Lecture 3中, 我们知道Policy Gradients可以求解出特定的Path. 但是在求解特定的Path的过程中, 步长(step-size)的大小该如何确定呢? TRPO解决了这个问题. 而TRPO需要second order来求解, 而不太方便做优化. PPO作为TRPO的改进, 降阶为first-order优化问题.

* Surrogate loss: 
* Step-sizing and Trust Region Policy Optimization (TRPO):
* Proximal Policy Optimization (PPO):



<a id="lecture-5-ddpg-sac"></a>
# Lecture 5: DDPG, SAC

<a id="lecture-6-model-based-rl"></a>
# Lecture 6: Model-based RL