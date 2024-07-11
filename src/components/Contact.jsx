// import { motion } from "framer-motion"

import { CONTACT } from "../index"


const Contact = () => {
    return (
        <div className="border-b border-neutral-900 pb-20">
            <h1 className="my-20 text-4xl text-center">Contact <span className="text-neutral-500">Me</span></h1>
            <div className="text-center ">
                <p className="my-4">{CONTACT.address}</p>
                <a href="#" className="my-4">{CONTACT.email}</a>
                <p className="my-4">{CONTACT.phoneNo}</p>
            </div>
        </div>
    )
}

export default Contact
