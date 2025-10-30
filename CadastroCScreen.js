import { addDoc, collection} from 'firebase/firestore';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-web';
import { db } from './firebase';
import styles from './style';


function CadastroCScreen({navigation, route}){
  const { user } = route.params
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const saveContato = async () => {  
    try {
      const docRef = await addDoc(collection(db,"contato"), {
        email,
        nome,
        telefone,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigate('Home', {user:user});
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

return (
  <SafeAreaView style={styles.container}>
      <View style={styles.container}>


        <View style={styles.InputContainer}>
          <Text style={styles.Label}>E-mail: </Text>
          <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="nome@exemplo.com" value={email} onChangeText={setEmail}/>
        </View>

        <View style={styles.InputContainer}>
          <Text style={styles.Label}>Nome: </Text>
          <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="Carlos Alberto" value={nome} onChangeText={setNome}/>
        </View>
      
      <View style={styles.InputContainer}>
          <Text style={styles.Label}>Telefone: </Text>
          <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="81 9 9999-9999" value={telefone} onChangeText={setTelefone}/>
        </View>

        <Button style={styles.Button} title="Cadastrar" onPress={saveContato}/>
        <TouchableOpacity onPress={() => navigation.navigate("Home", {user:user})}>
            <Text style={{ color: "blue" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  );
}


export default CadastroCScreen;