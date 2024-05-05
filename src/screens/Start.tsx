import Form from '../components/Form'

const Start = () => {
    return (
        <div className="container">
            <h1 className="h-1/2 flex flex-col justify-center text-5xl font-extrabold text-indigo-900 animate-slideInFromLeft">
                Welcome to Hangman!
            </h1>
            <Form />
        </div>
    )
}

export default Start
