import { useState } from 'react'
import { useForm } from 'react-hook-form'
import './CreateTask.css'
import uuidv4 from '../../helper/Helper';

/**
 * Компонент для создания новой таски
 * @param {object} todo массив объектов-тасок
 * @param {setTodo} function функция изменения массива todo
 * @return {object} массив объектов-тасок с новым значением и компонент CreateTask
 */
function CreateTask({ todo, setTodo }) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: "all"
    });

    /**
     * Функция добавления новой таски в массив объектов-тасок
     * @return {object} возвращает измененное значение todo и очищает поля ввода названия, описания и даты
     */
    function saveTask() {
        if (isValid) {
            setTodo(
                [...todo, {
                    id: uuidv4(),
                    title: title,
                    description: description,
                    date: date,
                    file: undefined,
                    status: false,
                }]
            );
            setTitle('');
            setDescription('');
            setDate('');
        }
    }

    return (
        <div className="newTask">
            <div className="newTask__title">
                <span>Новая задача</span>
            </div>
            <div className="newTask__form mainForm">
                <form action="" onSubmit={handleSubmit(saveTask)}>
                    <div className="mainForm__title">
                        <label>Название</label>
                        <input name='title' type="text" placeholder='Название задачи' value={title} {...register("titleName", {
                            required: "Пожалуйста, напишите название задачи",
                            minLength: {
                                value: 3,
                                message: 'Название не должно быть короче трех символов',
                            }
                        })} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div style={{ color: 'rgb(231, 24, 24)' }}>{errors?.titleName && <span>{errors?.titleName?.message || "Error!"}</span>}</div>
                    <div className="mainForm__description">
                        <label>Описание</label>
                        <textarea name="description" id="" cols="30" rows="7" placeholder='Описание задачи' value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="mainForm__date">
                        <label>Дата</label>
                        <input name='date' type="date" value={date} {...register("dateName", {
                            required: "Пожалуйста, укажите дату"
                        })} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div style={{ color: 'rgb(231, 24, 24)' }}>{errors?.dateName && <span>{errors?.dateName?.message || "Error!"}</span>}</div>
                    <div className="mainForm__buttom">
                        <button disabled={!isValid}>Создать</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateTask