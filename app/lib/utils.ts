export type AqiData = {
    aqi: string,
    aqiLabel: string,
    locationName: string,
    locationDescription: string,
    date: string,
    color: string,
    error: boolean
};

export const initialAqiData = {
    aqi: "0",
    aqiLabel: "",
    locationName: "",
    locationDescription: "",
    date: "",
    color: "",
    error: false,
}

export function capitalize(name: string): string {
    function capsFn(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    const re = /\s+/;

    const words = name.trim().split(re)
    const resultName = words.reduce((acc: string, w: string) => acc.concat(' '.concat(capsFn(w))), '')
    return resultName.trim();
}

export function formatLocation(name: string): string {
    return name.trim().replaceAll(' ', '-');
}
