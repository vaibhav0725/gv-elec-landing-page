import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ submitted: false, success: false, message: "" });

    // EmailJS credentials
    const serviceId = "service_8zeogvr"; // You still need to add your service ID
    const templateId = "template_qec1zm6"; // Your template ID
    const publicKey = "zeFwVnyqEPKLUty3c"; // Your public key

    // Send the email using EmailJS
    emailjs
      .sendForm(serviceId, templateId, formRef.current!, publicKey)
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        setStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully.",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Failed to send email:", error.text);
        setStatus({
          submitted: true,
          success: false,
          message: "Oops! Something went wrong. Please try again later.",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: ["+91 98765 43210", "+91 87654 32109"],
      subtext: "Mon-Sat 9:00 AM - 6:00 PM",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: ["info@gvelectricals.com", "projects@gvelectricals.com"],
      subtext: "We reply within 24 hours",
    },
    {
      icon: <MapPin size={24} />,
      title: "Address",
      details: [
        "GV Electricals Pvt Ltd",
        "Plot No. 123, Industrial Area",
        "Pune - 411019, Maharashtra",
      ],
      subtext: "Visit our office",
    },
    {
      icon: <Clock size={24} />,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
      subtext: "24/7 Emergency Service",
    },
  ];

  const services = [
    "Industrial Automation",
    "Power Distribution",
    "Commercial Electrical",
    "Residential Services",
    "Maintenance & Repair",
    "Safety & Compliance",
    "Other",
  ];

  return (
    <div className="pt-24 md:pt-32">
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Get In Touch With Our Experts
            </h1>
            <div className="w-20 h-1 bg-orange-500 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              Ready to start your next electrical project? Contact us today for
              a free consultation and quote. Our team is here to help you find
              the perfect solution.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h3>

                {status.submitted && (
                  <div
                    className={`mb-6 p-4 rounded-lg ${
                      status.success
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                  >
                    <div className="flex items-center space-x-2">
                      {status.success ? (
                        <CheckCircle size={20} className="text-green-600" />
                      ) : (
                        <AlertCircle size={20} className="text-red-600" />
                      )}
                      <p>{status.message}</p>
                    </div>
                  </div>
                )}

                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-4 md:p-6"
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-blue-600 mt-1 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-600 mb-1 text-sm md:text-base"
                        >
                          {detail}
                        </p>
                      ))}
                      <p className="text-sm text-gray-500 mt-2">
                        {info.subtext}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Phone className="text-red-600" size={20} />
                  <h4 className="font-semibold text-red-800">
                    24/7 Emergency Service
                  </h4>
                </div>
                <p className="text-red-700 font-bold text-lg">
                  +91 98765 43210
                </p>
                <p className="text-red-600 text-sm mt-1">
                  For urgent electrical issues
                </p>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-500 transition-colors"
                  >
                    <Twitter size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="#"
                    className="text-pink-600 hover:text-pink-700 transition-colors"
                  >
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12 md:mt-16">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="mx-auto text-gray-400 mb-2" size={48} />
                  <p className="text-gray-600">
                    Interactive map would be embedded here
                  </p>
                  <p className="text-sm text-gray-500">
                    Plot No. 123, Industrial Area, Pune - 411019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
