import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // One way to make 'this' refer to StorePicker in goToStore()
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }

  goToStore(event) {
    event.preventDefault();
    // grab text out of box
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    // transition form / -> /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }

  render() {
    // comments here are cool
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        { /* comments here suck */ }
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
               defaultValue={getFunName()} ref={(input) => {this.storeInput = input}} />
        <button type="submit">Visit Store!</button>
      </form>
    )
  }
}

// Surface the context from BrowserRouter - i.e. need transitionTo
// function in router
StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;
