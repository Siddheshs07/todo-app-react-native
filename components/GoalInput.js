import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput({ onAddGoal, visible, onCancle }) {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  function goalInputhandler(inputText) {
    setEnteredGoalText(inputText)
  }
  function addGoalhandler() {
    onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }
  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder='Enter Your Goal'
          onChangeText={goalInputhandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancle' onPress={onCancle} color='red' />
          </View>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalhandler} color='#0070ff' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1ABC9C',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 6,
    width: '100%',
    padding: 8,
    backgroundColor: 'white',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
})
