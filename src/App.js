// import logo from './Tokslaw.png';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1>Coming Soon!</h1>
//       </header>
//     </div>
//   );
// }

// export default App;

import Head from "next/head";
import { Fragment } from "react";
import ColorState from "../src/context/colorState";
import NavState from "../src/context/navState";
import PreLoader from "../src/layouts/PreLoader";
import './App.css';
//import logo from './Tokslaw.png';
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <Fragment>
    <Head>
      
      <title> Personal Portfolio</title>
    </Head>
    <NavState>
      <ColorState>
        <Component {...pageProps} />
        <PreLoader />
      </ColorState>
    </NavState>
  </Fragment>
);
}

export default App;