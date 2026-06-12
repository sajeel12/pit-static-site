import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    window.location.href = `mailto:info@perception-it.com?subject=Contact%20from%20${formData.name}&body=${formData.message}`;
  };

  const offices = [
    {
      country: 'Pakistan',
      address: 'Office #01, 1st Floor, Liberty Gate Plaza, Tariq Road, Gulberg III, Lahore',
      phone: '+92 301 8436565',
    },
    {
      country: 'United Kingdom',
      address: '12a Fleet Business Park, Sandy Lane, Fleet, Hampshire, GU52 8BF',
      phone: '+44 7456 457005',
    },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-500 mb-4 block">
            Contact
          </span>
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#0F172A] leading-tight tracking-tight mb-6">
            Let's talk
          </h2>
          <p className="text-lg text-gray-600">
            Reach out for a consultation, partnership inquiry, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <div className="bg-[#FAFAFA] rounded-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                  placeholder="Your company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Send className="w-5 h-5" />
                Send message
              </button>
            </form>
          </div>

          {/* Offices */}
          <div className="space-y-8">
            {offices.map((office, idx) => (
              <div key={idx} className="p-8 bg-[#FAFAFA] rounded-2xl">
                <h3 className="text-lg font-semibold text-[#0F172A] mb-4">{office.country}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">{office.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-gray-600 hover:text-blue-500 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Email */}
            <div className="p-8 bg-[#0F172A] rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">General inquiries</span>
              </div>
              <a 
                href="mailto:info@perception-it.com" 
                className="text-xl text-white hover:text-blue-400 transition-colors"
              >
                info@perception-it.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
