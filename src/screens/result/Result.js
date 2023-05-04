import React from 'react';
import {View} from "react-native";
import Txt from "../../components/Txt";
import Btn from "../../components/Btn";

const Result = ({navigation}) => {
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
            <Txt size={4} text={"Вы прошли входное тестирование!"}/>
            <Txt size={5} text={"Результаты можно посмотреть в вашем профиле. \n "}/>
            <View style={{
                marginBottom: 30
            }}>
                <Btn action={() => navigation.navigate('home')} text={"Отлично"}/>
            </View>
        </View>
    );
};

export default Result;
