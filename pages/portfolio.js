import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';

import Footer from '@/components/_App/Footer';
      
const Portfolio = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Portfolio" 
                homePageUrl="/portfolio" 
                homePageText="Home" 
                activePageText="Portfolio" 
                BGImage="item-bg-5" 
            />

            {/* <GoogleMap/>

            <ContactForm />
  
            <NewsletterForm /> */}

            <Footer />
        </>
    )
}

export default Portfolio;