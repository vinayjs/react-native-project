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

      <Text>Enter name:</Text>
      <TextInput 
        placeholder='e.g. John Doe' 
        style={styles.input}
        onChangeText={(value) => setName(value)} />

      <Text>Enter age:</Text>
      <TextInput 
        placeholder='e.g. 99' 
        style={styles.input}
        onChangeText={(value) => setAge(value)} />

      <Text style={styles.result}>name: {name}, age: {age}</Text>
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
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});