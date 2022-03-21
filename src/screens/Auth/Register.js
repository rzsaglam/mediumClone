import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import {colors} from '../../theme/colors';

import RegisterForm from '../../components/forms/AuthForms/RegisterForm';
import AuthContext from '../../contexts/AuthContext';

const Register = () => {
  const {users} = useContext(AuthContext);
  console.log(users);
  return (
    <View style={styles.container}>
      <RegisterForm />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
  },
});
