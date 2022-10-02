import './App.css';
import {todos} from "./assets/todos";

function App() {
    // todos (che trovi nel file todos.js) é un array che contiene varie attivitá da svolgere
    // Ognuna delle attivitá a delle properietá ovvero:
    // completed che é un boolean
    // id che é un numero intero
    // todo che é una stringa
    // userId che é un numero intero
    console.log(todos)
    //L'obiettivo é quello di mostrare nella pagina la lista di attivitá da svolgere

    // Consiglio: puoi creare dei piccoli componenti come ad esempio:
    const todo0 = <div><p>{todos[0].todo}</p></div>
    const todo1 = <div><p>{todos[1].todo}</p></div>

    // E poi puoi inserirli nel return:
    return (
        <div className="App">
            {todo0}
            {todo1}
        </div>
    );

    // Potresti completare questa task facendo copia incolla per ogni todo nella lista, ma l'obiettivo é quello di farlo utilizzando un ciclo (quello che preferisci, vedi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) oppure in alternativa una funzione degli oggetti Array (vedi: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
}

export default App;
