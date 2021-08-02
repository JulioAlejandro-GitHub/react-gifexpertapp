
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const  GifExpertApp = ( {defaultCatergories=[]} ) => {
  //const categories = ['one', 'two', 'tree'];
  const [categories, setCategories] = useState(defaultCatergories);

  /*
  const handleAdd = () => {
    //setCategories( [...categories, 'four'] );
    setCategories( cate => [...cate, 'four'] );
  }
*/
  return (
    <>
      <h2>Gifs Expert App</h2>
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

GifExpertApp.propTypes = {
  defaultCatergories: PropTypes.array.isRequired
}
GifExpertApp.defaultProps = {
  defaultCatergories : ["Cats BD"]
}

export default GifExpertApp;
