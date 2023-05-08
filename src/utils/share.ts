import { AddGaEvent } from '../analytics/analytics';
import {Share, ToastAndroid} from 'react-native';
const onShare = async () => {
  try {
    await AddGaEvent('share_app' as string, {})
    const result = await Share.share({
      title: 'Agrarian Link',
      message:
        'Please install this app and make your crop grow safer and more , AppLink :https://play.google.com/store/apps',
      url: 'https://play.google.com/store/apps/agrarian',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
        ToastAndroid.show('Thanks for sharing the app', 1);
      } else {
        // shared
        ToastAndroid.show('Thanks for sharing the app', 1);
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (err) {}
};

export default onShare;
