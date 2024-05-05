export type Quote = {
    _id: string
    author: string
    content: string
    length: number
}

export type Result = {
    quoteId: string
    length: number
    uniqueCharacters: number
    userName: string
    errors: number
    duration: number
}

export type RequestOptions = {
    method?: string
    data?: Result
}

export type Score = {
    duration: number
    errors: number
    length: number
    uniqueCharacters: number
    userName: string
}

export type QuoteProps = {
    quote: string
    matchedLetters: string[]
}

export type LettersProps = {
    handleClickedLetter: (clickedLetter: string) => void
}
