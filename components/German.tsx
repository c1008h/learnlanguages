import React from 'react'
import { Text, View } from 'react-native';

interface GermanProps {
    question: string;
    correct: string;
    onButtonDrop: OnButtonDropType;
}

type OnButtonDropType = () => void;

const German: React.FC<GermanProps> = ({ question, correct, onButtonDrop }) => {
    // console.log('correct:', correct)
    // console.log('question:', question)

    const replaceWordWithUnderscores = (question: string, correct: string) => {
        const updatedSentence = question.replace(new RegExp(correct, 'gi'), '__________ ');
        return updatedSentence;
    };
    
    const updatedSentence = replaceWordWithUnderscores(question, correct);

    return (
        <View>
            <Text>{updatedSentence}</Text>
        </View>
    )
}

export default German;