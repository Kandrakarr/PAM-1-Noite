import { Text, View, Image, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View>

      <Image source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{width: 200, height: 200}}/>

      <Text>E-mail</Text>

      <TextInput  placeholder='fulano@hotmai.com'/>

      <Text>Senha</Text>

      <TextInput  placeholder='abcd@1234'/>

      <Button 
        onPress={() => navigation.navigate('Home')} 
        title='Login'
        />

    </View>
  );
}
