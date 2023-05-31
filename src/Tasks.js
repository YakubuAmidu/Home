import React, { useState, useEffect, useReducer } from 'react';
import uuid from 'uuid/v4';

const initialTaskState = {
    tasks: [],
    completedTasks: []
};

const tasksReducer = (state, action) => {
    console.log('Hit tasksReducer');

    return initialTaskState;
}

const TASK_STORAGE_KEY = 'TASK_STORAGE_KEY';

const storeTasks = (taskMap) => {
    localStorage.setItem(
        TASK_STORAGE_KEY,
        JSON.stringify(taskMap)
    )
}

const readStoredTasks = () => {
    const taskMap = JSON.parse(localStorage.getItem(TASK_STORAGE_KEY));

    return taskMap ? taskMap : { tasks: [], completedTasks: [] };
}

function Tasks(){
    const [taskText, setTaskText] = useState('');
    const storedTasks = readStoredTasks();
    const [tasks, setTasks] = useState(storedTasks.tasks);
    const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks);

    const [state, dispatch] = useReducer(tasksReducer, initialTaskState);

    console.log('state', state);

    useEffect(() => {
        storeTasks({ tasks, completedTasks });
    })


    const updateTaskText = event => {
        setTaskText(event.target.value);
    };

    const addTask = () => {
        dispatch({});
        setTasks([...tasks, {taskText, id: uuid()}]);
    };

    const completeTask = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id));
    };

    const deleteTask = task => () => {
      setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
    }

    console.log('tasks', tasks);
    console.log('completedTasks', completedTasks);

    return (
        <div>
            <h3>Tasks</h3>
            <div className="form">
             <input value={taskText} onChange={updateTaskText}/>
             <button onClick={addTask}>Add Task</button>
            </div>

            <div className='task-list'>
                {
                    tasks.map(task => {
                        const { id, taskText } = task;

                        return (
                            <div 
                            key={id} 
                            onClick={completeTask(task)}
                            >
                             {taskText}
                             {' '}
                            </div>
                        )
                    })
                }
            </div>

            <div className="completed-list">
              {
                completedTasks.map(task => {
                  const { id, taskText } = task;

                  return (
                    <div key={id}>
                        {
                            taskText
                        }
                        {' '}
                        <span className='delete-task' onClick={deleteTask(task)}>
                            x
                        </span>
                    </div>
                  )
                })
              }
            </div>
        </div>
    )
}

export default Tasks;