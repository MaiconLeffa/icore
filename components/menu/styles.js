import styled from "styled-components";
import { themes } from "styles/themes";

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 24px 0;
  width: 100%;
  box-shadow: 0px 0px 50px rgba(0, 193, 222);
`
export const Logo = styled.div`
  height: 70px;
  width: 200px;
  position: relative;
  
  @media(max-width: ${themes.breakpoints.mobile}){
     height: 36px;
  }
`