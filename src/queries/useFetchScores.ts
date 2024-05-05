import { useQuery } from '@tanstack/react-query'
import { fetchScores } from '../api'

export const useFetchScores = () => {
    return useQuery({
        queryKey: ['scores'],
        queryFn: fetchScores,
    })
}
