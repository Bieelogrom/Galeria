import styled, { css } from 'styled-components'

const CorPrincipal = "#F26F03"
const CorSecundaria = "#673C1C"
const CorLetra = "#F5F5F5"

// Navbar do site

export const Nav = styled.nav`
    width: 100%;
    height: 100px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: ${CorPrincipal};

    display: flex;
    justify-content: center;
    gap: 50%;
    align-items: center;



    a{
        color: ${CorLetra};
    }

    
`

export const TituloSite = styled.div`
    display: flex;
    flex-direction: column;


    small{
        color: ${CorLetra};
        text-align: center;
    }

    h1{
        font-size: 32px;
        font-weight: bold;
        color: ${CorLetra};
    }
`

export const OpcoesSite = styled.div`
    display: flex;
    gap: 10px;
    

    a{
        font-size: 16px;
        transition: color 1s;
    }

    a:hover{
        font-size: 18px;
        font-weight: bold;
        color: ${CorSecundaria};
        text-decoration: underline;
        cursor: pointer;
    }
`

// Fim Navbar

// Inicio 

export const MainWrapper = styled.main`
    width: 100%;
    height: 100%;
    background: ${CorSecundaria};
`

// Fim inicio

// Peges 

export const SectionWrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    gap: 12px;
    justify-content: center;
`

export const Imagens = styled.img`
    width: 225px;
    height: 225px;
    border-radius: 12px;

    &:hover{
        filter: grayscale(100%);
        cursor: pointer;
    }
`

// Fim Pages