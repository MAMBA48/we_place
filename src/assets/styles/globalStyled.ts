import { createGlobalStyle } from 'styled-components'
import imgBackground from '../imgs/backgrounds/bgBlog.jpg'

export default createGlobalStyle`
    :root {
        --colorTxtHeader: #fff;
        --colorTxt: #000;
        --shadowColor: 0px 0px 8px 0.5px rgba(0, 0, 0, 0.250);
        --bgColorContent: silver; 
    }
    * {
        padding: 0;
        margin: 0;
        font-family: 'Roboto';
        text-align: justify;
        box-sizing: border-box;
        border: none;
    }
    body {
        @media screen and (max-width: 500px) {
            display: flex;
        }
        display: flex;
        flex-direction: column;
        background-color: darkgrey;
        color: var(--colorTxt)
    }
    ul {
        list-style: none;
    }
    li {
        display: flex;
        position: relative;
        flex-direction: column;
        margin-right: 1.5rem;
    }
    article {
        padding: 1rem;
    }
    button {
        cursor: pointer;
        font-weight: bolder;
    }

    .container {
        @media screen and (max-width: 500px) {
            display: flex;
            width: 100%;
        }

        display: flex;
        position: relative;
        flex-direction: column;
        //background-image: url(${imgBackground});
        //background-size: cover;
        //background-repeat: no-repeat;
        background: gray;
        row-gap: 20px;
        align-items: center;
        min-height: 100vh;
        max-height: 100%;
        width: 100vw;
        padding-bottom: 3rem;
    }
    
    .content-area {
        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
            padding: 0.5rem;
            gap: 0.5rem;
            width: 100%;
        }

        display: flex;
        gap: 1rem;
        padding: 0;
        min-width: 400px;
        width: 1024px;
        max-width: 80%;
        background: transparent;
        border-radius: 1rem;
    }
    
    .box-content {
        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: column;
            width: 100%;

        }
        display: flex;
        flex-direction: column;
        gap: 16px;
        height: auto;
        width: 100%;
        padding: 0;
    }
    
    .section-content {
        @media screen and (max-width: 500px) {
            padding: 0.5rem;
        }
        display: flex;
        position: relative;
        box-shadow: var(--shadowColor);
        padding: 1rem;
        padding-bottom: 1.5rem;
        background: var(--bgColorContent);
        border-radius: 0.750rem;
        flex-direction: column;
        width: auto;
    }
    .msg-content {
        position: relative;
    }
    .btn-show-hide {
        position: absolute;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        right: 1rem;
        bottom: 1rem;
    }
    .btn-more-less {
        display: flex;
        background: rgba(0, 0, 0, 0.3);
        color: #fff;
        position: absolute;
        padding: 0.3rem;
        border-radius: 0.3rem;
        border: none;
        right: 0px;
        bottom: 0px;
    }

`