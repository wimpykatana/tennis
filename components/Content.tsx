import { SafeAreaView } from 'react-native'
import React from 'react'

const Content = ({children}: any) => {
  return (
    <SafeAreaView className='m-5'>
        {children}
    </SafeAreaView>
  )
}

export default Content