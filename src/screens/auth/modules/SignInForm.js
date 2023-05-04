import React, {useState} from 'react';
import {Text, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Title from "../components/Title";
import {Button, IconButton, TextInput} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Form from "../components/Form";
import AuthManger from "../../../services/AuthManger";
import User from "../../../model/User";
import StateManager from "../../../services/StateManager";

const SignInForm = ({navigation}) => {
    const [buttonIsHandling, setButtonIsHandling] = useState(false);
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setButtonIsHandling(true)
        let res = AuthManger.shared.signIn(phone, password);
        res.then(value => {
            if (value.code !== 1) {
                alert(value.description)
                return
            }
            let user = value.profile
            StateManager.shared.setUser(user);
            navigation.navigate("home")
        })
        setButtonIsHandling(false)
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
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    style={{
                        marginTop: 70,
                        width: '86%'
                    }}
                    label="Номер телефона"
                    leading={props => <Icon name="phone" {...props} />}
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
                    onPress={() => navigation.push('Регистрация')}
                >Еще не зарегистрированы?</Text>
            </Form>
            <StatusBar style={'auto'}/>
        </View>
    );
};

export default SignInForm;
