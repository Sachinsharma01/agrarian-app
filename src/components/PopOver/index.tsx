import {TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {useTranslation} from 'react-i18next';

const PopOverDialog = ({show, onPress}: any) => {
  const {t} = useTranslation();
  const [visible, setVisible] = useState(true);
  return (
    <Popover
      isVisible={visible}
      onRequestClose={() => {
        setVisible(false);
      }}
      placement={PopoverPlacement.BOTTOM}
      from={<TouchableOpacity onPress={onPress}></TouchableOpacity>}>
      <Text style={{color: 'black', fontWeight: '600'}}>
        {t('You can change the language from here.')}
      </Text>
    </Popover>
  );
};

export default PopOverDialog;
