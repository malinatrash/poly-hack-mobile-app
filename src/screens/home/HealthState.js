import React from 'react';
import Text from "@react-native-material/core/src/Text";
import {View} from "react-native";

const HealthState = ({state}) => {
    return (
        <View style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '70%',
                height: 90,
                backgroundColor: 'white',
                borderRadius: 25
            }}>
                <View>
                    <Text style={{fontWeight: 'bold', color: '#123b5e'}} variant={'h4'}>{state}</Text>
                </View>
            </View>
        </View>
    );
};

export default HealthState;
