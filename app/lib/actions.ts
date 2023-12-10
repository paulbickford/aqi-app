'use server';

import type { AqiData } from '@/app/lib/utils';
import { capitalize, initialAqiData } from "@/app/lib/utils";

type AqiDescription = {
    label: string,
    color: string,
}

// Make environmental variable
const token = process.env.AQI_TOKEN;

const aqiUrl = 'https://api.waqi.info/feed/';



function getAqiDescription(aqiString: string): AqiDescription {
    const aqi = Number(aqiString) || 0;

    if (aqi > 300) {
        return {
            label: 'Hazardous',
            color: 'bg-red-900',
        };
    } else if (aqi > 200) {
        return {
            label: 'Very Unhealthy',
            color: 'bg-purple-700'
        };
    } else if (aqi > 150) {
        return {
            label: 'Unhealthy',
            color: 'bg-red-600'
        };
    } else if (aqi > 100) {
        return {
            label: 'Unhealthy for Sensitive Groups',
            color: 'bg-orange-400'
        };
    } else if (aqi > 50) {
        return {
            label: 'Moderate',
            color: 'bg-yellow-300'
        };
    } else if (aqi > -1 && aqi < 51) {
        return {
            label: 'Good',
            color: 'bg-emerald-600'
        };
    } else {
        throw new Error(`AQI not valid ${aqi}`);
    }
}

function getFormattedDate(dateString: string) {
    try {
        const date = new Date(dateString);
        return date.toLocaleString();
    } catch (error) {
        throw new Error("Date not valid");
    }
}

export async function getAqiData(prevState: AqiData, location: string) {
    const url = `${aqiUrl}${location}/?token=${token}`;
    let response = await fetch(url, { cache: 'force-cache' });
    let aqiResponse = await response.json();
    let newState: AqiData;

    if (aqiResponse.status === 'error') {
        newState = initialAqiData;
        newState.error = true;
    } else {
        const aqi = aqiResponse.data.aqi;
        newState = {
            aqi: aqi,
            aqiLabel: getAqiDescription(aqi).label,
            locationName: capitalize(location),
            locationDescription: aqiResponse.data.city.name,
            date: getFormattedDate(aqiResponse.data.time.iso),
            color: getAqiDescription(aqi).color,
            error: false,
        }
    }

    console.log(aqiResponse);

    return newState;
}
