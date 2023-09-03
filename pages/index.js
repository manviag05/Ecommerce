import React from 'react';
import { Product,FooterBanner,HeroBanner } from '@/components';
import {client} from '../lib/client'; 


const Home = ({products,bannerData}) => {
  return (
    <>
      
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      {
        console.log(bannerData) //to get the bannerdata saved in sanity dashboard
      }

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {products?.map((product)=> <Product key={product._id} product={product}/>)} 
      </div>

      <FooterBanner footerBanner={ bannerData && bannerData[0]}/>
    </>
  );

}
export const getServerSideProps = async()=>{
  const query = '*[_type == "product"]';   //query to fetch all products from sanity dashboard using language groq.
  const products=await client.fetch(query); //to fetch the data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData=await client.fetch(bannerQuery);

  return{
    props:{products,bannerData}
  }
}

export default Home
