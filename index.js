import React from "react";
import SearchMovies from "./searchMovies";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <link href="https://fonts.googleapis.com/css2?family=Lexend+Tera&display=swap" rel="stylesheet"></link>
        <App />
        <SearchMovies />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));