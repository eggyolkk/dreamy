import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from './src/config/firebase';
import {EXPO_PUBLIC_PROJECT_ID} from '@env';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const usersQuery = collection(db, 'users');
    onSnapshot(usersQuery, (snapshot) => {
      let usersList = [];
      snapshot.docs.map((doc) => usersList.push({...doc.data(), id: doc.id}))
      setUsers(usersList);
      console.log(users)
      setLoading(false);
    })
  }, [])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your aapp!!</Text>
      <FlatList 
        data={users}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
});
