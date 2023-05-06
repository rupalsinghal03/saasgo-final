import React, { useState } from 'react'
import Link from 'next/link'

import styles from '@/components/Career/ApplyForm/ApplyForm.module.css'

const ApplyForm = () => {
    const [file, setFile] = useState();
    const handleFileChange = () => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    // const handleUploadClick =
    //     [
    //         {
    //             'content-type': file.type,
    //             'content-length': `${file.size}`,
    //         }
    //     ]
    return (
        <>
            <div className={styles.careerFormWrap}>
                <div className={styles.content}>
                    <h3>Apply for Job</h3>
                </div>

                <form className={styles.careerForm}>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Enter your name*"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Email address*"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Enter phone*"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            className={styles.formControl}
                            placeholder="Portfolio link"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <select className="form-select">
                            <option value="1">Openings</option>
                            <option value="2">Flutter Developer</option>
                            <option value="3">Laravel  Developer</option>
                            <option value="4">React Developer</option>
                            <option value="5">NodeJs Developer</option>
                        </select>
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type='file'
                            onChange={handleFileChange}
                            className={styles.formControl}
                            placeholder="Upload your latest resume*"
                        ></input>
                        <div>{file && `${file.name} - ${file.type}`}</div>
                    </div>

                    <div className={styles.submitBtn}>
                        <button type="submit" className="default-btn" >Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ApplyForm;