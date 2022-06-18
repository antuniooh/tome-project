import "./styles.css"
import useSound from 'use-sound'
import cavalo from './songs/cavalo.mp3'
import xii from './songs/xiii.mp3'
import nha from './songs/yaa.mp3'
import efeitoanao from './songs/efeitoanao.mp3'
import tapa from './songs/tapa.mp3'
import toin from './songs/toin.mp3'
import toinmaior from './songs/toinmaior.mp3'
import tome from './songs/tome.mp3'
import atumalaca from './songs/atumalaca.mp3'
import chega from './songs/chegaa.mp3'
import dancagatinho from './songs/dancagatinho.mp3'
import demais from './songs/demais.mp3'

function Player ( { name, imgUri, song } ) {
    const [playSound] = useSound(song)
    console.log(demais)

    return (
        <button className="order-card-container" onClick={playSound}>

        <div className="order-card-container">
            <img 
                id={name}
                src={imgUri}
                alt={name}
                className="order-card-image"
            />
              <h3 className="order-card-description">{name}</h3>  
        </div>
        </button>

    )
}

export default Player;