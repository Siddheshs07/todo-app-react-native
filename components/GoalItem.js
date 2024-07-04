import { StyleSheet, View, Text, Pressable, Button } from 'react-native'

function GoalItem({ texts, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={() => {}}
        android_ripple={{ color: '#210664' }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{texts}</Text>
      </Pressable>
      <Button
        title='delete'
        onPress={onDeleteItem.bind(this, id)}
        color='red'
      />
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({
  goalItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
