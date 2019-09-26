import React, { Component } from "react";
import { Button, Collapse, Media, Row, Col, Well } from "react-bootstrap";

export default class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <Button
          className="item-details-button"
          // variant="Link"
          onClick={() => this.setState({ open: !this.state.open })}
        >
          {this.state.open === false ? `See ` : `Hide `}Item details
          {this.state.open === false ? ` +` : ` -`}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <br />
            <Media>
              <img
                width={130}
                height={130}
                alt="thumbnail"
                src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
              />
              <Media.Body>
                <p>
                  Essentials by OFM ESS-3005 Racing style Leather Gaming Chair
                </p>
                <Row className="show-grid">
                  <Col md={6}>
                    <strong>{`$${this.props.price}`}</strong>
                    <br />
                    <strong className="price-strike">{`$${this.props.price}`}</strong>
                  </Col>
                  <Col md={6}>Qty:1</Col>
                </Row>
              </Media.Body>
            </Media>
          </div>
        </Collapse>
      </div>
    );
  }
}
