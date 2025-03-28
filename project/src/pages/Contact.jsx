import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the WhatsApp message
    const message = `*New Inquiry from Website*\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage: ${formData.message}`
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/919096457620?text=${encodeURIComponent(message)}`
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank')
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Tell us about your painting needs or any questions you have..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2"
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5" 
                  fill="currentColor"
                >
                  <path d="M17.6 6.4C16.2 5 14.3 4.2 12.3 4.2C8.3 4.2 5 7.5 5 11.5C5 12.9 5.4 14.2 6.1 15.3L5 19L8.8 17.9C9.9 18.5 11.1 18.8 12.3 18.8C16.3 18.8 19.6 15.5 19.6 11.5C19.6 9.5 18.9 7.7 17.6 6.4M12.3 17.3C11.2 17.3 10.1 17 9.2 16.4L6.5 17.1L7.2 14.5C6.5 13.6 6.1 12.6 6.1 11.5C6.1 8.3 8.9 5.7 12.3 5.7C14 5.7 15.6 6.4 16.8 7.6C18 8.8 18.7 10.4 18.7 12.1C18.7 15.3 15.9 17.3 12.3 17.3M15 13.2C14.9 13.1 14.6 13 14.2 12.8C13.8 12.6 12.8 12.1 12.4 12C12 11.9 11.8 11.8 11.6 12.2C11.4 12.6 11 13 10.8 13.2C10.6 13.4 10.4 13.4 10 13.2C9.6 13 8.9 12.8 8.1 12.1C7.4 11.5 7 10.8 6.8 10.4C6.6 10 6.8 9.80001 7 9.60001C7.2 9.40001 7.4 9.10001 7.6 8.90001C7.8 8.70001 7.8 8.50001 7.9 8.30001C8 8.10001 7.9 7.90001 7.8 7.70001C7.7 7.50001 7 6.50001 6.8 6.10001C6.6 5.70001 6.4 5.70001 6.2 5.70001C6 5.70001 5.8 5.70001 5.6 5.70001C5.4 5.70001 5 5.90001 4.8 6.30001C4.6 6.70001 4 7.70001 4 8.70001C4 9.70001 4.7 10.7 4.9 10.9C5.1 11.1 7 14 9.8 15.3C12.6 16.6 12.6 16.2 13.2 16.2C13.8 16.2 14.7 15.2 14.9 14.8C15.1 14.2 15.1 13.8 15 13.2Z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Direct Contact</h3>
              <p className="mb-2">
                <strong>Phone:</strong>{' '}
                <a href="tel:+919096457620" className="text-primary-600 hover:underline">
                  +91 9096457620
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  href="mailto:nikampratik2989@gmail.com"
                  className="text-primary-600 hover:underline"
                >
                  nikampratik2989@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Visit Our Store</h2>
            <div className="bg-white p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-bold text-lg mb-2">Divya Colour Home</h3>
              <p className="text-gray-600 mb-4">
                Yakatput Road, Ausa, Latur,
                <br />
                Maharashtra 413520
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Hours:</strong>
                <br />
                Monday - Saturday: 9:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 4:00 PM
              </p>
            </div>

            <div className="h-96 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15178.35080080907!2d76.50472422775106!3d18.248299987619235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcf83bd7132b667%3A0x7b7e490f13acd09!2sAusa%2C%20Maharashtra%20413520!5m2!1s0m2!1s0m2"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact