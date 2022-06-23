import React from 'react'
import './Soda.css'

const SodaPage = () => {
    return (
        <div className='body'>
            <div className="card">
                <div className="circle">
                    <img src="https://pngimg.com/uploads/cocacola_logo/cocacola_logo_PNG5.png" alt="logo da coca cola" className="logo" />
                </div>
                <div className="content">
                    <h2>CocaCola</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis ipsum quis accusantium laborum alias asperiores aliquam qui dolores eaque! Accusantium illo ut eveniet adipisci maiores, possimus tempora magnam consectetur?</p>
                    <a href="https://www.cocacolabrasil.com.br/inicial">Explore</a>
                </div>
                <img src="https://pngimg.com/uploads/cocacola/coca_cola_PNG8899.png" alt="garrrafa de cola cola" className="product_img" />
            </div>

            <div className="card2">
                <div className="circle2">
                    <img src="https://assets.rappler.com/DEAAF5F49DD9487384ABB623DB3E8004/img/C03DADC2BE314083878C661421153B2C/Sprite_Logo-02.png" alt="logo da sprite" className="logo2" />
                </div>
                <div className="content2">
                    <h2>Sprite</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis ipsum quis accusantium laborum alias asperiores aliquam qui dolores eaque! Accusantium illo ut eveniet adipisci maiores, possimus tempora magnam consectetur?</p>
                    <a href="https://www.cocacolabrasil.com.br/inicial">Explore</a>
                </div>
                <img src="https://pngimg.com/uploads/sprite/sprite_PNG98773.png" alt="lata de sprite" className="product_img2" />
            </div>

            <div className="card3">
                <div className="circle3">
                    <img src="https://marcas-logos.net/wp-content/uploads/2020/02/Pepsi-Logo-1.png" alt="logo da pepsi" className="logo3" />
                </div>
                <div className="content3">
                    <h2>Pepsi</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis ipsum quis accusantium laborum alias asperiores aliquam qui dolores eaque! Accusantium illo ut eveniet adipisci maiores, possimus tempora magnam consectetur?</p>
                    <a href="https://www.cocacolabrasil.com.br/inicial">Explore</a>
                </div>
                <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8956.png" alt="lata de pepsi" className="product_img3" />
            </div>
        </div>
    )
}

export default SodaPage