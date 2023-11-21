'use client';

import { GoogleMap, MarkerF, useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';

import { mapStyles } from './map-styles';

export const MapComponent = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });
  if (!isLoaded) return <div />;
  return <Map />;
};

const Map = () => {
  const center = useMemo(() => ({ lat: 52.7334506, lng: 15.2334475 }), []);

  return (
    <GoogleMap
      zoom={15}
      center={center}
      options={{
        styles: mapStyles,
        disableDefaultUI: true,
      }}
      mapContainerClassName="h-full"
    >
      <MarkerF position={center} data-marker="true" />
    </GoogleMap>
  );
};
