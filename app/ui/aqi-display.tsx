export default function AqiDisplay({ aqi, aqiLabel, locationName, locationDescription, date, color }: {
    aqi: string,
    aqiLabel: string,
    locationName: string,
    locationDescription: string,
    date: string,
    color: string,
}) {

    return (
        <>
            <div className="flex flex-col">
                <p className="text-lg">
                    {locationDescription}
                </p>
                <p className={`text-9xl ${color}`}>
                    {aqi.toString()}
                </p>
                <p>
                    {aqiLabel}
                </p>
                <p>
                    {`AQI last updated on ${date}`}
                </p>
            </div>
        </>
    )
}
