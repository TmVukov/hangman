import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type GameState = {
    username: string
    gameOver: boolean
}

const initialState: GameState = {
    username: '',
    gameOver: false,
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        setUsername(state, { payload }: PayloadAction<string>) {
            state.username = payload
        },
        setGameOver(state, { payload }: PayloadAction<boolean>) {
            state.gameOver = payload
        },
    },
})

export const { setUsername, setGameOver } = gameSlice.actions

export default gameSlice.reducer
