import React from 'react';
import { MapMarker, MapView } from '@draftbit/maps';
import { Button, Icon, ScreenContainer, withTheme } from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const RecipientAddressScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasBottomSafeArea={false}
      hasSafeArea={true}
      scrollable={true}
      style={StyleSheet.applyWidth({ gap: 24 }, dimensions.width)}
    >
      {/* Container */}
      <View
        style={StyleSheet.applyWidth(
          { backgroundColor: theme.colors.background.base, flex: 1, gap: 24 },
          dimensions.width
        )}
      >
        {/* Map View */}
        <View
          style={StyleSheet.applyWidth(
            { borderRadius: 0, height: 240 },
            dimensions.width
          )}
        >
          <MapView
            autoClusterMarkers={false}
            autoClusterMarkersDistanceMeters={10000}
            loadingEnabled={true}
            moveOnMarkerPress={true}
            rotateEnabled={true}
            scrollEnabled={true}
            showsPointsOfInterest={true}
            zoomEnabled={true}
            apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
            followsUserLocation={true}
            latitude={26.2389}
            loadingIndicatorColor={palettes.ShipIt['App Green']}
            longitude={73.0243}
            showsCompass={true}
            showsUserLocation={true}
            style={StyleSheet.applyWidth(
              { borderRadius: 12, flex: 1, height: 220, overflow: 'hidden' },
              dimensions.width
            )}
            zoom={5}
          >
            <MapMarker
              androidUseDefaultIconImplementation={false}
              pinImageSize={50}
              tracksViewChanges={true}
              description={'My Test Address'}
              flat={true}
              latitude={26.2389}
              longitude={73.0243}
              pinColor={palettes.ShipIt['Custom Color_4']}
              title={'Arvind Limba'}
            />
            <MapMarker
              androidUseDefaultIconImplementation={false}
              pinImageSize={50}
              tracksViewChanges={true}
              description={'My Test Address'}
              flat={true}
              latitude={26.9124}
              longitude={75.7873}
              pinColor={palettes.ShipIt['App Green']}
              title={'Arvind Limba'}
            />
          </MapView>
        </View>
        {/* Address View */}
        <View
          style={StyleSheet.applyWidth(
            { gap: 16, marginLeft: 32, marginRight: 32 },
            dimensions.width
          )}
        >
          {/* From */}
          <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
            {/* heading */}
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
              {'from'}
            </Text>
            {/* From View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.ShipIt['BG Gray'],
                  borderRadius: 12,
                  flexDirection: 'row',
                  gap: 16,
                  height: 50,
                  padding: 16,
                },
                dimensions.width
              )}
            >
              {/* pin */}
              <Icon
                size={24}
                color={palettes.ShipIt['Custom Color_4']}
                name={'Entypo/location-pin'}
              />
              {/* address */}
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.strong },
                  dimensions.width
                )}
              >
                {'some test dummy address, 2012'}
              </Text>
            </View>
          </View>
          {/* To */}
          <View style={StyleSheet.applyWidth({ gap: 8 }, dimensions.width)}>
            {/* heading */}
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_400Regular',
                  textAlign: 'left',
                  textTransform: 'capitalize',
                },
                dimensions.width
              )}
            >
              {'to'}
            </Text>
            {/* To View */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  backgroundColor: palettes.ShipIt['BG Gray'],
                  borderRadius: 12,
                  flexDirection: 'row',
                  gap: 16,
                  height: 50,
                  padding: 16,
                },
                dimensions.width
              )}
            >
              {/* pin */}
              <Icon
                size={24}
                color={palettes.ShipIt['App Green']}
                name={'Entypo/location-pin'}
              />
              {/* address */}
              <Text
                accessible={true}
                selectable={false}
                ellipsizeMode={'tail'}
                numberOfLines={1}
                style={StyleSheet.applyWidth(
                  { color: theme.colors.text.strong },
                  dimensions.width
                )}
              >
                {'another test dummy address, 2022'}
              </Text>
            </View>
          </View>
        </View>
        {/* User View */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.ShipIt['BG Gray'],
              borderRadius: 12,
              flexDirection: 'row',
              gap: 20,
              height: 100,
              marginLeft: 32,
              marginRight: 32,
              overflow: 'hidden',
            },
            dimensions.width
          )}
        >
          {/* Picture View */}
          <View>
            <Image
              resizeMode={'cover'}
              source={imageSource('https://picsum.photos/200/200')}
              style={StyleSheet.applyWidth(
                { height: '100%', width: 100 },
                dimensions.width
              )}
            />
          </View>
          {/* Details */}
          <View
            style={StyleSheet.applyWidth(
              { flex: 1, justifyContent: 'center' },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_600SemiBold',
                  fontSize: 16,
                },
                dimensions.width
              )}
            >
              {'Draftbit AL'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              ellipsizeMode={'tail'}
              numberOfLines={1}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.ShipIt['text placeholder'],
                  fontFamily: 'Inter_400Regular',
                  fontSize: 12,
                },
                dimensions.width
              )}
            >
              {'MD20215'}
            </Text>
          </View>
          {/* Chat */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                backgroundColor: palettes.ShipIt['Green BG'],
                justifyContent: 'center',
                width: 70,
              },
              dimensions.width
            )}
          >
            <Icon
              size={24}
              color={palettes.ShipIt['App Green']}
              name={'Ionicons/chatbubble-ellipses-sharp'}
            />
          </View>
        </View>
        {/* Search Courier Btn */}
        <Button
          accessible={true}
          iconPosition={'left'}
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
          disabled={false}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: palettes.ShipIt['App Green'],
              borderRadius: 12,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 50,
              marginBottom: 32,
              marginLeft: 32,
              marginRight: 32,
            },
            dimensions.width
          )}
          title={'search courier'}
        />
      </View>
    </ScreenContainer>
  );
};

export default withTheme(RecipientAddressScreen);
