# react action

本质：

- url
- action 函数

## client action


- [1]useTransition (过渡 action 函数)
- [2]react form action （表单 action 函数）
- [3]react useActionState （表单 action + 状态函数）
- [4]startTransition （过渡 action）

formAction 指向 submitAction， 中调用 startTransition，isPending


## server action

核心就是：在 action 中调用 server function

- 在 formAction 中调用
- 直接作为 formAction
- 作为 useActionState 的 action

## next.js 总的 server action

## remix 的 action

- action 函数
- 提交数据到 action

## 小结

- action