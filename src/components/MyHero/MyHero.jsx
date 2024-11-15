import './MyHero.css'
export default function MyHero({ Title, DES}){
    return(
        <section className='Hero2'>
        <div className='Title'>
            <h2>{Title}</h2>
            <a>{DES}</a>
        </div>
    </section>
    )
}