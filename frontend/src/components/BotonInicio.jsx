import { useState } from "react";

export default function BotonInicio() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <button
            className={`
                px-10 py-4 rounded-lg text-xl font-bold
                transition-all duration-300 ease-in-out
                ${
                    isHovered
                        ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50 scale-105"
                        : "bg-gray-200 text-gray-700 shadow-md"
                }
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            Comenzar
        </button>
    );
}
