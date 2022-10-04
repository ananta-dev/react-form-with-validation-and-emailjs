import './Home.css'
import ContactForm from '../components/ContactForm'
import Message from '../components/Message'

function App() {
    return (
        <div className='home'>
            <Message />
            <ContactForm />
        </div>
    )
}

export default App
