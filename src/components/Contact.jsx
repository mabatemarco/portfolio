import React from 'react';
import '../css/contact.css';


export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div id='contact' >
        <h2>Contact Me</h2>

        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/mzbdbdvj"
          method="POST"
        >
          <div className="pair">
            <label htmlFor='name'>Name</label>
            <input name='name' type='text' />
          </div>
          <div className="pair">
            <label htmlFor='email'>Email</label>
            <input name='email' type='text' />
          </div>
          <div className="pair">
            <label htmlFor='message'>Message</label>
            <textarea name='message' type='message' />
          </div>
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>There was an error sending your message.  Please try again or send an email from your account.</p>}
        </form>
      </div>
    )
  }
}
