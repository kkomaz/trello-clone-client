import React, { PropTypes, Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from 'common/Forms/utils/validations.jsx';
import loginUser from 'containers/Auth/actions/loginUser.jsx';
import fetchServices from 'containers/Auth/actions/fetchServices.jsx';
import inputField from 'common/Forms/inputField';
import mergeProps from 'common/Forms/utils/mergeProps.js';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.navigateToSignUp = this.navigateToSignUp.bind(this);
    this.fetchServices = this.fetchServices.bind(this);
  }

  fetchServices() {
    this.props.fetchServices();
  }

  navigateToSignUp() {
    browserHistory.push('/sign-up');
  }

  onSubmit(formInputs) {
    this.props.loginUser(formInputs)
      .then(() => {
        browserHistory.push('/about');
      });
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="login">
        <form className="login__form" onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="email" type="email" component={inputField} label="Email"/>
          <Field name="password" type="password" component={inputField} label="password"/>
          <div>
            <button type="submit" disabled={submitting} onClick={handleSubmit(this.onSubmit)}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>

        <Link className="registration" onClick={this.navigateToSignUp}>New users click here!</Link>

        <button type="button" onClick={this.fetchServices}>Fetch Services</button>
      </div>
    );
  }
}

LoginPage.propTypes = {
  fetchServices: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
};

const LoginPageForm = reduxForm({
  form: 'LoginForm',
  validate,
})(LoginPage);

export default connect(null, {
  loginUser,
  fetchServices,
}, mergeProps)(LoginPageForm);
