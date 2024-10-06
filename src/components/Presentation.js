import React from 'react';
import './Presentation.css';
import "./Footer.css";
import ImageButton from "./PdfButton";


import Vale from '../assets/Vale-barkiper.JPEG';
import Mario from '../assets/Mario.jpg';
import valediploma from './../assets/pdfs/EBS.webp';
import mariodiploma from './../assets/pdfs/barman_Roststock.webp';


const Presentation = () => {
    return (

        <div className='Presentation-container'>
            <div className='Valerio-container'>
           
           <div className='Valerio-container-img'>            
                <img src={Vale} alt="Valerio Vasira" />

                {/* Use the reusable PDF Button */}
                <div className='pdf-container'>
                        <ImageButton
                            buttonText="DIPLOM ANZEIGEN"
                            imagePath={valediploma} // Ensure this path is correct
                        />
                    </div>
            </div>
    
                <div className='Valerio-container-text'>

                    <h2>Valerio</h2>
                    <h3>EBS European Bartender School</h3>
                    <p>
                        "Hallo zusammen, 
                        Es freut mich sehr, euch mein
                        neues Catering Service "Luxe" vorstellen zu dürfen, und ich möchte auch ein
                        wenig über mich erzählen.
                    </p>
                    <p>
                        Hallo, mein Name ist Wilmer, aber alle nennen mich Valerio.    
                        Ich komme aus Rimini, Italien. 
                        Gemeinsam mit Freund und Business-Partner
                        Mario bieten wir einen erstklassigen Service und
                        Qualität für eure Partywünsche und Themenveranstaltungen.
                        Alle Informationen findet ihr auf unserer Website, und
                        dort könnt ihr auch eure Anfragen hinterlassen. Mit 25
                        Jahren Erfahrung in der Gastronomie, sowohl in der Schweiz
                        als auch weltweit, bringe ich zwei Hotel- und Sommelierdiplome
                        mit und beherrsche vier Sprachen. Eine besondere Erfahrung war
                        mein einjähriges Engagement als Barkeeper rund um die Welt,
                        wobei mir besonders mein Einsatz in Florida, Miami Beach im
                        Niki Beach Club, am Herzen liegt. Ich freue mich darauf,
                        viele von euch kennenzulernen. 
                    </p>
                    <p>
                    Herzliche Grüsse, Valerio"
                    </p>
                </div>
                <div className='pdf-container2'>
                        <ImageButton
                            buttonText="DIPLOM ANZEIGEN"
                            imagePath={valediploma} // Ensure this path is correct
                        />
                    </div>
            </div>

            <div className='Mario-container'>

                  <img className='mario__img1' src={Mario} alt="Mario Schmid" />
                    

                <div className='Mario-container-text'>

                    <h2>Mario</h2>
                    <h3>IAL Scuola Alberghiera</h3>

                    <p>
                        "Hallo, ich bin Mario Schmitt, ein leidenschaftlicher
                        professioneller Barkeeper mit einer einzigartigen
                        Geschichte. Geboren in Deutschland und aufgewachsen
                        in Italien, spreche ich fliessend drei Sprachen:
                        Deutsch, Italienisch und Englisch.
                    </p>
                    <p>
                        Meine Ausbildung
                        habe ich an der renommierten Gastronomiefachschule
                        "IAL di  Cesenatico" als Hotelfachmann absolviert, wo
                        ich eine fundierte Ausbildung im Bereich der Gastronomie
                        erhalten habe. Nach meiner Ausbildung sammelte ich
                        wertvolle Erfahrungen in der Luxushotellerie und
                        Gastronomie in ganz Deutschland. Durch meine Arbeit
                        habe ich die Kunst der Mixologie und des Gästeservice
                        perfektioniert, insbesondere durch meine Tätigkeit auf
                        Kreuzfahrtschiffen und in erstklassigen Hotels in ganz
                        Europa. Zu meinen Stationen gehören unter anderem die
                        "Villa Kennedy" in Frankfurt, das "Chia Laguna" auf Sardinien
                        und das renommierte "Bürgenstockresort" in der Schweiz.
                        Jetzt freue ich mich darauf, meine Leidenschaft und
                        Expertise gemeinsam mit meinem Kollegen Valerio zu Ihnen
                        zu bringen, indem wir Ihnen einzigartige Barerlebnisse
                        und makellosen Service bieten.
                    </p>
                    <p>
                        Liebe Grüsse, Mario"
                    </p>
                </div>

                <div className='Mario-container-img'>
                    <img className='mario__img2' src={Mario} alt="Mario Schmid" />
                    <div className='pdf-container'> 
                    <ImageButton
                            buttonText="DIPLOM ANZEIGEN"
                            imagePath={mariodiploma} // Ensure this path is correct
                        /> 
                    </div>
                </div>
                

            </div>

            
        </div>

    )
}


export default Presentation;