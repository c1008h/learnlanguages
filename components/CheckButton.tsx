import React from 'react'
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { styles } from '../styles'

export default function CheckButton() {
  return (
    <>
        <TouchableOpacity style={styles.button}><Text>Check Answer</Text></TouchableOpacity>
    </>
  )
}
