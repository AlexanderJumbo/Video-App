import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import auth from '@react-native-firebase/auth';

const Profile = ({navigation, route}) => {
  const signOut = () => {
    auth().signOut();
  };
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={signOut} style={styles.Button}>
        <Text style={styles.ButtonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginTop: 40,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    width: '90%',
    color: '#000',
    height: 52,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
});

export default Profile;
