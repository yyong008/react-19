import { useActionState } from "react";

export function ActionState() {
  const [state, formAction, isPending] = useActionState(async (curState: any, formData: FormData) => {
    await new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
    // return next state
    return {
      name: formData.get('name')
    }
  }, {
    name: ""
  })
  return (
    <div>
      <form action={formAction}>
        {JSON.stringify(state)}
        <input name="name" />
        <button type="submit" disabled={isPending}>提交</button>
      </form>
    </div>
  );
}
