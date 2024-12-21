import React, { useRef, useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type Props = {};

const Contact = (props: Props) => {
  const form = useRef<HTMLFormElement>(null);
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
    console.log("Form submitted with data:", formData);
    if (form.current) {
      try {
        const result = await emailjs.sendForm(
          "service_xo37kwc", // Your EmailJS Service ID
          "template_9qc9fjd", // Your EmailJS Template ID
          form.current,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "aTjjx2i5xJlMRrBlo" // Environment variable or fallback key
        );
        console.log("Email sent successfully:", result.text);
        toast.success("Thank you for contacting me! I will get back to you soon 👋");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl cursor-default">
        Contact
      </h3>

      <div className="flex flex-col space-y-10 mt-6">
        <h4 className="text-2xl md:text-4xl font-semibold text-center cursor-default">
          I got just what you need.{" "}
          <span className="text-[#10b981] cursor-default">Let's Talk</span>
        </h4>

        <div className="space-y-3">
          <div className="flex space-x-5">
            <PhoneIcon className="text-[#10b981] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+916287634513</p>
          </div>
          <div className="flex space-x-5">
            <MapPinIcon className="text-[#10b981] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Gwalior</p>
          </div>
          <div className="flex space-x-5">
            <EnvelopeIcon className="text-[#10b981] h-7 w-7 animate-pulse" />
            <p className="text-2xl">vikas.iiitm.career@gmail.com</p>
          </div>
        </div>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col space-y-2 w-fit mx-auto mt-28"
      >
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex space-x-1 sm:space-x-2 sm:justify-between"
        >
          <input
            placeholder="Name"
            className="contactInput"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: "50%" }}
          />
          <input
            placeholder="Email"
            className="contactInput"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: "50%" }}
          />
        </motion.div>
        <motion.input
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          placeholder="Subject"
          className="contactInput"
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
          placeholder="Message"
          className="contactInput"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          type="submit"
          className="bg-[#10b981] py-5 px-10 rounded-md text-black font-bold transition duration-200 ease-in-out hover:drop-shadow-[0_0px_4px_#10b981]"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
