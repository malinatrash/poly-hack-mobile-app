import React from 'react';
import {View} from "react-native";
import Txt from "../../components/Txt";
import Btn from "../../components/Btn";

const Hello = ({navigation}) => {
    return (
        <View style={{
            paddingTop: 70,
            paddingHorizontal: 20,
            width: '100%',
            height: '100%',
            backgroundColor: '#20aad8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Txt size={3} text={"Анкета на ССЗ"}/>
            <Txt size={5} text={"Анкета по раннему выявлению факторов риска сердечно-сосудистых заболеваний."}/>
            <View style={{
                marginBottom: 30
            }}>
            <Btn action={() => navigation.navigate('test')} text={"Пройти"}/>
            </View>
        </View>
    );
};

export default Hello;
