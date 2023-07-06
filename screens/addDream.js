import React, { useState } from 'react';
import { View, Button, Text, TouchableOpacity, Keyboard, TouchableWithoutFeedback, TextInput, ImageBackground, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import { addDreamStyles } from '../styles/addDreamStyles';
import { Formik } from 'formik';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../src/config/firebase';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

export default function AddDream({ navigation }) {
    const [date, setDate] = useState(new Date());

    const initialData = {
        title: '',
        description: '',
        date: '',
    }

    const onSubmit = (data) => {
        data.date = moment(data.date).valueOf();
        const userDb = collection(db, 'dreams');
        addDoc(userDb, data);
    }


    return (
        <ImageBackground source={require('../assets/images/main-bg.png')}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.mainWrapper}>
                    <Formik
                        initialValues={initialData}
                        onSubmit={values => onSubmit(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values }) => (
                            <View style={addDreamStyles.addDreamWrapper}>
                                <TextInput
                                    style={addDreamStyles.input}
                                    onChangeText={handleChange('title')}
                                    onBlur={handleBlur('title')}
                                    value={values.title}
                                    placeholder='title'
                                />

                                <TextInput
                                    style={addDreamStyles.input}
                                    onChangeText={handleChange('description')}
                                    onBlur={handleBlur('description')}
                                    value={values.description}
                                    placeholder='description'
                                />

                                <CalendarPicker 
                                    date={date}
                                    onDateChange={(newDate) => { setFieldValue('date', newDate); setDate(newDate) }}
                                    value={values.date}
                                    onBlur={handleBlur('date')}
                                />

                                <Button onPress={handleSubmit} title="Submit" />
                            </View>
                        )}
                    </Formik>
                </View>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}