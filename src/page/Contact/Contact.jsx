import './Contact.css'
import MyHero from '../../components/MyHero/MyHero'
import Iframe from '../../components/Iframe/Iframe'
import ConSECT from '../../components/ConSECT/ConSECT'
import Navbar from '../../components/Navbar/Navbar'
export default function Contact(){
    return(
        <>
        <Navbar x={false} />
        <MyHero Title={"Contact US"} DES={"Home > Contact US"}/>
        <ConSECT/>
        <Iframe/>
        </>
    )
}