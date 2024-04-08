import '../Style/NewContactForm.css';
import { useFormik } from 'formik';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Spinner } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap'


const NewContactForm = () => {
    const [Loading, SetLoading] = useState(false)
    
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: '',
        },
        validate: (values) => {
            const errors = {}

            if (!values.name) {
                errors.name = 'Required*';
            }
            if (!values.phone) {
                errors.phone = 'Required*';
            } else if (!/^\d{10}$/.test(values.phone)) {
                errors.phone = 'Must be exactly 10 digits';
            }
            if (!values.email) {
                errors.email = 'Required*';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Must be valid e-mail';
            }
            if (!values.company) {
                errors.company = 'Required*';
            }

            if (!values.service) {
                errors.service = 'Required*';
            }
            if (!values.budget) {
                errors.budget = 'Required*';
            }
            if (!values.message) {
                errors.message = 'Required*';
            } else if (values.message.length > 5000) {
                errors.message = 'Must be 5000 characters or less';
            }

            if (Object.keys(errors).length === 0) {
                formik.setStatus({ isSubmitting: true });
            }

            return errors;
        },
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            SetLoading(true)
            const res = await axios.post('https://api.akkenna.com/api/mailing/contact', values)
            if (res.status == 200) {
                SetLoading(false)
                Swal.fire({
                    text: "We appreciate your interest! Our company will be in touch with you soon.",
                    imageUrl: "https://akkenna.com/static/media/logo.527ce9569c515d13529371370e18d69f.svg",
                    imageWidth: 200,
                    imageHeight: 20,
                    imageAlt: "Custom image",
                    showCloseButton: true,
                    showConfirmButton: true,
                    confirmButtonText: "Thank You",
                })
            }
            setTimeout(() => {
                setSubmitting(false);
            }, 2000);
            resetForm()
        },
    });

    return(
        
            <section id="NewContactForm" >
                <Container className='homeForm'>
                    <Row className='formRow'>
                        <Col lg={9}>
                            <div className='FormHead'>
                                <Row className='d-flex justify-content-center align-items-center text-center flex-column'>
                                    <Col lg={12}>
                                        <h2 className="frmTitle">Get an Idea? Let’s Talk</h2></Col>
                                    <Col lg={9}>
                                        <p className="frmDesc">Do you have a project in mind? Got a story to tell the world? Or just want to say hello?
                                            Shoot us an email or use the contact form below. We will revert in no time.
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col lg={9} className='contact-form'>
                            <form onSubmit={formik.handleSubmit} >
                                <div className="row d-flex justify-content-center align-items-center">
                                    <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                                        <input type="text" name="name" id="name"
                                            placeholder='Enter Your Name'
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            value={formik.values.name} />
                                        <p className='text-danger'>{formik.errors.name}</p>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                                        <input type="email" name="email" id="email"
                                            placeholder='Enter Your E-mail'
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            value={formik.values.email} />
                                        <p className='text-danger'>{formik.errors.email}</p>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                                        <input type="text" name="phone" id="phone"
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            placeholder='Enter Your Phone Number'
                                            value={formik.values.phone} />
                                        <p className='text-danger'>{formik.errors.phone}</p>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                                        <input type="text" name="company" id="company"
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            placeholder='Enter Your Company Name'
                                            value={formik.values.company} />
                                        <p className='text-danger'>{formik.errors.company}</p>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                                        <select name="service" id="service"
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            placeholder='What service you want from us'
                                            value={formik.values.service}
                                        >
                                            <option value="">What service you want from us</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                            <option value="Ecommerce Development">Ecommerce Development</option>
                                            <option value="Explainer Video Creation">Explainer VideoCreation </option>
                                            <option value="Hire Dedicated Development">Hire DedicatedDevelopment</option>
                                            <option value="Logo Design">Logo Design</option>
                                            <option value="Mobile App Development">Mobile App Development</option>
                                            <option value="Pay Per Click Advertising">Pay Per Click Advertising</option>
                                            <option value="Search Engine Optimization">Search Engine Optimization</option>
                                            <option value="Shopify Website Development">Shopify WebsiteDevelopment</option>
                                            <option value="Social Media Marketing">Social Media Marketing</option>
                                            <option value="UI UX Design">UI UX Design</option>
                                            <option value="Web App Development">Web App Development</option>
                                            <option value="Website Design and Development">Website Design and Development</option>
                                            <option value="Website Redesigning">Website Redesigning</option>
                                            <option value="Wordpress Development">Wordpress Development</option>
                                        </select>
                                        <p className='text-danger'>{formik.errors.service}</p>
                                    </div>
                                    <div className="col-lg-6 col-md-7 col-sm-10 mt-4">
                                        <select name="budget" id="budget"
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            placeholder='Select Your budget'
                                            value={formik.values.budget}

                                        >
                                            <option value="">Select your budget</option>
                                            <option value="10K-25K USD">10K-25K USD</option>
                                            <option value="25K-50K USD">25K-50K USD</option>
                                            <option value="50K-100K USD">50K-100K USD</option>
                                            <option value="Less than 10K USD">Less than 10K USD</option>
                                            <option value="More than 100K USD">More than 100K USD</option>
                                        </select>
                                        <p className='text-danger'>{formik.errors.budget}</p>
                                    </div>
                                    <div className="col-lg-12 col-md-7 col-sm-10 mt-4">
                                        <textarea name="message" id="message"
                                            onBlur={formik.handleChange}
                                            onChange={formik.handleChange}
                                            placeholder='Enter Your Message'
                                            cols="30" rows="10"
                                        ></textarea>
                                        <p className='text-danger'>{formik.errors.message}</p>
                                    </div>
                                    <div className='submit-btn mt-4'>
                                        <button type='button' onClick={formik.handleSubmit} name="submit">
                                            {
                                                Loading ? <Spinner /> : "Enquiry Now"
                                            }
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </Col>
                    </Row>
                </Container>
            </section>
    
    )
}

export default NewContactForm;