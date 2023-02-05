import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.section`
  display: flex;
  height: 600px;
  align-items: center;
  gap: 24px;
  width: 100%;

  @media(max-width: ${themes.breakpoints.mobile}){
    height: unset;
    flex-direction: column-reverse;
  }
`
export const Title = styled.h1`
  color: #fff;
  font-size: ${themes.sizes.lg};

  @media(max-width: ${themes.breakpoints.mobile}){
    font-size: ${themes.sizes.lg_m};
  }
`
export const Description = styled.h2`
  color: #fff;
  font-size: 24px;
`
export const TitleWrapper = styled.div`
  width: 50%;

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%;
  }
 `
export const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%;
    height: 500px;
  }
`
export const Emphasis = styled.span`
  color: ${themes.colors.brand};
` 