import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';

import Footer from '@/components/_App/Footer';
      
const Products = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Products" 
                homePageUrl="/products" 
                homePageText="Home" 
                activePageText="Products" 
                BGImage="item-bg-5" 
            />

            {/* <GoogleMap/>

            <ContactForm />
  
            <NewsletterForm /> */}

            <Footer />
        </>
    )
}

export default Products;