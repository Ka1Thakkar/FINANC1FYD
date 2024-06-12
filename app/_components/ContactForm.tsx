import { ValidationError, useForm } from "@formspree/react";

const ContactForm = () => {
    const [state, handleSubmit] = useForm("xpzvvqey");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-start justify-center gap-5 w-full mt-10">
            <label htmlFor="email" className="text-xl font-semibold">
                Full Name
            </label>
            <input
                className="border border-gray-400 p-2 rounded-md w-full outline-none"
                id="name"
                type="text"
                name="name"
            />
            <label htmlFor="email" className="text-xl font-semibold">
                Phone Number
            </label>
            <input
                className="border border-gray-400 p-2 rounded-md w-full outline-none"
                id="phone"
                type="tel"
                name="phone"
            />
            <ValidationError
                prefix="Phone Number"
                field="phone"
                errors={state.errors}
            />
            <label htmlFor="email" className="text-xl font-semibold">
                Email Address
            </label>
            <input
                className="border border-gray-400 p-2 rounded-md w-full outline-none"
                id="email"
                type="email"
                name="email"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="message" className="text-xl font-semibold">
                Message
            </label>
            <textarea
                className="border border-gray-400 p-2 rounded-md w-full outline-none"
                id="message"
                name="message"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="bg-red-600 text-white py-2 px-5 rounded-md">
                Submit
            </button>
        </form>
    );
}

export default ContactForm;