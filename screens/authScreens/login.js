import { StatusBar } from 'expo-status-bar';
import React, {useContext} from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import asyncStore from '../../helpers/async-storage/storage';
import {connect} from 'react-redux';
import { setLoginStatus, setUserLoginData } from '../../redux-configuration/actions';
import { AuthContext } from '../../context/context';
import { color } from 'react-native-reanimated';
import { Formik } from "formik";
import * as Yup from "yup";
import { loginFormInitialValue } from '../../helpers/formsAndValidations/formik';
import { loginFormValidation } from '../../helpers/formsAndValidations/yup';
import { windowWidth } from '../../helpers/static-data/screenWidthHeight';


const Login_Screen = function (props) {

  const { signIn } = React.useContext(AuthContext);
  const { loginUserDispatch, changeLoginStateDispatch, navigation, route } = props;
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const [emailPlaceholder, setemailPlaceholder] = React.useState("Email...");
  const [passwordPlaceholder, setpasswordPlaceholder] = React.useState("Password...");

  const onPressLogin = (email, phone)=> {
    changeLoginStateDispatch(true);
    loginUserDispatch({email, username: email, phone});
    asyncStore.setStorageItem('userdata', {email, username: email, phone});
    signIn({ email, password });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
      <Formik 
      initialValues={loginFormInitialValue} 
      validationSchema={loginFormValidation} 
      onSubmit={(values, formikActions) => {      
        setTimeout(() => {
          // console.log('form value  : ', values);
          Keyboard.dismiss();
          formikActions.setSubmitting(false);
          onPressLogin(values.email.trim(), '9999999999');        
        }, 100);
      }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isSubmitting }) => (
          <View style={[styles.innercontainer, {width: windowWidth}]}>
            <View style={styles.inputView} >
                <TextInput  
                  style={styles.inputText}
                  placeholder={emailPlaceholder}
                  placeholderTextColor="#003f5c"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  onFocus={e => {setemailPlaceholder('')}}
                  keyboardAppearance='default'
                  keyboardType='email-address'
                />                        
            </View>
            {(errors.email && touched.email && !isSubmitting) ? <View style={{width: windowWidth*0.7, marginBottom:18}}><Text style={{color: 'red', fontSize: 10, textAlign: 'left'}}>{errors.email}</Text></View> : <View style={{width: windowWidth*0.7, marginBottom:20}}></View>}
            <View style={styles.inputView} >
                <TextInput  
                  style={styles.inputText}
                  placeholder={passwordPlaceholder}
                  value={values.password}
                  placeholderTextColor="#003f5c"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  onFocus={e => {setpasswordPlaceholder('')}}
                  keyboardAppearance='default'
                  keyboardType='default'
                  />
            </View>
            {(errors.password && touched.password && !isSubmitting) ? <View style={{width: windowWidth*0.7}}><Text style={{color: 'red', fontSize: 10, textAlign: 'left'}}>{errors.password}</Text></View> : <View style={{width: windowWidth*0.7, marginBottom:20}}></View>}
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>        
            {!isSubmitting ? <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity> : <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.loginText}>Please Wait...</Text>
            </TouchableOpacity>}
            <TouchableOpacity>
              <Text style={[styles.loginText, {color: '#fff'}]}>Signup</Text>
            </TouchableOpacity>
          </View>
        )}
        </Formik>        
        <StatusBar style="light"/>
      </View>
    </TouchableWithoutFeedback>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innercontainer: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    width: windowWidth*0.8,
    marginTop: 10,
  },
  inputView: {
    width: windowWidth*0.8,
    backgroundColor:"#465881",
    borderRadius:25,
    height:50,
    // marginBottom:20,
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
    width: windowWidth*0.8,
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