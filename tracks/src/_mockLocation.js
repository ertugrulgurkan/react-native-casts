import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      accuracy: 15.237000465393066,
      altitude: 99.5999984741211,
      altitudeAccuracy: 2,
      heading: 0,
      latitude: 41.0361557  + increment * tenMetersWithDegrees,
      longitude: 28.9036257 + increment * tenMetersWithDegrees,
      speed: 0,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
