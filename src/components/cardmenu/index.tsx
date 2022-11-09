import {Pl,Pr} from '../../mockup/data'


type Props={
    prices:Pr[]
}

const OptionsCard=({prices}:Props)=>{

    return <div className='flex flex-row'>
        {prices?.map(e=><div className='flex flex-col'>
            <span>{e.size}</span>
            <span>{e.price}</span>
        </div>)}
    </div>
}

const CardMenu=({image,price,tag,title}:Pl)=>{
    

    return (
        <div key={tag+title} className='max-w-fit h-auto flex flex-col'>
            <p>{title}</p>
            <img className='max-w-[56px] mb-2' src={image} alt={title+'image'}/>
            {Array.isArray(price)?<OptionsCard prices={price}/>:<span>{price}</span>}
            <button className={`${tag}`}>Order Now</button>
        </div>
    )
}

export default CardMenu