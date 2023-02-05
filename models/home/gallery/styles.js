import styled from "styled-components";
import { themes } from "styles/themes";

export const ImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  gap: 12px;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
  position: relative;
  
  @media(max-width: ${themes.breakpoints.mobile}){
    height: 500px;
  }
`
export const DividedImageWrapper = styled.div`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 50%;
  position: relative;
`
export const Title = styled.h2`
color: ${themes.colors.brand};
font-size: ${themes.sizes.lg};
text-align: center;

@media(max-width: ${themes.breakpoints.mobile}){
  font-size: ${themes.sizes.lg_m};
}
`