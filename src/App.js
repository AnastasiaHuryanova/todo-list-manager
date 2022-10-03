import './App.css';
import {todos} from "./assets/todos";
import {useState} from "react";

function App() {
    const [newToDo, setNewToDo] = useState("")

    const initialValue = todos.filter(activity => activity.completed === false)
    const [toBeDone, setToBeDone] = useState(initialValue)

    const handleSubmit = (event) => {
        console.log("vuoi aggiungere " + newToDo);
        const toDoToAdd = {
            "id": 40,
            "todo": newToDo,
            "completed": false,
            "userId": 26
        }
        // toBeDone.push(toDoToAdd) /// NOO perche cosi non renderizza
        setToBeDone([...toBeDone, toDoToAdd])
        console.log("hai aggiunto un nuovo todo")

        event.preventDefault();
    }
    const handleChange = (event) => {
        setNewToDo(event.target.value);
    }
    return (

        <div className="App">
            <table>
                <thead>
                <tr>
                    <th>TODOS</th>
                </tr>
                </thead>
                <tbody>
                {toBeDone.map(activity => {
                    return (

                        <tr key={activity.id}>
                            <td>
                                {activity.todo}
                            </td>
                        </tr>

                    )
                })}
                </tbody>
            </table>
            <form onSubmit={handleSubmit}>
                <label>
                    New Task:
                    <input type="text" name="new-todo" value={newToDo} onChange={handleChange}/>
                </label>
                <input type="submit" value="add"/>
            </form>
        </div>

    );


    // Potresti completare questa task facendo copia incolla per ogni todo nella lista, ma l'obiettivo é quello di farlo utilizzando un ciclo (quello che preferisci, vedi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) oppure in alternativa una funzione degli oggetti Array (vedi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
}

export default App;
