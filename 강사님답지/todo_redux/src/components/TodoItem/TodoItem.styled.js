import styled from "styled-components";
import palette from "../../utils/styles";

// .complete {
//     color: gray;
//     text-decoration: line-through;
// }

const ListBorder = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px;
  border: 1px solid green;
  min-width: 28%;
  max-width: 50%;
`;

const DeleteBtn = styled.div`
  border: 1px solid coral;
  border-radius: 10px;
  background: white;
  padding: 10px;
  color: black;

  &:hover {
    background: coral;
    color: white;
    cursor: pointer;
  }
`;

export { ListBorder, DeleteBtn };
