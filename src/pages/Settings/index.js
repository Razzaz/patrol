import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  Appbar,
  Button,
  Divider,
  List,
  Modal,
  Portal,
  TextInput,
} from 'react-native-paper';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const Settings = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const [secure, setSecure] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 24, margin: 24};

  return (
    <View style={styles.page}>
      <View>
        <StatusBarHeader
          barkStyle="light-content"
          backgroundColor={colors.green}
        />
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Pengaturan" />
        </Appbar.Header>
        <List.Item
          title="Ubah password"
          left={props => <List.Icon {...props} icon="lock-open" />}
          onPress={showModal}
        />
      </View>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}>
          <TextInput
            label="Password lama"
            secureTextEntry={secure}
            right={
              <TextInput.Icon name="eye" onPress={() => setSecure(true)} />
            }
          />
          <TextInput
            label="Password baru"
            secureTextEntry={secure}
            right={
              <TextInput.Icon name="eye" onPress={() => setSecure(true)} />
            }
          />
          <Divider style={{height: 40, backgroundColor: colors.white}} />
          <Button style={styles.button} mode="contained" onPress={hideModal}>
            Simpan
          </Button>
        </Modal>
      </Portal>

      <View style={styles.bottomWrapper}>
        <List.Item
          title="Logout"
          left={props => (
            <List.Icon {...props} color={colors.white} icon="login" />
          )}
          titleStyle={styles.logout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'space-between',
  },
  text: {
    color: '#000',
  },
  bottomWrapper: {
    backgroundColor: colors.green,
  },
  logout: {
    color: colors.white,
  },
});

export default Settings;
