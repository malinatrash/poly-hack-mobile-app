import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import Txt from "../../components/Txt";
import Btn from "../../components/Btn";
import {QueryManager} from "../../services/QueryManager";
import StateManager from "../../services/StateManager";

const Result = ({navigation}) => {
    let [index, setIndex] = useState(0);
    const [results, setResults] = useState([])
    const nextRes = () => {
        setIndex(index += 1)
    };

    useEffect(() => {
        QueryManager.shared.getResults().then(value => {
            console.log(value)
            setResults(value.recommendations.map(r => {
                return r.text
            }))
        });
    }, []);

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
            <View style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                {
                    results.length === 0
                        ? <Txt size={5} text={'Не удалось получить результаты'}/>
                        :
                        <View>
                            {
                                index + 1 === results.length
                                    ? <></>
                                    :
                                    <View style={{
                                        marginBottom: 70,
                                        marginTop: 100,
                                        backgroundColor: 'white',
                                        padding: 30,
                                        borderRadius: 25,
                                    }}>
                                        <View>
                                            <Txt size={6} text={results[index]}/>
                                            <Btn action={() => nextRes()} text={"Ок"}/>
                                        </View>
                                    </View>
                            }
                        </View>
                }
                <View style={{
                    display: index + 1 === results.length || results.length === 0 ? 'flex' : 'none',
                    marginBottom: 60
                }}>
                    <Btn action={() => {
                        StateManager.shared.physicalHealth = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
                        StateManager.shared.mentalHealth = Math.floor(Math.random() * (100 - 50 + 1)) + 50;
                        navigation.navigate('home')
                    }} text={"Отлично"}/>
                </View>
            </View>
        </View>
    );
};

export default Result;
