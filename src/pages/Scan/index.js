import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
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
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StatusBarHeader} from '../../components';
import {colors} from '../../utils';

const Scan = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const [data, setData] = React.useState('halo');
  const [openQr, setOpenQr] = React.useState(true);
  const [openPage, setOpenPage] = React.useState(false);
  const [value, setValue] = React.useState();

  const showModal = () => setVisible(true);
  const hideModal = () => {
    setVisible(false);
    setOpenPage(true);
  };
  const containerStyle = {backgroundColor: 'white', padding: 24, margin: 24};

  const onSuccess = e => {
    console.log(e.data);
    setData(e.data);
    setVisible(true);
    setOpenQr(false);
    setOpenPage(true);
  };

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
      }
    });
  };

  const [currentDate, setCurrentDate] = React.useState('');
  React.useEffect(() => {
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    setCurrentDate(
      date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    );
  }, []);

  return (
    <View style={styles.page}>
      <StatusBarHeader
        barkStyle="light-content"
        backgroundColor={colors.green}
      />
      {openQr && (
        <View style={styles.scanQR}>
          <QRCodeScanner
            onRead={onSuccess}
            flashMode={RNCamera.Constants.FlashMode.torch}
            cameraStyle={{flex: 1}}
            cameraContainerStyle={{height: 10}}
            showMarker={true}
            markerStyle={styles.marker}
          />
        </View>
      )}

      {openPage && (
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
              <TextInput label="Lokasi" value={data} />
              <Divider style={{height: 40, backgroundColor: colors.white}} />
              <View style={styles.condition}>
                <Text style={styles.text}>Kondisi</Text>
                <RadioButton.Group
                  onValueChange={value => setValue(value)}
                  value={value}>
                  <RadioButton.Item
                    label="Aman terkendali"
                    value={false}
                    color={colors.green}
                  />
                  <RadioButton.Item
                    label="Terdapat masalah"
                    value={true}
                    color={colors.green}
                  />
                </RadioButton.Group>
              </View>

              <Divider style={{height: 40, backgroundColor: colors.white}} />
              {value && <TextInput label="Keterangan" multiline={true} />}
            </View>
            <Divider style={{height: 40, backgroundColor: colors.white}} />
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
      )}

      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text style={{color: colors.black}}>{data}</Text>
        <Divider style={{height: 40, backgroundColor: colors.white}} />
        <Button mode="contained" onPress={hideModal}>
          Check In
        </Button>
      </Modal>
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

export default Scan;
