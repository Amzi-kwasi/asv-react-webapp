import React from 'react';
import "../asv.css";
import { useForm, ValidationError } from '@formspree/react';
function Form() {
  const [state, handleSubmit] = useForm("xbjbobwv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div className="cont">
      <form onSubmit={handleSubmit} className="form">
      <label htmlFor="name">
        Your Name
      </label>
      <input
        id="name"
        type="text" 
        name="name" className="input"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
       <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email" className="input"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

<label htmlFor="phone">
        Phone No.
      </label>
      <input
        id="phone"
        type="number" 
        name="phone" className="input"
      />
      <ValidationError 
        prefix="Phone" 
        field="phone"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message" className="textarea"
        placeholder="Message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
}

export default Form;
