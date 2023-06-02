import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/gatos.jpg')}></Image>
      <Text style={styles.text}>Cat Chat</Text>
    <br />
      <Text style={styles.titulo1}>Somos uma empresa que busca melhorar a comunicação entre as pessoas, <br />
      Vizamos no bem estar de nossos colaboradores, com conversas legais e publicações interativas <br />
      para que ninguem fique de fora e obviamente não podemos deixar de contar <br />
      com nossos amigos peludos, os gatinhos estão aqui para te ajudar!</Text>
 <br />
 <Link href="/Cadastro" style={styles.buttonText}>Cadastre-se</Link>

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

  titulo1:{
    fontSize: 14,
    textAlign: 'center',
    color: '#563126',
  },

  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#563126',
  },

  image:{
    width: 400,
    height: 400,
  }
});
