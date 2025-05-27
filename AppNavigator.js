import React from 'react';
import { Icon, Touchable, useTheme } from '@draftbit/ui';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { systemWeights } from 'react-native-typography';
import LinkingConfiguration from './LinkingConfiguration';
import CheckEstimationsScreen from './screens/CheckEstimationsScreen';
import DailyOrdersScreen from './screens/DailyOrdersScreen';
import FinishScreen from './screens/FinishScreen';
import LoginScreen from './screens/LoginScreen';
import OrderDetailsScreen from './screens/OrderDetailsScreen';
import PackageScreen from './screens/PackageScreen';
import PersonalScreen from './screens/PersonalScreen';
import RecipientAddressScreen from './screens/RecipientAddressScreen';
import SignUpScreen from './screens/SignUpScreen';
import TopUpScreen from './screens/TopUpScreen';
import palettes from './themes/palettes';
import Breakpoints from './utils/Breakpoints';
import useNavigation from './utils/useNavigation';
import useWindowDimensions from './utils/useWindowDimensions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DefaultAndroidBackIcon({ tintColor }) {
  return (
    <View style={[styles.headerContainer, styles.headerContainerLeft]}>
      <Icon
        name="AntDesign/arrowleft"
        size={24}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </View>
  );
}

function DefaultDrawerIcon({ tintColor }) {
  const navigation = useNavigation();
  return (
    <Touchable
      onPress={() => navigation.toggleDrawer()}
      style={[styles.headerContainer, styles.headerContainerLeft]}
    >
      <Icon
        name="EvilIcons/navicon"
        size={27}
        color={tintColor}
        style={[styles.headerIcon, styles.headerIconLeft]}
      />
    </Touchable>
  );
}

export default function RootAppNavigator() {
  const theme = useTheme();

  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: theme.colors.background.base,
        },
      }}
      linking={LinkingConfiguration}
    >
      <Stack.Navigator
        initialRouteName="BottomTabNavigator"
        screenOptions={{
          cardStyle: { flex: 1 },
          headerLeft: ({ tintColor, canGoBack }) =>
            canGoBack ? (
              <View
                style={[styles.headerContainer, styles.headerContainerLeft]}
              >
                <Icon
                  name="AntDesign/arrowleft"
                  size={Platform.OS === 'ios' ? 21 : 24}
                  color={tintColor}
                  style={[styles.headerIcon, styles.headerIconLeft]}
                />
              </View>
            ) : null,
          headerMode: 'screen',
          headerShown: false,
          headerTitle: 'Ship It',
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="CheckEstimationsScreen"
          component={CheckEstimationsScreen}
          options={{
            title: 'Check Estimations',
          }}
        />
        <Stack.Screen
          name="DailyOrdersScreen"
          component={DailyOrdersScreen}
          options={{
            title: 'Daily Orders',
          }}
        />
        <Stack.Screen
          name="FinishScreen"
          component={FinishScreen}
          options={{
            title: 'Finish',
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: 'Login',
          }}
        />
        <Stack.Screen
          name="OrderDetailsScreen"
          component={OrderDetailsScreen}
          options={{
            title: 'Order Details',
          }}
        />
        <Stack.Screen
          name="PackageScreen"
          component={PackageScreen}
          options={{
            title: 'Package',
          }}
        />
        <Stack.Screen
          name="PersonalScreen"
          component={PersonalScreen}
          options={{
            title: 'Personal',
          }}
        />
        <Stack.Screen
          name="RecipientAddressScreen"
          component={RecipientAddressScreen}
          options={{
            title: 'Recipient Address',
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen
          name="TopUpScreen"
          component={TopUpScreen}
          options={{
            title: 'Top Up',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({ ios: { marginLeft: 8 } }),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({ ios: { marginRight: 6 } }),
});
