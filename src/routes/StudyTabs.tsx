import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons' //Pacote de fontes de ícones (estilo o font-awesome)

import Favorites from '../pages/Favorites';
import TeacherList from '../pages/TeacherList';

const {Navigator, Screen} = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator // Podemos estilizar as abas da página criando o estilo dentro da propriedade tabBarOptions
            tabBarOptions={{
                style: {
                    elevation: 0, // Propriedades de shadow no android
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20, 
                    height: 20,
                },
                labelStyle: {
                    fontFamily: "Archivo_700Bold",
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#fafafc',
                activeBackgroundColor: '#ebebf5',
                inactiveTintColor: '#c1bccc',
                activeTintColor: '#32264d'
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options= {{ // Estilizando a aba proffys
                    tabBarLabel: 'Proffys',
                    tabBarIcon: ({ color, size, focused }) => { // Por padrão, color recebe o valor declarado em inactiveTintColor
                        return(
                            <Ionicons name="ios-easel" size={size} color={focused ? '#8257E5': color}/>
                        );
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options= {{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <Ionicons name="ios-heart" size={size} color={focused ? '#8257E5': color}/>
                        );
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;