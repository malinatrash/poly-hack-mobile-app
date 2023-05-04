import React, {useState} from 'react';
import {TouchableOpacity, View} from "react-native";
import Text from "@react-native-material/core/src/Text";
import TrustedPersons from "../../components/TrustedPersons";
import StateManager from "../../services/StateManager";
import TrustedPerson from "../../model/TrustedPerson";
import {Button, IconButton, TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {QueryManager} from "../../services/QueryManager";

const Persons = ({navigation}) => {
    const [modalIsShown, setModalIsShown] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const addTrustedPerson = () => {
        QueryManager.shared.addTrustedPerson(name, phone);
    };

    return (
        <View style={{
            paddingTop: 70,
            width: '100%',
            height: '100%',
            backgroundColor: '#20aad8'
        }}>
            <View style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <Text style={{
                    marginLeft: 25,
                    fontSize: 30,
                    marginBottom: 40,
                    fontWeight: '600'
                }} variant={'h3'}>Доверенные лица</Text>
            </View>

            <View style={{
                display: 'flex',
                alignItems: 'center',
            }}>
                {
                    modalIsShown ?
                        <View style={{
                            marginTop: 150
                        }}>
                            <TextInput
                                value={name}
                                onChangeText={text => setName(text)}
                                style={{
                                    marginTop: 20,
                                }}
                                label="Имя"
                                leading={props => <Icon name="account" {...props} />}
                            />
                            <TextInput
                                value={phone}
                                inputMode={"numeric"}
                                onChangeText={text => setPhone(text)}
                                style={{
                                    width: 300,
                                    marginTop: 20,
                                }}

                                label="Номер телефон"
                                leading={props => <Icon name="phone" {...props} />}
                            />
                            <Button
                                onTouchEndCapture={() => {
                                    setModalIsShown(false);
                                    addTrustedPerson();
                                }}
                                titleStyle={{
                                    fontWeight: 'bold'
                                }}
                                style={{
                                    width: 300,
                                    paddingBottom: 0,
                                    marginTop: 20
                                }}
                                color={'#0e3a58'}
                                title='Добавить'
                                loading={false}/>
                        </View> :
                        <></>
                }
                <TrustedPersons shown={modalIsShown} trustedPerson={StateManager.shared.strustedPersons}/>
                <Button
                    onTouchEndCapture={() => {
                        setModalIsShown(true)
                    }}
                    titleStyle={{
                        fontWeight: 'bold'
                    }}
                    style={{
                        display: modalIsShown ? 'none' : 'flex',
                        width: 300,
                        paddingBottom: 0,
                        marginTop: 20
                    }}
                    color={'#0e3a58'}
                    title='Добавить доверенное лицо'
                    loading={false}/>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }}>
                    <Text style={{
                        padding: 10,
                        fontSize: 22,
                        fontWeight: '200'
                    }}>Вернуться</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Persons;
