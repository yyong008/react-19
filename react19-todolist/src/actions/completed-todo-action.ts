"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function completedTodo(id: string, data: any) {
  const new_data = await prisma.todo.update({
    where: {
        id
    },
    data: data
  });
  return new_data;
}

export async function completedTodoAction(id: string, data: any) {
  try {
    await completedTodo(id, data);
    revalidatePath("/");
  } catch (error: any) {
    console.error(error);
    return new Error(error);
  }
}
