import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import backLayer from './imgs/back_layer.jpg';
import frontLayer from './imgs/front_layer.png';

function App() {
  return (
    <div>
      <Parallax pages={4}>

      <ParallaxLayer offset={0} >
          <img src ="./imgs/front_layer"  alt="coucou"/>
      </ParallaxLayer>

      <ParallaxLayer 
        offset={0}
        speed={1}
        factor={4}
        style ={{
          backgroundImage: `url(${backLayer})`,
          backgroundSize: 'cover'
        }}>
        </ParallaxLayer>
      </Parallax>






    </div>
  )


//   <ParallaxLayer 
//   offset={0}
//   style ={{
//     backgroundImage: `url(${backLayer})`,
//     backgroundSize: 'cover',
//   }}>
// </ParallaxLayer>

}

export default App;
