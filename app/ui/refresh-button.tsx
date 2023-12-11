import { MouseEventHandler } from "react";

export default function RefreshButton({ onClick }: { onClick: Function }) {
    return (
        <button
            onClick={(e) => onClick(e)}
            type="button"
            className="bg-transparent hover:bg-blue-500 hover:bg-opacity-10 text-blue-700 hover:text-white active:text-gray-700 font-semibold border-2 border-gray-400 rounded-md py-2 px-4 transition duration-150 ease-in-out cursor-pointer"
        >
            refresh data
        </button>
    )
}
