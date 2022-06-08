import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
function App() {
  // const name = 'Marc-Antoine'
  // const x = false
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors apointment",
      day: "February 5 at 12:00pm",
      remminder: true,
    },
    {
      id: 2,
      text: "Haircut apointment",
      day: "February 5 at 15:00pm",
      remminder: false,
    },
    {
      id: 3,
      text: "Dentist apointment",
      day: "February 7 at 19:00pm",
      remminder: true,
    },
  ]);

  //addTask function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //  Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      //Dans ceci, je déconstruis task dans les {} et avec ...task je spread l'objet et je mentionne
      //par la suite reminder en disant devient l'opposé de ce que tu es.
      tasks.map((task) =>
        task.id === id ? { ...task, remminder: !task.remminder } : task
      )
    );
  };
  return (
    <div className="container">
      <h1>Hello from react</h1>
      {/* <h2>Hello {name}</h2> */}
      {/* <h3>Hello { x ? 'yes' : 'no'}</h3> */}
      ­
      <Header
        title="Hello"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
