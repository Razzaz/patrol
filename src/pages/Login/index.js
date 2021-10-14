import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const [secure, setSecure] = React.useState(false);

  return (
    <View style={styles.page}>
      <StatusBarHeader
        barkStyle="dark-content"
        backgroundColor={colors.green}
      />
      <View style={styles.upperContainer}>
        <Text style={styles.text}>Patrol</Text>
      </View>
      <View style={styles.bottomContainer}>
        <View>
          <TextInput label="UserID" />
          <TextInput
            label="Password"
            secureTextEntry={secure}
            right={
              <TextInput.Icon name="eye" onPress={() => setSecure(true)} />
            }
          />
        </View>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Home')}>
          Login
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.green,
  },
  text: {
    fontSize: 48,
    color: colors.white,
    fontFamily: 'product-sans-light',
  },
  upperContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    backgroundColor: colors.white,
    padding: 24,
    paddingTop: 40,
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default Login;
