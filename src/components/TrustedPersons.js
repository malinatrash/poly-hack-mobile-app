import React from 'react';
import {View} from "react-native";
import Text from "@react-native-material/core/src/Text";

const TrustedPersons = ({trustedPerson, shown}) => {
    return (
        <View style={{
            display: shown ? 'none' : 'flex'
        }}>
            {
                trustedPerson.map(value =>
                    <View key={value.key} style={{
                        width: 350,
                        backgroundColor: '#123b5e',
                        margin: 15,
                        padding: 15,
                        borderRadius: 15,
                    }}>
                        <Text style={{
                            fontSize: 20,
                            color: '#ffc',
                            fontWeight: '400'
                        }}>{value.name}</Text>
                        <Text style={{
                            fontSize: 20,
                            color: '#ffc',
                            fontWeight: '400'
                        }}>{value.phone}</Text>
                    </View>
                )
            }
        </View>
    );
};

export default TrustedPersons;
