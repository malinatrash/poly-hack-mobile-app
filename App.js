import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpForm from "./src/screens/auth/modules/SignUpForm";
import SignInForm from "./src/screens/auth/modules/SignInForm";
import Home from "./src/screens/home/Home";
import Persons from "./src/screens/persons/Persons";
import Test from "./src/screens/test/Test";
import Hello from "./src/screens/test/Hello";
import Result from "./src/screens/result/Result";

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Регистрация'} component={SignUpForm} options={{headerShown: false}}/>
                <Stack.Screen name={'Авторизация'} component={SignInForm} options={{headerShown: false}}/>
                <Stack.Screen name={'home'} component={Home} options={{headerShown: false}}/>
                <Stack.Screen name={'trustedPersons'} component={Persons} options={{headerShown: false}}/>
                <Stack.Screen name={'test'} component={Test} options={{headerShown: false}}/>
                <Stack.Screen name={'Hello'} component={Hello} options={{headerShown: false}}/>
                <Stack.Screen name={'result'} component={Result} options={{headerShown: false}}/>
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
