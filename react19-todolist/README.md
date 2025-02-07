This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 小结


- 在 next.js中基本上不需要 axios， 用 fetch 等原生的 api 即可，完成大部分任务。
- 我们 next.js 创建了项目
- 我们实现一个简单的 todolist with prisma
- 我们使用 action 和 乐观更新这两个 react + nextjs 特性
- 使用 revalidatePath 一处缓存，就会自动重新加载页面数据
- 一个乐观更新处理，不同的状态的数据：
    - create 有乐观更新，包含 startTransition
    - update/delete 也是更具不同的内容进行乐观更新
    - 我们不渲染普通状态（useState），而是渲染 useOptimistic + useState 的乐观状态的组合。
- 列表是可以编辑的
- 用 any 类型觉保存问题
- 确定了视频录是有杂音的。
- 视频录制的解决方式：
    - 使用蓝牙耳机进行录音
    - 使用耳机进行收听
    - 保证了能够听到，也能够避免杂音的问题
    - 录制视频相关就结束了。
- 登陆机器
    - windows 的用 windows App 即可。
    - mac 和 linux 还需要增强控制。
    - 我们的 docker 控制脚本我们处理过来。
    - 我们的 jenkins 的服务这些都是必要的。（这些都在 mac 里面）
    - 文档
        - vite 相关项目的文档
        - 飞书文档


## 02-06 小结

- UI 层面做一些需改
- 数据库的问题
    - sqlite -> pg ?
- 明日主要时候部署了
- 今日完成一个视频的发布（虽然质量不是特别好）

## NextJS 的部署

- vercel 部署
- 自己的服务器部署
- cloudflare 部署

## 下一个视频发布什么

- 

## docker 构建

```sh
docker build -t react-19-todolist:latest .
```
