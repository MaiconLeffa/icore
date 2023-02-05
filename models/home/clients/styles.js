import styled from "styled-components";
import { themes } from "styles/themes";

export const Container = styled.section`
  display: flex;
  align-items: center;
`
export const Title = styled.h2`
  color: ${themes.colors.brand};
  font-size: ${themes.sizes.lg};
  text-align: center;

  @media(max-width: ${themes.breakpoints.mobile}){
    font-size: ${themes.sizes.lg_m};
  }
`
export const Card = styled.div`
  align-items: center;
  min-height: 248px;
  border-radius: 8px;
  display: flex;
  gap: 12px;
  padding: 24px;
  background-color: #fff;

  @media(max-width: ${themes.breakpoints.mobile}){
    flex-direction: column;
  }
`