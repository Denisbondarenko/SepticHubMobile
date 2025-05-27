import React from 'react';
import {
  Button,
  Divider,
  Icon,
  ScreenContainer,
  SimpleStyleFlatList,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, Modal, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const CheckEstimationsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const safeAreaInsets = useSafeAreaInsets();
  const [PkgTypeModal, setPkgTypeModal] = React.useState(false);
  const [pkgType, setPkgType] = React.useState('Select Package Type');
  const [selectedPackageSize, setSelectedPackageSize] = React.useState('small');
  const [selectedPackageType, setSelectedPackageType] = React.useState('SR');
  const [styledTextFieldValue, setStyledTextFieldValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={true}
      style={StyleSheet.applyWidth({ padding: 32 }, dimensions.width)}
    >
      {/* Container */}
      <View style={StyleSheet.applyWidth({ gap: 24 }, dimensions.width)}>
        {/* Packaging type View */}
        <View style={StyleSheet.applyWidth({ gap: 16 }, dimensions.width)}>
          {/* heading */}
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
            {'Type Of Packaging'}
          </Text>
          {/* Select Package Type */}
          <Touchable
            onPress={() => {
              try {
                setPkgTypeModal(true);
              } catch (err) {
                console.error(err);
              }
            }}
            style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
          >
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.ShipIt['BG Gray'],
                  borderRadius: 15,
                  flexDirection: 'row',
                  height: 55,
                  justifyContent: 'space-between',
                  paddingLeft: 16,
                  paddingRight: 10,
                  width: '100%',
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
                    fontFamily: 'Inter_500Medium',
                    textAlign: 'left',
                    textTransform: 'capitalize',
                  },
                  dimensions.width
                )}
              >
                {pkgType}
              </Text>
              <Icon
                size={24}
                color={palettes.ShipIt['text placeholder']}
                name={'Entypo/chevron-right'}
              />
            </View>
          </Touchable>
        </View>
        {/* Package View */}
        <View style={StyleSheet.applyWidth({ gap: 16 }, dimensions.width)}>
          {/* heading */}
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
            {'Package'}
          </Text>
          {/* Package Options */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            <>
              {!(selectedPackageType === 'SR') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '48%' },
                    dimensions.width
                  )}
                >
                  {/* Active Shatter Resistant */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.branding.primary,
                        borderColor: palettes.ShipIt['App Green'],
                        borderRadius: 15,
                        borderWidth: 1,
                        height: 55,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.ShipIt['Custom Color'],
                          fontFamily: 'Inter_500Medium',
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'shatter resistant'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <>
              {selectedPackageType === 'SR' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageType('SR');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '48%' },
                    dimensions.width
                  )}
                >
                  {/* Inactive Shatter Resistant */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderRadius: 15,
                        height: 55,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.ShipIt['text placeholder'],
                          fontFamily: 'Inter_500Medium',
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'shatter resistant'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <>
              {!(selectedPackageType === 'EB') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '48%' },
                    dimensions.width
                  )}
                >
                  {/* Active Easily Broken */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: theme.colors.branding.primary,
                        borderColor: palettes.ShipIt['App Green'],
                        borderRadius: 15,
                        borderWidth: 1,
                        height: 55,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.ShipIt['Custom Color'],
                          fontFamily: 'Inter_500Medium',
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'easily broken'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            <>
              {selectedPackageType === 'EB' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageType('EB');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '48%' },
                    dimensions.width
                  )}
                >
                  {/* Inactive Easily Broken */}
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderRadius: 15,
                        height: 55,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Text
                      accessible={true}
                      selectable={false}
                      style={StyleSheet.applyWidth(
                        {
                          color: palettes.ShipIt['text placeholder'],
                          fontFamily: 'Inter_500Medium',
                          textTransform: 'capitalize',
                        },
                        dimensions.width
                      )}
                    >
                      {'easily broken'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Size View */}
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
            {'Package Size:'}
          </Text>
          {/* Modes */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Mode 1 Active */}
            <>
              {!(selectedPackageSize === 'small') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['Green BG'],
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={palettes.ShipIt['App Green']}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                        },
                        dimensions.width
                      )}
                    >
                      {'< 1 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 1 Inactive */}
            <>
              {selectedPackageSize === 'small' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageSize('small');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.text.strong}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                        },
                        dimensions.width
                      )}
                    >
                      {'< 1 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 2 Active */}
            <>
              {!(selectedPackageSize === 'medium') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['Green BG'],
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={palettes.ShipIt['App Green']}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                        },
                        dimensions.width
                      )}
                    >
                      {'3 Kg - 10 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 2 Inactive */}
            <>
              {selectedPackageSize === 'medium' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageSize('medium');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.text.strong}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                        },
                        dimensions.width
                      )}
                    >
                      {'3 Kg - 10 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 3 Active */}
            <>
              {!(selectedPackageSize === 'large') ? null : (
                <Touchable
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['Green BG'],
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={palettes.ShipIt['App Green']}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                        },
                        dimensions.width
                      )}
                    >
                      {'10 Kg - 15 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
            {/* Mode 3 Inactive */}
            <>
              {selectedPackageSize === 'large' ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setSelectedPackageSize('large');
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={StyleSheet.applyWidth(
                    { width: '30%' },
                    dimensions.width
                  )}
                >
                  <View
                    style={StyleSheet.applyWidth(
                      {
                        alignItems: 'center',
                        backgroundColor: palettes.ShipIt['BG Gray'],
                        borderRadius: 12,
                        height: 140,
                        justifyContent: 'center',
                      },
                      dimensions.width
                    )}
                  >
                    <Icon
                      color={theme.colors.text.strong}
                      name={'MaterialCommunityIcons/package-variant'}
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
                          fontFamily: 'Inter_400Regular',
                          fontSize: 12,
                          marginTop: 16,
                          opacity: 0.7,
                        },
                        dimensions.width
                      )}
                    >
                      {'10 Kg - 15 Kg'}
                    </Text>
                  </View>
                </Touchable>
              )}
            </>
          </View>
        </View>
        {/* Calculations View */}
        <View
          style={StyleSheet.applyWidth(
            { borderStyle: 'dashed', gap: 16 },
            dimensions.width
          )}
        >
          {/* Price */}
          <View
            style={StyleSheet.applyWidth(
              { flexDirection: 'row', justifyContent: 'space-between' },
              dimensions.width
            )}
          >
            {/* Title */}
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
              {'Price'}
            </Text>
            {/* Value */}
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
          {/* Discount */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 4,
              },
              dimensions.width
            )}
          >
            {/* Title */}
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
            {/* Value */}
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
            {/* Title */}
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
            {/* value */}
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
              {'$32.00'}
            </Text>
          </View>
        </View>
        {/* Go To Pkg Btn */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.navigate('RecipientAddressScreen');
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
              height: 51,
              textAlign: 'center',
            },
            dimensions.width
          )}
          title={'Go To Package'}
        />
      </View>
      <>
        {!PkgTypeModal ? null : (
          <Modal
            animationType={'none'}
            supportedOrientations={['portrait', 'landscape']}
            transparent={false}
          >
            {/* Container */}
            <View
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: theme.colors.background.base,
                  flex: 1,
                  marginTop: safeAreaInsets.top,
                },
                dimensions.width
              )}
            >
              {/* heading */}
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: palettes.ShipIt['App Green'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: 18,
                    padding: 32,
                  },
                  dimensions.width
                )}
              >
                {'Select Package Type'}
              </Text>

              <DraftbitApi.FetchPostsGET limit={12}>
                {({ loading, error, data, refetchPosts }) => {
                  const fetchData = data?.json;
                  if (loading) {
                    return <ActivityIndicator />;
                  }

                  if (error || data?.status < 200 || data?.status >= 300) {
                    return <ActivityIndicator />;
                  }

                  return (
                    <SimpleStyleFlatList
                      data={fetchData}
                      decelerationRate={'normal'}
                      horizontal={false}
                      inverted={false}
                      keyExtractor={(listData, index) =>
                        listData?.id ??
                        listData?.uuid ??
                        index?.toString() ??
                        JSON.stringify(listData)
                      }
                      keyboardShouldPersistTaps={'never'}
                      listKey={'Modal->Container->Fetch->List'}
                      nestedScrollEnabled={false}
                      numColumns={1}
                      onEndReachedThreshold={0.5}
                      pagingEnabled={false}
                      renderItem={({ item, index }) => {
                        const listData = item;
                        return (
                          <>
                            <Touchable
                              onPress={() => {
                                try {
                                  setPkgTypeModal(false);
                                  setPkgType(listData?.id);
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: theme.colors.text.strong,
                                    fontFamily: 'Inter_400Regular',
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {listData?.id}
                              </Text>
                            </Touchable>
                            <Divider
                              color={theme.colors.border.base}
                              {...GlobalStyles.DividerStyles(theme)['Divider']
                                .props}
                              style={StyleSheet.applyWidth(
                                StyleSheet.compose(
                                  GlobalStyles.DividerStyles(theme)['Divider']
                                    .style,
                                  { marginTop: 12 }
                                ),
                                dimensions.width
                              )}
                            />
                          </>
                        );
                      }}
                      showsHorizontalScrollIndicator={true}
                      showsVerticalScrollIndicator={true}
                      snapToAlignment={'start'}
                      style={StyleSheet.applyWidth(
                        { gap: 12, paddingLeft: 32, paddingRight: 32 },
                        dimensions.width
                      )}
                    />
                  );
                }}
              </DraftbitApi.FetchPostsGET>
            </View>
          </Modal>
        )}
      </>
    </ScreenContainer>
  );
};

export default withTheme(CheckEstimationsScreen);
