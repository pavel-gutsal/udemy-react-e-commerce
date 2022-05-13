import {useState , useEffect} from 'react'


const Category=(props)=>{
    const {object:el} = props
    return(
        <div className={`category _${el.id}`}
            key= {el.id}
            >   
            <div className="category__img"
                style={{backgroundImage: `url(${el.imageUrl})`}}
            />
            <div className="category__innerText">
                <h1 className='category__name'>{el.title}</h1>
                <h1 className='category__shop'>Shop Now</h1>
            </div>
        </div> 
    )
}

export default Category;