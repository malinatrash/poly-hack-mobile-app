import {TouchableOpacity, View} from "react-native";
import Text from "@react-native-material/core/src/Text";
import StateManager from "../../services/StateManager";
import {Button} from "@react-native-material/core";
import React from "react";
import TrustedPerson from "../../model/TrustedPerson";
import HealthState from "./HealthState";

const Home = ({navigation}) => {

    return (
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#20aad8',
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginHorizontal: 40,
                    marginTop: 70
                }}>
                <Text style={{fontWeight: 'bold', color: '#123b5e'}}
                      variant={'h3'}>{StateManager.shared.user.name}</Text>

                <TouchableOpacity
                    style={{
                        marginTop: 10,
                        width: '100%',
                        paddingVertical: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: "#0e3a58",
                        borderRadius: 17
                    }}
                    onPress={() => {
                        navigation.navigate('trustedPersons')
                    }}
                    color={'#0e3a58'}
                    loading={false}>
                    <Text style={{fontSize: 23, fontWeight: '500', color: '#fff'}}>Доверенные лица</Text>
                </TouchableOpacity>
            </View>
            <Text style={{fontWeight: 'bold', color: '#123b5e'}} variant={'h5'}>Состояние ментального здоровья: </Text>
            <HealthState state={'Не оценено'}/>

            <Text style={{fontWeight: 'bold', color: '#123b5e'}} variant={'h5'}>Состояние физического здоровья: </Text>
            <HealthState state={'Не оценено'}/>
            <Button
                onTouchEndCapture={() => {
                    navigation.navigate('Hello')
                }}
                titleStyle={{
                    fontWeight: 'bold'
                }}
                style={{
                    paddingBottom: 50,
                    marginTop: 50
                }}
                color={'#0e3a58'}
                title="Проверить свое здоровье"
                loading={false}/>
        </View>
    );
};

export default Home;
