import React from 'react';

export class Update extends React.Component {
  render() {
    // let value = this.props.value;
    let change = this.props.change;
    let submit = this.props.submit;
    return (
      <React.Fragment>
        <form >
          <h3>Update budget.</h3>
          <p>Manually update your budget below:</p>
          <input type='text' onChange={change} />
          <button onClick={submit}>Update </button>
        </form>
      </React.Fragment>
    );
  }
}