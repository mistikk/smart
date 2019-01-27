import React from 'react';

import Select from '../../components/select/select.view';
import Button from '../../components/button/button.view';

import './_product.css';

const ProductView = ({
  image,
  title,
  details,
  sizes,
  colors,
  orderable,
  buttonOnClick
}) => (
  <div className="product">
    <div className="product-left-block">
      <img className="product-image" src={image} alt="placeholder logo" />
      <div
        className="product-description"
        dangerouslySetInnerHTML={{ __html: details }}
      />
    </div>
    <div className="product-right-block">
      <p className="product-title">{title}</p>
      <div className="product-select">
        <div>
          <Select
            defaultOption="Size"
            label="Size"
            items={['red', 'yellow', 'black']}
          />
        </div>
        <div>
          <Select
            defaultOption="Size"
            label="Size"
            items={['red', 'yellow', 'black']}
          />
        </div>
      </div>
      <div className="product-button">
        <Button text="Accept" onClick={buttonOnClick} />
      </div>
    </div>
  </div>
);

export default ProductView;
