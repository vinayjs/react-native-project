import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [name, setName] = useState('vinay');
  const [person, setPerson] = useState({ name: 'iron man', age: 40 });

  const clickHandler = () => {
    setName('Dr Strange');
    setPerson({ name: 'avenger', age: 32 });
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is {person.age}</Text>
      <View style={styles.buttonContainer}>
        <Button title='update state' onPress={clickHandler} />  
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20,
  }
});