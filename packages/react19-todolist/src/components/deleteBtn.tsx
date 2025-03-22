import { deleteTodoAction } from "@/actions/delete-todo-action";

export function DeleteBtn(props: any) {
  return (
    <form
      action={async (formData) => {
        props.addOptTodos({
            type: 'delete',
            data: props.data
        })
        try {
            const result = await deleteTodoAction(props.data.id);
        } catch (error) {
            console.error(error)
        }
        
      }}
    >
      <button type="submit" className="border p-[4px]">
        🗑️
      </button>
    </form>
  );
}
