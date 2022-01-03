import TodoTemplete from './components/TodoTemplete';
import { createGlobalStyle } from 'styled-components';
import TodoHeader from './components/TodoHeader';
import Todolist from './components/Todolist';
import TodoInsert from './components/TodoInsert';
import {useState,useRef} from 'react';
const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
  `;
function App() {
  //항목들 상태관리

  const [todoList,setTodoList] =useState([
    {
      id:1,
      text:"스타일 컴포넌트",
      isDone: false
    },
    {
      id:2,
      text:"컴포넌트 생성하기",
      isDone: false
    },
    {
      id:3,
      text:"기능설정하기",
      isDone: false
    },
  ]);
  //인풋입력값 상태관리
  const[desc,setDesc] = useState("");
  //항목id 관리
  const idNum = useRef(4);

  function onChange(e){
    const inputValue = e.target.value;
    setDesc(inputValue);
    console.log(inputValue);
  }
  function onCreatelist(e){
    console.log(todoList);
    e.preventDefault();
    //새로운 객체 만들기
    const list ={
      id:idNum.current,
      text:desc,
      isDone:false
    }
    //todolist배열 업데이트(새로운 객체 추가하기)
    setTodoList({
      ...todoList,list
    })
    //idNum값을 1씩 추가하기
    idNum.current = idNum.current+1;
  }
  //해당id항목 삭제하기
  function onRemove(id){
    setTodoList(todoList.filter(todo=>todo.id !== id));

  }
  //해당 id항목 idDone변경
  function onToggle(id){
    setTodoList(todoList.map( todo => todo.id === id ? {...todo,isDone:!todo.isDone} : todo ))
  }
  
  return (
    <div className="App">
      <div>
        <h1>안녕하세요</h1>
        <p>원격저장소가 생겼습니다</p>
      </div>
      <GlobalStyle/>
      <TodoTemplete>
        <TodoHeader todoList={todoList}/>
        <Todolist todoList={todoList} onRemove={onRemove} onToggle={onToggle}/>
        <TodoInsert onChange={onChange} onCreatelist={onCreatelist} desc={desc}/>
      </TodoTemplete>
    </div>
  );
}

export default App;
