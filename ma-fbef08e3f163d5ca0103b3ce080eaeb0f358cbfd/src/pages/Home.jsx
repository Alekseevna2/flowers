import React from 'react'
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';

const Home=({searchValue})=> {
  const [items,setItems]=React.useState([]);
  const [isLoading,setIsloading]=React.useState(true);
  const[categoryId, setCategoryId]=React.useState(0);
  const[sortType, setSortType]=React.useState({
    name:"популярности",
    sortProperty:"rating",
  });
  React.useEffect(()=>{
    const sortBy = sortType.sortProperty.replace('-','');
    const category = categoryId > 0? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : "";
    

    fetch(`https://670e3a4c073307b4ee45fb19.mockapi.io/items?limit=4&${category}&sortBy=${sortBy}&order=${search}`)
    .then((res)=>res.json())
    .then((arr)=>{
      setItems(arr);
      setIsloading(false);
    });
   window.scrollTo(0,0);
  },[categoryId, sortType, searchValue]);

  return (
    <div  className='container'>
    <div className='content__top'>
      <Categories
      value={categoryId}
      onChangeCategory={(index)=> setCategoryId(index)}/>
      <Sort value ={sortType} onChangeSort={(index) => setSortType(index)}/>
    </div>
    <h2 className="content__title">Наш ассортимент</h2>
    <div className="content__items">
      {isLoading
      ?[...new Array(8)].map((_,index)=> <Skeleton key={index}/>)
      : items.map((obj)=> <PizzaBlock key={obj.id} {...obj} />)}
    </div>
 </div>
  );
}
export default Home;