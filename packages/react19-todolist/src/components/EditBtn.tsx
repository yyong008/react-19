import { updateTodo, updateTodoAction } from "@/actions/update-todo-action";

export function EditBtn(props: any) {
  return <div>{!props.edit ? <ToggleEdit {...props} /> : <SaveBtn {...props} />}</div>;
}

function ToggleEdit(props: any) {
  return (
    <button
      className="border p-[4px]"
      onClick={async () => {
        props.setEdit((v: boolean) => !v);
      }}
    >
      ✍️
    </button>
  );
}

function SaveBtn(props: any) {
  return (
    <form
      action={async () => {
        props.addOptTodos({
          type: "update",
          data: props.data,
        });
        try {
            await updateTodoAction(props.id, props.data);
            props.setEdit((v: boolean) => !v);
        } catch (error) {
            console.error(error)
        }
      }}
    >
      <button className="border p-[4px]" type="submit">
        💾
      </button>
    </form>
  );
}
