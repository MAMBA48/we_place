import { useState } from "react"
import Header from "../components/Header"

const HomePage = () => {
const [isOpen, setIsOpen] = useState(false)

    return (
    <>
    <Header />
        <main className="container">
            <span>
                <h2>Home Page</h2>
            </span>
            <section className="content-area">
                {/**
                 * <aside className="menu-lateral">
                <h2>menu lateral</h2>
                    {isOpen && (
                        <ul>
                            <li>opc 1</li>
                            <li>opc 2</li>
                            <li>opc 3</li>
                            <li>opc 4</li>
                        </ul>
                    )}
                    <button className="btn-show-hide" onClick={()=> setIsOpen(!isOpen)}>
                        {isOpen ? 'Ocultar' : 'Expandir'} 
                    </button>
                </aside>
                 */}
                <article style={{border:'solid 2px #FFF'}}>
                    <section className="section-content">
                        <h3>saudation</h3>
                        <article>
                            <p>
                                Hello guys my name is Eduardo Campos, i'm dev React Js!
                            </p>
                        </article>
                    </section>
                    <section>
                        <h3>a little about me</h3>
                        <article>
                            <p>I'm dev student, living on São Paulo, Brazil.{isOpen ? '' : '..'}</p>
                            {isOpen && (
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae laudantium recusandae ad, enim quam doloremque ullam optio eveniet obcaecati! Quibusdam officia reprehenderit error explicabo tenetur natus nobis neque libero eius?
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore exercitationem delectus eos eligendi natus itaque animi, quis, nihil minus quam unde rem tenetur repudiandae voluptates dignissimos et incidunt. Magnam, numquam!
                            </p>
                            )}
                            <button onClick={()=>setIsOpen(!isOpen)}>
                                {isOpen ? 'Ler menos' : 'Ler mais'}
                            </button>
                        </article>
                    </section>
                </article>
            </section>
            
        </main>
    </>
    )
}

export default HomePage