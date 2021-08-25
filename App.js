import React from 'react';
import {Platform, Text, SafeAreaView, StatusBar, View} from 'react-native';

export default function App() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}>
      <View>
        <Text>App Screen</Text>
      </View>
    </SafeAreaView>
  );
}
