import React, { Component, Fragment } from "react";
import Styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";
import OrderSummary from "../../Layout/OrderSummary/OrderSummary";

class Modal extends Component {
  // Only update component if modal is shown
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  render() {
    // Return the modal with order summary only if showModal state is true
    return this.props.show ? (
      <Fragment>
        {/* Backdrop */}
        <Backdrop hiden={this.props.hide} />
        {/* Return order summary jsx */}
        <div className={`${Styles.Modal} ${Styles.showModal}`}>
          {this.props.children}
        </div>
      </Fragment>
    ) : null;
  }
}

export default Modal;
