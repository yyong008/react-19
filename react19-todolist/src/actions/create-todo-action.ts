"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(data: any) {
  const new_data = await prisma.todo.create({
    data,
  });
  return new_data;
}

export async function createTodoAction(formData: FormData) {
  try {
    const title = formData.get("title");
    await createTodo({
      title,
      description: "",
      completed: false,
    });
    revalidatePath("/");
  } catch (error: any) {
    console.error(error);
    return new Error(error);
  }
}
