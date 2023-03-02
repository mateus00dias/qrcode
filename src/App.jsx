import './App.css'
import { QRCode } from 'react-qr-code'
import QRCodeLink from 'qrcode' 
function App() {
  console [value, setValue] = useState ('')

  return (
    
      <div className='container'>
        <div className='card'>
            <strong className='title'> GERADOR DE QRCODE</strong>
            <span className='subtitle'>Insira sua URL para criar seu QR CODE</span>
            <input type ="text" className='input' placeholder= 'Seu texto aqui...' />

            <div className ="qr-code">
                <QRCode value={value} size={96} elevantion={2}/>
                <QRCodeLink value={value} />
            </div>
            <a href ="#" download="qrcode.png" className='btn-download'>dowload</a>
        </div>
      </div>
  ) 
}

export default App
