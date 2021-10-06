import React,{Component} from "react";
import { Card,Button } from "react-bootstrap";
import './Css/Footer.css'


export default class FooterCom extends Component{
    render(){
        return(
            <div className="footer">
                <Card className="text-center">
  <Card.Header>Terimakasih telah datang ke toko kami</Card.Header>
  <Card.Body>
    <Card.Title>Barang terjamin dan berkualitas</Card.Title>
    <Card.Text>
      
    </Card.Text>
    <>
  <Button variant="outline-success">Kirim pesan tentang web Kami</Button>{' '}
  
</>
  </Card.Body>
  <Card.Footer className="text-muted">28 September 2021</Card.Footer>
</Card>
            </div>
        )
    }
}