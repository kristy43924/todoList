import styled from "styled-components";
const TodoTemplateBlock = styled.div`
width:512px;
height:768px;
position: relative;
background:white;
border-radius:16px;
margin: 96px auto 32px;
box-shadow: 0 0 89px rgba(0,0,0,0.4);
display:flex;
flex-direction: column;
`;
export default function TodoTemplate({children}){
   
    return(
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
}