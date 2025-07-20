import resImage1 from "@/assets/images/register/res-image1.jpg";
import Link from "next/link";

import google from "@/assets/images/icon/google.svg";
import facebook from "@/assets/images/icon/facebook.svg";
import Image from "next/image";

export default function RegisterFormSection() {
    return (
        <section className="login-area pt-130 pb-130">
            <div className="container">
                <div className="login__item">
                    <div className="row g-4">
                        <div className="col-xxl-8">
                            <div className="login__image">
                                <Image src={resImage1} alt="image" className="h-auto"/>
                                <div className="btn-wrp">
                                    <Link href="/login">sign in</Link>
                                    <Link className="active" href="/register">create account</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4">
                            <div className="login__content">
                                <h2 className="text-white mb-65">create account</h2>
                                <div className="form-area login__form">
                                    <form action="#0">
                                        <input type="text" placeholder="User Name"/>
                                        <input className="mt-30" type="email" placeholder="Email"/>
                                        <input className="mt-30" type="password" placeholder="Enter Password"/>
                                        <input className="mt-30" type="password" placeholder="Enter Confirm Password"/>
                                        <button className="mt-30">Create Account</button>
                                        <div className="radio-btn mt-30">
                                            <span></span>
                                            <p>I accept your terms & conditions</p>
                                        </div>
                                    </form>
                                    <span className="or pt-30 pb-40">OR</span>
                                </div>
                                <div className="login__with">
                                    <a href="#0">
                                        <Image src={google} alt="google" className="h-auto"/> continue with google
                                    </a>
                                    <a className="mt-15" href="#0"><Image src={facebook} alt="facebook" className="h-auto"/>
                                        continue with facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}