'use client'
import ContactForm from "../_components/ContactForm";
import Footer from "../_components/Footer";
import Navbar from "../_components/Navbar";

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className="flex flex-col py-10 px-10">
                <h1 className="text-4xl font-bold">Apply For Financing</h1>
                <ContactForm />
            </div>
            <Footer />
        </>
    );
}

export default Contact;