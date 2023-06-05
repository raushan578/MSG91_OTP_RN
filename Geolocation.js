// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, Button, Image } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import * as Location from 'expo-location';

// const App = () => {
//   const [marker, setMarker] = useState(null);
//   const [currentLocation, setCurrentLocation] = useState(null);

//   const getCurrentLocation = async () => {
//     try {
//       let { status } = await Location.requestForegroundPermissionsAsync();
//       if (status !== 'granted') {
//         console.log('Permission to access location was denied');
//         return;
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       const { latitude, longitude } = location.coords;
//       setCurrentLocation({ latitude, longitude });
//       setMarker({ latitude, longitude });
//       console.log('Current Location:', latitude, longitude);
//     } catch (error) {
//       console.log('Error getting current location:', error);
//     }
//   };

//   useEffect(() => {
//     getCurrentLocation();
//   }, []);

//   const handleMarkerPress = ({ nativeEvent: { coordinate } }) => {
//     setMarker(coordinate);
//     console.log(coordinate);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView style={{ flex: 1 }} onPress={handleMarkerPress}>
//         {marker && (
//           <Marker coordinate={marker}>
//             <Image
//               source={require('./assets/pin.png')}
//               style={{ width: 40, height: 40 }}
//             />
//           </Marker>
//         )}
//       </MapView>
//       <Button title="Get Current Location" onPress={getCurrentLocation} />
//     </View>
//   );
// };

// export default App;



// import React, { useState } from 'react';
// import { View, StyleSheet } from 'react-native';
// import MapView, { Marker } from 'react-native-maps';
// import { Image } from 'react-native';

// const App = () => {
//   const [marker, setMarker] = useState(null);

//   const handleMapPress = (event) => {
//     const { coordinate } = event.nativeEvent;
//     setMarker(coordinate);
//     console.log(coordinate);
//   };

//   return (
//     <View style={{ flex: 1 }}>
//       <MapView
//         style={{ flex: 1 }}
//         onPress={handleMapPress}
//       >
//         {marker && (
//           <Marker coordinate={marker}  >
//             <Image
//     source={require('./assets/pin.png')}
//     style={{ width: 40, height: 40 }} // Adjust the dimensions as needed
//   />

//           </Marker>
//         )}
//       </MapView>
//     </View>
//   );
// };
// export default App;
