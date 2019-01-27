import React, { Component } from 'react';

// Services and Actions

// Middleware

// Constants

// Utilities

// Component
import ProductView from './product.view';

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions

  // Component Functions
  _handleButtonOnClick = () => {
    console.log('value :');
  };

  render() {
    // eslint-disable-next-line
    const {} = this.props;

    return (
      <ProductView
        image="https://s7.toryburch.com/is/image/ToryBurchLLC/TB_53279_159?$mainline_pdp_desktop_zoom$"
        details="<p>Hit the links in our Golf Ruffle Trainers, a feminine play on iconic Seventies sport style, inspired by our best-selling Ruffle Sneaker. The ruffle detail &mdash; made from a woven tape traditionally used on track pants and cheerleading skirts &mdash; gives them boy-meets-girl charm. Constructed from soft yet sturdy leather, the lightweight, comfortable pair has a cushioned EVA foam midsole (typically seen on running shoes) and is finished with a studded rubber sole for grip and traction on and off the course.</p>"
        title="GOLF RUFFLE TRAINERS"
        buttonOnClick={this._handleButtonOnClick}
      />
    );
  }
}

export default ProductContainer;
