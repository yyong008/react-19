import prisma from "@/lib/prisma";
import PageContent from "./pageContent";

export default async function Home() {
  const todos = await getTodos();

  return <PageContent todos={todos} />;
}

async function getTodos() {
  const data = await prisma.todo.findMany({
    orderBy: [
      {
        completed: "asc",
      },
      {
        createdAt: "desc",
      },
      
    ],
  });
  return data;
}
