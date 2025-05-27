import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  ScreenContainer,
  SimpleStyleKeyboardAwareScrollView,
  TextInput,
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

const PersonalScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [selectedMode, setSelectedMode] = React.useState('slow');
  const [selectedStep, setSelectedStep] = React.useState('personal');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth({ gap: 32, padding: 32 }, dimensions.width)}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base },
          dimensions.width
        )}
      >
        <SimpleStyleKeyboardAwareScrollView
          enableAutomaticScroll={false}
          enableOnAndroid={false}
          enableResetScrollToCoords={false}
          keyboardShouldPersistTaps={'never'}
          showsVerticalScrollIndicator={true}
          viewIsInsideTabBar={false}
          style={StyleSheet.applyWidth({ flex: 1, gap: 24 }, dimensions.width)}
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
            <Touchable>
              {/* Personal Active */}
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
            {/* Divider Inactive */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 4,
                  borderColor: theme.colors.border.brand,
                  borderStyle: 'dotted',
                  flex: 1,
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
            {/* Divider Inactive */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderBottomWidth: 4,
                  borderColor: theme.colors.border.brand,
                  borderStyle: 'dotted',
                  flex: 1,
                  marginTop: -16,
                },
                dimensions.width
              )}
            />
            {/* Finish */}
            <Touchable
              onPress={() => {
                try {
                  navigation.navigate('FinishScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              {/* Finish Inactive */}
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
          {/* Personal Data View */}
          <>
            {!(selectedStep === 'personal') ? null : (
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, gap: 24 },
                  dimensions.width
                )}
              >
                {/* Recipient's Name field */}
                <View>
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_400Regular',
                        opacity: 0.6,
                      },
                      dimensions.width
                    )}
                  >
                    {"Recipient's Name"}
                  </Text>
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newTextInputValue => {
                      try {
                        setTextInputValue(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    placeholder={'Enter Name'}
                    placeholderTextColor={palettes.ShipIt['text placeholder']}
                    selectionColor={palettes.ShipIt['App Green']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors.border.brand,
                        borderLeftWidth: 1,
                        borderRadius: 8,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 50,
                        marginTop: 10,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                    textContentType={'none'}
                    value={textInputValue}
                    webShowOutline={false}
                  />
                </View>
                {/* Reciepient's Address field */}
                <View>
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_400Regular',
                        opacity: 0.6,
                      },
                      dimensions.width
                    )}
                  >
                    {"Recipient's Address"}
                  </Text>

                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors.border.brand,
                        borderLeftWidth: 1,
                        borderRadius: 12,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                        paddingLeft: 16,
                        paddingRight: 10,
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      size={24}
                      color={palettes.ShipIt['App Green']}
                      name={'Entypo/location-pin'}
                    />
                    <TextInput
                      autoCapitalize={'none'}
                      autoCorrect={true}
                      changeTextDelay={500}
                      onChangeText={newTextInputValue => {
                        try {
                          setTextInputValue(newTextInputValue);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      placeholder={'Enter Address'}
                      placeholderTextColor={palettes.ShipIt['text placeholder']}
                      style={StyleSheet.applyWidth(
                        {
                          borderRadius: 8,
                          flex: 1,
                          height: 50,
                          paddingBottom: 8,
                          paddingLeft: 16,
                          paddingRight: 16,
                          paddingTop: 8,
                        },
                        dimensions.width
                      )}
                      textContentType={'none'}
                      value={textInputValue}
                      webShowOutline={false}
                    />
                    <IconButton
                      color={palettes.ShipIt['text placeholder']}
                      icon={'Entypo/chevron-right'}
                      size={24}
                    />
                  </View>
                </View>
                {/* Recipient's Number field */}
                <View>
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_400Regular',
                        opacity: 0.6,
                      },
                      dimensions.width
                    )}
                  >
                    {"Recipient's Number"}
                  </Text>
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newTextInputValue => {
                      try {
                        setTextInputValue(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    keyboardType={'numeric'}
                    placeholder={'+1  (415) xxx-xxx'}
                    placeholderTextColor={palettes.ShipIt['text placeholder']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors.border.brand,
                        borderLeftWidth: 1,
                        borderRadius: 8,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 50,
                        marginTop: 10,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                    textContentType={'none'}
                    value={textInputValue}
                    webShowOutline={false}
                  />
                </View>
                {/* Postal Zip field */}
                <View>
                  <Text
                    accessible={true}
                    selectable={false}
                    style={StyleSheet.applyWidth(
                      {
                        color: theme.colors.text.strong,
                        fontFamily: 'Inter_400Regular',
                        opacity: 0.6,
                      },
                      dimensions.width
                    )}
                  >
                    {'Postal Zip'}
                  </Text>
                  <TextInput
                    autoCapitalize={'none'}
                    autoCorrect={true}
                    changeTextDelay={500}
                    onChangeText={newTextInputValue => {
                      try {
                        setTextInputValue(newTextInputValue);
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    keyboardType={'numeric'}
                    placeholder={'00000'}
                    placeholderTextColor={palettes.ShipIt['text placeholder']}
                    style={StyleSheet.applyWidth(
                      {
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderBottomWidth: 1,
                        borderColor: theme.colors.border.brand,
                        borderLeftWidth: 1,
                        borderRadius: 8,
                        borderRightWidth: 1,
                        borderTopWidth: 1,
                        height: 50,
                        marginTop: 10,
                        paddingBottom: 8,
                        paddingLeft: 16,
                        paddingRight: 16,
                        paddingTop: 8,
                      },
                      dimensions.width
                    )}
                    textContentType={'none'}
                    value={textInputValue}
                    webShowOutline={false}
                  />
                </View>
                {/* Button Solid */}
                <Button
                  accessible={true}
                  iconPosition={'left'}
                  onPress={() => {
                    try {
                      navigation.navigate('PackageScreen');
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
                    },
                    dimensions.width
                  )}
                  title={'Next'}
                />
              </View>
            )}
          </>
        </SimpleStyleKeyboardAwareScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PersonalScreen);
