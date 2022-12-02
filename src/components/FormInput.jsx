import React from 'react';

class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPressed: false,
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeToTrue = this.changeToTrue.bind(this);
    this.changeToRes = this.changeToRes.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  changeToTrue() {
    this.setState({ isPressed: true });
    console.log("gg");
  }
  changeToRes(){
    this.setState({value: ''})
  }

  render() {
    return (
      <div>
        <h1>{this.state.isPressed === true ? this.state.value : ""}</h1>
        <form>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            type="text"
            placeholder='Text pls'
          />
        </form>
        <button onClick={this.changeToTrue}>Print to h1</button>
        <button onClick={this.changeToRes}>Reset</button>
      </div>
    );
  }
}
export default FormInput;
