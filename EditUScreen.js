import { updateDoc, getDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-web';
import styles from './style';

import { db } from './firebase';


function EditUScreen({navigation, route}) {
  const { user } = route.params;
  const [senha, setSenha] = useState(user.senha);
  const [email, setEmail] = useState(user.email);
  

  const updateUser = async () => {

    try {
    const userRef =  await doc(db, "usuario", user.id);
      
    if(userRef){
        await updateDoc(userRef, {senha,email});
       
        const newuser = await getDoc(userRef);

        const actualuser = {
        id: newuser.id,
        ...newuser.data()
      };

        alert('Alterações feitas!');
        navigation.navigate('Home', {user:actualuser});
      }
    
    } catch(e) {
      console.log('Erro:', e);
      alert("Deu ruim");

    }
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.container}>

          <View style={styles.InputContainer}>
            <Text style={styles.Label}>Senha: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder='**********' value={senha} onChangeText={setSenha}/>
          </View>

          <View style={styles.InputContainer}>
            <Text style={styles.Label}>Email: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="nome@exemplo.com" value={email} onChangeText={setEmail}/>
          </View>

          <Button style={styles.Button} title="Salvar Alterações" onPress={updateUser}/>
          <Button style={styles.Button} title="Voltar" onPress={() => navigation.navigate('Home', {user:user})}/>
        </View>
      </View>
   </SafeAreaView>
)
}

export default EditUScreen;