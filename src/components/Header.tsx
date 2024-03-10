import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { TheClock } from './Clock'

const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    background: #000;
    padding: 0.750rem;

`
const BoxHeader = styled.div`
    display: flex;
    padding: 6px;

`

const Header = () => {
    const navigate = useNavigate()
    const toHomePage = () => navigate('/')
    const toPortfolioPage = () => navigate('/portfolio')
    const toAbout = () => navigate('/about')

    const runFunction = () => {
        alert('the button ok!s')
    }

    return (
        <MyHeader>
            <BoxHeader>
                <p>Real Campos</p>
            </BoxHeader>
            <BoxHeader>
                <ul style={{display: 'flex'}}>
                    <li onClick={toHomePage}>Pagina Inicial</li>
                    <li onClick={toPortfolioPage}>Portfólio</li>
                    <li onClick={toAbout}>Sobre</li>
                </ul>
            </BoxHeader>
            <BoxHeader>
                <b><TheClock /></b>
            </BoxHeader>
            <BoxHeader>
                <span style={{cursor:'pointer'}} onClick={runFunction}>
                    <p>User admin</p>
                </span>
            </BoxHeader>
        </MyHeader>
    )
}

export default Header