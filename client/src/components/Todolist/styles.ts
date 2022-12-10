import styled from "styled-components";

const Wrapper = styled.div``;

const Inner = styled.div`
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
  padding: 8px;
  border: none;
  cursor: pointer;
`;

const Content = styled.div`
  padding: 12px;
`;

const Todos = styled.div`
  height: 300px;
  overflow-y: scroll;
  width: 100%;
  margin-top: 12px;
  border: 1px solid #c5c4c4;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const TodoWrapper = styled.div<{ filled: boolean }>`
  background: ${(props) => {
    return props.filled ? "#F6F6F6" : "#fff";
  }};
  /* width: 100%;    */
  border-bottom: 1px solid #c5c4c4;
  display: flex;
  padding: 12px;
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

const EditInput = styled.input`
  border-radius: 4px;
  border: 1px solid #c5c4c4;
  padding: 6px;
`;

export {
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
};
