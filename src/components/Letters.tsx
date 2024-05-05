import { LettersProps } from "../types"

const Letters = ({ handleClickedLetter }: LettersProps) => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

    return (
        <div className="flex flex-wrap max-w-[34rem] mx-auto">
            {letters.map((letter, index) => (
                <div
                    key={index}
                    onClick={() => handleClickedLetter(letter)}
                    className="w-8 p-2 m-1 bg-indigo-900 text-white text-center cursor-pointer rounded-md"
                >
                    {letter}
                </div>
            ))}
        </div>
    )
}

export default Letters
