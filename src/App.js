import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      { name: 'Hibiscus', price: 250, img: './producto/mascabo.jpg'},
      { name: 'Edulcorante', price: 500, img: './producto/nueces-mariposa-blanca-premium.jpg'},
      { name: 'Pasta de mani', price: 200, img: './producto/tomate (1).jpg'},
      
      
     

    ]
  }
  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
        <Productos
        agregarAlCarro={() => console.log('No hace nada')}
        productos={this.state.productos} />
        </Layout>
      </div>
    )
  }
}

export default App;
