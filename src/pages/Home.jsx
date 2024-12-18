import React from 'react'
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home=()=> {
  const {searchValue}=React.useContext(SearchContext);
  const [items,setItems]=React.useState([]);
  const [isLoading,setIsLoading]=React.useState(true);
  const[categoryId, setCategoryId]=React.useState(0);
  const[currentPage, setCurrentPage]=React.useState(1);
  const[sortType, setSortType]=React.useState({
    name:"популярности",
    sortProperty:"rating",
  });

  React.useEffect(()=>{
    setIsLoading(true);//загрузка скелетона перед категориями

    const sortBy = sortType.sortProperty.replace('-','');//если есть - удалить его из свойства //если есть - сортировка по возрастанию, иначе по убыванию
    const category = categoryId > 0? `category=${categoryId}` : '';
    const search = searchValue ? `&search=${searchValue}` : "";

    fetch(`https://66f1215341537919154fa6f6.mockapi.io/items?page=${currentPage}&limit=6&${category}&sortBy=${sortBy}&order=${search}`,)
    .then((res)=>res.json())
    .then((arr)=>{
      setItems(arr);//возращает новые пиццы
      setIsLoading(false);//загружка завершена
    });
   window.scrollTo(0,0);
  },[categoryId, sortType, searchValue, currentPage]);// если будет меняться тут, будет делаться запрос заново 

  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
   
  return (
    <div  className='container'>
    <div className='content__top'>
      <Categories 
      value={categoryId} 
      onChangeCategory={(index)=> setCategoryId(index)}/>
      <Sort 
      value ={sortType} 
      onChangeSort={(index) => setSortType(index)}/>
    </div>
    <h2 className="content__title">Наш ассортимент</h2>
    <div className="content__items">{isLoading ? skeletons : pizzas}
    </div>
    <Pagination onChangePage={(number) => setCurrentPage(number)} />
 </div>
  );
}
export default Home;