import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const FinishScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [selectedStep, setSelectedStep] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      style={StyleSheet.applyWidth({ flex: 1, padding: 32 }, dimensions.width)}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1 },
          dimensions.width
        )}
      >
        {/* Tabs View */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Personal */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('BottomTabNavigator', {
                  screen: 'PersonalScreen',
                });
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Personal Inactive */}
            <View>
              {/* image */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: palettes.ShipIt['BG Gray'],
                    borderRadius: 10,
                    height: 55,
                    justifyContent: 'center',
                    width: 55,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.text.strong}
                  name={'AntDesign/user'}
                />
              </View>
              {/* tab name */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    opacity: 0.6,
                    paddingTop: 6,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Personal'}
              </Text>
            </View>
          </Touchable>
          {/* Divider Active */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 4,
                borderColor: palettes.ShipIt['App Green'],
                borderStyle: 'dotted',
                flex: 1,
                height: 2,
                marginTop: -16,
              },
              dimensions.width
            )}
          />
          {/* Package */}
          <Touchable
            onPress={() => {
              try {
                navigation.navigate('PackageScreen');
              } catch (err) {
                console.error(err);
              }
            }}
          >
            {/* Package Inactive */}
            <View>
              {/* image */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: palettes.ShipIt['BG Gray'],
                    borderRadius: 10,
                    height: 55,
                    justifyContent: 'center',
                    width: 55,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={theme.colors.text.strong}
                  name={'Octicons/package'}
                />
              </View>
              {/* tab name */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    opacity: 0.6,
                    paddingTop: 6,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Package'}
              </Text>
            </View>
          </Touchable>
          {/* Divider Active */}
          <View
            style={StyleSheet.applyWidth(
              {
                borderBottomWidth: 4,
                borderColor: palettes.ShipIt['App Green'],
                borderStyle: 'dotted',
                flex: 1,
                height: 2,
                marginTop: -16,
              },
              dimensions.width
            )}
          />
          {/* Finish */}
          <Touchable>
            {/* Finish Active */}
            <View>
              {/* image */}
              <View
                style={StyleSheet.applyWidth(
                  {
                    alignItems: 'center',
                    backgroundColor: palettes.ShipIt['Green BG'],
                    borderRadius: 10,
                    height: 55,
                    justifyContent: 'center',
                    width: 55,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={palettes.ShipIt['App Green']}
                  name={'Feather/send'}
                />
              </View>
              {/* tab name */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    opacity: 0.6,
                    paddingTop: 6,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Finish'}
              </Text>
            </View>
          </Touchable>
        </View>
        {/* Finish Action */}
        <View
          style={StyleSheet.applyWidth(
            { flex: 1, gap: 40, justifyContent: 'center' },
            dimensions.width
          )}
        >
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: palettes.ShipIt['App Green'],
                fontFamily: 'Inter_500Medium',
                fontSize: 30,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'Finish'}
          </Text>
          {/* Check Estimates */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                navigation.navigate('CheckEstimationsScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: palettes.ShipIt['App Green'],
                borderRadius: 12,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                height: 50,
                textAlign: 'center',
              },
              dimensions.width
            )}
            title={'Check Estimates'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(FinishScreen);
