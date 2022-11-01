import React from 'react';

class SelectField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'AB+' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }
    render() {
        return (
            <div className="form-group">
                <label htmlFor="sel1">Blood Group</label>
                <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                    <option>AB+</option>
                    <option>A-</option>
                    <option>B-</option>
                    <option>O-</option>
                    <option>AB-</option>
                    <option>A+</option>
                    <option>B+</option>
                    <option>O+</option>
                </select>
            </div >
        )
    }
}

export default SelectField