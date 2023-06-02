import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>

    <Image style={styles.image} source={require('../assets/gatos.jpg')}></Image>
    <Text style={styles.text}>Cat Chat</Text>

      <ScrollView>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../assets/gato1.jpg')}></Image>
          <Image style={styles.image} source={require('../assets/gato2.jpg')}></Image>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../assets/gato3.jpg')}></Image>
          <Image style={styles.image} source={require('../assets/gato4.jpg')}></Image>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../assets/gato5.jpg')}></Image>
          <Image style={styles.image} source={require('../assets/gato6.jpg')}></Image>
        </View>
        <View style={styles.row}>
          <Image style={styles.image} source={require('../assets/gato7.jpg')}></Image>
          <Image style={styles.image} source={require('../assets/gato8.jpg')}></Image>
        </View>
      </ScrollView>
      <br />
      <Link href="/" style={styles.buttonText}>Voltar para o Index</Link>
      <br />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdefee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#563126',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  buttonText: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d24d20',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    shadowColor: '#d24d20',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
