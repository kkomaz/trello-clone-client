import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { browserHistory } from 'react-router';
import validate from 'common/Forms/utils/validations.jsx';
import inputField from 'common/Forms/inputField';
import mergeProps from 'common/Forms/utils/mergeProps.js';
import signupUser from 'containers/Auth/actions/signupUser.jsx';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(formInputs) {
    this.props.signupUser(formInputs)
      .then(() => {
        browserHistory.push('/');
      });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="signup">
        <form className="signup__form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="first_name" type="name" component={inputField} label="First Name" />
          <Field name="last_name" type="name" component={inputField} label="Last Name" />
          <Field name="email" type="email" component={inputField} label="Email" />
          <Field name="password" type="password" component={inputField} label="Password" />
          <Field name="password_confirmation" type="password" component={inputField} label="Password Confirmation" />
          <div>
            <button type="submit" disabled={submitting} onClick={handleSubmit(this.onSubmit)}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
      </div>
    );
  }
}

Signup.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const SignupForm = reduxForm({
  form: 'SignupForm',
  validate,
})(Signup);

export default connect(null, {
  signupUser,
}, mergeProps)(SignupForm);
