import {useState , useEffect} from 'react'
import './directory.scss'
import Category from './categories'

const Directory=(props)=>{
    const {object:categories} = props
    return(
        <div className="categories">
            {categories.map(el=>{
                return(
                    <Category object={el}
                        key={el.id}
                        />
                    ) 
                }
            )}
      </div>
    )
}

export default Directory;