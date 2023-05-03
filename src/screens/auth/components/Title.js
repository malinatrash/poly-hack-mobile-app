import React from 'react';
import {View, Text} from "react-native";

const Title = ({text}) => {
    return (
        <View style={{
            display: 'flex',
            alignItems: 'center',
        }}>
            <Text style={{
                marginTop: 35,
                fontWeight: 'bold',
                fontSize: 42,
                color: '#0e3a58',
                padding: 15
            }}>
                {text}
            </Text>
        </View>
    );
};

export default Title;
