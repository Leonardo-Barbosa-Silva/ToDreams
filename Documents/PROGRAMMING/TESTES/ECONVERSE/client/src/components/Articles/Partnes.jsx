import office from '../../img/office.svg'

function Partnes() {

    return (
        <div className="partnes">
            <div className="two-bg-img">
                <div>
                    <img src={office} alt="office vtex background" lazy="loading"/>
                    <div className="text-bg-img">
                        <h3>Parceiros</h3>
                        <h4>Lorem ipsum dolor sit<br />amet, consectetur</h4>
                        <button type="button">confira</button>
                    </div>
                </div>
                <div>
                    <img src={office} alt="office vtex background" lazy="loading"/>
                    <div className="text-bg-img">
                        <h3>Parceiros</h3>
                        <h4>Lorem ipsum dolor sit<br/>amet, consectetur</h4>
                        <button type="button">confira</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partnes;