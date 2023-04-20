import {Share} from 'react-native';
const onShare = async () => {
  try {
    const result = await Share.share({
      title: 'Agrarian Link',
      message:
        'Please install this app and make your crop grow safer and more , AppLink :https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
      url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (err) {}
};

export default onShare;