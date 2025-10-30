import { addDoc, collection} from 'firebase/firestore';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-web';
import { db } from './firebase';
import styles from './style';


function CadastroUScreen({navigation}){
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const saveUser = async () => {  
    try {
      const docRef = await addDoc(collection(db,"usuario"), {
        email,
        senha,
        createdAt: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
      navigation.navigate('Login');
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
          <Text style={styles.Label}>Senha: </Text>
          <Input inputContainerStyle={{ borderBottomWidth: 0 }} containerStyle={{ paddingHorizontal: 0, marginTop: 0, marginBottom: 0}} style={styles.Input} placeholder="********" value={senha} onChangeText={setSenha} secureTextEntry={true} />
        </View>

        <Button style={styles.Button} title="Cadastrar" onPress={saveUser}/>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "blue" }}>Já tem conta? Faça Login</Text>
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  );
}


export default CadastroUScreen;