import { MouseEventHandler } from "react";

export default function RefreshButton({ onClick }: { onClick: MouseEventHandler }) {

    return (
        <button
            tabIndex={4}
            onClick={onClick}
            type="button"
            className="bg-transparent hover:bg-blue-500 hover:bg-opacity-10 text-blue-700 hover:text-white active:text-gray-700 font-semibold border-2 hover:border-transparent border-gray-400 active:border-primary-700 focus:ring-2 rounded-md py-2 px-4 transition duration-150 ease-in-out cursor-pointer"
        >
            refresh data
        </button>
    )
}
