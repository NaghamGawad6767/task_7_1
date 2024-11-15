import './ImageA.css'
import asterisk from './../../assets/images/asterisk.svg'
export default function ImageA(){
    return(
        <section  >
           <div className="section">
                <div className="section-item">
                    <img src={asterisk}/>
                    <h3 className="title">Cyber Security</h3>
                </div>
                <div className="section-item">
                    <img src={asterisk}/>
                    <h3 className="title">IT Solution</h3>
                </div>
                <div className="section-item">
                    <img src={asterisk}/>
                    <h3 className="title">Technology</h3>
                </div>
                <div className="section-item">
                    <img src={asterisk}/>
                    <h3 className="title">Data Security</h3>
                </div>
            </div>
        </section> 
    )
}