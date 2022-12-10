import { useState, useEffect } from "react";
import DataService from "../../ds";
import { useDispatch, useSelector } from "react-redux";
import { setTodos } from "../../redux/todosSlice";
import { Todo, RootState } from "../../types";

import {
  EditInput,
  Wrapper,
  Inner,
  TitleWrapper,
  Title,
  Content,
  InputWrapper,
  Input,
  Button,
  Variant,
  Todos,
  TodoWrapper,
  Check,
  Text,
  TodoButtons,
  TextWrapper,
} from "./styles";

export default function TodoList() {
  const [title, setTitle] = useState<string>("");
  const [editableTodo, setEditableTodo] = useState<string>("");
  const [editInput, setEditInput] = useState<string>("");
  const todos: Todo[] = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  async function create(title: string) {
    if (!title) return;
    await DataService.todo.createTodo(title);
    setTitle("");
    getTodos();
  }

  async function getTodos() {
    const { data } = await DataService.todo.getTodos();
    dispatch(setTodos(data));
  }

  async function edit(id: string, title: string) {
    if (!title) return;
    await DataService.todo.editTodo(id, title);
    setEditableTodo(id);
    getTodos();
    setEditableTodo("");
  }

  async function toggle(id: string, complited: boolean) {
    await DataService.todo.toggleTodo(id, complited);
    getTodos();
  }

  async function deleteTodo(id: string) {
    await DataService.todo.deleteTodo(id);
    getTodos();
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Wrapper>
      <Inner>
        <TitleWrapper>
          <Title>Todos</Title>
        </TitleWrapper>

        <Content>
          <InputWrapper>
            <Input
              value={title}
              placeholder="Enter todo here"
              onChange={(event) => setTitle(event.target.value)}
            ></Input>
            <Button
              variant={Variant.submit}
              width="15%"
              onClick={() => create(title.trim())}
            >
              Submit
            </Button>
          </InputWrapper>

          <Todos>
            {todos.map((todo, index) => {
              return (
                <TodoWrapper key={todo._id} filled={index % 2 === 0}>
                  <TextWrapper>
                    <Check
                      onChange={() => toggle(todo._id, !todo.completed)}
                      checked={todo.completed}
                    ></Check>
                    {todo._id === editableTodo ? (
                      <EditInput
                        value={editInput}
                        placeholder="Edit toto"
                        onChange={(event) => {
                          setEditInput(event.target.value);
                        }}
                      ></EditInput>
                    ) : (
                      <Text>{todo.title}</Text>
                    )}
                  </TextWrapper>
                  <TodoButtons>
                    {editableTodo === todo._id ? (
                      <Button
                        variant={Variant.edit}
                        width="60px"
                        onClick={() => {
                          edit(todo._id, editInput.trim());
                        }}
                      >
                        Save
                      </Button>
                    ) : (
                      <Button
                        variant={Variant.edit}
                        width="60px"
                        onClick={() => {
                          setEditableTodo(todo._id);
                          setEditInput(todo.title);
                        }}
                      >
                        Edit
                      </Button>
                    )}

                    <Button
                      variant={Variant.delete}
                      width="60px"
                      onClick={() => deleteTodo(todo._id)}
                    >
                      Delete
                    </Button>
                  </TodoButtons>
                </TodoWrapper>
              );
            })}
          </Todos>
        </Content>
      </Inner>
    </Wrapper>
  );
}
