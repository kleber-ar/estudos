import React from "react";
import { Outlet, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Task } from "../../types";
import {
  ButtonTheme,
  ClearCompleted,
  CounterTasksToLeft,
  FilterTasks,
  Footer,
  HeaderWrapper,
  InputTask,
  Title,
  Wrapper,
} from "./styles";
import iconSun from "../../assets/icon-sun.svg";
import iconMoon from "../../assets/icon-moon.svg";

type Props = {
  itemsLeftToCompleted: number;
  addNewTask: (task: Task) => void;
  clearCompletedTasks: () => void;
  toggleTheme: () => void;
  isDarkTheme: boolean;
};

function ViewTasks({
  addNewTask,
  clearCompletedTasks,
  itemsLeftToCompleted,
  toggleTheme,
  isDarkTheme,
}: Props) {
  const handleInputTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newTask: Task = {
        id: uuidv4(),
        name: e.currentTarget.value,
        completed: false,
      };

      addNewTask(newTask);
      e.currentTarget.value = "";
    }
  };

  return (
    <Wrapper isDarkTheme={isDarkTheme}>
      <HeaderWrapper>
        <Title>Todo</Title>
        <ButtonTheme onClick={toggleTheme}>
          <img src={isDarkTheme ? iconSun : iconMoon} alt="Toggle theme" />
        </ButtonTheme>
      </HeaderWrapper>
      <InputTask
        type="text"
        placeholder="Add new task"
        onKeyDown={handleInputTask}
      />
      <Outlet />
      <Footer>
        <CounterTasksToLeft>
          {itemsLeftToCompleted} items left
        </CounterTasksToLeft>
        <FilterTasks>
          <span>
            <Link to="/">All</Link>
          </span>
          <span>
            <Link to="/active">Active</Link>
          </span>
          <span>
            <Link to="/completed">Completed</Link>
          </span>
        </FilterTasks>
        <ClearCompleted>
          <button onClick={clearCompletedTasks}>Clear Completed</button>
        </ClearCompleted>
      </Footer>
    </Wrapper>
  );
}

export default ViewTasks;
