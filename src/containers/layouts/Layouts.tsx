import { Route, Routes } from 'react-router-dom'
import Login from '../../pages/Login/Login'
import MainLayOuts from './MainLayOuts'
const LayOut = () => {
    return (
        <Routes>
            <Route element={<MainLayOuts />}>
                <Route path="/" element={<Login />} />
            </Route>
        </Routes>
    )
}
export default LayOut
