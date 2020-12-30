import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import asyncStore from '../../helpers/async-storage/storage';
import {connect} from 'react-redux';
import { setLoginStatus, setUserLoginData } from '../../redux-configuration/actions';
import { AuthContext } from '../../context/context';

const Login_Screen = function (props) {

  const { signIn } = React.useContext(AuthContext);
  const { loginUserDispatch, changeLoginStateDispatch, navigation, route } = props;
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const onPressLogin = ()=> {
    changeLoginStateDispatch(true);
    loginUserDispatch({email: 'example@admin.com', username: 'testuser', phone: '9999999999'});
    asyncStore.setStorageItem('userdata', {email: 'example@admin.com', username: 'testuser', phone: '9999999999'});
    signIn({ username, password });
  }

  return (
    <View style={styles.container}>
      <Text>Welcome to Login Screen</Text>
      <TouchableOpacity style={styles.loginButton}>
        <Button title="LOGIN" accessibilityLabel="User login button" color="#1f6ca6" onPress={onPressLogin} style={{paddingVertical: 10}}/>
      </TouchableOpacity>      
      <StatusBar style="auto" />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: '80%',
    marginTop: 10,
  }
});




const mapStateToProps = (state) => {
  // console.log('present state data : ', state);
  // console.log('-----------------------------------------------------------');
  return {
    userData: state.indexReducer.userData,
    loggedInStatus: state.indexReducer.loggedInStatus,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserDispatch: (payload) => dispatch(setUserLoginData(payload)), 
    changeLoginStateDispatch: (payload) => dispatch(setLoginStatus(payload)), 
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login_Screen);
export default connect(mapStateToProps, mapDispatchToProps)(Login_Screen);