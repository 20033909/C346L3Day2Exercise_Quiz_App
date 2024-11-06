import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import style from './style';

const QuestionItem = ({ id, imageSource, options, onValueChange }) => {
    return (
        <View style={style.questionContainer}>
            <Text style={style.questionText}>Name of this state?</Text>
            <Image source={imageSource} style={style.image} />
            <RNPickerSelect
                onValueChange={(value) => onValueChange(id, value)}
                items={options}
                style={style.pickerStyle}
            />
        </View>
    );
};



export default QuestionItem;