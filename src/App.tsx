import type { Component } from 'solid-js';
import { createSignal } from "solid-js";

import logo from './logo.svg';
import styles from './App.module.css';

const Hello: Component<{
  name : string
}> = (props) => {
  return <div>Hello {props.name}</div>
}

const [text, setText] = createSignal("22")
const InputLine: Component<{
  hint : string
}> = (props) => {
  setText(props.hint)
  return <input value={props.hint} placeholder="input here"/>
}

const App: Component = () => {

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello name={text()}/>
        <InputLine hint={text()}/>
        <strong>{text()}</strong>
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
