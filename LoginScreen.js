import { collection, getDocs, query,where } from 'firebase/firestore';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-web';
import { db } from './firebase';
import { StatusBar } from 'expo-status-bar';
import styles from './style';


function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  const verifyUser = async () => {
    try {
      const q = query(
        collection(db, "usuario"),
        where("email", "==", email),
        where("senha", "==", senha)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((doc) => {
          navigation.navigate('Home', {user: {id: doc.id, ...doc.data()}});
          }

        )} else {
        alert("E-mail ou senha incorretos!");
      }
    } catch (err) {
      console.log("ERROR: ", err);
      alert("Houve um erro. Contate o suporte.");
      navigation.navigate('Login')
    }
  };
 return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container}>

          <View style={styles.InputContainer}>
            <Text style={styles.Label}>E-mail: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} style={styles.Input} placeholder='nome@exemplo.com' onChangeText={setEmail}/>
          </View>

          <View style={styles.InputContainer}>
            <Text style={styles.Label}>Senha: </Text>
            <Input inputContainerStyle={{ borderBottomWidth: 0 }} style={styles.Input} placeholder="Senha" secureTextEntry={true} onChangeText={setSenha}/>
          </View>
          <Button style={styles.Button} title="Logar" onPress={verifyUser}/>
          <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
            <Text style={{ color: "blue" }}>Ainda não tem conta? Cadastre-se</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
    </SafeAreaView>
  );
}

export default LoginScreen;