import analytics from '@react-native-firebase/analytics';

async function AddGaEvent(event: string, payload: any) {
  try {
    console.log('GA Event triggered', event, payload);
    await analytics().logEvent(event, {
      ...payload,
    });
  } catch (err) {
    console.log('GA Event Triggered Error');
  }
}

const AddGaLogin = async () => {
  try {
    console.log('GA event Login Occurred');
    await analytics().logLogin({
        method: 'OTP'
    })
  } catch (err) {
    console.log('login GA event error');
  }
};

export {AddGaEvent, AddGaLogin};
