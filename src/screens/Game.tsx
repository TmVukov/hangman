import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Letters from '../components/Letters'
import Quote from '../components/Quote'
import { useFetchNewQuote, useSendResult } from '../queries/queries'
import { setGameOver } from '../store/gameSlice'
import { RootState } from '../store/store'
import { convertToUppercaseChars, getUniqueLetters } from '../utils/utils'

const Game = () => {
    const dispatch = useDispatch()
    const [matchedLetters, setMatchedLetters] = useState<string[]>([])
    const [errorCount, setErrorCount] = useState(0)
    const [startTime, setStartTime] = useState(0)

    const { gameOver, username } = useSelector((state: RootState) => state.game)

    const {
        data: newQuote,
        isLoading,
        refetch,
    } = useFetchNewQuote(setErrorCount)

    const { mutate } = useSendResult()

    const upperCaseCharacters =
        newQuote && convertToUppercaseChars(newQuote.content)

    const uniqueLetters = getUniqueLetters(upperCaseCharacters)

    // TODO: change every to some to guess only one letter and progress to Scores screen
    const isAllMatched =
        uniqueLetters.length &&
        uniqueLetters.every((char) => matchedLetters.includes(char))

    const handleClickedLetter = (clickedLetter: string): void => {
        const isClickedLetterInQuote =
            upperCaseCharacters?.includes(clickedLetter)
        const isNewLetter = !matchedLetters.includes(clickedLetter)

        if (isClickedLetterInQuote && isNewLetter) {
            setMatchedLetters((prevLetters) => [...prevLetters, clickedLetter])
        }

        if (!isClickedLetterInQuote) {
            setErrorCount((count) => count + 1)
        }
    }

    useEffect(() => {
        setStartTime(Date.now())
    }, [])

    useEffect(() => {
        if (isAllMatched) {
            dispatch(setGameOver(true))
        }
    }, [isAllMatched, dispatch])

    useEffect(() => {
        if (gameOver) {
            const endTime = Date.now()

            const result = {
                quoteId: newQuote!._id,
                length: newQuote!.length,
                uniqueCharacters: uniqueLetters.length,
                userName: username,
                errors: errorCount,
                duration: endTime - startTime,
            }

            mutate(result)
        }
    }, [
        mutate,
        newQuote,
        username,
        errorCount,
        startTime,
        gameOver,
        uniqueLetters.length,
    ])

    return (
        <div className="container">
            <div className="absolute top-0 right-3 mt-3 px-3 py-2 rounded-md text-sm font-bold bg-pink-900 text-white">
                Errors: {errorCount}
            </div>

            <div className="flex flex-col items-center space-y-12">
                {gameOver && (
                    <h2 className="text-3xl text-indigo-900 font-extrabold animate-slideInFromLeft">
                        Congrats!
                    </h2>
                )}

                <h3 className="text-sm text-indigo-900 font-bold mb-3">
                    Author: {newQuote?.author}
                </h3>

                {isLoading ? (
                    <div className="spinner" />
                ) : newQuote?.content.length ? (
                    <Quote
                        quote={newQuote.content}
                        matchedLetters={matchedLetters}
                    />
                ) : null}

                <Letters handleClickedLetter={handleClickedLetter} />

                <button
                    onClick={() => refetch()}
                    className=" px-3 py-2 rounded-md text-sm font-bold bg-indigo-900 text-indigo-100"
                >
                    Reset game
                </button>
            </div>
        </div>
    )
}

export default Game
