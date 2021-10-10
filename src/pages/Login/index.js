import React from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import {colors} from '../../utils';
import {Appbar, Divider, List, TextInput} from 'react-native-paper';

const ContentTitle = ({title, style}) => (
  <Appbar.Content
    title={<Text style={style}> {title} </Text>}
    style={{
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  />
);

const Login = () => {
  const [text, setText] = React.useState('');

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <View style={styles.page}>
      <Appbar.Header style={{height: 100}}>
        <Appbar.BackAction onPress={_goBack} />
        <ContentTitle title={'Title'} style={{color: 'white'}} />
      </Appbar.Header>
      <TextInput label="UserID" />
      <Divider style={{height: 10, backgroundColor: '#fff'}} />
      <TextInput
        label="Password"
        secureTextEntry={false}
        right={<TextInput.Icon name="eye" />}
      />
      <List.Item
        title="First Item"
        description="Item description"
        left={props => <List.Icon {...props} icon="folder" />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  text: {
    color: colors.black,
    fontFamily: 'product-sans-light',
  },
});

export default Login;
