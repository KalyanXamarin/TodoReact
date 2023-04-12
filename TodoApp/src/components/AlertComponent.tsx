import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

export interface IAlertProps {
  isVisible: boolean;
  heading: string;
  yesText: string;
  onPressYes: () => any;
  noText?: string;
  onPressNo?: () => any;
}

const AlertComponent: React.FC<IAlertProps> = ({
  heading,
  yesText,
  onPressYes,
  ...props
}: IAlertProps) => {
  return (
    <Modal
      transparent={true}
      visible={props.isVisible}
      statusBarTranslucent={true}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.2)',
          justifyContent: 'center',
        }}>
        <View style={alertStyle.container}>
          <Text style={alertStyle.heading}>{heading}</Text>
          <View style={alertStyle.buttonsView}>
            <Pressable style={alertStyle.yesBtnStyle} onPress={onPressYes}>
              <Text style={alertStyle.yesText}>{yesText}</Text>
            </Pressable>
            {props.noText && (
              <Pressable
                style={alertStyle.noBtnStyle}
                onPress={props.onPressNo}>
                <Text style={alertStyle.noText}>{props.noText}</Text>
              </Pressable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

const alertStyle = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    padding: 15,
    margin: 20,
  },
  heading: {
    color: '#333333',
    fontSize: 16,
    paddingBottom: 16,
    marginBottom: 6,
  },
  buttonsView: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
  },
  noBtnStyle: {
    backgroundColor: '#818FA7',
    borderRadius: 3,
    marginLeft: 28,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  noText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  yesBtnStyle: {
    backgroundColor: '#FFFFFF',
    borderColor: '#818FA7',
    borderRadius: 3,
    borderWidth: 0.5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  yesText: {
    color: '#818FA7',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default AlertComponent;
