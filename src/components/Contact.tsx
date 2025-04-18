
import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Linkedin, Github } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-peach relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-custom-purple mx-auto rounded"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4 shadow-md text-custom-purple">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 7780568534</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4 shadow-md text-custom-purple">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Email</h4>
                  <p className="text-gray-600">saketh2005mothe@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white rounded-full p-3 mr-4 shadow-md text-custom-purple">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Location</h4>
                  <p className="text-gray-600">Hyderabad, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-medium text-gray-800 mb-4">Connect with me</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/saki1205" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-3 shadow-md text-gray-600 hover:text-custom-purple transition-colors"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="linkedin.com/in/saketh-mothe" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white rounded-full p-3 shadow-md text-gray-600 hover:text-custom-purple transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:saketh2005mothe@gmail.com" 
                  className="bg-white rounded-full p-3 shadow-md text-gray-600 hover:text-custom-purple transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-purple focus:border-transparent outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-purple focus:border-transparent outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-purple focus:border-transparent outline-none transition-colors"
                  placeholder="Job Opportunity"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-custom-purple focus:border-transparent outline-none transition-colors resize-none"
                  placeholder="Hi Saketh, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-custom-purple hover:bg-custom-darkPurple text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    Send Message <Send size={18} className="ml-2" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
