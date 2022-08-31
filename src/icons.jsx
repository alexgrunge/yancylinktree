import "./stylesheets/icons.css"

import iconface from "./assets/facebook.png"
import iconinsta from "./assets/logotipo-de-instagram.png"
import icontiktok from "./assets/tik-tok.png"
import icontube from "./assets/youtube.png"


export default function Icons(){
    return(
        <div className="content-icons">
            <a href="https://www.facebook.com/annayancy.jimenez.9" target="_blank">
                <img src={iconface}></img> </a>
            <a href="https://www.instagram.com/yancijiver/" target="_blank"> <img src={iconinsta}></img> </a> 
            <a href="https://www.tiktok.com/@yanci.jiver?is_from_webapp=1&sender_device=pc" target="_blank">    <img src={icontiktok}></img></a>
              <a href="https://www.youtube.com/channel/UCtcC5EhcZE9tamnxnjiE3tw" target="_blank"> <img src={icontube}></img></a>
           
        </div>
    )
}