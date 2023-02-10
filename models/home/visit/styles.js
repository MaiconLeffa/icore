import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.section`
  padding-bottom: 180px;
`
export const Title = styled.h2`
  color: ${themes.colors.brand};
  font-size: ${themes.sizes.lg};
  text-align: center;
  margin: 0;
  text-shadow: 0 0 82px ${themes.colors.brand};

  @media(max-width: ${themes.breakpoints.mobile}){
     font-size: ${themes.sizes.lg_m};
  }
`