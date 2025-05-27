import React from 'react';
import {
  Button,
  Icon,
  ScreenContainer,
  SimpleStyleScrollView,
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

const PackageScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [selectedMode, setSelectedMode] = React.useState('');
  const [selectedStep, setSelectedStep] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      style={StyleSheet.applyWidth({ gap: 24, padding: 32 }, dimensions.width)}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1, gap: 12 },
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
          <Touchable>
            {/* Package Active */}
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
                    overflow: 'hidden',
                    width: 55,
                  },
                  dimensions.width
                )}
              >
                <Icon
                  size={24}
                  color={palettes.ShipIt['App Green']}
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

        <SimpleStyleScrollView
          bounces={true}
          horizontal={false}
          keyboardShouldPersistTaps={'never'}
          nestedScrollEnabled={false}
          showsHorizontalScrollIndicator={true}
          showsVerticalScrollIndicator={false}
          style={StyleSheet.applyWidth({ gap: 24 }, dimensions.width)}
        >
          {/* Select Shipping */}
          <View style={StyleSheet.applyWidth({ gap: 16 }, dimensions.width)}>
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
              {'Select Shipping'}
            </Text>
            {/* Modes */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', gap: 16 },
                dimensions.width
              )}
            >
              {/* Slow */}
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                {/* Mode 1 Active */}
                <>
                  {!(selectedMode === 'slow') ? null : (
                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.ShipIt['Green BG'],
                            borderRadius: 12,
                            height: 140,
                            justifyContent: 'center',
                            padding: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.text.strong}
                          name={'Ionicons/bicycle-outline'}
                          size={40}
                          style={StyleSheet.applyWidth(
                            { opacity: 0.5 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.ShipIt['App Green'],
                              fontFamily: 'Inter_600SemiBold',
                              marginTop: 22,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'Sameday'}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.ShipIt['App Green'],
                              fontFamily: 'Inter_400Regular',
                              marginTop: 4,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'4 - 8 Hours'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Mode 1 Inactive */}
                <>
                  {selectedMode === 'slow' ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSelectedMode('slow');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.ShipIt['BG Gray'],
                            borderRadius: 12,
                            height: 140,
                            justifyContent: 'center',
                            padding: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.text.strong}
                          name={'Ionicons/bicycle-outline'}
                          size={40}
                          style={StyleSheet.applyWidth(
                            { opacity: 0.5 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Inter_600SemiBold',
                              marginTop: 22,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'Sameday'}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Inter_400Regular',
                              marginTop: 4,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'4 - 8 Hours'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* Medium */}
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                {/* Mode 2 Active */}
                <>
                  {!(selectedMode === 'medium') ? null : (
                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.ShipIt['Green BG'],
                            borderRadius: 12,
                            height: 140,
                            justifyContent: 'center',
                            padding: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.text.strong}
                          name={'MaterialIcons/electric-scooter'}
                          size={40}
                          style={StyleSheet.applyWidth(
                            { opacity: 0.5 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.ShipIt['App Green'],
                              fontFamily: 'Inter_600SemiBold',
                              marginTop: 22,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'Regular'}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.ShipIt['App Green'],
                              fontFamily: 'Inter_400Regular',
                              marginTop: 4,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'4 - 6 Days'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Mode 2 Inactive */}
                <>
                  {selectedMode === 'medium' ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSelectedMode('medium');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.ShipIt['BG Gray'],
                            borderRadius: 12,
                            height: 140,
                            justifyContent: 'center',
                            paddingBottom: 12,
                            paddingLeft: 12,
                            paddingRight: 12,
                            paddingTop: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.text.strong}
                          name={'MaterialIcons/electric-scooter'}
                          size={40}
                          style={StyleSheet.applyWidth(
                            { opacity: 0.5 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Inter_600SemiBold',
                              marginTop: 22,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'Regular'}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Inter_400Regular',
                              marginTop: 4,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'4 - 6 Days'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
              {/* Fast */}
              <View
                style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
              >
                {/* Mode 3 Active */}
                <>
                  {!(selectedMode === 'fast') ? null : (
                    <Touchable>
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.ShipIt['Green BG'],
                            borderRadius: 12,
                            height: 140,
                            justifyContent: 'center',
                            padding: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.text.strong}
                          name={'Ionicons/rocket-outline'}
                          size={40}
                          style={StyleSheet.applyWidth(
                            { opacity: 0.5 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.ShipIt['App Green'],
                              fontFamily: 'Inter_600SemiBold',
                              marginTop: 22,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'Express'}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: palettes.ShipIt['App Green'],
                              fontFamily: 'Inter_400Regular',
                              fontSize: 12,
                              marginTop: 4,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'1 - 2 Days'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
                {/* Mode 3 Inactive */}
                <>
                  {selectedMode === 'fast' ? null : (
                    <Touchable
                      onPress={() => {
                        try {
                          setSelectedMode('fast');
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.ShipIt['BG Gray'],
                            borderRadius: 12,
                            height: 140,
                            justifyContent: 'center',
                            padding: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Icon
                          color={theme.colors.text.strong}
                          name={'Ionicons/rocket-outline'}
                          size={40}
                          style={StyleSheet.applyWidth(
                            { opacity: 0.5 },
                            dimensions.width
                          )}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Inter_600SemiBold',
                              marginTop: 22,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'Express'}
                        </Text>

                        <Text
                          accessible={true}
                          selectable={false}
                          style={StyleSheet.applyWidth(
                            {
                              color: theme.colors.text.strong,
                              fontFamily: 'Inter_400Regular',
                              fontSize: 12,
                              marginTop: 4,
                              opacity: 0.7,
                              textAlign: 'center',
                            },
                            dimensions.width
                          )}
                        >
                          {'1 - 2 Days'}
                        </Text>
                      </View>
                    </Touchable>
                  )}
                </>
              </View>
            </View>
          </View>
          {/* Notes */}
          <View style={StyleSheet.applyWidth({ gap: 16 }, dimensions.width)}>
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
              {'Notes'}
            </Text>
            <TextInput
              autoCorrect={true}
              changeTextDelay={500}
              multiline={true}
              numberOfLines={4}
              onChangeText={newTextAreaValue => {
                try {
                  setTextAreaValue(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              textAlignVertical={'top'}
              placeholder={'Type...'}
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
                  height: 140,
                  padding: 16,
                },
                dimensions.width
              )}
              value={textAreaValue}
              webShowOutline={false}
            />
          </View>
          {/* Cost */}
          <View
            style={StyleSheet.applyWidth(
              { borderStyle: 'dashed', gap: 16 },
              dimensions.width
            )}
          >
            {/* Document */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
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
                {'Document'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_500Medium',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'$32.00'}
              </Text>
            </View>
            {/* Courier */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
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
                {'Courier'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_500Medium',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'$2.00'}
              </Text>
            </View>
            {/* Express */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
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
                {'Express'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_500Medium',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'$10.00'}
              </Text>
            </View>
            {/* Warranty */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', justifyContent: 'space-between' },
                dimensions.width
              )}
            >
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
                {'Warranty'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_500Medium',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'$15.00'}
              </Text>
            </View>
            {/* Discount */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                },
                dimensions.width
              )}
            >
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
                {'Discount'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_500Medium',
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'$0'}
              </Text>
            </View>
            {/* Total */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.text.medium,
                  borderStyle: 'dashed',
                  borderTopWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingTop: 20,
                },
                dimensions.width
              )}
            >
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
                {'Total'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.ShipIt['App Green'],
                    fontFamily: 'Inter_700Bold',
                    fontSize: 16,
                    opacity: 0.6,
                  },
                  dimensions.width
                )}
              >
                {'$59.00'}
              </Text>
            </View>
            {/* Promo */}
            <View
              style={StyleSheet.applyWidth(
                { paddingBottom: 16, paddingTop: 16 },
                dimensions.width
              )}
            >
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
                placeholder={'Promo'}
                placeholderTextColor={palettes.ShipIt['Custom Color_3']}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.ShipIt['Green BG'],
                    borderBottomWidth: 1,
                    borderColor: theme.colors.border.brand,
                    borderLeftWidth: 1,
                    borderRadius: 8,
                    borderRightWidth: 1,
                    borderTopWidth: 1,
                    fontFamily: 'Inter_500Medium',
                    height: 50,
                    paddingBottom: 8,
                    paddingLeft: 16,
                    paddingRight: 8,
                    paddingTop: 8,
                  },
                  dimensions.width
                )}
                textContentType={'none'}
                value={textInputValue}
                webShowOutline={false}
              />
            </View>
            {/* Continue Button */}
            <Button
              accessible={true}
              iconPosition={'left'}
              onPress={() => {
                try {
                  navigation.navigate('FinishScreen');
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
              title={'Continue'}
            />
          </View>
        </SimpleStyleScrollView>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(PackageScreen);
