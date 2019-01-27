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
  buttonOnClick,
  defaultColor,
  defaultSize,
  handleSizeSelectChange,
  handleColorSelectChange,
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
            defaultOption={defaultSize}
            label="Size"
            items={sizes}
            onChange={handleSizeSelectChange}
          />
        </div>
        <div>
          <Select
            defaultOption={defaultColor}
            label="Color"
            items={colors}
            onChange={handleColorSelectChange}
          />
        </div>
      </div>
      <div className="product-button">
        <Button disabled={!orderable} text="Accept" onClick={buttonOnClick} />
      </div>
    </div>
  </div>
);

export default ProductView;
