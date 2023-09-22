import React from 'react'
import { Text, View } from 'react-native';

interface EnglishProps {
    question: string;
    underline: string;
}

const English: React.FC<EnglishProps> = ({ question, underline }) => {    
    const words = question.split(underline);

    return (
        <View>
            <Text style={{color:'rgb(228, 231, 232)'}}>
                {words.map((words, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                    <Text style={{ textDecorationLine: 'underline', fontWeight:'bold' }}>{underline}</Text>
                    )}
                    <Text>{words}</Text>
                </React.Fragment>
                ))}
            </Text>
        </View>
    )
}

export default English;