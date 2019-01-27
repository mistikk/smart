import React, { Component } from 'react';

// Services and Actions
import { login } from '../../services/auth';
import { getProductByCode } from '../../services/product';

// Middleware

// Constants

// Utilities

// Component
import ProductView from './product.view';

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skus: null,
      image: null,
      description: null,
      sizes: [],
      colors: [],
      orderable: true,
      title: null,
      selectedColor: null,
      selectedSize: null,
      loading: true,
      sku: null,
    };
  }

  // Component Life Cycle Functions
  async componentDidMount() {
    const { match } = this.props;
    const selectedProductId = match.params.id;

    await login({
      client_id: 'FQtKaLZrnF5RQeNtrtkqopQmqi2O5CmsM!DRSKIK3ZzvT1rBLr',
      secret: 'lLt5VBVb2EpdVXvAa6!XxVxL5AtXxQDCR!lvSHA7AonkFpP!!T',
    });

    if (selectedProductId) {
      getProductByCode(selectedProductId).then((result) => {
        this.setState({
          skus: result.skus,
          image: result.images[0].url,
          description: result.shortDesc,
          sizes: result.attrList.size,
          colors: result.attrList.color,
          orderable: result.orderable,
          title: result.name,
          selectedColor: result.selectedSku.attrs.color,
          selectedSize: result.selectedSku.attrs.size,
          loading: false,
          sku: result.selectedSku.sku,
        });
      });
    }
  }

  // Component Functions
  _handleButtonOnClick = () => {
    const { sku } = this.state;
    alert(sku);
  };

  _handleSizeSelectChange = (value) => {
    const { skus, selectedColor } = this.state;

    const product = skus.filter(item => item.attrs.size === value && item.attrs.color === selectedColor)[0];

    this.setState({
      image: product.images[0].url,
      orderable: product.orderable,
      selectedSize: value,
      sku: product.sku,
    });
  }

  _handleColorSelectChange = (value) => {
    const { skus, selectedSize } = this.state;

    const product = skus.filter(item => item.attrs.size === selectedSize && item.attrs.color === value)[0];

    this.setState({
      image: product.images[0].url,
      orderable: product.orderable,
      selectedColor: value,
      sku: product.sku,
    });
  }

  render() {
    const {
      image, description, sizes, colors, orderable, title, selectedColor, selectedSize, loading,
    } = this.state;

    if (loading) return null;
    return (
      <ProductView
        image={image}
        details={description}
        title={title}
        orderable={orderable}
        sizes={sizes}
        colors={colors}
        defaultColor={selectedColor}
        defaultSize={selectedSize}
        buttonOnClick={this._handleButtonOnClick}
        handleSizeSelectChange={this._handleSizeSelectChange}
        handleColorSelectChange={this._handleColorSelectChange}
      />
    );
  }
}

export default ProductContainer;
