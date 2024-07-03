import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem({ texts, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        android_ripple={{ color: '#210664' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{texts}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#009AA6',
  },
  goalText: {
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalHeading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
