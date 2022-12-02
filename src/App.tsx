import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'
import LayOut from './containers/layouts/Layouts'
import Login from './pages/Login/Login'

function App() {
    return (
        <div>
            {/* <Router basename="/">
                <LayOut />
            </Router> */}
            <Login />
        </div>
    )
}

export default App
