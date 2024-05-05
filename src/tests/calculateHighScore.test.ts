import { calculateHighScore } from '../utils/utils'

describe('calculateScore', () => {
    it('should calculate the score correctly', () => {
        // fewer errors should always be higher than the solution with more errors
        expect(calculateHighScore(2, 17, 54, 65956)).toBeGreaterThan(
            calculateHighScore(3, 19, 70, 88896)
        )

        // given the same number of errors, solutions with larger numbers of unique letters should be scored higher
        expect(calculateHighScore(4, 23, 146, 176872)).toBeGreaterThan(
            calculateHighScore(4, 19, 87, 111741)
        )

        // given the same number of errors and unique letters, longer solutions should be scored higher
        expect(calculateHighScore(13, 17, 60, 71426)).toBeGreaterThan(
            calculateHighScore(13, 17, 54, 63513)
        )

        // given the same number of errors, unique letters, and quote length, faster solutions should be scored higher
        expect(calculateHighScore(7, 25, 77, 50944)).toBeGreaterThan(
            calculateHighScore(7, 25, 77, 107881)
        )
    })
})
