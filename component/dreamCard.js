import { Text, View, FlatList } from 'react-native';
import { globalStyles } from '../styles/global';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../src/config/firebase'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { homeStyles } from '../styles/homeStyles';
import moment from 'moment';

export default function DreamCard() {
    const [dreams, setDreams] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        const dreamsCollection = collection(db, 'dreams');
        const dreamsQuery = query (dreamsCollection, orderBy('date', 'desc'))
        onSnapshot(dreamsQuery, (snapshot) => {
            let dreamsList = [];
            snapshot.docs.map((doc) => dreamsList.push({...doc.data(), id: doc.id}))
            setDreams(dreamsList);
            setLoading(false);
        })
    }, [])

    return (
        <FlatList
            data={dreams}
            renderItem={({ item }) => (
                <TouchableOpacity style={homeStyles.card}>
                    <Text style={homeStyles.cardTitle}>{item.title}</Text>
                    <Text style={homeStyles.cardDescription}>{item.description}</Text>
                    <Text style={homeStyles.cardDescription}>{moment(item.date).format('ddd DD MMMM YYYY')}</Text>
                </TouchableOpacity>
            )}
        />
    )
}