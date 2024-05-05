import { useMutation } from '@tanstack/react-query'
import { sendResult } from '../api'

export const useSendResult = () => {
    return useMutation({
        mutationFn: sendResult,
    })
}