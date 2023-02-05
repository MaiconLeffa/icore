import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.section`
  display: flex;
  height: 600px;
  align-items: center;
  gap: 24px;
  padding: 0 24px;

  @media(max-width: ${themes.breakpoints.mobile}){
    height: unset;
    flex-direction: column;
  }
`
export const Title = styled.h2`
  color: #fff;
  font-size: ${themes.sizes.lg};
  margin: 0;

  @media(max-width: ${themes.breakpoints.mobile}){
    font-size: ${themes.sizes.lg_m};
  }
`
export const Description = styled.p`
  color: #fff;
  font-size: ${themes.sizes.md};
`
export const TitleWrapper = styled.div`
    width: 50%;

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%;
  }
 `
export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%;
    aspect-ratio: 1/1;
  }
`
export const Emphasis = styled.span`
  color: ${themes.colors.brand};
` 