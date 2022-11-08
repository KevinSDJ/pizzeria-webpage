import Image1 from './../assets/imagenes/muzzarella.jpg'
import Image2 from './../assets/imagenes/napolitana.jpg'
import Image3 from './../assets/imagenes/jamonymorron.jpg'

type Pr={
    size:number,
    price:number
}

type Pl = {
    title:string,
    image:string,
    price:Pr[]|number,
    tag:string
}

export const data:Pl[]=[
    {
        title:"muzzarella",
        image:Image1,
        price:[
            {
                size:30,
                price:14
            },
            {
                size:40,
                price:18
            },
            {
                size:50,
                price:24
            }
        ],
        tag:'pizza'
    },
    {
        title:"napolitana",
        image:Image2,
        price:[
            {
                size:30,
                price:18
            },
            {
                size:40,
                price:24.49
            },
            {
                size:50,
                price:28.60
            }
        ],
        tag:'pizza'
    },
    {
        title:"Ham and cheese",
        image:Image3,
        price:[
            {
                size:30,
                price:20
            },
            {
                size:40,
                price:25.69
            },
            {
                size:50,
                price:30.60
            }
        ],
        tag:'pizza'
    }

]
