import React from 'react'
import MyHero from '../../components/MyHero/MyHero'
import SectionA from '../../components/SectionA/SectionA'
import Navbar from '../../components/Navbar/Navbar'
import Logo from './../../components/Logo/Logo'
import Ser from '../../components/Ser/Ser'
export default function About(){
    return(
        <>
       
        <Navbar x={false} />
        <MyHero Title={"About US"} DES={"Home > About US"}/>
        <Logo x={false} />
        <Ser y={false}/>
        
        <SectionA/>
        </>
    )
}