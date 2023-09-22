import React, {useState, useEffect} from 'react'
import { Text, View, Button, TouchableHighlight } from 'react-native';
import { styles } from '../styles'

interface ChoicesProp {
    choices: string[];
    correct:string;
    selectedChoice: string | null;
    handleChoicePress: (choice: string) => void;
    handleCheckAnswer:HandleCheckAnswerType;
}
type HandleCheckAnswerType = (choice: string, correct:string) => void;

const Choices: React.FC<ChoicesProp> = ({ choices, correct, handleCheckAnswer, handleChoicePress, selectedChoice }) => {
    
    return (
        <View style={styles.choiceContainer}>
            {choices.map((choice,index) => (
                <TouchableHighlight 
                    style={[
                        styles.choicebuttons,
                        selectedChoice === choice ? styles.selectedChoice : null
                    ]} 
                    key={index}
                    onPress={() => handleChoicePress(choice)}
                >
                    <Text>{choice}</Text>
                </TouchableHighlight>

            ))}
        </View>
    )
}

export default Choices;