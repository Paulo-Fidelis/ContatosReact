import { collection, getDocs, query} from 'firebase/firestore';
import React, {useState, useEffect} from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { ListItem} from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign'
import styles from './style';
import { db } from './firebase'

function HomeScreen({ navigation, route}) {
  const { user } = route.params;
  const [contatos, setContatos] = useState([]);
  
  
   useEffect(() => {
    const verifyContatos = async () => {
    try {
      const q = query(
        collection(db, "contato")
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const listContatos = [];
        querySnapshot.forEach((doc) =>{
          listContatos.push({id: doc.id, ... doc.data()})
        });
        setContatos(listContatos)
      } else {
        alert("E-mail ou senha incorretos!");
      }
    } catch (err) {
      console.log("ERROR: ", err);
      alert("Houve um erro. Contate o suporte.");
    }
  }
  verifyContatos()
  }, []);
  return (

  <SafeAreaView style={styles.container}>
    <View style={styles.containerheader}>
      <View style={{ alignItems: 'flex-end' }}>
        <TouchableOpacity onPress={() => navigation.navigate('EditUser', {user: user})}>
          <View style={[styles.Icon, { backgroundColor: "orange"}]} onPress={() => navigation.navigate("EditUser")}>
            <AntDesign name="user" size={40} color="white" rounded/>
          </View>
        </TouchableOpacity>
        </View>
       <View style={styles.headerIcon}>
        <Ionicons
                name="mail"
                size={35}
                color="black"
                onPress={() => navigation.navigate('AddContato', {user:user})}
        />
      </View>
      <View style={styles.headerText}>
        <Text style={styles.title}>Messages & Chat </Text>
      </View>
    </View> 
    <View style={styles.containerList}>
    {
    contatos.map((item, i) => (
      <ListItem style={{ marginTop: 30 }}key={i} bottomDivider>

      <ListItem.Content>
        <ListItem.Title style={{ fontSize: 20}}>{item.nome}</ListItem.Title>
        <ListItem.Title>{item.numero}</ListItem.Title>
        <ListItem.Title>{item.email}</ListItem.Title>
      </ListItem.Content>
        <View style={{ alignItems: 'flex-end' }}>
             <TouchableOpacity onPress={() => navigation.navigate('EditContato', {contato: item, user:user})}>
              <View style={[styles.Icon, { backgroundColor: "orange"}]} onPress={() => navigation.navigate("EditContato")}>
                <AntDesign name="user" size={40} color="white" rounded/>
              </View>
            </TouchableOpacity>
        </View>
        
    </ListItem>
    ))
    }
    </View>
  </SafeAreaView>
    
 )}


export default HomeScreen;





