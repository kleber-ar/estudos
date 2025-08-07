import styled from "styled-components";

import bgDark from "../../assets/bg-mobile-dark.jpg";
import bgLight from "../../assets/bg-mobile-light.jpg";

type PropsWrapper = {
  isDarkTheme: boolean;
};

export const Wrapper = styled.main<PropsWrapper>`
  height: 100vh;
  padding: 0 16px;
  background-image: url(${(props) => (props.isDarkTheme ? bgDark : bgLight)});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const HeaderWrapper = styled.header`
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 28px;
  transform: scale(1, 1.1);
  font-weight: 700;
  letter-spacing: 12px;
  color: #e4e5f1;
  /* & representa o próprio elemento. */
  &:hover {
    color: red;
  }
`;

export const ButtonTheme = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

export const InputTask = styled.input`
  border: none;
  margin-top: 40px;
  border-radius: 4px;
  padding: 8px 15px;
  font-size: 1.1rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryText};
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 16px;
  grid-template-areas:
    "counter button"
    "filter filter";
`;

export const CounterTasksToLeft = styled.span`
  grid-area: counter;
  border-radius: 0 0 0 4px;
  padding: 15px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondaryText};
`;

export const FilterTasks = styled.div`
  padding: 16px;
  color: ${(props) => props.theme.colors.secondaryText};
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;
  grid-area: filter;
  span {
    margin: 8px;
  }
  span > a {
    color: ${(props) => props.theme.colors.secondaryText}
    text-decoration: none;
  }
`;

export const ClearCompleted = styled(CounterTasksToLeft)`
  grid-area: button;
  border-radius: 0 0 4px 0;
  text-align: right;

  button {
    border: none;
    padding: 0;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondaryText};
  }
`;
