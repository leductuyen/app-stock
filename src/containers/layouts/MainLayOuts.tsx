import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const MainLayOuts = () => {
    const { hash, pathname } = useLocation()
    useEffect(() => {
        setTimeout(() => {
            if (hash) {
                const id = hash.replace('#', '')
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({
                        block: 'start',
                        behavior: 'smooth',
                    })
                }
            }
        }, 0)
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return (
        <>
            <Header />
            <Footer />
        </>
    )
}
export default MainLayOuts
