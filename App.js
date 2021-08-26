import React from 'react';
import {Platform, Text, SafeAreaView, StatusBar, View} from 'react-native';
import VectorIcons from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View>
        <Text>App Screen</Text>
        <VectorIcons name="home-outline" size={30} />
      </View>
    </SafeAreaView>
  );
}
