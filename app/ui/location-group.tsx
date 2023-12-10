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
                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <div className="mb-3 text-2xl font-semibold">
                        <input
                            className="hidden"
                            id="location-0"
                            name="location"
                            type="radio"
                            value={myLocation}
                            checked={location === myLocation}
                            onChange={e => onChange(e.target.value)}
                            aria-describedby='location-error'
                        />
                        <label
                            htmlFor='location-0'
                            tabIndex={0}
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 focus:ring-2 cursor-pointer"
                        >
                            <div className="flex flex-col justify-center select-none" >
                                <h2 className="mb-3 text-2xl font-semibold">
                                    My Location
                                </h2>
                            </div>
                        </label>
                    </div>
                    <div className="mb-3 text-2xl font-semibold">
                        <input
                            className="hidden"
                            id='location-1'
                            name="location"
                            type="radio"
                            value='seattle'
                            checked={location === 'seattle'}
                            onChange={e => onChange(e.target.value)}
                            aria-describedby='location-error'
                        />
                        <label
                            htmlFor='location-1'
                            tabIndex={1}
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 focus:ring-2 cursor-pointer"
                        >
                            <div className="flex flex-row justify-center" >
                                <h2 className="mb-3 text-2xl font-semibold select-none">
                                    Seattle
                                </h2>
                            </div>
                        </label>
                    </div>
                    <div className="mb-3 text-2xl font-semibold">
                        <input
                            className="hidden"
                            id='location-2'
                            name="location"
                            type="radio"
                            value='paris'
                            checked={location === 'paris'}
                            onChange={e => onChange(e.target.value)}
                            aria-describedby='location-error'
                        />
                        <label
                            htmlFor={'location-2'}
                            tabIndex={2}
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 focus:ring-2 cursor-pointer"
                        >
                            <div className="flex flex-row justify-center" >
                                <h2 className="mb-3 text-2xl font-semibold select-none">
                                    Paris
                                </h2>
                            </div>
                        </label>
                    </div>
                    <div className="mb-3 text-2xl font-semibold">
                        <input
                            className="hidden"
                            id='location-3'
                            name="location"
                            type="radio"
                            value='new-delhi'
                            checked={location === 'new-delhi'}
                            onChange={e => onChange(e.target.value)}
                            aria-describedby='location-error'
                        />
                        <label
                            htmlFor='location-3'
                            tabIndex={3}
                            className="flex flex-col p-4 border-2 border-gray-400 focus:border-primary-700 focus:ring-2 cursor-pointer"
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
