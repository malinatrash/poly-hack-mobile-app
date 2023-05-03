import React, {useState} from 'react';
import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import SignUpForm from "./modules/SignUpForm";
import SignInForm from "./modules/SignInForm";

const AuthScreen = ({children}) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '43%'
        }}>
            {children}
            <StatusBar style={'auto'}/>
        </View>
    );
};

export default AuthScreen;
