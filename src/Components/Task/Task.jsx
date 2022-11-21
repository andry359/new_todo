import './Task.css'
import arrow from '../../icons/arrow.svg'
import close from '../../icons/close.svg'
import { useState } from 'react'
import dayjs from 'dayjs'

/**
 * Компонент с таской
 * @param {object} item объект с таской
 * @param {object} todo массив объектов-тасок
 * @param {function} setTodo функция изменения массива todo
 * @return компонент с готовой таской
 */
function Task({ item, todo, setTodo }) {

    const [active, setActive] = useState(false);

    /**
     * Функция удаления выбранной таски
     * @param {string} id уникальное значение таски
     * @return {object} обновленный массив todo, без удаленного объекта item
     */
    function deleteTask(id) {
        let newTodo = [...todo].filter(item => item.id !== id);
        setTodo(newTodo);
    }

    /**
     * Функция для изменения поля status конкретного объекта таски
     * @param {string} id уникальное значение таски
     * @return {object} обновленный массив todo, с измененным значением item.status
     */
    function statusTodo(id) {
        let newTodo = [...todo].filter(item => {
            if (item.id === id) {
                item.status = event.target.value === 'done' ? true : false;
            }
            return item
        });
        setTodo(newTodo);
    }

    /**
     * Функция форматирования даты с помощью библиотеки dayjs
     * @param {object} date обьект Date с информацией о сроках выполнения таски
     * @return {string} обновленное значение поля item.date
     */
    function formattingInDayjs(date) {
        return dayjs(date).format('DD.MM.YYYY');
    };

    return (
        <div className="task" style={{ background: item.status ? '#B7BAC1' : '' }}>
            <div className="nameTask">
                <div className='task__buttonOpen' onClick={() => setActive(!active)}>
                    <img src={arrow} alt="arrow" />
                </div>
                <div className='task__Name'>
                    <span>
                        {item.title}
                    </span>
                </div>
                <div className='task__buttonClose' onClick={() => deleteTask(item.id)}>
                    <img src={close} alt="close" />
                </div>
            </div>
            <div className={`descriptionTask ${active ? 'active' : ''}`}>
                <div className='descriptionTask__textItems textItems'>
                    <label>Описание:</label>
                    <div className="textItems__wrapper">
                        <p>{item.description}</p>
                    </div>
                </div>
                <div className='descriptionTask__file file'>
                    <input type="file" name="file" id="file__input" className="file__input" onChange={() => console.log(name)} multiple />
                </div>
                <div className='descriptionTask__date date'>
                    <span className='date__title'>Дата:</span>
                    <span className='date__result'>
                        {formattingInDayjs(item.date)}
                    </span>
                </div>
                <div className='descriptionTask__status status'>
                    <span className='status__title'>Статус:</span>
                    <select className='selectStatus' name="selectStatus" value={item.status ? "done" : "inProcess"} onChange={() => statusTodo(item.id)}>
                        <option value="done">Выполнено</option>
                        <option value="inProcess">В процессе</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Task