import React, { useState } from 'react'
import Link from 'next/link'

import styles from '@/components/Career/CareerContent.module.css'
import ApplyForm from './ApplyForm/ApplyForm'
import CareerModel from './CareerModel'
import { string } from 'sharp/lib/is'

// Career Info Content
const CareerInfoContent = [
    {
        title: "Flutter Developer",

        education: "Education:",
        educationText: "BTech / M.C.A.",

        experience: "Experience:",
        experienceText: "At least 2 years",
        viewDetailsText: "Details",

        jobSummary: "We are seeking a skilled Flutter Developer with 1-2 years of experience to join our team. As a Flutter Developer, you will be responsible for developing and integrating APIs using the latest and best-in-demand technologies and industry best practices. You will be responsible for project development and will work closely with our team of designers and developers to deliver high-quality mobile applications that meet our clients' needs.",
        requirements: ["1-2 years of experience in mobile application development using Flutter", "Strong knowledge of Dart programming language", "Experience with APIs integration", "Understanding of RESTful APIs and their usage", "Experience with version control systems such as Git", "Familiarity with agile software development methodologies", "Excellent communication and problem-solving skills", "Bachelor's degree in Computer Science or a related field"],
        responsibilities: ["Develop mobile applications using Flutter framework", "Integrate APIs with the application", "Collaborate with cross-functional teams to identify and prioritise features", "Write clean, maintainable, and efficient code", "Stay up-to-date with the latest industry trends and technologies", "Ensure the best possible performance, quality, and responsiveness of the application"],
        qualification: ["Experience with Firebase, Google Maps, and other third-party libraries", "Understanding of state management in Flutter", "Experience with backend technologies such as Node.js, PHP, or Ruby on Rails", "Knowledge of design patterns such as Bloc or Provider", "Experience with unit testing and integration testing"]
    },
    {
        title: "Laravel Developer",

        education: "Education:",
        educationText: "BTech / M.C.A.",

        experience: "Experience:",
        experienceText: "At least 2 years",

        viewDetailsText: "Details",

        jobSummary: "We are seeking a highly skilled Laravel Developer with 3+ years of experience to join our team. As a Laravel Developer, you will be responsible for designing and implementing server-side web application logic, developing and maintaining web applications, and ensuring high performance and responsiveness to requests from the front-end. You will work closely with our team of developers and collaborate with our product and design teams to deliver high-quality software solutions that meet our clients' needs.",
        requirements: ["3+ years of experience in Laravel development", "Strong proficiency in PHP and MySQL", "Experience with the Laravel framework and its components such as Eloquent ORM and Blade Templating Engine", "Familiarity with RESTful APIs and modern front-end build pipelines and tools", "Experience with version control systems such as Git", "Familiarity with agile software development methodologies", "Excellent communication and problem-solving skills", "Bachelor's degree in Computer Science or a related field"],
        responsibilities: ["Design and implement server-side web application logic using Laravel framework", "Develop and maintain web applications using PHP and MySQL", "Write clean, maintainable, and efficient code", "Ensure the best possible performance, quality, and responsiveness of the applications", "Collaborate with cross-functional teams to identify and prioritise features", "Identify and troubleshoot application issues", "Stay up-to-date with industry developments and technologies"],
        qualification: ["Experience with AWS, Google Cloud, or other cloud platforms", "Knowledge of front-end technologies such as JavaScript, HTML, and CSS", "Familiarity with testing frameworks such as PHPUnit", "Knowledge of other PHP frameworks such as Symfony or CodeIgniter", "Experience with NoSQL databases such as MongoDB", "Understanding of serverless architecture and its benefits"]
    },
    {
        title: "React Developer",

        education: "Education:",
        educationText: "BTech / M.C.A.",

        experience: "Experience:",
        experienceText: "At least 2 years",

        viewDetailsText: "Details",

        jobSummary: "We are seeking a talented React Developer with 2+ years of experience to join our team. As a React Developer, you will be responsible for developing and implementing user interface components using React.js workflows. You will work closely with our team of developers and collaborate with our product and design teams to deliver high-quality software solutions that meet our clients' needs.",
        requirements: ["2+ years of experience in React.js development", "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model","Experience with popular React.js workflows such as Redux or Flux","Experience with HTML, CSS, and CSS preprocessors such as SASS or LESS","Familiarity with RESTful APIs and modern front-end build pipelines and tools","Experience with version control systems such as Git","Familiarity with agile software development methodologies","Excellent communication and problem-solving skills","Bachelor's degree in Computer Science or a related field"],
        responsibilities: ["Develop and implement user interface components using React.js workflows", "Collaborate with cross-functional teams to identify and prioritise features","Write clean, maintainable, and efficient code","Ensure the best possible performance, quality, and responsiveness of the applications","Develop and maintain code libraries and reusable components for future use","Identify and troubleshoot application issues","Stay up-to-date with industry developments and technologies"],
        qualification: ["Experience with AWS, Google Cloud, or other cloud platforms", "Knowledge of other front-end technologies such as AngularJS or Vue.js","Understanding of server-side rendering and its benefits","Familiarity with testing frameworks such as Jest or Enzyme","Knowledge of other programming languages such as Python or Ruby","Experience with database technologies such as SQL or NoSQL databases"]
    },
    {
        title: "NodeJs Developer",

        education: "Education:",
        educationText: "BTech / M.C.A.",

        experience: "Experience:",
        experienceText: "At least 2 years",

        viewDetailsText: "Details",

        jobSummary: "Wne are seeking a skilled Node.js Developer with 2 years of experience to join our team. As a Node.js Developer, you will be responsible for developing server-side applications, APIs, and integrations using the latest industry best practices. You will work closely with our team of developers and collaborate with our product and design teams to deliver high-quality software solutions that meet our clients' needs. Additionally, you will be responsible for designing and maintaining databases, ensuring their performance, security, and scalability",
        requirements: ["2 years of experience in Node.js development", "Strong proficiency in JavaScript, including DOM manipulation and the JavaScript object model","Experience with popular React.js workflows such as Redux or Flux","Experience with HTML, CSS, and CSS preprocessors such as SASS or LESS","Familiarity with RESTful APIs and modern front-end build pipelines and tools","Experience with version control systems such as Git","Familiarity with agile software development methodologies","Excellent communication and problem-solving skills","Bachelor's degree in Computer Science or a related field"],
        responsibilities: ["Develop server-side applications using Node.js and related technologies",
        "Design and develop RESTful APIs for various applications",
        "Work closely with front-end developers to integrate applications with back-end services",
        "Collaborate with cross-functional teams to identify and prioritise features",
        "Write clean, maintainable, and efficient code",
        "Ensure the best possible performance, quality, and responsiveness of the applications",
        "Design and maintain databases, ensuring performance, security, and scalability",
        "Troubleshoot and resolve database issues"],
        qualification: ["Experience with AWS, Google Cloud, or other cloud platforms",
        "Knowledge of Docker and Kubernetes",
        "Experience with testing frameworks such as Mocha and Chai",
        "Understanding of microservices architecture",
        "Knowledge of other backend technologies such as PHP or Ruby on Rails",
        "Proficiency in database design and administration using SQL and NoSQL databases such as MySQL, PostgreSQL, and Redis"]
    }
]

const CareerContent = () => {
    const [model, setModel] = useState(false);
    const [careerDetails, setCareerDetails] = useState(
        {
            title: "NodeJs Developer",
            education: "Education:",
            educationText: "BTech / M.C.A.",
            experience: "Experience:",
            experienceText: "At least 2 years",
            viewDetailsText: "Details",
            jobSummary: "",
            requirements: [""],
            responsibilities: [""],
            qualification: [""]
        });

    const closeModal = () => {
        setModel(false)
    }
    return (
        <>
            <div className="career-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12">
                            <div className={styles.careerItemContent}>
                                <h3>We're looking for</h3>

                                {CareerInfoContent.map((val, i) => (
                                    <div className={styles.careerBox} key={i}>
                                        <div className="row align-items-center">
                                            <div className="col-lg-7 col-sm-6">
                                                <div className={styles.careerContent}>
                                                    <h4>{val.title}</h4>
                                                    <p><span>{val.education}</span> {val.educationText}</p>
                                                    <p><span>{val.experience}</span> {val.experienceText}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-5 col-sm-6">
                                                <div className={styles.careerBtn}>
                                                    {/* <Link href={val.viewDetailsLink}> */}
                                                    <a className="default-btn" onClick={() => { setModel(true); setCareerDetails(val); console.log(careerDetails); }}>{val.viewDetailsText}</a>
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-lg-5 col-md-12">
                            <ApplyForm />
                        </div>
                    </div>
                </div>
            </div>
            {model && <CareerModel closeMyModal={closeModal} careerInfoContent={careerDetails} />}
        </>
    )
}

export default CareerContent;