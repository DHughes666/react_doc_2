import { useState } from 'react';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button onClick={() => {
        setTitle('');
        onAddTask(title);
      }}>Add</button>
    </>
  )
}

export default AddTask;
