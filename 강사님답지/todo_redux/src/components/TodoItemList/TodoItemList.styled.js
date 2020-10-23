import styled from "styled-components";
import palette from "../../utils/styles";

const ItemList = styled.div`
  display: flex;
`;

const Number = styled.div`
  color: black;
  font-weight: bold;
  margin-right: 10px;
  border: 1px solid green;
  color: white;
  background: green;

  border-radius: 10px;
  padding: 10px;
`;

const Word = styled.div`
  margin-right: 15px;
  margin-left: 15px;
  padding: 12px;
`;

const Meaning = styled.div`
  margin-right: 10px;
  padding: 12px;
`;

export { ItemList, Number, Word, Meaning };
