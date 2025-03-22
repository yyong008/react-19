import { completedTodoAction } from "@/actions/completed-todo-action"

export function NC(props: any) {
  return <div className="">
    <form action={async () => {
        const newState = {...props.data, completed: false }
        props.addOptTodos({
            type: 'completed_status',
            data: newState
        })
        try {
            const result = await completedTodoAction(props.id, newState)
        } catch (error) {
            console.error(error)
        }
    }}>
        <button type="submit" className="border p-[4px] text-[10px]">❎</button>
    </form>
  </div>
}

export function C(props: any) {
  return <div className="">
    
    <form action={async () => {
        const newState = {...props.data, completed: true }
        props.addOptTodos({
            type: 'completed_status',
            data: newState
        })
        try {
            const result = await completedTodoAction(props.id, newState)
        } catch (error) {
            console.error(error)
        }
        
    }}>
        <button type="submit" className="border p-[4px] text-[10px]">✅</button>
    </form>
  </div>
}
