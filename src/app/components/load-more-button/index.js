'use strict';

import React from 'react';
import classnames from 'classnames';

export default class LoadMoreButton extends React.Component {
  render() {
    const props = this.props;
    const classes = classnames({
      loading: props.loading
    });

    return (
      <div className={classnames("load-more-button", { hidden: props.disabled })}>
        <button onClick={this.onClick} className={classes}>Load more <div className="loader"></div></button>
      </div>
    );
  }
  onClick = (e) => {
    e.preventDefault();
    this.props.onClick && this.props.onClick();
  }
};