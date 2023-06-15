// import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaViewBase, StatusBar } from 'react-native';
import {colors} from "./src/utils/colors";
import Focus from './src/features/Focus';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <View style={styles.container}>
        {!currentSubject ? (
          <Focus addSubject = {setCurrentSubject}/>
        ) : (
          <Text style={styles.text}>I am going to render the timer for {currentSubject}</Text>
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight / 2 : 0,
  },
  text: {
    color: colors.white,
  }
});
