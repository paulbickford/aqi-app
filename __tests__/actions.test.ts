import '@testing-library/jest-dom';
import { getAqiData } from '@/app/lib/actions';

const testResponse = {
    status: 'ok',
    data: {
        aqi: 100,
        idx: 10168,
        attributions: [{}, {}, {}],
        city: {
            geo: [],
            name: 'Camden Spruce St, NewJersey, USA',
            url: 'https://aqicn.org/city/usa/newjersey/camden-spruce-st',
            location: ''
        },
        dominentpol: 'pm25',
        iaqi: {
            co: {},
            h: {},
            no2: {},
            o3: {},
            p: {},
            pm25: {},
            so2: {},
            t: {},
            w: {},
            wg: {}
        },
        time: {
            s: '2023-12-09 15:00:00',
            tz: '-05:00',
            v: 1702134000,
            iso: '2023-12-09T15:00:00-05:00'
        },
        forecast: { daily: {} },
        debug: { sync: '2023-12-10T05:50:52+09:00' }
    }
};

const testAqiData = {
    aqi: "100",
    aqiLabel: "aqiLabel",
    locationName: "locationName",
    locationDescription: "locationDescription",
    date: "date",
    color: "color",
};

export const assetsFetchMock = () => Promise.resolve({
    ok: true,
    status: 200,
    json: async () => { testResponse }
} as Response);

describe('getAqiData', () => {
    let fetchMock: any = undefined;

    beforeEach(() => {
        fetchMock = jest.spyOn(global, "fetch")
            .mockImplementation(assetsFetchMock);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('calls fetch', async () => {
        const baseUrl = "https://api.waqi.info/feed/";
        await getAqiData(testAqiData, 'testcity');
        expect(fetchMock).toHaveBeenCalled();
        expect(fetchMock).toHaveBeenCalledWith(baseUrl);
    })

    it('returns correct data', async () => {
        const response = await getAqiData(testAqiData, 'testcity');
        expect(response.aqi).toBe('100');
        expect(response.aqiLabel).toBe('Moderate');
        expect(response.locationName).toBe('Testcity');
        expect(response.locationDescription).toBe('Camden Spruce St, NewJersey, USA');
        expect(response.date).toBe('12/9/2023, 3:00:00 PM');
        expect(response.color).toBe('bg-yellow-300');
    });
})