import { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [goalLists, setGoalLists] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText) {
    setGoalLists((newGoal) => [
      ...newGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ])
    endAddGoalHandler()
  }
  function deleteGoalHandler(id) {
    setGoalLists((curruntGoal) => {
      return curruntGoal.filter((goal) => goal.id !== id)
    })
  }
  return (
    <>
      <StatusBar style='dark' />
      <View style={styles.appContainer}>
        <Button
          title='Add a new Goal'
          color='teal'
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={modalIsVisible}
          onCancle={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          {/* replaced ScrollView to FlatList in order to Lazy Load the data */}
          {goalLists.length === 0 ? (
            <View>
              <Text style={styles.goalHeading}>No Goals for Today...</Text>
              <Text style={styles.goalSubHeading}>
                Add Some To Make Your Day Productive
              </Text>
            </View>
          ) : (
            <Text style={styles.goalHeading}>Your Goals for Today</Text>
          )}
          <FlatList
            data={goalLists}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  texts={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
    marginTop: 25,
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  goalHeading: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    marginVertical: 15,
  },
  goalSubHeading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
  },
})
