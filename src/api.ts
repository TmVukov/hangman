import { HIGHSCORES_URL, NEW_QUOTE_URL } from './constants'
import { Quote, Result, Score } from './types'
import { apiRequest } from './utils/utils'

export const fetchNewQuote = async (): Promise<Quote> => {
    const response = await apiRequest(NEW_QUOTE_URL)
    return response?.data
}

export const fetchScores = async (): Promise<Score[]> => {
    const response = await apiRequest(HIGHSCORES_URL)
    return response?.data
}

export const sendResult = async (data: Result) => {
    const response = await apiRequest(HIGHSCORES_URL, {
        method: 'post',
        data: data,
    })
    return response?.data
}
