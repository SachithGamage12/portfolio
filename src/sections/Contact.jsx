import { useState } from "react";
import emailjs from "emailjs-com";

const ModernContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertMessage("Please fill all fields");
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      return;
    }

    setIsLoading(true);

    try {
      // ↓↓↓ PASTE YOUR IDs HERE ↓↓↓
      const result = await emailjs.send(
        'service_ngz2ijo',      // Paste Service ID here
        'template_rmejl3b',    // Paste Template ID here
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'sachithgamage2310@gmail.com',  // Your Gmail address
        },
        'FwCyB29gnIEzQg9GJ'       // Paste Public Key here
      );

      console.log('Email sent:', result);
      setAlertMessage("✅ Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error("❌ Email error:", error);
      setAlertMessage("❌ Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" id="contact">
      {showAlert && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg animate-pulse z-50">
          {alertMessage}
        </div>
      )}

      {/* Change from button onClick to form onSubmit */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Talk
          </h1>
          <p className="text-gray-300 text-lg">
            Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help
          </p>
        </div>

        <div className="space-y-6">
          <div className="group">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="group">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                transition-all duration-300 backdrop-blur-sm hover:bg-white/10"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="group">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-focus-within:text-purple-400">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                transition-all duration-300 backdrop-blur-sm hover:bg-white/10 resize-none"
              placeholder="Share your thoughts or project details..."
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl
              hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900
              transform transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
              shadow-lg hover:shadow-purple-500/50"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm">
          We'll get back to you within 24 hours
        </div>
      </form>
    </div>
  );
};

export default ModernContactForm;