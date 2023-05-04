import React from 'react';
import Text from "@react-native-material/core/src/Text";
import {TouchableOpacity} from "react-native";

const Btn = ({action, text, size}) => {
    return (
        <TouchableOpacity
            style={{
                padding: 4,
                marginTop: 10,
                width: '100%',
                paddingVertical: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: "#0e3a58",
                borderRadius: 17
            }}
            onPress={action}
            color={'#0e3a58'}
            loading={false}>
            <Text style={{fontSize: size, fontWeight: '500', color: '#fff'}}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Btn;
