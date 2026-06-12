import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.fundo}>

      <ScrollView>
        <View style={styles.titulo}>
          <text>Catalogo de plantas</text>
        </View>
        <View>
          <Button title={'Babosa'}/>
          <Button title={'Abacatero'}/>
          <Button title={'Rosa'}/>
          <Button title={'Lírio'}/>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    height: '100%',
    backgroundColor: '#87dd87',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  titulo:{
    backgroundColor: '#83f1da',
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
