import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ViewTasks from "./components/view-tasks/view-tasks";
import ListTasks from "./components/list-tasks/list-tasks";

import { Task } from "./types";

import GlobalStyle from "./styles/global-styles";
import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";
import light from "./styles/themes/light";

function App() {
  const [allTasks, setAllTasks] = useState<Task[]>([]);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const completedTasks = allTasks.filter((task) => task.completed);
  const activeTasks = allTasks.filter((task) => !task.completed);

  const toggleStatusTask = (currentTask: Task) => {
    const newTasks = allTasks.map((task) => {
      if (task.id === currentTask.id) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setAllTasks(newTasks);
  };

  const addNewTask = (newTask: Task) => {
    setAllTasks((prevAllTasks) => [...prevAllTasks, newTask]);
  };

  const deleteTask = (taskToDelete: Task) => {
    setAllTasks((prevAllTasks) =>
      prevAllTasks.filter((task) => task.id !== taskToDelete.id)
    );
  };

  const clearCompletedTasks = () => {
    setAllTasks((prevAllTasks) =>
      prevAllTasks.filter((task) => !task.completed)
    );
  };

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <GlobalStyle />
        <Routes>
          <Route
            path="/"
            element={
              <ViewTasks
                itemsLeftToCompleted={allTasks.length - completedTasks.length}
                addNewTask={addNewTask}
                clearCompletedTasks={clearCompletedTasks}
                toggleTheme={toggleTheme}
                isDarkTheme={isDarkTheme}
              />
            }
          >
            <Route
              index
              element={
                <ListTasks
                  tasks={allTasks}
                  toggleStatusTask={toggleStatusTask}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route
              path="/active"
              element={
                <ListTasks
                  tasks={activeTasks}
                  toggleStatusTask={toggleStatusTask}
                  deleteTask={deleteTask}
                />
              }
            />
            <Route
              path="/completed"
              element={
                <ListTasks
                  tasks={completedTasks}
                  toggleStatusTask={toggleStatusTask}
                  deleteTask={deleteTask}
                />
              }
            />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
