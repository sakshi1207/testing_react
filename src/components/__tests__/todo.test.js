import {render,screen,cleanup} from "@testing-library/react";
import Todo from "../todo";// we have to test this file

afterEach(()=>{
    cleanup();
})

test('should render todo component',() =>{
    const todo ={id:1,title:"bring grocery",completed:false};
    render(<Todo todo={todo} />);
    const todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent('bring grocery');
})