import { updateDoc, getDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-web';
import styles from './style';

import { db } from './firebase';


function EditCScreen({navigation, route}) {
  const { contato, user } = route.params;
  const [nome, setNome] = useState(contato.nome);
  const [email, setEmail] = useState(contato.email);
  const [numero, setNumero] = useState(contato.numero);
  

  const updateContato = async () => {

    try {
    const contatoRef =  await doc(db, "contato", contato.id);
      
    if(contatoRef){
        await updateDoc(contatoRef, {nome,email,numero});

        alert('Alterações feitas!');
        navigation.navigate('Home', {user:user});
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
            <Text style={styles.Label}>Nome Completo: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder='Ex: Vicente Dias Gomes' value={nome} onChangeText={setNome}/>
          </View>

          <View style={styles.InputContainer}>
            <Text style={styles.Label}>E-mail: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="nome@exemplo.com" value={email} onChangeText={setEmail}/>
          </View>

          <View style={styles.InputContainer}>
            <Text style={styles.Label}>Numero: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="81 9 9999-9999" value={numero} onChangeText={setNumero} />
          </View>

          <Button style={styles.Button} title="Salvar Alterações" onPress={updateContato}/>
          <Button style={styles.Button} title="Voltar" onPress={() => navigation.navigate('Home', {user:user})}/>
        </View>
      </View>
   </SafeAreaView>
)
}

export default EditCScreen;