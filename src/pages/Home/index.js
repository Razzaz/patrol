import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Home = () => {
  return (
    <View style={styles.page}>
      <Text style={styles.text}>Patrol</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  text: {
    color: '#000',
  },
});

export default Home;
