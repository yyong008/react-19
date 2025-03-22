import { createTodoAction } from "@/actions/create-todo-action";
import SubmitBtn from "./Submit";
import { useState } from "react";

export function WriteTodo(props: any) {
    const [value, setValue] = useState("")
  return (
    <div className="fixed flex bottom-[20px] w-[700px]">
      <form
        className="flex flex-1 gap-3 p-[10px]  w-[500px]"
        action={async (formData) => {
          const title = formData.get("title");
          const newTodo = {
            id: new Date(),
            title,
            description: "",
            completed: false,
          };
          props.addOptTodos({
            type: "create",
            data: newTodo,
          });
          
          try {
            const result = await createTodoAction(formData);
            formData.set("title", "");
            setValue("")
            if (result instanceof Error) {
              alert("error");
            }
          } catch (error) {
            console.error("error", error);
          }
        }}
      >
        <input className="flex-1 border rounded-lg px-[10px]" name="title" placeholder="what next todo?" value={value} onChange={(e) => setValue(e.target.value)}/>
        <SubmitBtn  />
      </form>
    </div>
  );
}
