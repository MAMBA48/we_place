import { createGlobalStyle } from 'styled-components'
import imgBackground from '../imgs/backgrounds/bgBlog.jpg'

export default createGlobalStyle`
    :root {
        --colorTxt: #fff; 
    }
    * {
        padding: 0%;
        margin: 0%;
        font-family: 'Roboto';
        box-sizing: border-box;
    }
    body {
        display: flex;
        flex-direction: column;
        background-color: navy;
        color: var(--colorTxt)
    }
    ul {
        list-style: none;
    }
    li {
        cursor: pointer;
        margin-right: 1.5rem;
    }
    article {
        padding: 10px;
    }
    .container {
        display: flex;
        flex-direction: column;
        //background-image: url(${imgBackground});
        background-size: cover;
        background-repeat: no-repeat;
        row-gap: 20px;
        border: 1px solid red;
        align-items: center;
        height: auto;
        width: 100%;
        padding: 1rem;
        padding-bottom: 3rem;
    }

    .section-content {
        display: flex;
        border: 2px solid blue;
        padding: 1rem;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 0.750rem;
        flex-direction: column;
        width: 80%;
    }

    .content-area {
        display: flex;
    }

    .menu-lateral {
        display: flex;
        position: relative;
        flex-direction: column;
        min-height: 100px;
        width: auto;
        min-width: 200px;
        max-width: 400px;
        padding: 1rem;
        border: 1px solid greenyellow;
    }
    
    .btn-show-hide {
        cursor: pointer;
        position: absolute;
        right: 1rem;
        bottom: 1rem;
    }

`