export default function LocationGroup({ location, myLocation, onChange }: {
    location: string,
    myLocation: string,
    onChange: Function
}) {
    return (
        <>
            <fieldset>
                <legend className="mb-2 block text-sm font-medium">
                    pick location
                </legend>
                <div className="lg:mb-24 grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left min-h-fit">
                    <div className="relative text-2xl font-semibold">
                        <input
                            className="absolute opacity-0 visible"
                            id="location-0"
                            name="location"
                            type="radio"
                            value={myLocation}
                            checked={location === myLocation}
                            onChange={e => onChange(e.target.value)}
                        />
                        <label
                            htmlFor='location-0'
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 cursor-pointer"
                        >
                            <div className="flex flex-col justify-center select-none" >
                                <h2 className="mb-3 text-2xl font-semibold">
                                    My Location
                                </h2>
                            </div>
                        </label>
                    </div>
                    <div className="relative text-2xl font-semibold">
                        <input
                            className="absolute opacity-0 visible"
                            id='location-1'
                            name="location"
                            type="radio"
                            value='seattle'
                            checked={location === 'seattle'}
                            onChange={e => onChange(e.target.value)}
                        />
                        <label
                            htmlFor='location-1'
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 cursor-pointer"
                        >
                            <div className="flex flex-row justify-center" >
                                <h2 className="mb-3 text-2xl font-semibold select-none">
                                    Seattle
                                </h2>
                            </div>
                        </label>
                    </div>
                    <div className="relative text-2xl font-semibold">
                        <input
                            className="absolute opacity-0 visible"
                            id='location-2'
                            name="location"
                            type="radio"
                            value='paris'
                            checked={location === 'paris'}
                            onChange={e => onChange(e.target.value)}
                        />
                        <label
                            htmlFor={'location-2'}
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 cursor-pointer"
                        >
                            <div className="flex flex-row justify-center" >
                                <h2 className="mb-3 text-2xl font-semibold select-none">
                                    Paris
                                </h2>
                            </div>
                        </label>
                    </div>
                    <div className="relative text-2xl font-semibold">
                        <input
                            className="absolute opacity-0 visible"
                            id='location-3'
                            name="location"
                            type="radio"
                            value='new-delhi'
                            checked={location === 'new-delhi'}
                            onChange={e => onChange(e.target.value)}
                        />
                        <label
                            htmlFor='location-3'
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 cursor-pointer"
                        >
                            <div className="flex flex-row justify-center" >
                                <h2 className="mb-3 text-2xl font-semibold select-none">
                                    New Delhi
                                </h2>
                            </div>
                        </label>
                    </div>
                </div>
            </fieldset>
        </>
    )
}
