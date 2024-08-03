import React, { useContext } from 'react';
import './CSS/TiendaCategoria.css';
import TiendaContext from '../Context/TiendaContext.jsx';
import dropdrown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Items/Item';

export const TiendaCategoria = (props) => {
  const { all_products } = useContext(TiendaContext);

  return (
    <div className='shop-category'>
        <img src={props.banner} alt="" /> 
        <div className="shop-category-indexSort">
          <p>
            <span>Showing 1-12</span> out of 36 products
          </p>
          <div className="shop-category-sort">
            Sort by <img src={dropdrown_icon} alt="" />
          </div>
        </div>
        <div className="shop-category-products">
          {all_products.map((item,i) => {
              if(props.category === item.category){
                return <Item key= {i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              }
              else{
                return null;
              }
          })}
        </div>
    </div>
  );
};
