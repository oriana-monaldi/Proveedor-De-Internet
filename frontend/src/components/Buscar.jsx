import React, { useState } from "react";

const SearchIcon = () => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

export default function Buscar({
    onSearch = () => {},
    placeholder = "Buscar...",
}) {
    const [searchQuery, setSearchQuery] = useState("");
    const handleChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        onSearch(query); 
    };
    return (
    <div className="relative w-full max-w-sm">
        <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleChange}
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <SearchIcon />
        </div>
    </div>
    );
}