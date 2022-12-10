import {
  Wrapper,
  TodoList,
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
  TextWrapper
} from "./styles";

function App() {
  return (
    <Wrapper>
      <TodoList>
        <TitleWrapper>
          <Title>Todos</Title>
        </TitleWrapper>

        <Content>
          <InputWrapper>
            <Input placeholder="Enter todo here"></Input>
            <Button variant={Variant.submit} width="15%">
              Submit
            </Button>
          </InputWrapper>

          <Todos>
            <TodoWrapper>
              <TextWrapper>
                <Check></Check>
                <Text>Walk the dog</Text>
              </TextWrapper>
              <TodoButtons>
                <Button variant={Variant.edit} width="60px">
                  Edit
                </Button>
                <Button variant={Variant.delete} width="60px">
                  Delete
                </Button>
              </TodoButtons>
            </TodoWrapper>
          </Todos>
        </Content>
      </TodoList>
    </Wrapper>
  );
}

export default App;
