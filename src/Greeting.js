import './Greeting.css'

export default function Greeting(props) {
    const {name} = props
    return (
        <header>
            <h1>
                Hello, {name}!
            </h1>
        </header>
    )
}