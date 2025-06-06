import React from 'react';
import { MapView } from '@draftbit/maps';
import {
  Button,
  ScreenContainer,
  SimpleStyleFlatList,
  withTheme,
} from '@draftbit/ui';
import { ActivityIndicator, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as SepticHubSupabaseApi from '../apis/SepticHubSupabaseApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const OrderDetailsScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      scrollable={false}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1, gap: 32 },
          dimensions.width
        )}
      >
        {/* Tracking Details View */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 24, overflow: 'hidden' },
            dimensions.width
          )}
        >
          {/* MapWrapper */}
          <View
            style={StyleSheet.applyWidth(
              { height: 220, overflow: 'hidden' },
              dimensions.width
            )}
          >
            <>
              {!'{{data.OrderAddress.house.latitude}}' ? null : (
                <MapView
                  autoClusterMarkers={false}
                  autoClusterMarkersDistanceMeters={10000}
                  keyExtractor={(mapViewData, index) =>
                    mapViewData?.id ??
                    mapViewData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(mapViewData)
                  }
                  listKey={
                    'Container->Tracking Details View->MapWrapper->Map View'
                  }
                  loadingEnabled={true}
                  markersData={'[data.OrderAddress]'}
                  moveOnMarkerPress={true}
                  renderItem={({ item, index }) => {
                    const mapViewData = item;
                    return null;
                  }}
                  rotateEnabled={true}
                  scrollEnabled={true}
                  showsPointsOfInterest={true}
                  zoom={8}
                  zoomEnabled={true}
                  apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
                  followsUserLocation={true}
                  latitude={Constants['Lattitude']}
                  loadingIndicatorColor={palettes.App['Custom Color 2']}
                  longitude={Constants['longitude']}
                  showsCompass={true}
                  showsUserLocation={true}
                />
              )}
            </>
          </View>

          <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
            {/* StopNumber */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  marginLeft: 32,
                  marginRight: 32,
                },
                dimensions.width
              )}
            >
              {'Order {{}}'}
            </Text>
            {/* CheckIn */}
            <Button
              accessible={true}
              iconPosition={'left'}
              disabled={false}
              style={StyleSheet.applyWidth(
                {
                  backgroundColor: 'rgb(125, 183, 195)',
                  borderRadius: 12,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                  height: 50,
                  marginLeft: 32,
                  marginRight: 32,
                  textAlign: 'center',
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
              title={'Check-In'}
            />
          </View>
        </View>
        {/* OrderDetails */}
        <View style={StyleSheet.applyWidth({ gap: 12 }, dimensions.width)}>
          {/* OrderDetails */}
          <View
            style={StyleSheet.applyWidth(
              { gap: 8, paddingBottom: 32 },
              dimensions.width
            )}
          >
            <SepticHubSupabaseApi.FetchGetOrdersGET>
              {({ loading, error, data, refetchGetOrders }) => {
                const fetchData = data?.json;
                if (loading) {
                  return <ActivityIndicator />;
                }

                if (error || data?.status < 200 || data?.status >= 300) {
                  return <ActivityIndicator />;
                }

                return (
                  <SimpleStyleFlatList
                    data={(() => {
                      const e = fetchData;
                      console.log(e);
                      return e;
                    })()}
                    decelerationRate={'normal'}
                    horizontal={false}
                    inverted={false}
                    keyExtractor={(listData, index) => listData?.service_type}
                    keyboardShouldPersistTaps={'never'}
                    listKey={
                      'Container->OrderDetails->OrderDetails->Fetch->List'
                    }
                    nestedScrollEnabled={false}
                    numColumns={1}
                    onEndReachedThreshold={0.5}
                    pagingEnabled={false}
                    renderItem={({ item, index }) => {
                      const listData = item;
                      return (
                        <View>
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                theme.typography.body1,
                                {}
                              ),
                              dimensions.width
                            )}
                          >
                            {listData?.service_type}
                          </Text>
                        </View>
                      );
                    }}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                    snapToAlignment={'start'}
                    style={StyleSheet.applyWidth(
                      {
                        flexDirection: 'column',
                        paddingLeft: 32,
                        paddingRight: 32,
                        right: -25,
                      },
                      dimensions.width
                    )}
                  />
                );
              }}
            </SepticHubSupabaseApi.FetchGetOrdersGET>
          </View>
        </View>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(OrderDetailsScreen);
