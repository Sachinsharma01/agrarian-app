import {TouchableOpacity, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import Popover, {PopoverPlacement} from 'react-native-popover-view';
import {useTranslation} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PopOverDialog = ({show, onPress}: any) => {
  const {t} = useTranslation();
  const [visible, setVisible]: any = useState();
  useEffect(() => {
    AsyncStorage.getItem('show').then(show => {
      if (show === 'true') {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
  }, [visible]);
  return (
    <Popover
      isVisible={visible}
      onRequestClose={() => {
        setVisible(false);
        // console.log('ppppppppppppppppppppp'),
          AsyncStorage.setItem('show', 'false');
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
