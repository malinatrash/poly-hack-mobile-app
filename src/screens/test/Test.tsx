import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import Btn from "../../components/Btn";
import Txt from "../../components/Txt";
import {QueryManager} from "../../services/QueryManager";
import text from "@react-native-material/core/src/Text";

const Test = ({navigation}) => {
    const [id, setId] = useState<number>(1);
    const [testIsFinished, setTestIsFinished] = useState(false);
    const [questionText, setQuestionText] = useState('');
    const [answers, setAnswers] = useState<Option[]>([]);

    useEffect(() => {
        QueryManager.shared.getTest(1).then(r => {
            if (r.code === 0) {
                navigation.navigate('result');
                return;
            }
            if (r.code !== 1) {
                alert("Ошибка запроса!")
                return
            }
            setId(r.test.question.id)
            console.log(r.test.question.id)
            setAnswers(r.test.question.options);
            console.log(r.test.question.options)
            setQuestionText(`Вопрос ${r.test.question.no}.\n${r.test.question.text}`)
        })
    }, []);

    const sendAnswer = (answerId: number) => {
        QueryManager.shared.sendAnswer(id, answerId).then(res => {
            if (res.code === 0) {
                navigation.navigate('result');
                return;
            }
            if (res.code !== 1) {
                alert("Ошибка запроса!");
                return;
            }
            setId(res.test.question.id);
            console.log(res.test.question.id)
            setAnswers(res.test.question.options);
            console.log(res.test.question.options)
            setQuestionText(`Вопрос ${res.test.question.no}.\n${res.test.question.text}`)
        });
    };

    return (
        <View style={{
            paddingTop: 100,
            paddingHorizontal: 20,
            width: '100%',
            height: '100%',
            backgroundColor: '#20aad8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>

            <Txt size={5} text={questionText}/>

            <View style={{
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 50
            }}>
                {
                    answers !== null ?
                        answers.map(value => {
                            return <Btn size={17} action={() => sendAnswer(value.id)} key={value.id} text={value.text}/>
                        })
                        : <></>
                }
            </View>


            {
                testIsFinished
                    ? <Btn action={() => {
                    }} text={"Завершить"} size={23}/>
                    : <></>
            }
        </View>
    );
};

export default Test;
