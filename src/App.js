import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { result } from 'lodash'

import Header from './components/Header'
import Card from './components/Card'
import Validation from './components/Validation'

const App = () => {

    const firstDisplayedMessage = "Please enter a plate you are looking for"
    const api_key = '9aeb726d5f4f538d40e98cafd929766a' 
    const api_id = 'e721a268'

    const [term, setTerm] = useState('')
    const [validateMessage, setValidateMessage] = useState(firstDisplayedMessage)
    const [results, setResults] = useState([])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://api.edamam.com/search', {
                params: {
                    q: term,
                    app_id: api_id,
                    app_key: api_key,
                    format: 'json'
                }
            })
            setResults(data.hits)
            console.log(results.hits)
        }

        if(!term && !results.length) setValidateMessage('Please enter a plate you are looking for')
        if(term && results.length === 0) setValidateMessage('No results found!')

        if (term && !result.length) {
            //First search
            search()
        } else {
            // Limit the amout of searches
            const timeOutId = setTimeout(() => {
                if (term) search()
            }, 500)

            // Clean up function 
            return () => {
                clearTimeout(timeOutId)
            }
        }

    }, [term])

    return (
        <div className="bg-white">
            
            <Header setTerm={setTerm} />

            <main className="my-8">
                <div className="container mx-auto px-6">
                    <div className="md:h-full md:items-center">
                        <div className="mt-16">

                        {
                            results.length === 0 ?

                            <div className="ui flex justify-around items-center">
                                <div className="w-6/12 shadow-xl rounded-lg">
                                    <Validation msg={validateMessage} />
                                </div>
                            </div>

                            : 
                        
                            <div>
                                <h3 className="text-gray-600 text-2xl font-medium">Recipies</h3>
                                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">

                                    {
                                        results.map( result => {
                                            return (
                                                <div key={result.recipe.uri}>
                                                    <Card recipe={result.recipe} />
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        }

                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default App