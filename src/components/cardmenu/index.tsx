import {Pl,Pr} from '../../mockup/data'


const OptionsCard=(options:Pr[])=>{

}

const CardMenu=({image,price,tag,title}:Pl)=>{
    

    return (
        <div className='min-w-24 h-auto flex flex-col'>
            <p>{title}</p>
            <img src={image} alt={title+'image'}/>
            
        </div>
    )
}

export default CardMenu