import React, {useReducer} from 'react';

export const Usereducer = () => {
    const initialTodos = [
        {
            id: 1,
            title: "Todo 1",
            complete: false,
          },
          {
            id: 2,
            title: "Todo 2",
            complete: false,
          },
    ];
    interface TodoProps {
        id: number;
        title: string;
        complete: boolean;
    }
    const reducer = (state: any, action: any) => {
        const {type, payload} = action;
        console.log(payload, action);
        switch(type) {
            case "COMPLETE":
                return state.map((todo: {id: number; title: string; complete: boolean})  => {
                    if (todo.id === payload.id) {
                        return { ...todo, complete: !todo.complete };
                      } else {
                        return todo;
                      }
                });
            default:
                return state;
        }
    }
    const [todos, dispatch] = useReducer(reducer, initialTodos);

    const handleComplete = (todo: TodoProps) => {
        dispatch({ type: "COMPLETE", payload: {complete: !todo.complete, id: todo.id} });
      };
    return (
        <div>
            <>
      {todos.map((todo: TodoProps) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            <span style={{textDecoration: `${todo.complete ? 'line-through' : ''}`}}>{todo.title}</span>
          </label>
        </div>
      ))}
    </>
        </div>
    );
}