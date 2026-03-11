import { Todo } from '../types/Todo';
import { TodoItem } from './TodoItem';
import { ErrorMessage } from '../types/ErrorMessage';

type Props = {
  todos: Todo[];
  updateTodos: (todos: Todo[]) => void;
  setError: (message: ErrorMessage) => void;
  tempTodo: Todo | null;
  onFocuseInput: (focuse: boolean) => void;
};

export const TodoList: React.FC<Props> = ({
  todos,
  updateTodos,
  setError,
  tempTodo,
  onFocuseInput,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          updateTodos={updateTodos}
          setError={setError}
          key={todo.id}
          onFocuseInput={onFocuseInput}
        />
      ))}

      {tempTodo && <TodoItem todo={tempTodo} />}
    </section>
  );
};
