import { useState, useTransition } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const updateName = async (name: string) => {
    await new Promise((resolve: any) => {
      setTimeout(() => {
        resolve(name);
      }, 1000);
    });

    return null
  };

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
    });
  };

  return (
    <>
      <div>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <button style={{backgroundColor: isPending ? "yellow": "skyblue" }} onClick={handleSubmit} disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>} 
      </div>
    </>
  );
}

export default App;
