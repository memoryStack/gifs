import { useEffect, useState } from "react";
import { fetch } from '../api/apirequests'

export const useGifsApiHook = (searchText) => {
    const [offset, setOffset] = useState(0)
    const [error, setError] = useState('')

    const [ resultItems, setResultItems ] = useState([])

    const onRequestFullfilled = (response) => {
        console.log('@@@@@ resp', response)
        // setResultItems(response.data.data)

        const newItems = response.data.data
        setResultItems(olderItem => olderItem.concat(newItems))

    }

    const onRequestRejected = (error) => {
        
    }



    const fetchPage = (searchText) => {
        // call api 

        const url = `https://api.giphy.com/v1/gifs/search?q=${searchText}&api_key=sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh&offset=${offset}`

        fetch(url).then(onRequestFullfilled, onRequestRejected)
        .catch((error) => {
            console.log(error)
        })
    }

    return [fetchPage, resultItems, error ]

}

// interview@barraiser.com