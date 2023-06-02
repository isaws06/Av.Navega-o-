import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
       <Image style={styles.image} source={require('../assets/gatos.jpg')}></Image>
      <Text style={styles.text}>Cat Chat</Text>
<br />
      <TextInput style={styles.input} placeholder="Nome" />
      <TextInput style={styles.input} placeholder="E-mail" />
      <TextInput style={styles.input} placeholder="Data de Nascimento" />
      <TextInput style={styles.input} placeholder="CPF" />

      <br />
      <TouchableOpacity style={styles.buttonText}>Cadastrar</TouchableOpacity>
      <Link href="/Home" style={styles.buttonText}>Voltar para a Home</Link>

      {/* <Link href="/">Voltar para Home</Link> */}

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
    width: '100%',
  },

  input: {
    fontSize: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#d24d20',
    borderRadius: 15,
    width: '60%',
  },

  buttonText: {
  
    backgroundColor: '#d24d20',
    borderRadius: 9,
    borderWidth: 1,
    borderColor: '#d24d20',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    color: '#fff',
    
  },



  text:{
    fontSize: 32,
    fontWeight: 'bold',
    color: '#563126',
  },

  image:{
    width: 350,
    height: 350,
  }
});
