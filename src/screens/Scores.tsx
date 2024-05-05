import { useFetchScores } from '../queries/queries'
import { calculateHighScore } from '../utils/utils'

const Scores = () => {
    const { data: scores, isLoading } = useFetchScores()

    const getResults = () => {
        return scores?.map((score) => {
            const highScore = calculateHighScore(
                score.errors,
                score.uniqueCharacters,
                score.length,
                score.duration
            )

            return {
                ...score,
                highScore,
            }
        })
    }

    const results = getResults()?.sort((a, b) => b.highScore - a.highScore)

    return (
        <div className="container">
            {isLoading ? (
                <div className="spinner" />
            ) : (
                <table className="text-center text-indigo-900">
                    <thead>
                        <tr>
                            <th className="border border-indigo-900 p-2">
                                Username
                            </th>
                            <th className="border border-indigo-900 p-2">
                                HighScore
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {results?.map((res, index) => (
                            <tr key={index} className="text-xs font-bold">
                                <td className="border border-indigo-900 p-2">
                                    {res.userName}
                                </td>
                                <td className="border border-indigo-900 p-2">
                                    {res.highScore}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default Scores
