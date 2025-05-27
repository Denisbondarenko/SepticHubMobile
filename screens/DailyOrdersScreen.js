import React from 'react';
import {
  CircleImage,
  ExpoImage,
  Icon,
  ScreenContainer,
  Surface,
  TextInput,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as DraftbitApi from '../apis/DraftbitApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const DailyOrdersScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [auto, setAuto] = React.useState('');
  const [searchBarValue, setSearchBarValue] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('tab1');
  const [starRatingValue, setStarRatingValue] = React.useState(0);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Top Navigation Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
            paddingBottom: 8,
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 8,
          },
          dimensions.width
        )}
      >
        {/* Left Section */}
        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'flex-start', justifyContent: 'center' },
            dimensions.width
          )}
        >
          <View
            style={StyleSheet.applyWidth(
              { alignItems: 'center', flexDirection: 'row', marginTop: 3 },
              dimensions.width
            )}
          >
            <ExpoImage
              allowDownscaling={true}
              cachePolicy={'disk'}
              contentPosition={'center'}
              resizeMode={'cover'}
              transitionDuration={300}
              transitionEffect={'cross-dissolve'}
              transitionTiming={'ease-in-out'}
              {...GlobalStyles.ExpoImageStyles(theme)['Image'].props}
              source={imageSource(Images['logomobile'])}
              style={StyleSheet.applyWidth(
                GlobalStyles.ExpoImageStyles(theme)['Image'].style,
                dimensions.width
              )}
            />
          </View>
        </View>
        {/* Right Section */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            },
            dimensions.width
          )}
        >
          <Touchable>
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  height: 48,
                  justifyContent: 'center',
                  width: 48,
                },
                dimensions.width
              )}
            >
              <Icon
                color={palettes.App.TextPlaceholder}
                name={'Ionicons/notifications'}
                size={30}
                style={StyleSheet.applyWidth(
                  { marginTop: 14 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    backgroundColor: 'rgb(125, 183, 195)',
                    borderBottomWidth: 3,
                    borderColor: palettes.App['Custom Color_2'],
                    borderLeftWidth: 3,
                    borderRadius: 7,
                    borderRightWidth: 3,
                    borderTopWidth: 3,
                    height: 14,
                    left: 6,
                    top: -30,
                    width: 14,
                  },
                  dimensions.width
                )}
              />
            </View>
          </Touchable>

          <Touchable
            style={StyleSheet.applyWidth({ marginLeft: 12 }, dimensions.width)}
          >
            <Surface
              elevation={3}
              style={StyleSheet.applyWidth(
                {
                  borderRadius: 20,
                  justifyContent: 'center',
                  minHeight: 40,
                  overflow: 'hidden',
                },
                dimensions.width
              )}
            >
              <CircleImage size={40} source={Images.Avatar} />
            </Surface>
          </Touchable>
        </View>
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
      >
        {/* Search And Filter */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <Surface
              elevation={3}
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.Brand.Surface,
                  borderRadius: 12,
                  flex: 1,
                  flexDirection: 'row',
                  height: 48,
                  justifyContent: 'space-between',
                  minHeight: 48,
                  paddingRight: 16,
                },
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
                webShowOutline={true}
                placeholder={'Search for Order'}
                placeholderTextColor={palettes.App.TextPlaceholder}
                style={StyleSheet.applyWidth(
                  {
                    borderRadius: 8,
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 15,
                    height: 48,
                    paddingBottom: 8,
                    paddingLeft: 24,
                    paddingRight: 8,
                    paddingTop: 8,
                    width: '90%',
                  },
                  dimensions.width
                )}
                value={textInputValue}
              />
              <Icon
                size={24}
                color={palettes.App.TextPlaceholder}
                name={'Feather/search'}
              />
            </Surface>
          </View>

          <View
            style={StyleSheet.applyWidth({ marginLeft: 16 }, dimensions.width)}
          >
            <Touchable>
              <Icon name={'AntDesign/filter'} size={30} />
            </Touchable>
          </View>
        </View>
        {/* Orders */}
        <View
          style={StyleSheet.applyWidth(
            {
              paddingBottom: 16,
              paddingLeft: 16,
              paddingRight: 16,
              paddingTop: 16,
              width: '100%',
            },
            dimensions.width
          )}
        >
          <DraftbitApi.FetchPostsGET limit={6}>
            {({ loading, error, data, refetchPosts }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlatList
                  data={fetchData}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(listData, index) =>
                    listData?.id ??
                    listData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(listData)
                  }
                  keyboardShouldPersistTaps={'never'}
                  listKey={'Scroll View->Orders->Fetch->List'}
                  nestedScrollEnabled={false}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const listData = item;
                    return (
                      <>
                        {/* Record */}
                        <Touchable
                          style={StyleSheet.applyWidth(
                            { width: '100%' },
                            dimensions.width
                          )}
                        >
                          <Surface
                            elevation={3}
                            style={StyleSheet.applyWidth(
                              {
                                borderColor: palettes.App.ViewBG,
                                borderLeftWidth: 1,
                                borderRadius: 12,
                                borderRightWidth: 1,
                                flex: 1,
                                marginBottom: 10,
                                marginTop: 10,
                                minHeight: 40,
                                paddingBottom: 10,
                                paddingTop: 10,
                                width: '100%',
                              },
                              dimensions.width
                            )}
                          >
                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  flex: 1,
                                  flexDirection: 'row',
                                  justifyContent: 'flex-start',
                                },
                                dimensions.width
                              )}
                            >
                              {/* View Right */}
                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'flex-start',
                                    flex: 1,
                                    flexDirection: 'column',
                                    position: 'relative',
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Scheduled Time */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 21,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Scheduled Time'}
                                </Text>

                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.TextPlaceholder,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 14,
                                      marginTop: 2,
                                      textTransform: 'capitalize',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'05/30/2025  1:30 PM EST'}
                                </Text>
                                {/* Address */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text']
                                        .style,
                                      theme.typography.body1,
                                      { fontFamily: 'Inter_500Medium' }
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'Address'}
                                </Text>
                                {/* Text 3 */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  {...GlobalStyles.TextStyles(theme)['Text']
                                    .props}
                                  style={StyleSheet.applyWidth(
                                    StyleSheet.compose(
                                      GlobalStyles.TextStyles(theme)['Text']
                                        .style,
                                      theme.typography.body1,
                                      {}
                                    ),
                                    dimensions.width
                                  )}
                                >
                                  {'191 Brookfield Dr\nJackson, NJ 08527'}
                                </Text>
                                {/* Status */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 21,
                                      marginTop: 25,
                                      opacity: 0.8,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Status'}
                                </Text>

                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.light,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 13,
                                      marginTop: 2,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Scheduled'}
                                </Text>
                              </View>
                            </View>

                            <View
                              style={StyleSheet.applyWidth(
                                {
                                  alignItems: 'center',
                                  borderColor: palettes.App.ViewBG,
                                  borderTopWidth: 1,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  paddingLeft: 16,
                                  paddingRight: 16,
                                  paddingTop: 12,
                                },
                                dimensions.width
                              )}
                            >
                              {/* Price */}
                              <Text
                                accessible={true}
                                selectable={false}
                                style={StyleSheet.applyWidth(
                                  {
                                    color: palettes.App.TextPlaceholder,
                                    fontFamily: 'Inter_600SemiBold',
                                    fontSize: 14,
                                    textTransform: 'capitalize',
                                  },
                                  dimensions.width
                                )}
                              >
                                {'Stop #1 '}
                              </Text>

                              <View
                                style={StyleSheet.applyWidth(
                                  {
                                    alignItems: 'flex-end',
                                    flexDirection: 'row',
                                    justifyContent: 'flex-end',
                                  },
                                  dimensions.width
                                )}
                              >
                                {/* Price */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: palettes.App.TextPlaceholder,
                                      fontFamily: 'Inter_400Regular',
                                      fontSize: 14,
                                      textTransform: 'capitalize',
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Order Paid Status'}
                                </Text>
                                {/* Price */}
                                <Text
                                  accessible={true}
                                  selectable={false}
                                  style={StyleSheet.applyWidth(
                                    {
                                      color: theme.colors.text.strong,
                                      fontFamily: 'Inter_500Medium',
                                      fontSize: 17,
                                      paddingLeft: 10,
                                    },
                                    dimensions.width
                                  )}
                                >
                                  {'Paid'}
                                </Text>
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      </>
                    );
                  }}
                  showsHorizontalScrollIndicator={true}
                  showsVerticalScrollIndicator={true}
                  style={StyleSheet.applyWidth(
                    { width: '100%' },
                    dimensions.width
                  )}
                  contentContainerStyle={StyleSheet.applyWidth(
                    { flex: 1 },
                    dimensions.width
                  )}
                />
              );
            }}
          </DraftbitApi.FetchPostsGET>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(DailyOrdersScreen);
