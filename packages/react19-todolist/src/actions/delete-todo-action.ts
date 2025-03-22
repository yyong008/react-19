"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTodo(id: string) {
  const new_data = await prisma.todo.delete({
    where: {
      id,
    },
  });
  return new_data;
}

export async function deleteTodoAction(id: string) {
  try {
    const result = await deleteTodo(id);
    revalidatePath("/");
  } catch (error: any) {
    console.error(error);
    return new Error(error);
  }
}
