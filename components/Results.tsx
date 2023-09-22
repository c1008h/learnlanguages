import React from 'react'
import { Text, View } from 'react-native';

interface ResultProps {
    isCorrect: boolean | null;
    correct: string;
}

const Result: React.FC<ResultProps> = ({ isCorrect, correct }) => {    

    return (
        <View>
            <Text style={{color:'rgb(228, 231, 232)', fontWeight:'bold'}}>{isCorrect ? 'Great Job!' : `Answer: ${correct}`}</Text>
        </View>
    )
}

export default Result;