import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";
import "./style.css";
import Loader from "react-loader-spinner";
import {
  faBookOpen,
  faGlobe,
  faHome,
  faAnchor
} from "@fortawesome/free-solid-svg-icons";

export default class App extends Component {
  state = {
    isLoading: true
  };

  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Navbar
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={this.state.isLoading}
        helpCallback={() => {
          alert("I need help... and coffee...");
        }}
        menuItems={[
          {
            title: "Home",
            icon: faHome,
            isAuth: () => {
              // Claim authorization logic...
              return false;
            }
          },
          {
            title: "Qoutes",
            icon: faBookOpen,
            isAuth: true
          },
          {
            title: "Facts",
            icon: faGlobe,
            isAuth: true,
          },
          {
            title: "About",
            icon: faAnchor,
            isAuth: true
          }
        ]}
      />
    );
  }
}

render(<App />, document.getElementById("root"));
