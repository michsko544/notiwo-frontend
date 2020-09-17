import React from 'react';
import { H1, H2 } from "../headings"
import Input from "../inputs/Input";
import Button from "../inputs/Button";
import Logo from "../Logo";
import Store from "./App.store"
import AppTheme from "./App.theme"
import Menu from "../Menu";

const App = () => {
  return (
    <Store.Container>
      <AppTheme>
        <div className="App">
          <Menu />
          <H1>
            Hello world
          </H1>
          <H2>
            full of zasadzkas
          </H2>
          <Input label={"Email"} type="email" placeholder={"tomek@example.com"} error="Niepoprawny email lub hasło" />
          <Button text="Zaloguj" />
        </div>
      </AppTheme>
    </Store.Container>
  );
}

export default App;
