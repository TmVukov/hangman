import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Game from './screens/Game'
import Scores from './screens/Scores'
import Start from './screens/Start'
import { RootState } from './store/store'

function App() {
    const [showScores, setShowScores] = useState(false)
    const { username, gameOver } = useSelector((state: RootState) => state.game)

    useEffect(() => {
        if (gameOver) {
            const timeoutId = setTimeout(() => {
                setShowScores(true)
            }, 2000)

            return () => clearTimeout(timeoutId)
        }
    }, [gameOver])

    return (
        <div className="flex justify-center items-center h-screen">
            {showScores ? <Scores /> : username.length ? <Game /> : <Start />}
        </div>
    )
}

export default App
