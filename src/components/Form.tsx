import { FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import { setUsername } from '../store/gameSlice'

const Form = () => {
    const dispatch = useDispatch()

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)
        const username = formData.get('username') as string
        dispatch(setUsername(username))
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col h-1/2 -mt-24">
            <label className="text-sm text-indigo-900 font-bold mb-3">
                Enter username:
            </label>
            <input
                type="text"
                name="username"
                className="border border-indigo-900 rounded-md p-2"
            />
            <button
                type="submit"
                className="mt-3 px-3 py-2 rounded-md text-sm font-bold bg-indigo-900 text-indigo-100"
            >
                Submit
            </button>
        </form>
    )
}

export default Form
