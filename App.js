import React, { useState } from 'react';
import { Alert, Text, View, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import QuestionItem from './components/QuestionItem';
import style from './components/style';
import Icon from "react-native-vector-icons/FontAwesome6";

const App = () => {
    const [answers, setAnswers] = useState({
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: ''
    });

    const correctAnswers = {
        answer1: 'Arizona',
        answer2: 'Pennsylvania',
        answer3: 'Georgia',
        answer4: 'Nevada'
    };

    const handleAnswerChange = (questionId, value) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionId]: value,
        }));
    };

    const handleSubmit = () => {
        let correctAns = 0;

        Object.keys(correctAnswers).forEach((key) => {
            if (answers[key] === correctAnswers[key]) {
                correctAns++;
            }
        });

        Alert.alert(`You got ${correctAns} out of 4 correct!`);
    };

    const questions = [
        { id: 'answer1', image: require('./assets/img/arizona.png'), questionText: 'Has the Grand Canyon'},
        { id: 'answer2', image: require('./assets/img/penn.png'), questionText: 'Has the largest Amish population'},
        { id: 'answer3', image: require('./assets/img/georgia.png'), questionText: 'Name in a song title'},
        { id: 'answer4', image: require('./assets/img/nevada.png'), questionText: 'Home of Las Vegas'}
    ];

    const options = [
        { label: 'Georgia', value: 'Georgia' },
        { label: 'Nevada', value: 'Nevada' },
        { label: 'South Carolina', value: 'South Carolina' },
        { label: 'Texas', value: 'Texas' },
        { label: 'Pennsylvania', value: 'Pennsylvania' },
        { label: 'Arizona', value: 'Arizona' }
    ];

    return (
        <ScrollView contentContainerStyle={style.scrollContainer} style={{ flex: 1 }}>
            <View style={style.container}>
                <View style={style.titleContainer}>
                    <Icon name="flag-usa" size={20} color="#B23B23" />
                    <Text style={style.title}>Election Quiz</Text>
                    <Icon name="flag-usa" size={20} color="#B23B23" />
                </View>
                <Text style={style.subtitle}>Swing States Edition (2024)</Text>

                {questions.map((question) => (
                    <QuestionItem
                        key={question.id}
                        id={question.id}
                        imageSource={question.image}
                        questionText={question.questionText}
                        options={options}
                        onValueChange={handleAnswerChange}
                    />
                ))}

            
                <TouchableOpacity style={style.buttonContainer} onPress={handleSubmit}>
                    <Text style={style.buttonText}>Submit Answers</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};





export default App;






