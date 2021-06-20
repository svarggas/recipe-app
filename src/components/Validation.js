const Validation = ({msg}) => {
    return (
        <article className="sm:grid grid-cols-5 bg-white p-7 relative lg:max-w-2xl sm:p-4 rounded-lg lg:col-span-2 lg:ml-20">
            <img src="https://image.flaticon.com/icons/png/512/3127/3127430.png" alt="" className="w-full rounded-lg" />
            <div className="pt-5 self-center sm:pt-0 sm:pl-10 col-span-4">
                <h2 className="text-gray-800 text-xl font-bold">
                    { msg }
                </h2>
            </div>
        </article>
    )
}

export default Validation
