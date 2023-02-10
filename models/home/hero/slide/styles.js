import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.div`
  display: flex;
  height: 600px;
  align-items: center;
  position: relative;
  gap: 24px;
  width: 100%;
  background-size: cover;

  @media(max-width: ${themes.breakpoints.mobile}){
    height: unset;
    flex-direction: column-reverse;
    background-position: center;
  }
`
export const Title = styled.h1`
  color: #fff;
  font-size: ${themes.sizes.lg};

  @media(max-width: ${themes.breakpoints.mobile}){
    font-size: 32px;
    text-align: center;
  }
`
export const Description = styled.p`
  color: #fff;
  font-size: 24px;
  font-weight: normal;
  
  @media(max-width: ${themes.breakpoints.mobile}){
    font-size: 18px;
  }
`
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 120px;
  justify-content: center;
  max-width: 800px;
  height: 100%;
  width: 100%;  

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%;
    height: unset;
    padding-left: unset;
  }
 `
export const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 80%;

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%; 
    height: 350px;
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
export const Content = styled.div`
  align-items: center;
  display: flex;
  gap: 48px;
  max-width: 1200px;
  width: 100%;
  
  @media(max-width: ${themes.breakpoints.mobile}){
    flex-direction: column-reverse;
    padding: 24px;
    max-width: 700px;
  }
`
export const Overlay = styled.div`
  background: linear-gradient(90deg, #000 0%, transparent 93%);
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
  width: 100%;

  @media(max-width: ${themes.breakpoints.mobile}){
    background: linear-gradient(0deg, #000 0%, transparent 93%);
    position: unset;
  }
`