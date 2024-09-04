import { View, Text, SafeAreaView, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';

const courtNet = require('@/assets/images/tennis/court-net.jpg')

export default function index() {
  const router = useRouter()
  return (
    <View className='flex-1'>
      <ImageBackground source={courtNet} resizeMode='cover' className="flex-1">
        <AppGradient colors={["rgba(0,0,0,0.4)","rgba(0,0,0,0.8)"]}>
          <View className='flex h-full justify-around flex-col'>
                <View>
                    <Text className="text-center text-white font-bold text-4xl">
                        Simple Tennis 
                    </Text>
                    <Text className="text-center text-white text-regular text-1xl mt-3">
                        Simplifying Tennis for Everyone
                    </Text>
                </View>
                <View className='justify-end'>
                    <CustomButton 
                        onPress={() => router.push('/tennis-score')}
                        title="Get Started" 
                    />
                </View>
            </View>
        </AppGradient>
      </ImageBackground>
      <StatusBar style="light" />
    </View>
  )
}