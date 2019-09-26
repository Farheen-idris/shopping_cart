import React, { Component } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Subtotal from "./components/subtotal/subtotal";
import PickupSavings from "./components/PickupSavings/PickupSavings";
import Taxesfees from "./components/TaxesFees/TaxesFees";
import EstimatedTotal from "./components/EstimatedTotal/EstimatedTotal";
import ItemDetails from "./components/ItemDetails/ItemDetails";
import PromoCode from "./components/PromoCode/PromoCode";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 100,
      PickupSavings: -3.85,
      taxes: 0,
      EstimatedTotal: 0,
      isDisabled: false
    };
  }
  componentDidMount = () => {
    this.setState({
      taxes: (this.state.total + this.state.PickupSavings) * 0.0875
    });
  };

  render() {
    return (
      <div className="container">
        <Container className="purchase">
          <Subtotal price={this.state.total}>Hello World</Subtotal>
          <PickupSavings price={this.state.PickupSavings} />
          <Taxesfees taxes={this.state.taxes.toFixed(2)} />
          <hr />
          <EstimatedTotal price={this.state.EstimatedTotal.toFixed(2)} />
          <ItemDetails price={this.state.EstimatedTotal.toFixed(2)} />
          <hr />
          <PromoCode
            giveDiscount={() => this.giveDiscountHandler()}
            isDisabled={this.state.isDisabled}
          />
        </Container>
      </div>
    );
  }
}
