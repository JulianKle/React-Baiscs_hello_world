export function Formular({ handleNewAssessment }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    handleNewAssessment(data);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Assessment Title:
          <input type="text" name="title" />
        </label>

        <label htmlFor="editor">
          Editor:
          <input type="text" name="editor" />
        </label>

        <label htmlFor="company">
          Company:
          <input type="text" name="company" />
        </label>

        <label htmlFor="">
          Status:
          <input type="text" name="status" />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
