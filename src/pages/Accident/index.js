import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Button,
  Divider,
  IconButton,
  Modal,
  RadioButton,
  Text,
  TextInput,
} from 'react-native-paper';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const Accident = ({navigation}) => {
  const [location, setLocation] = React.useState('');
  const [photo, setPhoto] = React.useState('');

  const addPhoto = () => {
    let options = {
      cameraType: 'back',
      mediaType: 'image',
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        const source = {uri: response.uri};
        const dataPhoto = {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        };
        console.log('uri : ', dataPhoto);
        setPhoto(source);
        setLocation('Tamara Center');
        setCurrentDate(
          date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        );
      }
    });
  };

  const [currentDate, setCurrentDate] = React.useState('');

  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds

  return (
    <View style={styles.page}>
      <StatusBarHeader
        barkStyle="light-content"
        backgroundColor={colors.green}
      />

      <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.scanQR}>
            {photo ? (
              <Image source={photo} style={styles.photo} />
            ) : (
              <View>
                <IconButton
                  icon="camera"
                  color={colors.green}
                  size={40}
                  onPress={() => addPhoto()}
                />
                <Text style={{color: colors.green}}>Ambil foto</Text>
              </View>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              label="Waktu dan tanggal"
              value={currentDate}
              onChangeText={currentDate => setCurrentDate(currentDate)}
            />
            <TextInput label="Lokasi" value={location} />
            <Divider style={{height: 40, backgroundColor: colors.white}} />
            <TextInput label="Keterangan" multiline={true} />
          </View>
          <View style={styles.buttonWrapper}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => navigation.navigate('Home')}>
              Simpan
            </Button>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    backgroundColor: colors.white,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
  scanQR: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 240,
    margin: 12,
    borderRadius: 5,
    backgroundColor: '#E5E5E5',
  },
  marker: {
    borderColor: colors.grey,
    borderRadius: 25,
    height: 240,
    width: 240,
    borderStyle: 'dashed',
  },
  inputWrapper: {
    padding: 12,
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'flex-end',
  },
  condition: {
    backgroundColor: colors.grey,
  },
  text: {
    color: colors.black,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default Accident;
