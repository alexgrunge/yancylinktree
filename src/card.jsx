import "./stylesheets/card.css"
import Imgprofile from "../src/assets/yancy.jpg"
import Parrafo from "./parrafo"
import Shopcard from "./shopcard"
import Icons from "./icons"

import Shop from './assets/shop.png'
import Nails from './assets/nail.png'


export default function Card(){
   return(
    <div className="card">

        <div className="profile">
            <img src={Imgprofile} className="card-imgprofile" />
     
        </div>

        <Parrafo 
        className="parrafo-titulo"
            texto='Yancy Jiver'
        />
        <Parrafo 
        className ="parrafo-sigueme"
            texto='sígueme en: '
        />

        <Icons />

        <Parrafo 
        className="parrafo-tienda"
            texto='O también pasa por: '
        />

        <Shopcard 
        link="https://www.instagram.com/morticia_bazar"
        src = {Shop}
        texto = "Morticia Bazar"
        />
        <Shopcard 
        link="https://www.instagram.com/lauyan_nails/"
        src = {Nails}
        texto = "Lauyan Nails"
        />

    </div>
   ) 
}