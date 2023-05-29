import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getALLNotifications, readNotification} from '../../request';
import {useSelector} from 'react-redux';
import NotificationItem from '../../components/notification';
import NotificationSvg from '../../assets/screens/notification.svg'
import config from '../../config';

const Notification = () => {
  const {token} = useSelector((state: any) => state.tokenReducer);
  const {user} = useSelector((state: any) => state.metaDataReducer);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(true);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setLoading(true);
    getNotifications();
  }, [reload]);

  const getNotifications = () => {
    getALLNotifications(token as string, user?._id as string).then(data => {
      setNotifications(data.data);
      setLoading(false);
    });
  };

  const readNotificationHandler = async (notification: any) => {
    // console.log('nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn', notification);
    await readNotification(token as string, {
      notificationId: notification?.notificationId,
    });
      setReload(!reload);
  };

  const Loader: any = () => {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color={config.constants.primaryColor} />
      </View>
    );
  };
  return (
    <SafeAreaView>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView>
          {notifications?.length === 0 ? (
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{color: '#000', fontWeight: 'bold', fontSize: 20}}>
                <NotificationSvg height={400} width={300} />
              </Text>
            </View>
          ) : (
            <>
              {notifications?.map((notification: any, idx: number) => {
                return (
                  <NotificationItem
                    onPress={() => {
                      readNotificationHandler(notification);
                      // setReload(!reload);
                    }}
                    key={idx}
                    content={notification?.content}
                    createdAt={notification?.createdAt}
                    description={notification?.description}
                  />
                );
              })}
            </>
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Notification;
