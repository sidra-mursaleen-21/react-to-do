import React from "react";

export default function Input(props) {
  return (
    <>
      <h2 className="label">{props.label}</h2>
      <input
        value={props.value}
        className="input"
        onChange={props.onChange}
        placeholder={props.placeholder}
        type="text"
      />
    </>
  );
}
