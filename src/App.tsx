import { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

import { CountingComponent } from "./Components/Counter"
import { TodoList } from "./Components/Simple Todos"

const Hello: Component<{
  name : string
}> = (props) => {
  return <div>Hello {props.name}</div>
}

const App: Component = () => {

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        
        <Hello name="Solidjs"/>
        
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        
        <TodoList/>
        
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
