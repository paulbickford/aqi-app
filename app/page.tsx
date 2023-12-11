'use client';

import { getCookie, setCookie } from 'cookies-next';
import { useState, useEffect, MouseEventHandler } from 'react';
import { useFormState } from "react-dom";
import { getAqiData } from "@/app/lib/actions";
import LocationGroup from '@/app/ui/location-group';
import AqiDisplay from '@/app/ui/aqi-display';
import RefreshButton from '@/app/ui/refresh-button';
import { capitalize, formatLocation, initialAqiData } from '@/app/lib/utils';

const locationErrors = {
  geoFailed: 'Your location cannot be determined, please enter your city',
  cityNotFound: 'Cannot find your city, try another',
};

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [location, setLocation] = useState('myCity');
  const [myLocation, setMyLocation] = useState('myCity');
  const [locationError, setLocationError] = useState(false);
  const [locationErrorMessage, setLocationErrorMessage] = useState('');
  const [aqiData, updateAqiData] = useFormState(getAqiData, initialAqiData);

  useEffect(() => {
    if (!isLoading) {
      const error = getCookie('locationError') || 'true';
      let city = getCookie('locationName') || '';
      if (!city || error === 'true') {
        handleLocationError(locationErrors.geoFailed);
      } else {
        setMyLocation(capitalize(city));
        updateAqiData(city);
      }
    }
    setLoading(true);
  }, []);

  useEffect(() => {
    if (aqiData.error) {
      handleLocationError(locationErrors.cityNotFound);
    }
  }, []);

  const handleLocationChange = (l: string) => {
    updateAqiData(l);
    setLocation(l);
  };

  const handleRefresh = (e: MouseEvent) => {
    handleLocationChange(location);
  };

  const handleLocationError = (errorMessage: string) => {
    setLocationError(true);
    setLocationErrorMessage(errorMessage)
  };

  const handleSetMyLocation = (formData: FormData) => {
    const newMyLocation = formData.get('my-location') as string;
    if (!newMyLocation) {
      setLocationErrorMessage(locationErrors.cityNotFound)
    } else {
      setLocationError(false);
      setMyLocation(formatLocation(newMyLocation));
      handleLocationChange(newMyLocation);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className='w-full flex flex-row justify-center'>
        <p className='text-lg md:text-4xl'>
          Air Quality Index Location Viewer
        </p>
      </div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <AqiDisplay
          aqi={aqiData.aqi}
          aqiLabel={aqiData.aqiLabel}
          locationName={aqiData.locationName}
          locationDescription={aqiData.locationDescription}
          date={aqiData.date}
          color={aqiData.color}
        />
      </div>
      <LocationGroup
        location={aqiData.locationName}
        myLocation={myLocation}
        onChange={(l: string) => handleLocationChange(l)}
      />
      <div id="location-error" aria-live="polite" aria-atomic="true">
        {locationError &&
          (
            <form action={handleSetMyLocation}>
              <div className="mb-4">
                <label htmlFor="my-location" className="mt-2 text-lg text-red-500">
                  {locationErrorMessage}
                </label>
                <div className="relative mt-2 rounded-md">
                  <div className="relative">
                    <input
                      id="my-location"
                      name="my-location"
                      type="text"
                      placeholder="Enter city"
                      className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>
              <button >
              </button>
            </form >
          )}
      </div>
      <RefreshButton onClick={handleRefresh} />
    </main>
  )
}
