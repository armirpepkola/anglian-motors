"use client";

import contactImg from "@/assets/images/icon/arry.png";
import {useState} from "react";
import Image from "next/image";

export default function ContactFormSection() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <section className="contact pt-130 pb-130">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="content bg-image">
                            <h2>Have something in mind? <br/>
                                Let's talk.</h2>
                            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua.
                                Ut enim ad minim.</p>
                            <div className="arry"><Image src={contactImg} alt="" className="h-auto"/></div>
                            <ul>
                                <li><a
                                    href="https://www.google.com/maps/d/viewer?mid=1UZ57Drfs3SGrTgh6mrYjQktu6uY&amp;hl=en_US&amp;ll=18.672105000000013%2C105.68673800000003&amp;z=17"
                                    target="_blank"><i className="fa-solid fa-location-dot"></i>785 15h Street,
                                    Office
                                    478
                                    Berlin </a>
                                </li>
                                <li><a href="tel:1-732-798-0976"><i className="fa-solid fa-phone-volume"></i>+1 800
                                    555 45
                                    65</a>
                                </li>
                                <li><a href="mailto:company.info@mail.com"><i
                                    className="fa-solid fa-envelope"></i>info.stoky@company.com</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-area">
                            <form action="#0">
                                <input type="text" placeholder="Name"/>
                                <input type="email" placeholder="Email"/>
                                <select name="subject" id="subject" className="nice-select p-3">
                                    <option value="0">Select Subject</option>
                                    <option value="0">Account</option>
                                    <option value="0">Service</option>
                                    <option value="0">Pricing</option>
                                    <option value="0">Support</option>
                                </select>
                                <textarea name="Your Review" id="massage" placeholder="Message..."></textarea>
                                <div className="radio-btn mt-3">
                                    <span className={ active ? "radio-btn-active" : ""}
                                          onClick={handleClick}></span>
                                    <p onClick={handleClick}>I accept your terms & conditions</p>
                                </div>
                                <button className="mt-40">Submit Now <i className="fa-solid fa-arrow-right-long"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}