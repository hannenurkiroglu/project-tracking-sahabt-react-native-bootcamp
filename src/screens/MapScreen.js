import React from 'react';
import CustomView from '../components/CustomView';
import Header from '../components/Header';
import {GetUserInfo} from '../redux/system/selectors';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default function HomeScreen() {
  const userInfo = GetUserInfo();

  const coordinates = {
    latitude: userInfo?.location?.coordinates?.latitude,
    longitude: userInfo?.location?.coordinates?.longitude,
  };
  const coordDolmabahce = {
    latitude: coordinates?.latitude ? Number(coordinates?.latitude) : 0.0,
    longitude: coordinates?.longitude ? Number(coordinates?.longitude) : 0.0,
    latitudeDelta: 0,
    longitudeDelta: 0.1,
  };

  return (
    <CustomView style={{flex: 1}}>
      <Header title="Map" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={coordDolmabahce}>
        <Marker coordinate={coordDolmabahce} />
      </MapView>
    </CustomView>
  );
}
