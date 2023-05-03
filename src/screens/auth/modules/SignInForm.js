import React, {useState} from 'react';
import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Title from "../components/Title";
import {Button, IconButton, TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Form from "../components/Form";

const SignInForm = ({navigation}) => {
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
                <Title text={'Вход'}/>
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
                    title="Войти"
                    loading={buttonIsHandling}/>
                <Text
                    style={{
                        color: 'black',
                        marginTop: 30,
                        fontStyle: 'italic'
                    }}
                    onPress={() => navigation.goBack()}
                >Еще не зарегистрированы?</Text>
            </Form>
            <StatusBar style={'auto'}/>
        </View>
    );
};

export default SignInForm;
