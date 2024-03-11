import { useState } from "react"
import { Header } from "../components/Header"
import axios from "axios"

const PortfolioPage = () => {
    //event.preventDefault
    const [textInput, setTextInput] = useState('')
    //const [info, setInfo] = useState('')

    const req = async () => {
        const getData = await axios.get('http://localhost:3000/infoUsers')
        return getData
    }
    console.log(req)
    return (
        <>
            <main className="container">
            <Header />
                <section className="section-content">
                    <div>
                    <h3>Training box:</h3>
                        <form action="">
                            <label htmlFor="">Digite algo:</label>
                            <input 
                            type="text" 
                            placeholder="digit something..."
                            id=""
                            className=""
                            value={textInput}
                            onChange={ change => setTextInput(change.target.value) }/>
                        </form>
                        <hr />
                        <span>
                            <small>result:</small>
                            <h2>{textInput}</h2>
                        </span>
                        <article>
                            <table style={{
                                minWidth:'500px',
                                border:'1px solid #000',
                                background:'rgb(0,0,0, 0.250)'
                                }}>
                                <tbody>
                                <tr>
                                    <th>id</th>
                                    <th>info</th>
                                    <th>date</th>
                                </tr>
                                <tr>
                                    <td>#ID</td>
                                    <td>{textInput}</td>
                                    <td>data registrada</td>
                                </tr>
                                </tbody>
                            </table>
                            <b>LEMBRETE: **o valor setado no state só será atualizado após, toda a execução da função!**</b>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}
export default PortfolioPage