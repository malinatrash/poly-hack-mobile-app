import React, {useState} from 'react';
import {TextInput} from "react-native";

const Input = ({text}) => {
    const [newValue, setNewValue] = useState(text);
    return (
        <TextInput
            style={{
                marginTop: 30,
                padding: 30,
                fontStyle: 'italic',
                backgroundColor: '#0c5e7e',
                color: '#fff',
                fontSize: 25,
                width: '86%',
                height: 50,
                borderRadius: 16
            }}
            onSubmitEditing={(value) => setNewValue(value.nativeEvent.text)}
        />
    );
};

export default Input;
