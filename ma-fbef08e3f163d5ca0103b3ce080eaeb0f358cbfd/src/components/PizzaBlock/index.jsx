import React from "react";
function PizzaBlock({title, price, imageUrl,types, rating}) {
  const[activeType, setActiveType] = React.useState(0);
  // const[activeSize, setActiveSize] = React.useState(0);


const typeNames = ["с упаковкой","без упаковки"];
  return (
   <div className="pizza-block-wrapper">
     <div className="pizza-block">
        <img className="pizza-block__image"src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__selector">
          <ul>
            {types.map((typeId)=>(
              <li 
              key={typeId}
              onClick={()=> setActiveType(typeId)}
              className={activeType === typeId? "active" : ""}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
        </div>
    
     <div className="pizza-block__bottom">
      <div className="pizza-block__price"> от {price} ₽</div>
      <div className="button button--outline button--add">
        <span>добавить</span>
        
      </div>
     </div>
    </div>
   </div>
  );
}
export default PizzaBlock;
