import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles'

function Favorites() {
    
    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(resp => {
            if(resp) {
                const favoritedTeachers = JSON.parse(resp);
                setFavorites(favoritedTeachers);
            } 
        });
    }

    useFocusEffect(() =>{
        loadFavorites();
    })

    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos" />

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >
                {favorites.map((favoritedTeacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={favoritedTeacher.id}
                            teacher={favoritedTeacher}
                            favorited
                        />
                    )
                })}
                {/* <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem /> */}
            </ScrollView>
        </View>
    )
}

export default Favorites;