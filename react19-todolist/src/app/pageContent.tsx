"use client";

import { TodoList } from "@/components/TodoList";
import { WriteTodo } from "@/components/WriteTodo";

import { useOptimistic } from "react";

export default function PageContent(props: any) {
  const { todos } = props;
  const [optTodos, addOptTodos, isPending] = useOptimistic(
    todos,
    (curState, optValue: any) => {
      if (optValue.type === "create") {
        return [{ ...optValue.data, send: true, type: "create" }, ...curState];
      } else if (
        optValue.type === "update" ||
        optValue.type === "delete" ||
        optValue.type === "completed_status"
      ) {
        const id = optValue.data.id;
        const newState = curState.map((s: any) => {
          if (s.id === id) {
            return {
              ...optValue.data,
              type: optValue.type,
              send: true,
            };
          }
          return s;
        });
        return newState;
      }
    }
  ) as any;
  return (
    <div className="flex flex-col  mx-auto w-[700px]">
      <div className="text-[80px]">React 19 TodoList</div>
      <div className="text-[20px] text-blue-300">
        With React 19 Action And Optimistic
      </div>
      <TodoList
        todos={optTodos}
        optTodos={optTodos}
        addOptTodos={addOptTodos}
      />
      <WriteTodo
        optTodos={optTodos}
        addOptTodos={addOptTodos}
        isPending={isPending}
      />
    </div>
  );
}
