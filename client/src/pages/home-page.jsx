import React, {useEffect} from 'react';
import Layout from "../layout/Layout.jsx";
import Brands from "../product/brands.jsx";
import ProductStore from "../store/ProductStore.js";
import FeatureStore from "../store/FeatureStore.js";
import Slider from "../product/slider.jsx";
import Features from "../features/feature.jsx";
import Categories from "../product/categories.jsx";
import Products from "../product/products.jsx";


const HomePage = () => {

    const {BrandListRequest,CategoryListRequest,SliderListRequest,ListByRemarkRequest}=ProductStore();
    const {FeatureListRequest}=FeatureStore();

    useEffect(() => {
        (async ()=>{
            await SliderListRequest();
            await FeatureListRequest();
            await CategoryListRequest();
            await ListByRemarkRequest("new");
            await BrandListRequest()
        })()
    }, []);


    return (
        <Layout>
            <Slider/>
            <Features/>
            <Categories/>
            <Products/>
            <Brands/>
        </Layout>
    );
};

export default HomePage;