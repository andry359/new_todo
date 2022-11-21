import Task from '../Task/Task'
import './TaskList.css'

/**
 * Компонент со списком всех тасок
 * @param {object} todo массив объектов-тасок
 * @param {function} setTodo функция изменения массива todo
 * @return {object} объект с таской
 * @return {object} todo массив объектов-тасок
 * @return {function} setTodo функция изменения массива todo
 * @return {string} значение key, которому присвоен id таски
 * @return компонент списка тасок
 */
function TaskList({ todo, setTodo }) {

    return (
        <div className="taskList">
            <div className="taskList__title">
                <span>Список задач</span>
            </div>
            <div className="taskList__list list">
                {todo.map(item =>

                    <Task item={item} todo={todo} setTodo={setTodo} key={item.id} />
                )}
            </div>
        </div>
    )
}

export default TaskList