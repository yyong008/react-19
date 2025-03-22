# use

使用简单

- Context
- 数据流：从服务端到那个客户端
    - use 接收一个 promise，但是不需要 await 了
    - 错误处理：错误边界 + Suspense
- 错误了如何处理： try-catch

## 调用访问

- 组件内部
- hooks 内部
- if/for循环语句
- 客户端组件中使用

## 应用

- context 的应用，优先级更佳灵活
- 异步 promise 


## 异步调用

```tsx
import Demo from "@/components/Demo";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

const genP = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(123);
    }, 2000);
  });
};

export default function Home() {
  const pp = genP();
  return (
    <ErrorBoundary fallback={<>出错误了</>}>
      <Suspense fallback={<p>waiting for message...</p>}>
        <Demo prms={pp} />;
      </Suspense>
    </ErrorBoundary>
  );
}

```

