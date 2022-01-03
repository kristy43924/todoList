import styled from "styled-components";
import TodoItem from "./TodoItem";
const TodoListBlock =styled.div`
    flex:1;
    padding: 20px 32px 48px;
    overflow-y:auto;
`;
export default function Todolist({todoList,onToggle,onRemove}){

    return(
        <div>
            <TodoListBlock>
                {todoList.map(todo=> <TodoItem key={todo.id} id={todo.id} text={todo.text} isDone={todo.isDone} onToggle={onToggle} onRemove={onRemove}/>)}
            </TodoListBlock>
        </div>
    );
}