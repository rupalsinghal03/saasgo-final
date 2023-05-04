import React from 'react'
import styles from '@/components/CareerDetails/CareerDetailsContent.module.css'

function CareerModel(props) {

  return (
    <div className="modal-wrapper">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="btn-close" aria-label="Close" onClick={props.closeMyModal}></button>
        </div>
        <div className="modal-body">
        <div className="career-details-area pt-100 pb-100">
                <div className="container">
                    <div className={styles.careerDetailsDesc}>
                       
                        <h1>Python Developer</h1>
                        <span>Noida</span>
                        <div className="p-2 d-none d-md-block"></div>
             
                        <h4>Job Description</h4>
                        <ul>
                            <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor</li>
                            <li>Stet clita kasd gubergren no sea takimata sanctus</li>
                            <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
                            <li>Aliquyam erat sed diam voluptua</li>
                            <li>Consetetur sadipscing elitr sed diam nonumy eirmod tempor</li>
                            <li>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</li>
                        </ul>


                        <div className="p-2 d-none d-md-block"></div>
            
                        <h4>Job Qualification</h4>

                        <ul>
                            <li>SPython certifications is a plus</li>
                            <li>Good Coding & developement skills</li>
                            <li>Comfortable for client interactions</li>
                        </ul>

                        <div className="p-2 d-none d-md-block"> 
                        <span>Noida</span> <br />
                        <span>Noida</span>
                        </div>
                
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default CareerModel