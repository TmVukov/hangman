import { useQuery } from '@tanstack/react-query'
import { Dispatch, SetStateAction } from 'react'
import { fetchNewQuote } from '../api'

export const useFetchNewQuote = (
    setErrorCount: Dispatch<SetStateAction<number>>
) => {
    return useQuery({
        queryKey: ['newQuote'],
        queryFn: () => {
            setErrorCount(0)
            return fetchNewQuote()
        },
    })
}
