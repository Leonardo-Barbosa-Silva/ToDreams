import whiskey from '../../img/whiskey.svg'
import wrench from '../../img/wrench.svg'
import supermarket from '../../img/supermarket.svg'
import screen from '../../img/screen.svg'
import fashion from '../../img/fashion.svg'
import sport from '../../img/sport.svg'
import health from '../../img/health.svg'

function Categories() {

    return (
        <div className="content-layout">
            <div className="item">
            <div className="icon-bg">
                <img src={screen} alt="screen tecnology icon"/>
            </div>
            <p><span>Tecnologia</span></p>
            </div>
            <div className="item">
            <div className="icon-bg">
                <img src={supermarket} alt="supermaket icon"/>
            </div>
            <p>Supermercado</p>
            </div>
            <div className="item">
            <div className="icon-bg">
                <img src={whiskey} alt="whiskey icon"/>
            </div>
            <p>Bebidas</p>
            </div>
            <div className="item">
            <div className="icon-bg">
                <img src={wrench} alt="wrench icon"/>
            </div>
            <p>Ferramentas</p>
            </div>
            <div className="item">
            <div className="icon-bg">
                <img src={health} alt="health icon"/>
            </div>
            <p>Saúde</p>
            </div>
            <div className="item">
            <div className="icon-bg">
                <img src={sport} alt="running icon"/>
            </div>
            <p>Esportes e Fitness</p>
            </div>
            <div className="item">
            <div className="icon-bg">
                <img src={fashion} alt="fashion icon"/>
            </div>
            <p>Moda</p>
            </div>
        </div>
    
    )
}


export default Categories