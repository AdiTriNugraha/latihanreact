import React, { Component } from 'react';
import './CSS/Produk.css';

class Produk extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock,
            sub:"Beli",
            status:"Tersedia",
            disabled : false
        }
    }

    buttonBeli = () => {
        this.setState({
            stock: this.state.stock -1
        })
        if (this.state.stock ===1){
            this.setState({
                status:"Habis",
                disabled:true
            })
        }
    }
    render() {
        return (
            <div className ="borderpd">
            <div className="box-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://cdn.dribbble.com/users/61921/screenshots/9634673/media/985b2add2b952f24634b717c4d846bf2.png?compress=1&resize=400x300" alt=""                                                                                                                                                                                                      /> 
                <p><b>{this.props.harga}</b></p>
                <p><b>{this.state.stock}</b></p>
                <p><b>{this.state.status}</b></p>
                <button className="btn-click" onClick={this.buttonBeli} disabled={this.state.disabled}>Beli</button>  
                <div>
                    </div>             
            </div>
            </div>
        );
    }
}

export default Produk;