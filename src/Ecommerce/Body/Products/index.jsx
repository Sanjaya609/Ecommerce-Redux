import React from 'react'
import ProductDisplay from '../../../Components/ProductDisplay'
import { useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners';

const Products = () => {


  let productsToRender;
  const products = useSelector((state) => state.product.products);
  const filteredProducts=useSelector((state)=>state.product.filtered_products);
  if(filteredProducts.length===0){
    productsToRender=products;
  }else{
    productsToRender=filteredProducts;
  }
  const isLoading = useSelector((state) => state.product.isLoading);

  
  return (
    <div className="products">
      <div className="wrapper">
        {isLoading ? 
        <div className="spinner" 
        style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <BeatLoader size={50} color='blue'/></div> 
        :<div className="content" style={{ "padding": "1rem 1.5rem 0 1.5rem", 'display': 'flex' }}>
          <div className="row">
            {productsToRender.map((item) => (
              <ProductDisplay
                product={item}
                name={item.name}
                price={item.price}
                stock={item.stock}
                image={item.image}
                release={item.createDate}
                key={item.id}
                id={item.id} />
            ))}
          </div>
        </div>}

      </div>

    </div>
  )
}

export default Products;
