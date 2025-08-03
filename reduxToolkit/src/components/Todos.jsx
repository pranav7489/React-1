import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Track which todos are being edited
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateTodo({ id, text: editText }));
      setEditingId(null);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  return (
    <>
      <div className="text-2xl font-semibold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center bg-zinc-800 px-4 py-2 rounded gap-2"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="text-white bg-zinc-700 rounded px-3 py-1 w-full sm:w-auto"
                autoFocus
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            <div className="flex gap-2 mt-2 sm:mt-0">
              {editingId === todo.id ? (
                <>
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-4 rounded-lg transition duration-300"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-1 px-4 rounded-lg transition duration-300"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEditClick(todo)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-1 px-4 rounded-lg transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 hover:bg-red-600 py-1 px-4 rounded-lg transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21a48.108 48.108 0 00-3.478-.397m-12 .562a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916"
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;