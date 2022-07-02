import styles from './Soda.module.css'

const Soda = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.circle}>
                    <img src="https://pngimg.com/uploads/cocacola_logo/cocacola_logo_PNG5.png" alt="logo da coca cola" className={styles.logo} />
                </div>
                <div className={styles.content}>
                    <h2>CocaCola</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis ipsum quis accusantium laborum alias asperiores aliquam qui dolores eaque! Accusantium illo ut eveniet adipisci maiores, possimus tempora magnam consectetur?</p>
                    <a href="https://www.cocacolabrasil.com.br/inicial">Explore</a>
                </div>
                <img src="https://pngimg.com/uploads/cocacola/coca_cola_PNG8899.png" alt="garrrafa de cola cola" className={styles.product_img} />
            </div>

            <div className={styles.card2}>
                <div className={styles.circle2}>
                    <img src="https://assets.rappler.com/DEAAF5F49DD9487384ABB623DB3E8004/img/C03DADC2BE314083878C661421153B2C/Sprite_Logo-02.png" alt="logo da sprite" className={styles.logo2} />
                </div>
                <div className={styles.content2}>
                    <h2>Sprite</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis ipsum quis accusantium laborum alias asperiores aliquam qui dolores eaque! Accusantium illo ut eveniet adipisci maiores, possimus tempora magnam consectetur?</p>
                    <a href="https://www.cocacolabrasil.com.br/inicial">Explore</a>
                </div>
                <img src="https://pngimg.com/uploads/sprite/sprite_PNG98773.png" alt="lata de sprite" className={styles.product_img2} />
            </div>

            <div className={styles.card3}>
                <div className={styles.circle3}>
                    <img src="https://marcas-logos.net/wp-content/uploads/2020/02/Pepsi-Logo-1.png" alt="logo da pepsi" className={styles.logo3} />
                </div>
                <div className={styles.content3}>
                    <h2>Pepsi</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque veritatis ipsum quis accusantium laborum alias asperiores aliquam qui dolores eaque! Accusantium illo ut eveniet adipisci maiores, possimus tempora magnam consectetur?</p>
                    <a href="https://www.cocacolabrasil.com.br/inicial">Explore</a>
                </div>
                <img src="https://pngimg.com/uploads/pepsi/pepsi_PNG8956.png" alt="lata de pepsi" className={styles.product_img3} />
            </div>
        </div>
    )
}

export default Soda