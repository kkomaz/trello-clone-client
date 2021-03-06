export default function validate(values) {
  const errors = {};

  if (!values.get('username')) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }
  if (!values.get('email')) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get('email'))) {
    errors.email = 'Invalid email address';
  }
  if (!values.get('age')) {
    errors.age = 'Required';
  } else if (isNaN(Number(values.get('age')))) {
    errors.age = 'Must be a number';
  } else if (Number(values.get('age')) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old';
  }
  if (!values.get('password')) {
    errors.password = 'Required';
  }
  if (!values.get('password_confirmation')) {
    errors.password_confirmation = 'Required';
  }
  if (!values.get('first_name')) {
    errors.first_name = 'Required';
  }
  if (!values.get('last_name')) {
    errors.last_name = 'Required';
  }
  return errors;
}
