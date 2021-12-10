import { Component, createContext } from "react";

export const HeaderContext = createContext();

export class HeaderContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      isHomePage: true,
    };
  }

  setStateValues = (name, value) => this.setState({ [name]: value });

  render() {
    return (
      <HeaderContext.Provider
        value={{ ...this.state, setStateValues: this.setStateValues }}
      >
        {this.props.children}
      </HeaderContext.Provider>
    );
  }
}
