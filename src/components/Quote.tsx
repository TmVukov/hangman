import React from 'react'
import { QuoteProps } from '../types'

const Quote = ({ quote, matchedLetters }: QuoteProps) => {
    const characters = quote.split('')

    return (
        <div className="w-3/4 text-center">
            {characters.map((char, index) => {
                const isLetter = /\w/.test(char)
                const isMatch = matchedLetters.includes(char.toUpperCase())

                const charClasses = isLetter
                    ? `mx-1 mb-3 px-2 border-b-2 border-solid ${isMatch ? 'text-black' : 'text-transparent'}`
                    : 'mx-2 font-bold'

                return (
                    <React.Fragment key={index}>
                        <span className={charClasses}>{char}</span>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default Quote
