import './SectionA.css'
import envato from './../../assets/images/envato.jpg'
export default function SectionA() {
    return (
        <section className='Brand'>
            <div>
                <h2 className='NG-BRANDS'>1k + Brands Trust Us</h2>
            </div>

            <div className='NG-ENVATO'>
                <img src={envato} className='EVNAT' />
                <img src={envato} className='EVNAT' />
                <img src={envato} />
                <img src={envato} className='EVNAT' />
                <img src={envato} className='EVNAT' />
            </div>
        </section>
    )

}