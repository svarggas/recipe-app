import React from 'react'

const Modal = ({ modalState, changeModalState, recipe }) => {

    const modalStyle = {
        zIndex: 99,
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '50px',
        minWidth: '1280px',
        height: 'auto'
    }

    const overlay = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.7)',
        zIndex: 99
    }

    return (
        <div>

            {   modalState ?

                <div>
                    <div style={overlay}></div>
                    <div style={modalStyle}>

                    <div className="min-w-screen min-h-screen flex items-center p-5 lg:p-10 overflow-hidden relative">
                            <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 mx-auto text-gray-800 relative md:text-left">

                                <button className="buttons ml-auto flex text-gray-600 text-right" onClick={() => changeModalState()}>
                                    X
                                </button>

                                <div className="pb-5 text-center">
                                    <span className="text-4xl font-extrabold">
                                        { recipe.label }
                                    </span>
                                    
                                </div>

                                <div className="md:flex items-center -mx-10">

                                    <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0 flex justify-around">
                                        <img src={recipe.image} alt="" className="w-12/12 relative rounded-full shadow-2xl"  />
                                    </div>

                                    <div className="w-full md:w-1/2 px-10">

                                        <div className="mb-10">
                                            <h1 className="font-bold uppercase text-2xl mb-5">
                                                Ingredients
                                            </h1>
                                            <ul className="text-sm list-disc">
                                                {
                                                    (recipe.ingredients).map( (ingredient, index) => {
                                                        return (
                                                            <li key={`${index}_${ingredient.foodId}`}>{ingredient.text}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>

                                        <p className="text-xl text-gray-600">
                                            Contains
                                        </p>

                                        <div className="flex flex-grid flex-wrap">
                                            {
                                                (recipe.cautions).map((meal, index) => {
                                                    return (
                                                        <div key={`${index}_${meal}`}>
                                                            <div className="align-bottom mt-4 mr-1">
                                                                <span className="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full p-10 py-2 font-semibold capitalize">
                                                                    { meal }
                                                                </span>
                                                            </div>
                                                            <span> </span>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                : null

            }

        </div>
    )
}

export default Modal