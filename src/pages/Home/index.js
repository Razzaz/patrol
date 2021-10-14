import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Divider, IconButton, List} from 'react-native-paper';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <StatusBarHeader
        barkStyle="dark-content"
        backgroundColor={colors.green}
      />
      <View>
        <View style={styles.profile}>
          <View style={styles.upperProfile}>
            <Avatar.Icon
              size={40}
              color={colors.green}
              style={{backgroundColor: colors.white}}
              icon="account"
            />
          </View>
          <View style={styles.lowerProfile}>
            <View>
              <Text style={styles.title}>Muh Ridwan</Text>
              <Text style={styles.description}>Belum Absen</Text>
            </View>
            <View style={styles.clock}>
              <Text style={styles.title}>21.30</Text>
              <Text style={styles.description}>Jadwal Berikutnya</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu}>
          <List.Item
            title="Jadwal Masuk"
            description="Item description"
            left={props => <List.Icon {...props} icon="calendar" />}
          />
          <List.Item
            onPress={() => navigation.navigate('HistoryAbsent')}
            title="Absen"
            description="Item description"
            left={props => <List.Icon {...props} icon="login" />}
          />
          <List.Item
            onPress={() => navigation.navigate('HistoryCheckpoint')}
            title="Riwayat Checkpoint"
            description="Item description"
            left={props => <List.Icon {...props} icon="qrcode-scan" />}
          />
          <List.Item
            onPress={() => navigation.navigate('HistoryAccident')}
            title="Riwayat Insiden"
            description="Item description"
            left={props => <List.Icon {...props} icon="alert" />}
          />
          <Divider />
          <List.Item
            onPress={() => navigation.navigate('Settings')}
            title="Pengaturan"
            description="Item description"
            left={props => <List.Icon {...props} icon="cog" />}
          />
        </View>
      </View>

      <View style={styles.bottomNav}>
        <IconButton
          icon="home"
          color={colors.white}
          size={24}
          onPress={() => navigation.navigate('Home')}
        />
        <IconButton
          icon="qrcode-scan"
          color={colors.white}
          size={24}
          onPress={() => navigation.navigate('Scan')}
        />
        <IconButton
          icon="alert"
          color={colors.white}
          size={24}
          onPress={() => navigation.navigate('Accident')}
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
  profile: {
    height: 150,
    margin: 12,
    backgroundColor: colors.green,
    borderRadius: 5,
    padding: 12,
    justifyContent: 'space-between',
  },
  menu: {
    padding: 12,
  },
  bottomNav: {
    backgroundColor: colors.green,
    height: 60,
    paddingHorizontal: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  upperProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lowerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    color: colors.white,
  },
  description: {
    fontSize: 12,
    color: colors.white,
  },
  clock: {
    alignItems: 'flex-end',
  },
});

export default Home;
