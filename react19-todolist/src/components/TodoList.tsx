import { useMemo, useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList(props: any) {
  const { optTodos, addOptTodos } = props;
  const [s, setS] = useState<"all" | "noCompleted" | "completed">("all");

  const complutedTodos = useMemo(() => {
    if (s === "all") {
      return optTodos;
    }

    if (s === "completed") {
      return optTodos.filter((t: any) => t.completed);
    }

    if (s === "noCompleted") {
      return optTodos.filter((t: any) => !t.completed);
    }

    return [];
  }, [s, optTodos]);
  return (
    <div className="flex flex-col gap-4 w-[700px]">
      <div className="flex gap-3 text-[12px] py-[10px]">
        <AllBtn s={s} setS={setS} />
        <StatusCompletedBtn s={s} setS={setS} />
        <StatusNoCompleteBtn s={s} setS={setS} />
      </div>
      <div className="h-[650px] overflow-y-auto ">
        {complutedTodos.length === 0 ? <Blank /> : <></>}
        {complutedTodos.map((todo: any) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              optTodos={optTodos}
              addOptTodos={addOptTodos}
            />
          );
        })}
      </div>
    </div>
  );
}

function AllBtn(props) {
  return (
    <div className={`border rounded-sm px-[10px] py-[4px] ${props.s === "all" ? "border-blue-700 bg-blue-700 text-white" : ""}`} onClick={() => props.setS("all")}>
      所有
    </div>
  );
}

function StatusCompletedBtn(props: any) {
  return (
    <div className={`border rounded-sm px-[10px] py-[4px] ${props.s === "completed" ? "border-blue-700 bg-blue-700 text-white" : ""}`} onClick={() => props.setS("completed")}>
      已完成
    </div>
  );
}

function StatusNoCompleteBtn(props: any) {
  return (
    <div className={`border rounded-sm px-[10px] py-[4px] ${props.s === "noCompleted" ? "border-blue-700 bg-blue-700 text-white" : ""}`} onClick={() => props.setS("noCompleted")}>
      未完成
    </div>
  );
}

function Blank() {
    return <div>No Data</div>
}