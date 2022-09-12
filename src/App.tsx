import { FunctionComponent, useRef } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const App: FunctionComponent = () => {
  const myHdr = useRef<HTMLDivElement>(null);
  const myNav = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Header headerRef={myHdr} />
      <Navigation headerRef={myHdr} navRef={myNav} />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
      <Block />
    </div>
  );
};

const Block: FunctionComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "green",
        height: 500,
        width: 100,
        margin: 20,
      }}
    ></div>
  );
};

export default App;
