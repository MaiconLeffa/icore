import styled from "styled-components";
import { themes } from "styles/themes";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 180px;
  max-width: 1366px;
  margin: 0 auto;

  @media(max-width: ${themes.breakpoints.mobile}) {
    gap: 120px;    
  }
`
export const Divisor = styled.div`
  background-color: ${themes.colors.brand};
  height: 1px;
  width: 200px;
  margin: 0 auto;
  
  @media(max-width: ${themes.breakpoints.mobile}) {
    width: 100px;    
  }
`