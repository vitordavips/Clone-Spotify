import React from 'react'
import './ItemList.css'
import SingleItem from '../SingleItem/SingleItem';
import { Link } from 'react-router-dom';

const ItemList = ({title, items, itemArray, path, idPath}) => {
    console.log("Renderizando:", title, "Dados:", itemArray); 
    return (
    <div className='item-list'>
        <div className='item-list__header'>
            <h2>{title} populares</h2>
            <Link to={path} className='item-list__link'>
                Mostrar Tudo
            </Link>
        </div>

        <div className='item-list__container'>
            {(itemArray || [])
                .filter((currentValue, index) => index < items)
                .map((currObj, index) => (
                    <SingleItem
                        // id={currObj.id}
                        // name={currObj.name}
                        // image={currObj.image}
                        // banner={currObj.banner}
                        idPath={idPath}
                        {...currObj}
                        key={`${title}-${index}`}
                    />
                ))}
        </div>
    </div>
    
  )
}

export default ItemList