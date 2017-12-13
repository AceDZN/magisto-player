import React, { Component } from 'react';
export class FormRow extends Component {
  render() {
    return (
        <div className="form-group row">
            <label htmlFor="{ this.props.input_id }" className="col-md-6 col-form-label">{ this.props.label }</label>
            <div className="col-md-6">
                {this.props.children}
            </div>
        </div>
    );
  }
}
