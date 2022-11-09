import Image1 from './../assets/imagenes/muzzarella.jpg'
import Image2 from './../assets/imagenes/napolitana.jpg'
import Image3 from './../assets/imagenes/jamonymorron.jpg'
import Image4 from './../assets/imagenes/empanada_atun.jpg'
import Image5 from './../assets/imagenes/empanada_carne.jpg'
import Image6 from './../assets/imagenes/empanada_jamonyqueso.jpg'
import Image7 from './../assets/imagenes/agua.jpg'
import Image8 from './../assets/imagenes/gaseosa.jpg'
import Image9 from './../assets/imagenes/cerveza.jpg'

export type Pr={
    size:number,
    price:number
}

export type Pl = {
    title:string,
    image:string,
    price:Pr[]|number,
    tag:string
}

export type OptNav={
    tag:string,
    name:string
}

export const menu_tags:OptNav[]=[
    {
        tag:'#pizza',
        name:'pizza'
    },
    {
        tag:'#patty',
        name:'patty'
    },
    {
        tag:'#dessert',
        name:'dessert'
    },
    {
        tag:'#beverages',
        name:'beverages'
    }
]

const beverages:Pl[]=[
    {
        title:"Water",
        image:Image7,
        price:4,
        tag:'#beverages'
    },
    {
        title:"soda",
        image:Image8,
        price:4,
        tag:'#beverages'
    },
    {
        title:"beer",
        image:Image9,
        price:4,
        tag:'#beverages'
    }
]

const patty:Pl[]=[
    {
        title:"tuna pie",
        image:Image4,
        price:4,
        tag:'#patty'
    },
    {
        title:"meat pie",
        image:Image5,
        price:8,
        tag:'#patty'
    },
    {
        title:"ham and cheese pie",
        image:Image6,
        price:8,
        tag:'#patty'
    }
]

const pizza:Pl[]=[
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
        tag:'#pizza'
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
        tag:'#pizza'
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
        tag:'#pizza'
    },
]

export const data:Pl[]=[...pizza,...patty,...beverages]
