import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TaskScreen from '../screens/TaskScreen';
import MapScreen from '../screens/MapScreen';
import TabBarIcon from '../components/TabBarIcon';
import I18n from '../i18n';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const homeTitle = I18n.t('home');

  const profileTitle = I18n.t('profile');

  const TaskTitle = I18n.t('task');

  const MapTitle = I18n.t('map');

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Root"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="home-outline" />,
          title: homeTitle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="person-outline" />,
          title: profileTitle,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="location-outline" />,
          title: MapTitle,
        }}
      />
      <Tab.Screen
        name="Task"
        component={TaskScreen}
        options={{
          tabBarIcon: () => <TabBarIcon name="today-outline" />,
          title: TaskTitle,
        }}
      />
    </Tab.Navigator>
  );
}
