import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/colors'
import { Tabs } from 'expo-router'

import Ionicons from '@expo/vector-icons/Ionicons';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: Colors.black,
        }}
    >
       
        <Tabs.Screen 
            name='tennis-score' 
            options={{
                tabBarLabel: 'Tennis Score',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="tennisball" size={24} color={color} />
                ),
        }} />
        
        {/*<Tabs.Screen 
            name='affirmations' 
            options={{
                tabBarLabel: 'Affimation',
                tabBarIcon: ({ color }) => (
                    <Entypo name="open-book" size={24} color={color} />
                ),
        }} />*/}

    </Tabs>
  )
}

export default TabsLayout