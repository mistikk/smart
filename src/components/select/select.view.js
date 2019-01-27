import React, { Component, Fragment } from 'react';

import './_select.css';

class SelectView extends Component {
  /* Props
   * ------------------------------------------------
   *   @prop { type }    name                - Description....
   */

  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      title: props.defaultOption || '...',
    };
  }

  // Component Life Cycles

  // Component Functions
  _handleSelectClick = () => {
    const { extended } = this.state;
    this.setState({ extended: !extended });
  };

  _handleOptionClick = (item) => {
    this.setState({ extended: false, title: item });
  };

  render() {
    const { label, items } = this.props;
    const { extended, title } = this.state;

    return (
      <Fragment>
        <div onClick={this._handleSelectClick} className="select-box">
          <span className="select-box-label">{label}</span>
          <div className="select-box-title">{title}</div>
        </div>
        {extended && (
          <ul className="select-box-option-wrapper">
            {items
              && items.map(item => (
                <li
                  className="select-box-option"
                  onClick={() => this._handleOptionClick(item)}
                >
                  {item}
                </li>
              ))}
          </ul>
        )}
      </Fragment>
    );
  }
}

export default SelectView;
