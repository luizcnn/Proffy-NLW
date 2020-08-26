
import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage'

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import api from '../../services/api';

import styles from './styles'
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {

    const [isFilterVisible, setIsFiltersVisible] = useState(false);;
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    const [favorites, setFavorites] = useState<number []>([]);
    

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(resp => {
            if(resp) {
                const favoritedTeachers = JSON.parse(resp);
                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id
                })
                setFavorites(favoritedTeachersIds);
            } 
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    })

    function toggleFiltersVisibility() {
        isFilterVisible ? setIsFiltersVisible(false) : setIsFiltersVisible(true)
    };
    
    async function handleFilterSubmit() { 
        loadFavorites();

        const WeekDay = selectWeekDay(week_day)

        const response = await api.get('classes', {

            params: {
                subject,
                week_day: WeekDay,
                time,
            }
        });
        
        setTeachers(response.data)
        toggleFiltersVisibility()
    }

    function selectWeekDay(week_day: string) {
        switch (week_day) {
            case "Domingo" || "domingo":
                return 0
            
            case "Segunda" || "segunda":
                return 1
            
            case "Terça" || "terça":
                return 2

            case "Quarta" || "quarta":
                return 3
            
            case "Quinta" || "quinta":
                return 4

            case "Sexta" || "sexta":
                return 5
            
            case "Sábado" || "sábado":
                return 6 
            default:
                return 0    
        }
    }

    return (
        <View style={styles.container}>

            <PageHeader 
                title="Proffys Disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={toggleFiltersVisibility}>
                        <Feather name="filter" size={20} color="#FFF" ></Feather>
                    </BorderlessButton>
                )}
            >
                {isFilterVisible && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={(text) => setSubject(text)}
                            style={styles.input}
                            placeholder="Qual a matéria ?"
                            placeholderTextColor="#c1bccc"
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={(text) => setWeekDay(text)} 
                                    style={styles.input}
                                    placeholder="Qual o dia ?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={(text) => setTime(text)}  
                                    style={styles.input}
                                    placeholder="Qual horário ?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </View>
                        </View>

                        <RectButton style={styles.submitButton} onPress={handleFilterSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>

                    </View>
                )}
            </PageHeader>

            <ScrollView
                style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
            >   
                {teachers.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher}
                            favorited={favorites.includes(teacher.id)} 
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;