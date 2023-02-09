import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.footer`
  box-shadow: 0px 0px 50px rgba(0, 193, 222);  
`
export const Wrapper = styled.div`
  align-items: center;
  padding: 0 24px;
  height: 500px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;

  @media(max-width: ${themes.breakpoints.mobile}){
    padding: 48px 24px;
    gap: 48px;
    flex-direction: column;
    height: unset;
  }
`
export const Rights = styled.p`
  color: #fff;
  margin-top: auto;
  width: 100%;
  text-align: center;

  @media(max-width: ${themes.breakpoints.mobile}){
     margin: 36px 0;     
  }
`