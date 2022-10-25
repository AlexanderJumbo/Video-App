import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet, Image} from 'react-native';
import {Overlay} from 'react-native-elements';

const FormSuccess = props => {
  return props.successMessage ? (
    <Overlay
      overlayStyle={styles.Overlay}
      isVisible={true}
      onBackdropPress={() => props.close('')}>
      <Image
        style={styles.successIcon}
        source={require('../assets/images/check.png')}
      />
      <Text style={styles.successMessage}>{props.successMessage}</Text>
    </Overlay>
  ) : (
    <Overlay overlayStyle={styles.Overlay} isVisible={true}>
      <Text>
        <ActivityIndicator size="large" color="#2FBBF0" />
      </Text>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  Overlay: {
    width: '90%',
    height: 320,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  successIcon: {
    width: 72,
    height: 72,
  },
  successMessage: {
    color: '#000',
    fontSize: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default FormSuccess;
