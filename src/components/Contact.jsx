import { useState } from "react"
import { Fragment } from "react"

export default function Contact() {
    const form = [
        { label: "Name", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" },
        { label: "Message", type: "textarea", name: "message" }
    ]

    const contactLinks = [
        {
            name: "Email",
            url: "mailto:mohamed.sheba101@gmail.com",
            text: "mohamed.sheba101@gmail.com"
        },

        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mohamed-sheba",
            text: "Mohamed Sheba"
        },

        {
            name: "GitHub",
            url: "https://github.com/mohamedsheba",
            text: "mohamedsheba"
        },

        {
            name: "WhatsApp",
            url: "https://wa.me/201004843072",
            text: "+201004843072"
        }
    ]
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitting(true)
        const data = {
            name,
            email,
            message
        }

        const response = await fetch(
            "https://formspree.io/f/xyeydone",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        )

        if (response.ok) {
            setStatus("success")
            setName("")
            setEmail("")
            setMessage("")
        } else {
            setStatus("error")
        }
        setIsSubmitting(false)
    }

    return (
        <section className="contact" id="contact">

            <div className="section-heading" data-reveal>
                <span className="section-eyebrow">Have a Project in Mind?</span>
                <h2 className="section-title">GET IN TOUCH</h2>
                <p>
                    I'm always open to discussing new projects, creative ideas, and opportunities to collaborate.
                </p>
            </div>

            <div className="contact-grid">

                <form className="contact-form" data-reveal onSubmit={handleSubmit}>

                    {form.map((input) => (
                        <Fragment key={input.name}>
                            <label htmlFor={input.name}>{input.label}</label>
                            {(input.type === "text") && (
                                <input
                                    type={input.type}
                                    id={input.name}
                                    name={input.name}
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    required
                                />
                            )}

                            {(input.type === "email") && (
                                <input
                                    type={input.type}
                                    id={input.name}
                                    name={input.name}
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            )}

                            {input.type === "textarea" && (
                                <textarea
                                    id={input.name}
                                    name={input.name}
                                    rows={5}
                                    onChange={(e) => setMessage(e.target.value)}
                                    value={message}
                                    required
                                />
                            )}

                        </Fragment>
                    ))}

                    <button type="submit" className="btn btn-primary">{isSubmitting ? "...Sending" : "Send Message"}</button>

                    {status === "success" && (
                        <p className="success-message">Message sent successfully!</p>
                    )}

                    {status === "error" && (
                        <p className="error-message">Something went wrong. Please try again.</p>
                    )}

                </form>

                <div className="contact-info" data-reveal>
                    <h3>Or reach me directly</h3>

                    <span>Have a question or an opportunity in mind? My inbox is always open.</span>

                    {contactLinks.map((link) => (

                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener"
                            className="contact-link"
                        >
                            {link.name === "Email" && (
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor"
                                        d="M2 4h20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm19.4 2.3-9.4 7-9.4-7A1 1 0 0 1 3 6h18a1 1 0 0 1 .4.3zM2 8.2V18h20V8.2l-9.4 7a1 1 0 0 1-1.2 0L2 8.2z" />
                                </svg>
                            )}

                            {link.name === "LinkedIn" && (
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor"
                                        d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8.24h4.56V23H.22V8.24zm7.67 0h4.37v2.01h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v8.11h-4.56v-7.19c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8v7.32H7.89V8.24z" />
                                </svg>
                            )}

                            {link.name === "GitHub" && (
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor"
                                        d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.7 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.42.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                                </svg>
                            )}

                            {link.name === "WhatsApp" && (
                                <svg viewBox="0 0 24 24" width="20" height="20">
                                    <path fill="currentColor"
                                        d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.1 9 9.6 7.8 9.4 7.3c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.5 1.1 2.6c.1.2 1.9 2.9 4.6 4 .6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.4C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.5 14.7 3 13.4 3 12c0-4.9 4.1-9 9-9s9 4.1 9 9-4.1 9-9 9z" />
                                </svg>
                            )}


                            {link.text}
                        </a>
                    ))}

                </div>
            </div>
        </section>
    )
}