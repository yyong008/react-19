import { useEffect, useState } from "react";
import { DeleteBtn } from "./deleteBtn";
import { EditBtn } from "./EditBtn";
import { NC, C } from "@/components/completedBtn";
import dayjs from "dayjs"

export function TodoItem(props: any) {
  const { todo, optTodos, addOptTodos } = props;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(todo.title);

  useEffect(() => {
    setEdit(props.title);
  }, [props.title]);

  return (
    <div className="flex gap-3">
      {edit ? (
        <input
          className="border w-[500px] flex-1"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      ) : ( 
        <div className={`flex flex-col flex-1 ${todo.completed ? "text-slate-300" : ""}`}>
          <div className="flex w-[500px]">{todo.title}</div>
          <div className="text-[6px] text-gray-500">{dayjs(todo.createdAt?.toString())?.format("YYYY-MM-DD hh-mm-ss")}</div>
        </div>
      )}

      {todo.send ? (
        <>sending</>
      ) : (
        <div className="flex gap-[3px] text-[10px]">
          {todo.completed ? (
            <NC
              optTodos={optTodos}
              addOptTodos={addOptTodos}
              id={todo.id}
              data={{ ...todo}}
            />
          ) : (
            <C
              optTodos={optTodos}
              addOptTodos={addOptTodos}
              id={todo.id}
              data={{ ...todo}}
            />
          )}
          <EditBtn
            edit={edit}
            setEdit={setEdit}
            id={todo.id}
            data={{ title: value, id: todo.id }}
            optTodos={optTodos}
            addOptTodos={addOptTodos}
          />
          <DeleteBtn
            data={{
              id: todo.id,
              title: todo.title,
            }}
            optTodos={optTodos}
            addOptTodos={addOptTodos}
          />
        </div>
      )}
    </div>
  );
}
