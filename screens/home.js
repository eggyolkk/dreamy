import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { homeStyles } from '../styles/homeStyles';
import DreamCard from '../component/dreamCard';
import { FontAwesome5 } from '@expo/vector-icons'; 

export default function Home({ navigation }) {
    return (
        <ImageBackground source={require('../assets/images/main-bg.png')}>
            <View style={globalStyles.mainWrapper}>
                <View style={globalStyles.homeHeader}>
                    <Image source={require('../assets/images/moon.png')} style={globalStyles.moonIcon} />
                    <Text style={globalStyles.dreamyTitle}>dreamy</Text>
                </View>

                <View style={homeStyles.dreamsWrapper}>
                    <DreamCard />
                </View>
                
                <TouchableOpacity style={homeStyles.addDreamContainer} onPress={() => navigation.navigate('AddDream')}>
                    <FontAwesome5 name="pen" size={10} color="black" style={homeStyles.addDreamButton} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}