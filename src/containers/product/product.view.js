import React from 'react';

import Select from '../../components/select/select.view';

import './_product.css';

const ProductView = ({
 image, title, details, sizes, colors, orderable 
}) => (
  <div className="product">
    <Select
      defaultOption="Size"
      label="Size"
      items={['red', 'yellow', 'black']}
    />
    <Select
      defaultOption="Size"
      label="Size"
      items={['red', 'yellow', 'black']}
    />
    <img className="product-image" src={image} alt="placeholder logo" />
    <div
      className="product-description"
      dangerouslySetInnerHTML={{ __html: details }}
    />
    <p>{title}</p>
  </div>
);

export default ProductView;
