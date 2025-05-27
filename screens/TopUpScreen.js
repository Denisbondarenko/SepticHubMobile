import React from 'react';
import { Button, ScreenContainer, Stepper, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import * as GlobalVariables from '../config/GlobalVariableContext';
import UpdateMyBalance from '../global-functions/UpdateMyBalance';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const TopUpScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const [selectedTopUpValue, setSelectedTopUpValue] = React.useState(50);
  const [stepperValue, setStepperValue] = React.useState('');
  const [topUpValue, setTopUpValue] = React.useState(100);
  const DecreaseTopUpValue = topUpValue => {
    if (topUpValue < 1) return topUpValue;
    else return topUpValue - 1;
  };

  const IncreaseTopUpValue = topUpValue => {
    return topUpValue + 1;
  };

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth({ padding: 24 }, dimensions.width)}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1, gap: 32 },
          dimensions.width
        )}
      >
        {/* My Balance View */}
        <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
          {/* heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.medium,
                fontFamily: 'Inter_500Medium',
                fontSize: 20,
                opacity: 0.8,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'My Balance'}
          </Text>
          {/* balance */}
          <Text
            accessible={true}
            selectable={false}
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 36,
                textAlign: 'center',
              },
              dimensions.width
            )}
          >
            {'$ '}
            {Constants['MyBalance']}
          </Text>
        </View>
        {/* Amount View */}
        <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
          {/* heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.medium,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 18,
                opacity: 0.8,
                textAlign: 'left',
              },
              dimensions.width
            )}
          >
            {'Amount'}
          </Text>

          <View style={StyleSheet.applyWidth({ gap: 16 }, dimensions.width)}>
            {/* Input View */}
            <View
              style={StyleSheet.applyWidth(
                { flexDirection: 'row', width: '100%' },
                dimensions.width
              )}
            >
              {/* decrease btn */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  try {
                    const newTopUpValue = DecreaseTopUpValue(topUpValue);
                    setTopUpValue(newTopUpValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: theme.colors.text.light,
                    borderRadius: 10,
                    color: theme.colors.text.medium,
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 20,
                    height: 60,
                    width: 60,
                  },
                  dimensions.width
                )}
                title={'-'}
              />
              {/* top up amount */}
              <View
                style={StyleSheet.applyWidth(
                  { flex: 1, justifyContent: 'center' },
                  dimensions.width
                )}
              >
                {/* top up amount */}
                <Text
                  accessible={true}
                  selectable={false}
                  ellipsizeMode={'tail'}
                  numberOfLines={1}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 30,
                      textAlign: 'center',
                    },
                    dimensions.width
                  )}
                >
                  {'$ '}
                  {topUpValue}
                </Text>
              </View>
              {/* increase btn */}
              <Button
                accessible={true}
                iconPosition={'left'}
                onPress={() => {
                  try {
                    const newTopUpValue = IncreaseTopUpValue(topUpValue);
                    setTopUpValue(newTopUpValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: palettes.ShipIt['App Green'],
                    borderRadius: 10,
                    color: palettes.ShipIt['Custom Color'],
                    fontFamily: 'Inter_600SemiBold',
                    fontSize: 20,
                    height: 60,
                    width: 60,
                  },
                  dimensions.width
                )}
                title={'+'}
              />
            </View>
            {/* Predefined Amounts */}
            <View style={StyleSheet.applyWidth({ gap: 24 }, dimensions.width)}>
              {/* Row 1 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-between' },
                  dimensions.width
                )}
              >
                {/* 5 */}
                <>
                  {!(selectedTopUpValue === 5) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(5);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          textTransform: 'none',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$5'}
                    />
                  )}
                </>
                {/* 5 Inactive */}
                <>
                  {selectedTopUpValue === 5 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(5);
                          setSelectedTopUpValue(5);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$5'}
                    />
                  )}
                </>
                {/* 10 */}
                <>
                  {!(selectedTopUpValue === 10) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(10);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          textTransform: 'none',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$10'}
                    />
                  )}
                </>
                {/* 10 Inactive */}
                <>
                  {selectedTopUpValue === 10 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(10);
                          setSelectedTopUpValue(10);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$10'}
                    />
                  )}
                </>
                {/* 15 */}
                <>
                  {!(selectedTopUpValue === 15) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(15);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$15'}
                    />
                  )}
                </>
                {/* 15 Inactive */}
                <>
                  {selectedTopUpValue === 15 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(15);
                          setSelectedTopUpValue(15);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$15'}
                    />
                  )}
                </>
                {/* 20 */}
                <>
                  {!(selectedTopUpValue === 20) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(20);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$20'}
                    />
                  )}
                </>
                {/* 20 Inactive */}
                <>
                  {selectedTopUpValue === 20 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(20);
                          setSelectedTopUpValue(20);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$20'}
                    />
                  )}
                </>
              </View>
              {/* Row 2 */}
              <View
                style={StyleSheet.applyWidth(
                  { flexDirection: 'row', justifyContent: 'space-between' },
                  dimensions.width
                )}
              >
                {/* 50 */}
                <>
                  {!(selectedTopUpValue === 50) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(50);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$50'}
                    />
                  )}
                </>
                {/* 50 Inactive */}
                <>
                  {selectedTopUpValue === 50 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(50);
                          setSelectedTopUpValue(50);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$50'}
                    />
                  )}
                </>
                {/* 100 */}
                <>
                  {!(selectedTopUpValue === 100) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(100);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$100'}
                    />
                  )}
                </>
                {/* 100 Inactive */}
                <>
                  {selectedTopUpValue === 100 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(100);
                          setSelectedTopUpValue(100);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$100'}
                    />
                  )}
                </>
                {/* 200 */}
                <>
                  {!(selectedTopUpValue === 200) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(200);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$200'}
                    />
                  )}
                </>
                {/* 200 Inactive */}
                <>
                  {selectedTopUpValue === 200 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(200);
                          setSelectedTopUpValue(200);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$200'}
                    />
                  )}
                </>
                {/* 500 */}
                <>
                  {!(selectedTopUpValue === 500) ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(500);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: palettes.ShipIt['Green BG'],
                          borderRadius: 10,
                          color: palettes.ShipIt['App Green'],
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$500'}
                    />
                  )}
                </>
                {/* 500 Inactive */}
                <>
                  {selectedTopUpValue === 500 ? null : (
                    <Button
                      accessible={true}
                      iconPosition={'left'}
                      onPress={() => {
                        try {
                          setTopUpValue(500);
                          setSelectedTopUpValue(500);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                      style={StyleSheet.applyWidth(
                        {
                          backgroundColor: theme.colors.text.light,
                          borderRadius: 10,
                          color: theme.colors.text.medium,
                          fontFamily: 'Inter_600SemiBold',
                          fontSize: 12,
                          height: 60,
                          textAlign: 'center',
                          width: 60,
                        },
                        dimensions.width
                      )}
                      title={'$500'}
                    />
                  )}
                </>
              </View>
            </View>
          </View>
        </View>
        {/* bottom btns */}
        <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
          {/* TopUp Btn */}
          <Button
            accessible={true}
            iconPosition={'left'}
            onPress={() => {
              try {
                const newBalance = UpdateMyBalance(
                  Constants['MyBalance'],
                  topUpValue
                );
                setGlobalVariableValue({
                  key: 'MyBalance',
                  value: newBalance,
                });
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
                height: 52,
              },
              dimensions.width
            )}
            title={'TopUp'}
          />
          {/* Cancel Btn */}
          <Button
            accessible={true}
            iconPosition={'left'}
            style={StyleSheet.applyWidth(
              {
                backgroundColor: theme.colors.background.brand,
                borderRadius: 12,
                color: theme.colors.text.medium,
                fontFamily: 'Inter_600SemiBold',
                fontSize: 16,
                height: 51,
              },
              dimensions.width
            )}
            title={'Cancel'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(TopUpScreen);
