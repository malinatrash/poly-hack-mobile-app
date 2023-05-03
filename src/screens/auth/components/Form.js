import React from 'react';
import {View} from "react-native";

const Form = ({children}) => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
            width: 350,
            height: 550,
            backgroundColor: '#0991ad',
            borderRadius: '25px'
        }}>
            {children}
        </View>
    );
};

export default Form;
