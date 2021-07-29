
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const  GifExpertApp = () => {
  //const categories = ['one', 'two', 'tree'];
  const [categories, setCategories] = useState(['cat']);

  /*
  const handleAdd = () => {
    //setCategories( [...categories, 'four'] );
    setCategories( cate => [...cate, 'four'] );
  }
*/
  return (
    <>
      <h2>GiftExpertApp</h2>
      <hr/>
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories.map( (category, i) => (
            <GifGrid 
              category={category}
              key={i}
            />
          ))
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
