import React, {useEffect, useState} from 'react'
import { Text, View } from 'react-native';
import { firebaseConfig } from './firebaseConfig';
import { collection, getDocs } from 'firebase/firestore'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {styles} from './styles'
import NextButton from './components/NextButton'
import Result from './components/Results'
import English from './components/English';
import German from './components/German';
import Choices from './components/Choices'

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
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean | null>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(false);


  const fetchData = async () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    // const db = getFirestore()

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

  const handleChoicePress = (choice: string) => {
    setSelectedChoice(choice); 
    handleCheckAnswer(choice)
  };
  
  const handleCheckAnswer = (selectedChoice:string) => {
    console.log(questions[currentQuestionIndex].correct)
    console.log(selectedChoice)

    if (selectedChoice?.toLocaleLowerCase() == questions[currentQuestionIndex].correct.toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedChoice(null); 
      setShowResult(false);
      setIsCorrect(null); 
    } else {
      alert('All questions completed!')
    }
  }
 
  return (
    <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{color:'rgb(228, 231, 232)'}}>Fill in the missing word</Text>

            {questions && questions.length > 0 && (
              <View style={styles.cardContent}>

                <English 
                  question={questions[currentQuestionIndex].english}
                  underline={questions[currentQuestionIndex].underline}
                />
                <German 
                  question={questions[currentQuestionIndex].german}
                  correct={questions[currentQuestionIndex].correct}
                />

                <Choices 
                  choices={questions[currentQuestionIndex].choices}
                  selectedChoice={selectedChoice}
                  handleCheckAnswer={handleCheckAnswer}
                  correct={questions[currentQuestionIndex].correct}
                  handleChoicePress={handleChoicePress}
                />
              </View>
            )}
            {showResult && (
              <View style={[styles.resultscreen, isCorrect ? styles.correctresultscreen : styles.incorrectresultscreen]}>
                <Result 
                  isCorrect={isCorrect}
                  correct={questions[currentQuestionIndex].correct}
                />
                <NextButton 
                  isCorrect={isCorrect}
                  handleNextQuestion={handleNextQuestion}
                />
              </View>
            )}
        </View>
    </View>
  );
}

