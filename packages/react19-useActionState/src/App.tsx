import { useActionState } from "react";
import "./App.css";

// 返回一个新 state, state is client function not a server function
async function action(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  await new Promise((resolve: any) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
  // validate
  if (!name) {
    return {
      error: "请输入内容～",
    };
  } else {
    return {
      name,
    };
  }
}

function App() {
  const [state, formAction, isPending] = useActionState(action, null);
  return (
    <div>
      <form action={formAction}>
        <input type="text" name="name" />
        <button type="submit">提交</button>
      </form>
      <div>
        {isPending ? "loading..." : ""}
        {!isPending && state?.name ? (
          <div style={{ color: "blue" }}>{state.name} 已经提交</div>
        ) : (
          <></>
        )}
        {!isPending && state?.error ? <div style={{ color: "red " }}>{state.error}</div> : ""}
      </div>
    </div>
  );
}

export default App;
        