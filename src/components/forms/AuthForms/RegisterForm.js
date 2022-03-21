import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';
import {colors} from '../../../theme/colors';
import {validationSchema} from '../../../utils/validationSchema';
import AuthContext from '../../../contexts/AuthContext';

const RegisterForm = () => {
  const {Register, response} = useContext(AuthContext);
  const [username, setUsername] = useState('test');
  const [email, setEmail] = useState('test@mail.com');
  const [password, setPassword] = useState('123456');
  const [repassword, setRepassword] = useState('123456');
  const [responses, setResponses] = useState({});

  const [userCreateForm, setUserCreateForm] = useState({
    username: username,
    email: email,
    password: password,
    repassword: repassword,
  });

  useEffect(() => {
    setUserCreateForm({username, email, password, repassword});
  }, [username, email, password, repassword]);

  useEffect(() => {
    setResponses(validationSchema(userCreateForm));
  }, [userCreateForm]);

  useEffect(() => {
    setResponses(response);
  }, [response]);

  const handleRegister = () => {
    if (Object.keys(responses) < 1) {
      console.log('Form is ok');
      Register(userCreateForm);
    } else {
      console.log('Form is invalid');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Sign up with email.</Text>
      <Input
        placeholder={'Your Username'}
        value={username}
        onChangeText={text => setUsername(text)}
      />
      {responses.username && (
        <Text style={styles.message}>{responses.username}</Text>
      )}
      <Input
        placeholder={'Your email'}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      {responses.email && <Text style={styles.message}>{responses.email}</Text>}
      <Input
        placeholder={'Password'}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {responses.password && (
        <Text style={styles.message}>{responses.password}</Text>
      )}
      <Input
        placeholder={'Re-Password'}
        value={repassword}
        onChangeText={text => setRepassword(text)}
      />
      {responses.repassword && (
        <Text style={styles.message}>{responses.repassword}</Text>
      )}
      <Button title={'Create Account'} onPress={handleRegister} />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 30,
    margin: 20,
    fontFamily: 'Merriweather',
  },
  message: {
    textAlign: 'center',
    color: colors.red,
  },
});
