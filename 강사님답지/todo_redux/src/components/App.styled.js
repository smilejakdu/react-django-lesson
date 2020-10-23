import styled from "styled-components";
import palette from "../utils/styles";

const HeaderBorder = styled.div`
  background-color: ${palette.green[5]};
  color: white;
  left: 0;
  height: 10%;
  right: 0;
  top: 0;
  position: absolute;
  width: 100%;
  display: flex;
`;

const HeaderFont = styled.div`
  font-size: 20px;
  margin: 20px;
  color: white;
`;

const AppBody = styled.div`
  margin-top: 70px;
  position: relative;
`;

const MemorizeFont = styled.p`
  font-size: 3rem;
  color: black;
`;

export { HeaderBorder, HeaderFont, AppBody, MemorizeFont };
