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

  render() {
    // eslint-disable-next-line
    const {} = this.props;

    return (
      <ProductView
        image="https://s7.toryburch.com/is/image/ToryBurchLLC/TB_53279_159?$mainline_pdp_desktop_zoom$"
        details="<ul> <li>Lace-up construction</li> <li>Leather and fabric upper</li> <li>Napa leather, suede and cotton twill lining</li> <li>Molded EVA midsole</li> <li>Studded outsole</li> <li>Wipe clean</li> </ul>"
        title="GOLF RUFFLE TRAINERS"
      />
    );
  }
}

export default ProductContainer;
