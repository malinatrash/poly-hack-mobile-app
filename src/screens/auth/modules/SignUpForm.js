import React, {useEffect, useState} from 'react';
import {Stack, TextInput, IconButton, Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Form from "../components/Form";
import Title from "../components/Title";
import {Text, View} from "react-native";
import {styles} from "react-native-floating-label-input/src/styles";
import {StatusBar} from "expo-status-bar";

const SignUpForm = ({navigation}) => {
    const [buttonIsHandling, setButtonIsHandling] = useState(false);
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setButtonIsHandling(true)
        setTimeout(() => {
            setButtonIsHandling(false)
        }, 1000)
    }

    return (
        <View style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '43%'
        }}
        >
            <Form>
                <Title text={'Регистрация'}/>
                <TextInput
                    value={name}
                    onChangeText={text => setName(text)}
                    style={{
                        marginTop: 40,
                        width: '86%'
                    }}
                    label="Имя"
                    leading={props => <Icon name="account" {...props} />}
                />
                <TextInput
                    value={lastname}
                    onChangeText={text => setLastname(text)}
                    style={{
                        marginTop: 20,
                        width: '86%'
                    }}

                    label="Фамилия"
                    leading={props => <Icon name="account" {...props} />}
                />

                <TextInput
                    value={password}
                    secureTextEntry={!showPassword}
                    onChangeText={text => setPassword(text)}
                    style={{
                        marginTop: 20,
                        width: '86%'
                    }}

                    label="Пароль"
                    trailing={props => (
                        <IconButton onTouchEndCapture={() => {
                            setShowPassword(!showPassword)
                        }} icon={props => <Icon name="eye" {...props} />} {...props} />
                    )}

                />

                <Button
                    onTouchEndCapture={handleClick}
                    titleStyle={{
                        fontWeight: 'bold'
                    }}
                    style={{
                        marginTop: 50
                    }}
                    color={'#0e3a58'}
                    title="Зарегистрироваться"
                    loading={buttonIsHandling}/>
                <Text
                    style={{
                        color: 'black',
                        marginTop: 30,
                        fontStyle: 'italic'
                    }}
                    onPress={() => {
                        navigation.navigate('Авторизация')
                    }}
                >Уже есть аккаунт?</Text>
            </Form>
            <StatusBar style={'auto'}/>
        </View>
);
};

export default SignUpForm;
