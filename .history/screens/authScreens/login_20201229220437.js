import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import asyncStore from '../../helpers/async-storage/storage';
import {connect} from 'react-redux';
import { setLoginStatus, setUserLoginData } from '../../redux-configuration/actions';
import { AuthContext } from '../../context/context';
import { color } from 'react-native-reanimated';

const Login_Screen = function (props) {

  const { signIn } = React.useContext(AuthContext);
  const { loginUserDispatch, changeLoginStateDispatch, navigation, route } = props;
  const [username, setUsername] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const onPressLogin = ()=> {
    changeLoginStateDispatch(true);
    loginUserDispatch({email: 'example@admin.com', username: 'testuser', phone: '9999999999'});
    asyncStore.setStorageItem('userdata', {email: 'example@admin.com', username: 'testuser', phone: '9999999999'});
    signIn({ username, password });
  }

  return (
    <View style={styles.container}>
      
      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setEmail(text)}/>
      </View>

      <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Password..." 
            placeholderTextColor="#003f5c"
            onChangeText={text => setPassword(text)}/>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={[styles.loginText, {color: '#fff'}]}>Signup</Text>
      </TouchableOpacity>
      
      <StatusBar style="light" />
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: '80%',
    marginTop: 10,
  },
  inputView: {
    width:"80%",
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  logo: {
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  inputText:{
    height:50,
    color:"white"
  },
  forgot:{
    color:"white",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#fb5b5a",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
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