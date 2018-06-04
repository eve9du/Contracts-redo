import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.click}>
      Name:
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={props.change}
        value={props.name}
      />
      Company Name:
      <input
        type="text"
        name="company"
        placeholder="Company Name"
        onChange={props.change}
        value={props.company}
      />
      Contract:
      <input
        type="text"
        name="contract"
        placeholder="Contract Details"
        onChange={props.change}
        value={props.contract}
      />
      <button> Add Contract</button>
    </form>
  );
};

export default Form;
