import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Text,
  View,
  StyleSheet,
  Image,
} from "react-native";
import images from '../../assets/images/images';
import auth from '@react-native-firebase/auth'

const SplashScreen = ({navigation}) => {
  //state for activityIndicator
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      //check if currentuser is set or not
      //If not, send to signin screen
      //If yes, send to home
      navigation.replace(auth().currentUser ? 'Home' : 'Auth');
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={images.wheel} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
