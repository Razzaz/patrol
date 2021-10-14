import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, List} from 'react-native-paper';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const HistoryAccident = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBarHeader
        barkStyle="light-content"
        backgroundColor={colors.green}
      />
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Riwayat Insiden" />
      </Appbar.Header>
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
      />
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
      />
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
      />
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
      />
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
      />
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
      />
      <List.Item
        title="Kemalingan"
        description="09/10/2021 10.00 WIB - Lantai 2 Tamara Center"
        left={props => <List.Icon {...props} icon="alert" />}
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
});

export default HistoryAccident;
