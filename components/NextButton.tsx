import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from '../styles'

interface NextButtonProps {
    handleNextQuestion: HandleNextQuestionTypes;
    isCorrect: boolean | null;

}
type HandleNextQuestionTypes = () => void;

const NextButton: React.FC<NextButtonProps> = ({ isCorrect, handleNextQuestion }) => {    
    const textColor = isCorrect ? 'rgb(28, 227, 233)' : 'rgb(254, 122, 134)';

    return (
        <TouchableOpacity
            style={styles.nextButton}
            onPress={handleNextQuestion}
        >
            <Text style={{color: textColor, fontWeight:'bold'}}>Continue</Text>
        </TouchableOpacity>
    )
}

export default NextButton;