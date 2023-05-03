import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from "./src/screens/auth/AuthScreen";
import SignUpForm from "./src/screens/auth/modules/SignUpForm";
import SignInForm from "./src/screens/auth/modules/SignInForm";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUp" options={{headerShown: false}}>
                    {(props) =>
                        <AuthScreen children={<SignUpForm/>} />}
                </Stack.Screen>
                <Stack.Screen name="SignIn" options={{headerShown: false}}>
                    {(props) =>
                        <AuthScreen children={<SignInForm/>} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// .color1 {color: #0e3a58;}
// .color2 {color: #0c5e7e;}
// .color3 {color: #0991ad;}
// .color4 {color: #05d8e3;}
// .color5 {color: #0ffff7;}

export default App
