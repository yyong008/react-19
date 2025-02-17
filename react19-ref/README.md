# ref

- [x]ref 作为 props 传递
- [x]forwardRef 可以被删除了
- [x]element.ref 被废弃，可以使用 element.props.ref
- [x]字符串 refs：被移除，要使用字符串 refs 的任何用法，都需要迁移到 ref 回调。
- [x]refs 的清理函数：当组件卸载时，React 将调用从 ref 回调返回的清理函数。


## clean function

### react useEffect 的 clean function

useEffect 时机是在：

```sh
组件渲染（Render Phase）
  ↓
生成虚拟 DOM
  ↓
比较差异（Reconciliation）
  ↓
提交到 DOM（Commit Phase）
  ↓
同步执行 useLayoutEffect 清理函数
  ↓
同步执行 useLayoutEffect 副作用
  ↓
浏览器绘制页面
  ↓
异步执行 useEffect 清理函数（如有）
  ↓
异步执行 useEffect 副作用
```

页面数据修改之后，清除之前的 useEffect clean fucntion，然后才执行新的 useEffect

## ref clean function

在组件销毁时触发

### 当 ref + effect 同时使用


ref 的 创建和effect clean 发生在前面

如果一个组件里面即有 useEffect clean function 也有 ref clean function 先执行 ref 的。

## 当我们进入页面

页面中包含：useEffect 和 ref function 以及他们 clean function

- 页面点击跳转
- 新的页面已经展示
- 路由已经跳转
- 首先执行的 ref 的创建函数
- 反过来执行之前路由的 useEffect 清理函数
- 然后执行新的路由的 useEffect 函数
- 再执行一次 ref 的清理函数
- 执行一次 useEffect 的清理函数
- 执行一次 ref 的创建函数
- 执行一次 useEffect 的内部函数

## 小结

- as props
- 可以不用 forwardRef
- element.ref 被 element.props.ref 替代
- ref 的字符串用法被移除
- ref 的函数用法以及函数的清除函数
