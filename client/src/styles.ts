import styled from "styled-components";

const Wrapper = styled.div``;

const TodoList = styled.div`
  width: 600px;
  border: 1px solid #c5c4c4;
  margin: 0 auto;
  margin-top: 60px;
`;

const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ebebeb;
  border-bottom: 1px solid #c5c4c4;
`;

const Title = styled.h1`
  padding: 12px;
  margin: 0px;
  font-size: 16px;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  padding: 8px;
  width: 80%;
  border-radius: 4px;
  border: 1px solid #c5c4c4;
`;

enum Variant {
  submit = "submit",
  edit = "edit",
  delete = "delete",
}

const Button = styled.button<{ variant: Variant; width: string }>`
  background: ${(props) => {
    const colors = {
      [Variant.submit]: "#338afc",
      [Variant.edit]: "#36cb18",
      [Variant.delete]: "#fc3347",
    };
    return colors[props.variant];
  }};

  width: ${(props) => props.width};
  color: #ffffff;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 12px;
`;

const Todos = styled.div`
  width: 100%;
  margin-top: 12px;
  border: 1px solid #c5c4c4;
  display: flex;
`;

const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  justify-content: space-between;
`;

const Check = styled.input.attrs({ type: "checkbox" })``;

const Text = styled.div`
  font-size: 14px;
  line-height: 14px;
`;
const TodoButtons = styled.div`
  display: flex;
  gap: 8px;
`;
const TextWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export {
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
};
