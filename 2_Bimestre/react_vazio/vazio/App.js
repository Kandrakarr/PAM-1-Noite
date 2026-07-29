import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.titulo}>
        <Text style={styles.titulo_texto}>Titulo app</Text>
      </View>

      <View>
        <TextInput style={styles.input_estilo}></TextInput>
      </View>

      <view>
        <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{width: 200, height: 200}}/>
      </view>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 20,
    width: 200,
    alignSelf: 'center',
    backgroundColor: 'black',
    borderColor: 'yellow',
    borderWidth: 2,
  },
  titulo_texto: {
    color: 'red',
    textAlign: 'center',
  },
  input_estilo: {
    marginTop:20,
    borderWidth: 2,
    borderColor: 'black',
    width: 200,
    alignSelf: 'center',
  },
});
