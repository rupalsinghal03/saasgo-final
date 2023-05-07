import React from 'react';
import NavbarStyleOne from '@/components/_App/NavbarStyleOne';
import PageBanner from '@/components/Common/PageBanner/PageBanner';

import Footer from '@/components/_App/Footer';
      
const Industry = () => {
    return (
        <>
            <NavbarStyleOne />

			<PageBanner 
                pageTitle="Industry" 
                homePageUrl="/industry" 
                homePageText="Home" 
                activePageText="Industry" 
                BGImage="item-bg-5" 
            />

            {/* <GoogleMap/>

            <ContactForm />
  
            <NewsletterForm /> */}

            <Footer />
        </>
    )
}

export default Industry;