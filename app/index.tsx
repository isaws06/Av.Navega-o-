import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={require('../assets/gatos.jpg')}></Image>
    <Text style={styles.text}>Bem-vindo ao Cat Chat!</Text>
    <br />
    <Text style={styles.titulo1}>Aqui você pode conhecer pessoas novas e fazer muitas amizades!
    <br />
    Conheça pessoas com os mesmo interreses que você e compartilhem novas ideias. <br />
    Não perca essa oportunidade e se cadastre no nosso App <br />
    Navegue com resposabilidade e se divirta! </Text>
    <br />
    <Link href="/Sobre" style={styles.buttonText}>Sobre o App</Link>

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

  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#563126',
  },

  titulo1:{
    fontSize: 14,
    textAlign: 'center',
    color: '#563126',
  },

  image:{
    width: 400,
    height: 400,
  }
});
