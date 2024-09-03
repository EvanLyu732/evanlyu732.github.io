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

点击[这里](https://www.dropbox.com/scl/fi/rvbpc40ozhstnwhk7h5b7/l1-mdps-exact-methods.pdf?rlkey=5bibe5t8cqmpm9dhth969iiq6&e=1&dl=0)进入lecture2的slides. 一句话总结lecture2的内容: 由于实际情况下MDP的状态空间通常很大, 不适合直接用value iteration和policy iteration来解MDP. Q-Learning通过在样本空间进行采样来解MDP. 而Q-Learning也需要表格存储状态转移信息. DQN通过使用神经网络去采样来近似Q函数.

* Q-Learning:

* DQN:

<a id="lecture-3-policy-gradients-advantage-estimation"></a>
# Lecture 3: Policy Gradients, Advantage Estimation


<a id="lecture-4-trpo-ppo"></a>
# Lecture 4: TRPO, PPO

<a id="lecture-5-ddpg-sac"></a>
# Lecture 5: DDPG, SAC

<a id="lecture-6-model-based-rl"></a>
# Lecture 6: Model-based RL