import { Drawer } from "expo-router/drawer";
import Icon from 'react-native-vector-icons/Feather';

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Index",
          title: "Index",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" 
            color={color} 
            size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Cadastro" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Cadastro",
          title: "Cadastro",
          drawerItemStyle: { height: 0 }
        }}
      />
            <Drawer.Screen
        name="Sobre" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "sobre",
          title: "sobre",
          drawerItemStyle: { height: 0 }
        }}
      />
            <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: ({ color, size }) => (
            <Icon name="book" 
            color={color} 
            size={size} />
          ),
        }}
      />
    </Drawer>
  );
}
