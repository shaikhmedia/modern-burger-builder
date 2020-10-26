import React, { Component } from "react";
import Styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
  // Only update component if modal is shown
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show;
  }

  render() {
    // convert and map the ingredients obj and return a list for each Ingredient
    const ingList = Object.keys(this.props.Ing).map((cur) => {
      return (
        <li key={cur} className={Styles.Case}>
          {cur}: {this.props.Ing[cur]}
        </li>
      );
    });

    // Return the modal and order summary only if showModal state is true
    return this.props.show ? (
      <React.Fragment>
        {/* Backdrop */}
        <Backdrop hiden={this.props.hide} />
        {/* Return order summary jsx */}
        <div className={`${Styles.Modal} ${Styles.showModal}`}>
          <h3>Your Order</h3>
          <p>A delicious burger with following ingredients:</p>
          {ingList}
          <h4>Total Price: ${this.props.price.toFixed(2)}</h4>
          <p>Continue to checkout?</p>
          <div>
            <button
              onClick={this.props.checkoutYes}
              className={`${Styles.Button} ${Styles.Yes}`}
            >
              Yes
            </button>
            <button
              onClick={this.props.hide}
              className={`${Styles.Button} ${Styles.Cancel}`}
            >
              Cancel
            </button>
          </div>
        </div>
      </React.Fragment>
    ) : null;
  }
}

export default Modal;
