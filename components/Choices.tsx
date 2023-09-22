import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Draggable from 'react-native-draggable'; 
import { styles } from '../styles'

interface ChoicesProp {
    choices: string[];
    handleButtonDragStart: HandleButtonDragStartType;
}

type  HandleButtonDragStartType = () => void;

const Choices: React.FC<ChoicesProp> = ({ choices, handleButtonDragStart }) => {

    return (
        <View style={styles.choiceContainer}>
            {choices.map((choice,index) => (
                <Draggable
                    key={index} x={0} y={0}
                    onDragRelease={() => {
                        handleButtonDragStart();
                    }}
                >
                    <TouchableOpacity style={styles.choicebuttons} key={index}><Text>{choice}</Text></TouchableOpacity>
                </Draggable>
            ))}
        </View>
    )
}

export default Choices;