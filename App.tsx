import React, {useEffect, useState} from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { firebaseConfig } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {styles} from './styles'
import CheckButton from './components/CheckButton'
import English from './components/English';
import German from './components/German';
import Choices from './components/Choices'
import Draggable from 'react-native-draggable'; 

type Question = {
  english: string;
  german: string;
  choices: string[];
  underline: string;
  correct: string;
};

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [draggedButton, setDraggedButton] = useState<string | null>(null);
  const [choicesNotDropped, setChoicesNotDropped] = useState<string[]>([]);

  const fetchData = async () => {
    const db = getFirestore()

    try {
      const querySnapshot = await getDocs(collection(db,'languagequiz'))
      const questionData: Question[] = querySnapshot.docs.map((doc) => doc.data() as Question);
      setQuestions(questionData);

      // console.log(questionData)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  const handleButtonDragStart = (choice: string) => {
    // When a button is dragged, store its value and remove it from choicesNotDropped
    setDraggedButton(choice);
    setChoicesNotDropped(choicesNotDropped.filter((c) => c !== choice));
  };
  const handleButtonDrop = () => {
    // Handle the button drop logic
    // Determine where it was dropped within the German text
    // Replace the "__________" placeholder with the dropped button
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert('All questions completed!')
    }
  }
 
  return (
    <View style={styles.container}>
        <View style={styles.card}>
          <Text>This is home page to display questions</Text>

            {questions && questions.length > 0 && (
              <View style={styles.cardContent}>

                <English 
                  question={questions[currentQuestionIndex].english}
                  underline={questions[currentQuestionIndex].underline}
                />
                <German 
                  question={questions[currentQuestionIndex].german}
                  correct={questions[currentQuestionIndex].correct}
                  onButtonDrop={handleButtonDrop}
                />

                <Choices 
                  choices={questions[currentQuestionIndex].choices}
                  handleButtonDragStart={handleButtonDragStart}
                />
              </View>
            )}

          {currentQuestionIndex < questions.length && (
            <CheckButton />
          )}
        </View>
    </View>
  );
}

