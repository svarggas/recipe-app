const Card = ({ recipe }) => {
    return (
        <div className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
            <div className="flex items-end justify-end h-56 w-full bg-cover" 
                style={{ backgroundImage: `url(${recipe.image})` }}>
                <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" >
                        <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            <div className="px-5 py-3">
                <h3 className="text-gray-700 uppercase">
                    { recipe.label }
                </h3>
                <span className="text-gray-500 mt-2">
                    { recipe.source }
                </span>
            </div>
        </div>
    )
}

export default Card