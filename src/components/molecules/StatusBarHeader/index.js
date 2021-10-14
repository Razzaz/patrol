import {useIsFocused} from '@react-navigation/core';
import React from 'react';
import {StatusBar} from 'react-native';

const StatusBarHeader = ({barStyle, backgroundColor}) => {
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
    return isFocused ? <StatusBar {...props} /> : null;
  }

  return (
    <FocusAwareStatusBar
      barStyle={barStyle}
      backgroundColor={backgroundColor}
    />
  );
};

export default StatusBarHeader;
