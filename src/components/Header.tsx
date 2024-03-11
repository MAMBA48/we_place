import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const MyHeader = styled.header`
    @media screen and (max-width: 500px) {
        font-size: 0.85rem;
        & ul {
        display: flex;
        color: gold;
    }
    justify-content: space-between;
    }

    display: flex;
    color: #fff;
    position: relative;
    width: 100%;
    justify-content: space-between;
    background: #000;
    padding: 0.750rem;
    & li {
        cursor: pointer;
    }
    & li:hover {
            color: silver;
        }


`
const BoxHeader = styled.div`
    display: flex;
    padding: 6px;

`

export const Header = () => {
    const navigate = useNavigate()
    const toHomePage = () => navigate('/')
    const toPortfolioPage = () => navigate('/portfolio')

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
                </ul>
            </BoxHeader>
            <BoxHeader>
                <span style={{cursor:'pointer'}} onClick={runFunction}>
                    <p>User admin</p>
                </span>
            </BoxHeader>
        </MyHeader>
    )
}