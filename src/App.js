import { Component } from 'react';
import { Button } from '@material-ui/core';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Title from './components/Title'

class App extends Component {
  state = {
    productos: [
      { name: 'Hibiscus', price: 250, img: './producto/hibiscus-tea.png'},
      { name: 'Edulcorante', price: 500, img: './producto/nueces-mariposa-blanca-premium.jpg'},
      { name: 'Pasta de mani', price: 200, img: './producto/tomate1.jpg'},
      { name: 'chocolate', price: 250, img: './producto/arbejas.jpg'},
      { name: 'mascabo', price: 250, img: './producto/mascabo.jpg'}, 
      { name: 'pasta', price: 250, img: './producto/pasta-de-mani.jpg'},
      { name: 'pasta', price: 250, img: './producto/pasta-de-mani.jpg'},
    ],
    carro: [],
    esCarroVisible: false,
  }
  

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if (carro.find(x => x.name === producto.name)) {
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(this.state.carro.length) {
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible})
  }
  render() {
    const { esCarroVisible } = this.state
    return (
      <>
        <Navbar 
        carro={this.state.carro} 
        esCarroVisible={esCarroVisible} 
        mostrarCarro={this.mostrarCarro} />
        <Title />
        <Layout>
          
          
       
        <Productos
        agregarAlCarro={this.agregarAlCarro}
        productos={this.state.productos} />
        </Layout>
      </>
    )
  }
}

export default App;
