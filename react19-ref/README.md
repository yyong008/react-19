# ref

- ref 作为 props 传递
- forwardRef 可以被删除了
- element.ref 被废弃，可以使用 element.props.ref
- 字符串 refs：字符串 refs 的任何用法都需要迁移到 ref 回调。
- refs 的清理函数：当组件卸载时，React 将调用从 ref 回调返回的清理函数。