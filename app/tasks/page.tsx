async function Taskspage() {

    const response = await fetch("http://localhost:3000/api/tasks",{
        cache: "no-store",
    });
    const tasks = await response.json();

    console.log("Tasks:", tasks);
  return (
    <div>
      <div>Tasks page</div>
    </div>
  )
}
export default Taskspage
