import React from "react";

import EmptyCart from "./common/EmptyCart";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  handleNaviagation = () => {
    this.props.navigation.navigate("Cart");
  };

  render() {
    return <EmptyCart />;
  }
}
