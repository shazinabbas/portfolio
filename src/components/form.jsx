import React from "react";
import './form.css';
import withFormValidation from './withFormValidation';

function Form() {
  return (
    <form className="form">
      <ul className="wrapper">
        <li style={{ "--i": 4 }}>
          <input className="input" type="text" placeholder="Name" required />
        </li>
        <li style={{ "--i": 3 }}>
          <input className="input" placeholder="Phone number" required name="phone" />
        </li>
        <li style={{ "--i": 2 }}>
          <input className="input" type="email" placeholder="E-mail" required name="email" />
        </li>
        <li style={{ "--i": 1 }}>
          <button>Submit</button>
        </li>
      </ul>
    </form>
  );
}

export default withFormValidation(Form);
