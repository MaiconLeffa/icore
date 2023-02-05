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
export const Crop = styled.div`
  height: 100%;
  aspect-ratio: 379 / 798;
  border-radius: 43px;
  overflow: hidden;
  position: relative;
  
  @media(max-width: ${themes.breakpoints.mobile}){
    border-radius: calc((48 * 100vw) / 768);
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
  font-size: 24px;
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: ${themes.breakpoints.mobile}){
    width: 100%;
    height: unset;
    aspect-ratio: 1/1;
  }
`
export const Emphasis = styled.span`
  color: ${themes.colors.brand};
` 