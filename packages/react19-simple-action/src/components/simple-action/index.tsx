export function SimpleAction() {
  const submitAction = async (formData: FormData) => {
    console.log(formData, formData);
    console.log("formData: name", formData.get("name"));
  };
  return (
    <div>
      <form action={submitAction}>
        <input name="name" />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}
