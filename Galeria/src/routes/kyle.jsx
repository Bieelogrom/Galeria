import Navbar from "../components/navbar";
import { SectionWrapper, Imagens } from '../components/estilo';
import IMG1 from '../assets/Kyle/1.jpeg'
import IMG2 from '../assets/Kyle/2.jpeg'
import IMG3 from '../assets/Kyle/3.jpeg'
import IMG4 from '../assets/Kyle/4.jpeg'
import IMG5 from '../assets/Kyle/5.jpeg'
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";

function KylePage() {
    const [endereco, setEndereco] = useState(-1)

    const JPEGS = [IMG1, IMG2, IMG3, IMG4, IMG5]
    const ListaImagens = JPEGS.map((Imagem, index) => <Imagens src={Imagem} onClick={() => setEndereco(index)}/>)

    return (
        <>
        <SectionWrapper>
            <Lightbox
                index={endereco}
                open={endereco >= 0} 
                close={() => setEndereco(-1)}
                slides={
                    [
                        { src: IMG1 },
                        { src: IMG2 },
                        { src: IMG3 },
                        { src: IMG4 },
                        { src: IMG5 }
                    ]
                }
            />
            {ListaImagens}
        </SectionWrapper>
    </>
    )
}

export default KylePage;