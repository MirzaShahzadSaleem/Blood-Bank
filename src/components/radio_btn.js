import React from 'react';
import { RadioGroup, Radio } from "react-radio-group";

class RadioBtn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedValue: this.props.value1
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ selectedValue: value });
    }
    render() {
        return (
            <RadioGroup onChange={this.handleChange}
                name={this.props.name}
                onChange={this.handleChange}>
                <label>
                    <Radio value={this.props.value1} />{this.props.label1}
                </label>
                <label>
                    <Radio value={this.props.value2} />{this.props.label2}
                </label>
            </RadioGroup>
        );
    }
}

export default RadioBtn