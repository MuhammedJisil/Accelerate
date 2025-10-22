import React, { useState, useEffect } from "react";

export default function AccelerateWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);

      const sections = ["home", "features", "about", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(
          section === "home" ? "hero" : section
        );
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@accelerate.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,300 Q360,200 720,300 T1440,300 L1440,0 L0,0 Z"
            fill="rgba(226, 232, 240, 0.3)"
          />
          <path
            d="M0,500 Q360,400 720,500 T1440,500 L1440,0 L0,0 Z"
            fill="rgba(203, 213, 225, 0.2)"
          />
        </svg>
        
        <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="xMidYMid slice">
          <path
            d="M0,600 Q360,700 720,600 T1440,600 L1440,800 L0,800 Z"
            fill="rgba(226, 232, 240, 0.4)"
          />
          <path
            d="M0,700 Q360,650 720,700 T1440,700 L1440,800 L0,800 Z"
            fill="rgba(241, 245, 249, 0.5)"
          />
        </svg>

        {/* Abstract curved shapes */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-slate-300/20 rounded-full blur-3xl"></div>
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo1.png"
                alt="Accelerate - Learn, Innovate"
                className="h-10 sm:h-20 md:h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                className="hidden items-center gap-2"
                style={{ display: "none" }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold text-slate-900">
                  Accelerate
                </span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center gap-4 lg:gap-6">
              <a
                href="#hero"
                className={`px-3 lg:px-5 py-2 border-2 rounded-full font-medium transition text-sm ${
                  activeSection === "home"
                    ? "text-slate-900 border-slate-700 bg-slate-100"
                    : "text-slate-600 border-transparent hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                Home
              </a>
              <a
                href="#features"
                className={`px-3 lg:px-5 py-2 border-2 rounded-full font-medium transition text-sm ${
                  activeSection === "features"
                    ? "text-slate-900 border-slate-700 bg-slate-100"
                    : "text-slate-600 border-transparent hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                Features
              </a>
              <a
                href="#about"
                className={`px-3 lg:px-5 py-2 border-2 rounded-full font-medium transition text-sm ${
                  activeSection === "about"
                    ? "text-slate-900 border-slate-700 bg-slate-100"
                    : "text-slate-600 border-transparent hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                About
              </a>
              <a
                href="#contact"
                className={`px-3 lg:px-5 py-2 border-2 rounded-full font-medium transition text-sm ${
                  activeSection === "contact"
                    ? "text-slate-900 border-slate-700 bg-slate-100"
                    : "text-slate-600 border-transparent hover:border-slate-400 hover:text-slate-900"
                }`}
              >
                Contact
              </a>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100 py-4">
              <div className="flex flex-col gap-2 px-4">
                <a
                  href="#hero"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition text-base ${
                    activeSection === "home"
                      ? "text-slate-900 bg-slate-100 border-2 border-slate-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Home
                </a>
                <a
                  href="#features"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition text-base ${
                    activeSection === "features"
                      ? "text-slate-900 bg-slate-100 border-2 border-slate-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Features
                </a>
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition text-base ${
                    activeSection === "about"
                      ? "text-slate-900 bg-slate-100 border-2 border-slate-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  About
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition text-base ${
                    activeSection === "contact"
                      ? "text-slate-900 bg-slate-100 border-2 border-slate-700"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden pt-20 md:pt-0"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 md:top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
          <div className="absolute top-32 md:top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-slate-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000"></div>
          
          <div className="absolute top-20 right-1/4 w-48 sm:w-64 h-48 sm:h-64 border border-slate-200/40 rounded-full opacity-20"></div>
          <div className="absolute bottom-32 left-1/4 w-36 sm:w-48 h-36 sm:h-48 border border-slate-200/40 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 right-1/3 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-slate-200/30 to-transparent rounded-lg transform rotate-45 opacity-30"></div>
        </div>

        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 w-full">
          <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 md:order-1 text-center md:text-left">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-slate-900"
                style={{
                  fontFamily: "system-ui, -apple-system, sans-serif",
                  fontWeight: 600
                }}
              >
                Transform Your Vision Into Digital Reality
              </h1>
              
              <div className="md:hidden relative flex items-center justify-center my-8 z-10">
                <img
                  src="/Image1.png"
                  alt="Digital Transformation Solutions"
                  className="w-full max-w-sm"
                />
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-light tracking-wide">
                We deliver enterprise-grade software solutions and industry-focused training programs that drive measurable business growth and prepare tomorrow's tech talent.
              </p>
              
              <div className="flex justify-center md:justify-start">
                <a href="#contact">
                  <button className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-full font-semibold text-base sm:text-lg flex items-center gap-3 hover:shadow-xl transition-all duration-300 hover:scale-105">
                    Schedule a Consultation
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            <div className="hidden md:flex relative items-center justify-center scale-100 md:scale-110 lg:scale-125 md:order-2 z-10">
              <img
                src="/Image1.png"
                alt="Digital Transformation Solutions"
                className="w-full max-w-md lg:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>


      <div
        id="features"
        className="relative z-10 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-slate-900"
              style={{
                fontFamily: "system-ui, -apple-system, sans-serif",
              }}
            >
              Comprehensive Solutions for Your Success
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-light tracking-wide px-4">
              End-to-end services designed to accelerate your digital journey and empower your team
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 text-slate-900"
              >
                Enterprise Software Development
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Build robust, scalable applications tailored to your business needs. From cloud-native microservices to full-stack web platforms, we architect solutions that enhance operational efficiency, reduce costs, and accelerate time-to-market with cutting-edge technologies and agile methodologies.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-slate-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-6">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mb-4 text-slate-900"
              >
                Career Acceleration Program with Dimension
              </h3>
              <p className="text-slate-600 mb-6 text-sm sm:text-base">
                A comprehensive bootcamp designed for college students to bridge the academic-industry gap and launch successful tech careers with confidence.
              </p>
              <div className="space-y-4">
                <h4
                  className="font-semibold text-base sm:text-lg text-slate-900"
                >
                  What You'll Master:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Advanced Data Structures & Algorithm Problem-Solving
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm sm:text-base">
                      Core Computer Science Fundamentals & System Design
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm sm:text-base">Real-world Industry Projects & Portfolio Development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm sm:text-base">24/7 Expert Mentorship & Doubt Resolution</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-slate-700 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600 text-sm sm:text-base">Interview Preparation & Career Guidance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900"
              >
                Your Strategic Technology Partner
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                We collaborate with startups, growing businesses, and established enterprises to architect and deploy innovative technology solutions that deliver measurable ROI. Our expertise spans modern tech stacks, cloud infrastructure, and agile development practices.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
                    15+ Years of Combined Industry Expertise
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
                    Proven Agile & DevOps Methodologies
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-400 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-slate-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
                    Security-First Architecture & Scalable Solutions
                  </p>
                </div>
              </div>
              <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-lg font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Discover Our Approach
              </button>
            </div>
            <div className="relative order-1 md:order-2">
              <img
                src="/Image2.png"
                alt="Technology Partnership"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="relative z-10 bg-gradient-to-b from-slate-50 to-white py-20 px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-slate-900"
            >
              Get In Touch
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Have a question or ready to start your project? We'd love to hear
              from you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-700 focus:outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-700 focus:outline-none transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-700 focus:outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-700 focus:outline-none transition"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-slate-700 focus:outline-none transition resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg mb-2 text-slate-900"
                    >
                      Phone
                    </h3>
                    <a
                      href="tel:+919876543210"
                      className="text-slate-600 hover:text-slate-900 transition block"
                    >
                      +91 8593076985
                    </a>
                    <a
                      href="tel:+919876543211"
                      className="text-slate-600 hover:text-slate-900 transition block"
                    >
                      +91 89215 98265
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg mb-2 text-slate-900"
                    >
                      Email
                    </h3>
                    <a
                      href="mailto:info@accelerate.com"
                      className="text-slate-600 hover:text-slate-900 transition"
                    >
                      accelerateamb@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3
                      className="font-bold text-lg mb-2 text-slate-900"
                    >
                      Business Hours
                    </h3>
                    <p className="text-slate-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Transform Your Business?
                </h3>
                <p className="mb-6 opacity-90">
                  Let's discuss how we can help you achieve your digital
                  transformation goals.
                </p>
                <div className="flex gap-4">
                  <a
                    href="tel:+919876543210"
                    className="flex-1 bg-white text-slate-900 py-3 rounded-full font-semibold text-center hover:shadow-lg transition"
                  >
                    Call Now
                  </a>
                  <a
                    href="mailto:info@accelerate.com"
                    className="flex-1 bg-slate-800 text-white py-3 rounded-full font-semibold text-center hover:bg-slate-950 transition"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="relative z-10 bg-slate-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/logo1.png"
                  alt="Accelerate"
                  className="h-12 w-auto object-contain brightness-0 invert"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-700 to-slate-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">A</span>
                  </div>
                  <span className="text-xl font-bold">Accelerate</span>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Empowering businesses and individuals through innovative
                technology solutions and comprehensive training programs. Your
                trusted partner for digital transformation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                   <a
                    href="#"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                   <a
                    href="#features"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Features
                  </a>
                </li>
                <li>
                   <a
                    href="#about"
                    className="text-slate-400 hover:text-white transition"
                  >
                    About Us
                  </a>
                </li>
                <li>
                   <a
                    href="#contact"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                   <a
                    href="#features"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Software Development
                  </a>
                </li>
                <li>
                   <a
                    href="#features"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Training Programs
                  </a>
                </li>
                <li>
                   <a
                    href="#contact"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Consulting
                  </a>
                </li>
                <li>
                   <a
                    href="#contact"
                    className="text-slate-400 hover:text-white transition"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © 2025 Accelerate. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/edu_accelerate/"
                  className="text-slate-400 hover:text-white transition"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                 <a
                  href="https://www.linkedin.com/company/acceleratein/?viewAsMember=true"
                  className="text-slate-400 hover:text-white transition"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}