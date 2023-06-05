
import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { OTPVerification } from '@msg91comm/react-native-sendotp';
import Modal from 'react-native-modal';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(true);

  const handleLoginWithOTP = () => {
    setModalVisible(true);
  };

  const handleOTPCompletion = (data) => {
    console.log(data);
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={handleLoginWithOTP} style={{ padding: 16 }}>
        <Text style={{ fontSize: 18 }}>Login with OTP</Text>
      </TouchableOpacity>
      <Modal
        style={{
          backgroundColor: '#fff',
          margin: 0,
        }}
        isVisible={isModalVisible}
      >
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <OTPVerification
            onVisible={isModalVisible}
            onCompletion={handleOTPCompletion}
            authToken={'ENTER_YOUR_AUTHTOKEN'}
            widgetId={'ENTER_YOUR_WIDGETID'}
          />
        </View>
      </Modal>
    </View>
  );
};

export default App;
