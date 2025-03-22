"use server"

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateTodo(id: string, data: any) {
    const new_data = await prisma.todo.update({
        where: {
            id
        },
        data: {
            title: data.title
        }
    })
    return new_data
}

export async function updateTodoAction(id: string, data: any) {
    try {
        const result = await updateTodo(id, data)
        revalidatePath('/');
    } catch (error: any) {
        console.error(error)
        return new Error(error)
    }
}