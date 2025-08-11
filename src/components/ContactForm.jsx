import { useState, useEffect } from "react";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [lastSubmissionTime, setLastSubmissionTime] = useState(null);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (honeypot) {
      console.log("Potential spam detected");
      setSubmitted(true); // Fake success
      return;
    }

  
    if (lastSubmissionTime && Date.now() - lastSubmissionTime < 5 * 60 * 1000) {
      setError("Please wait 5 minutes before sending another message");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      if (
        !formData.name.trim() ||
        !formData.email.trim() ||
        !formData.subject.trim() ||
        !formData.message.trim()
      ) {
        throw new Error("Please fill in all fields");
      }

  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error("Please enter a valid email address");
      }

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "sagtiana27@gmail.com", // Email tujuan
        reply_to: formData.email,
      };

      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log("✅ Email sent successfully:", result.text);

    
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);

      setLastSubmissionTime(Date.now());
    } catch (error) {
      console.error("❌ Email sending failed:", error);

      if (error.text) {
        setError(
          "Failed to send message. Please check your internet connection."
        );
      } else if (error.message) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-800 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-semibold mb-6 text-zinc-100">
        Send a Message
      </h3>

      {submitted && (
        <div className="bg-zinc-700/50 border border-zinc-600/50 text-zinc-300 p-4 rounded-lg mb-6 flex items-center space-x-2">
          <div className="w-2 h-2 bg-zinc-400 rounded-full"></div>
          <span className="text-sm">
            Message sent successfully! Ill get back to you soon.
          </span>
        </div>
      )}

      {error && (
        <div className="bg-red-700/50 border border-red-600/50 text-red-200 p-4 rounded-lg mb-6 flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full"></div>
          <span className="text-sm">{error}</span>
        </div>
      )}

      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/50 outline-none transition-all duration-200"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-zinc-700/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/50 outline-none transition-all duration-200"
              placeholder="your.email@domain.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full bg-zinc-700/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/50 outline-none transition-all duration-200"
            placeholder="What's this about?"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full bg-zinc-700/50 border border-zinc-600/50 rounded-lg px-4 py-3 text-zinc-100 placeholder-zinc-500 focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500/50 outline-none transition-all duration-200 resize-none"
            placeholder="Tell me about your project or just say hello..."
          />
        </div>

        <input
          type="text"
          name="website"
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: "none" }} // Hidden from real users
        />

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-zinc-700/50 hover:bg-zinc-600/50 disabled:bg-zinc-700/30 border border-zinc-600/50 hover:border-zinc-500/50 text-zinc-200 font-medium py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 group"
        >
          {isSubmitting ? (
            <>
              <div className="w-4 h-4 border-2 border-zinc-400/30 border-t-zinc-300 rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
