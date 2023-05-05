import React, {useEffect, useState} from 'react';
import {Stack, TextInput, IconButton, Button} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Form from "../components/Form";
import Title from "../components/Title";
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import {styles} from "react-native-floating-label-input/src/styles";
import {StatusBar} from "expo-status-bar";
import AuthManger from "../../../services/AuthManger";
import DateTimePicker from '@react-native-community/datetimepicker';
import StateManager from "../../../services/StateManager";
import User from "../../../model/User";

const SignUpForm = ({navigation}) => {
    const [buttonIsHandling, setButtonIsHandling] = useState(false);
    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [password, setPassword] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [date, setDate] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleClick = () => {
        setButtonIsHandling(true)
        let res = AuthManger.shared.signUp(name, date, phone, password);
        res.then(value => {
            if (value.code !== 1) {
                alert(value.description)
                return
            }
            StateManager.shared.setUser(new User(name, phone, password, date));
            navigation.navigate("home")
        })
        setButtonIsHandling(false)
    }


    const handleDateChange = (event, selectedDate) => {
        const formattedDate = selectedDate?.toISOString().substring(0, 10) || '';
        Keyboard.dismiss()
        setShowDatePicker(false);
        setDate(formattedDate);
    };


    return (

        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
            setShowDatePicker(false);
        }}>
            <View style={{
                height: '100%',
                backgroundColor: '#20aad8',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '30%'
            }}
            >
                <Form>
                    <Title text={'Регистрация'}/>
                    <TextInput
                        onFocus={() => {
                            setShowDatePicker(false);
                        }}
                        value={name}
                        onChangeText={text => setName(text)}
                        style={{
                            marginTop: 20,
                            width: '86%'
                        }}
                        label="Имя"
                        leading={props => <Icon name="account" {...props} />}
                    />
                    <TextInput
                        onFocus={() => {
                            setShowDatePicker(false);
                        }}
                        value={phone}
                        inputMode={"numeric"}
                        onChangeText={text => setPhone(text)}
                        style={{
                            marginTop: 20,
                            width: '86%'
                        }}

                        label="Номер телефон"
                        leading={props => <Icon name="phone" {...props} />}
                    />
                    <TextInput
                        value={date}
                        onChangeText={handleDateChange}
                        style={{
                            display: showDatePicker ? 'none' : 'flex',
                            marginTop: 20,
                            width: '86%'
                        }}
                        onFocus={() => {
                            setShowDatePicker(true)
                            Keyboard.dismiss()
                        }}
                        label="Дата рождения"
                        leading={props => <Icon name="calendar" {...props} />}
                    />
                    {
                        showDatePicker && (
                            <View style={{
                                backgroundColor: 'white',
                                borderRadius: 25,
                                borderWidth: 5,
                                borderColor: '#0991ad'
                            }}>
                                <DateTimePicker
                                    value={new Date()}
                                    mode="date"
                                    display="inline"
                                    onChange={handleDateChange}
                                />
                            </View>
                        )
                    }
                    <TextInput
                        onFocus={() => {
                            setShowDatePicker(false);
                        }}
                        value={password}
                        secureTextEntry={!showPassword}
                        onChangeText={text => setPassword(text)}
                        style={{
                            display: showDatePicker ? 'none' : 'flex',
                            marginTop: 20,
                            width: '86%',
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
                            display: showDatePicker ? 'none' : 'flex',
                            marginTop: 20
                        }}
                        color={'#0e3a58'}
                        title="Зарегистрироваться"
                        loading={buttonIsHandling}/>
                    <Text
                        style={{
                            display: showDatePicker ? 'none' : 'flex',
                            color: 'black',
                            marginTop: 20,
                            fontStyle: 'italic'
                        }}
                        onPress={() => {
                            navigation.push('Авторизация')
                        }}
                    >Уже есть аккаунт?</Text>
                </Form>
                <StatusBar style={'auto'}/>
            </View>
        </TouchableWithoutFeedback>
    )
        ;
};

export default SignUpForm;
