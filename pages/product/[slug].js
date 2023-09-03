//slug is present inside [] means that it is going to be dynamic.
import React from 'react';
import { client, urlFor } from '../../lib/client';

import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';

const ProductDetails = ({product, products}) => {
    const {image, name, details, price}=product;

  return (
    <div>
      <div className="product-details-container">
        <div>
            <div className="image-container">
                <img src={urlFor(image && image[0])} />
            </div>
            {/* <div className="small-images-container">
                {image?.map((item,i)=>(
                    <img src={urlFor(item)}
                    className=""
                    onMouseEnter=""
                    />
                ))}
              </div> */}
        </div>
        <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
                <div>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiFillStar/>
                   <AiOutlineStar/>
                  
                </div>
                <p>
                    (20)
                </p>
            </div>
            <h4>Details: </h4>
            <p>{details}</p>
            <p className="price">${price}</p>
            <div className="quantity">
                <h3>Quantity:</h3>
                <p className="quantity-desc">
                    <span className="minus" onClick="">
                        <AiOutlineMinus/>
                    </span>
                    <span className="num" onClick="">
                       0
                    </span>
                    <span className="plus" onClick="">
                        <AiOutlinePlus/>
                    </span>
                </p>
            </div>
            <div className="buttons">
                <button type="button" className="add-to-cart" onClick="">
                    Add to cart
                </button>
                <button type="button" className="buy-now" onClick="">
                    Buy Now
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths=async()=>{
    const query= `*[_type=="product"]{ 
        slug{
            current 
        }
    }`;//give all the products but dont return all of the data for the products  just give the current slug property 

    const products= await client.fetch(query);
    const paths=products.map((product)=>({
        params:{
            slug: product.slug.current
        }
    }));

    return{
        paths, fallback:'blocking'
    }
}

export const getStaticProps = async({params : {slug}} )=>{
    const query =`*[_type == "product" && slug.current == '${slug}'][0]`;   //query to fetch all products from sanity dashboard using language groq.
    const productsQuery='*[_type == "product"]';
    const product=await client.fetch(query); //to fetch the data
    const products=await client.fetch(productsQuery); //to fetch the data
   console.log(product);
  
    return{
      props:{products,product}
    }
  }


export default ProductDetails