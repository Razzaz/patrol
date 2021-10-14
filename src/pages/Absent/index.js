import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {Button, IconButton, TextInput} from 'react-native-paper';
import {colors} from '../../utils';

const Absent = ({navigation}) => {
  const [photo, setPhoto] = React.useState('');

  const addPhoto = () => {
    let options = {
      cameraType: 'front',
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
        setCurrentDate(
          date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
        );
        setLocation('Tamara Center');
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

  const [location, setLocation] = React.useState('');

  return (
    <View style={styles.page}>
      <View style={styles.scanQR}>
        {photo ? (
          <Image source={photo} style={styles.photo} />
        ) : (
          <View style={{justifyContent: 'center'}}>
            <IconButton
              icon="camera"
              color={colors.green}
              size={40}
              onPress={() => {
                addPhoto();
              }}
            />
            <Text style={{color: colors.green}}>Ambil foto</Text>
          </View>
        )}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          disabled={true}
          label="Waktu dan tanggal"
          value={currentDate}
        />
        <TextInput disabled={true} label="Lokasi" value={location} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Home')}>
          Absen
        </Button>
      </View>
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
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanQR: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    margin: 12,
    borderRadius: 5,
    backgroundColor: '#E5E5E5',
  },
  inputWrapper: {
    padding: 12,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    justifyContent: 'flex-end',
  },
});

export default Absent;
