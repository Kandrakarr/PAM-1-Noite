import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  return (
    <ScrollView>

      <Image source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}/>

      <Text>
        React and React Native use JSX, a syntax that lets you write elements inside JavaScript like so:
        Hello, I am your cat!. The React docs have a comprehensive guide to JSX you can refer to learn even more. Because JSX is JavaScript, you can use variables inside it. Here you are declaring a name for the cat, name, and embedding it with curly braces in
      </Text>

      <Text>E-mail</Text>

      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
      }} placeholder='fulano@hotmai.com'/>

      <Text>Senha</Text>

      <TextInput style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
      }} placeholder='abcd@1234'/>

      <Button title='Login'/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
