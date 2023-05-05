import React from 'react'
import styles from '@/components/CareerDetails/CareerDetailsContent.module.css'

function CareerModel(props) {
const careerDetails = props.careerInfoContent
  return (
    <div className={styles.modalWrapper}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="btn-close" aria-label="Close" onClick={props.closeMyModal}></button>
          </div>
          <div className="modal-body">
            <div className="career-details-area">
              <div className="container">
                <div className={styles.careerDetailsDesc}>

                  <h1>{careerDetails.title}</h1>
                  <span>Noida</span>
                  <div className="p-2 d-none d-md-block">
                    <h4>Job Summary</h4>
                    <p>{careerDetails.jobSummary}</p>
                  </div>



                  <h4>Responsibilities</h4>
                  <ul>
                  {careerDetails.responsibilities.map((val, i) => (
                    <li>{val}</li>
                  ))}
                  </ul>


                  <div className="p-2 d-none d-md-block"></div>

                  <h4>Requirements</h4>

                  <ul>
                  {careerDetails.requirements.map((val, i) => (
                    <li>{val}</li>
                  ))}
                  </ul>

                  <h4>Qualifications</h4>

                  <ul>
                  {careerDetails.qualification.map((val, i) => (
                    <li>{val}</li>
                  ))}
                  </ul>

                  <div className="p-2 d-none d-md-block">
                    {/* <span>Noida</span> <br />
                    <span>Noida</span> */}

                    <h4>Salary and Benefits</h4>
                    <p>Competitive salary based on experience</p>
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