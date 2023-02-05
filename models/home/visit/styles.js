import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.section`
  padding: 200px 0;
`
export const Title = styled.h2`
  color: ${themes.colors.brand};
  font-size: ${themes.sizes.lg};
  text-align: center;
  margin: 0;

  @media(max-width: ${themes.breakpoints.mobile}){
     font-size: ${themes.sizes.lg_m};
  }
`