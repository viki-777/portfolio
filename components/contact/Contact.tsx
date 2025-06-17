import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.current) {
      try {
        await emailjs.sendForm(
          "service_xo37kwc",
          "template_9qc9fjd",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "aTjjx2i5xJlMRrBlo"
        );
        toast.success("Thank you for contacting me! I will get back to you soon 👋");
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        setTimeout(() => {
          nameInputRef.current?.focus();
        }, 100);
      } catch (error) {
        console.log(error)
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <>
      <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center py-24 md:py-0">
        <h3 className="absolute top-24 uppercase tracking-[20px]   text-xl md:text-2xl cursor-default">
          Contact
        </h3>

        <div className="flex flex-col space-y-6 md:space-y-10 mt-6">
          <h4 className="text-xl md:text-4xl font-semibold text-center cursor-default mt-10 md:mt-0">
            I got just what you need.{" "}
            <span className="text-[#10b981] cursor-default">Let&apos;s Talk</span>
          </h4>

          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center space-x-3 md:space-x-5">
              <PhoneIcon className="text-[#10b981] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
              <p className="text-base md:text-2xl">+916287634513</p>
            </div>
            <div className="flex items-center space-x-3 md:space-x-5">
              <MapPinIcon className="text-[#10b981] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
              <p className="text-base md:text-2xl">Gwalior</p>
            </div>
            <div className="flex items-center space-x-3 md:space-x-5">
              <EnvelopeIcon className="text-[#10b981] h-5 w-5 md:h-7 md:w-7 animate-pulse" />
              <p className="text-base md:text-2xl break-all md:break-normal">
                vikas.iiitm.career@gmail.com
              </p>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-2 w-full max-w-md mx-auto mt-8 md:mt-16 px-4"
        >
          <motion.div
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex space-x-2 justify-between"
          >
            <input
              ref={nameInputRef}
              placeholder="Name"
              className="contactInput text-sm md:text-base"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "49%" }}
            />
            <input
              placeholder="Email"
              className="contactInput text-sm md:text-base"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "49%" }}
            />
          </motion.div>
          
          <motion.input
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            placeholder="Subject"
            className="contactInput text-sm md:text-base"
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          
          <motion.textarea
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            placeholder="Message"
            className="contactInput text-sm md:text-base h-32 md:h-40"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          
          <motion.button
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            type="submit"
            className="bg-[#10b981] py-3 md:py-5 px-6 md:px-10 rounded-md text-black font-bold text-sm md:text-base transition duration-200 ease-in-out hover:drop-shadow-[0_0px_4px_#10b981]"
          >
            Submit
          </motion.button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contact;