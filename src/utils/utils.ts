import { QueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { RequestOptions } from '../types'

export const convertToUppercaseChars = (quote: string): string[] => {
    return quote.split('').map((char) => char.toUpperCase())
}

export const getUniqueLetters = (
    uppercaseChars: string[] | undefined
): string[] => {
    const upperCaseLetters = uppercaseChars?.filter((char) =>
        /[A-Z]/.test(char)
    )
    const uniqueLetters = [...new Set(upperCaseLetters)]

    return uniqueLetters
}

export const apiRequest = async (
    url: string,
    options: RequestOptions = { method: 'get' }
) => {
    const headers = {
        'Content-Type': 'application/json',
    }
    const request = { url: `${url}`, headers, ...options }
    let result = null

    try {
        result = axios(request)
        return result
    } catch (error) {
        console.error('Request failed with error:', error)
    }
}

export const calculateHighScore = (
    errors: number,
    uniqueLetters: number,
    length: number,
    time: number
): number => {
    const scoreFactor = 100000
    const errorFactor = scoreFactor / errors
    const timeFactor = scoreFactor / time

    const highScore = errorFactor + uniqueLetters + length + timeFactor

    return Math.ceil(highScore)
}

export const queryClient = new QueryClient()
