```javascript
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

const KanbanBoard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('/api/tasks')
            .then(res => setTasks(res.data))
            .catch(err => console.error(err));
    }, []);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId || source.index !== destination.index) {
            const newTasks = Array.from(tasks);
            const [removed] = newTasks.splice(source.index, 1);
            newTasks.splice(destination.index, 0, removed);

            setTasks(newTasks);
        }
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="tasks">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {tasks.map((task, index) => (
                            <Draggable key={task._id} draggableId={task._id} index={index}>
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        {task.name}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default KanbanBoard;
```