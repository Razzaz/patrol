import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, FAB, List} from 'react-native-paper';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const HistoryAbsent = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBarHeader
        barkStyle="light-content"
        backgroundColor={colors.green}
      />
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Riwayat Absen" />
      </Appbar.Header>
      <List.Item
        title="Sudah absen"
        description="09/10/2021 10.00 WIB"
        left={props => <List.Icon {...props} icon="account" />}
      />
      <List.Item
        title="Sudah absen"
        description="09/10/2021 10.00 WIB"
        left={props => <List.Icon {...props} icon="account" />}
      />
      <List.Item
        title="Sudah absen"
        description="09/10/2021 10.00 WIB"
        left={props => <List.Icon {...props} icon="account" />}
      />
      <List.Item
        title="Sudah absen"
        description="09/10/2021 10.00 WIB"
        left={props => <List.Icon {...props} icon="account" />}
      />
      <List.Item
        title="Sudah absen"
        description="09/10/2021 10.00 WIB"
        left={props => <List.Icon {...props} icon="account" />}
      />
      <FAB
        style={styles.fab}
        small
        icon="plus"
        label="Absen dulu"
        color={colors.white}
        onPress={() => navigation.navigate('Absent')}
      />
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
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.green,
  },
});

export default HistoryAbsent;
