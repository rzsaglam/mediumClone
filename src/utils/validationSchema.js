export const validationSchema = ({username, email, password, repassword}) => {
  const responses = {};
  // CHECK USERNAME
  if (username.trim() === '') {
    responses.username = 'username is required';
  } else if (username.length < 5) {
    responses.username = 'username must be at leat five character';
  } else if (username.replace(/ /g, '') !== username) {
    responses.username = 'username is invalid';
  }
  // CHECK EMAIL
  if (email.trim() === '') {
    responses.email = 'email is required';
  } else if (email.match(/\S+@\S+\.\S+/) === null) {
    responses.email = 'email is not valid';
  }
  // CHECK PASSWORDS
  if (password.trim() === '') {
    responses.password = 'password is required';
  } else if (password.length < 5) {
    responses.password = 'password must be at least five character';
    responses.repassword = 'password must be at least five character';
  } else if (password !== repassword) {
    responses.password = 'passwords are not match';
    responses.repassword = 'passwords are not match';
  }
  if (repassword.trim() === '') {
    responses.repassword = 'repassword is required';
  }
  return responses;
};
