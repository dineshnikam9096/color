import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-white rounded-full p-2 mr-3">
                <img 
                  src="https://img.icons8.com/color/48/000000/paint-palette.png" 
                  alt="Paint icon" 
                  className="w-10 h-10"
                />
              </div>
              <div className="border-l-4 border-primary-600 pl-3">
                <span className="text-xl font-bold">
                  40 YEARS OF EXCELLENCE
                </span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Transform Your Space with Colors
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Discover our premium paint collection
            </p>
            
            <div className="space-x-4">
              <Link 
                to="/color-picker" 
                className="bg-primary-600 text-white px-6 py-3 rounded-lg inline-block"
              >
                Try Color Picker
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-primary-600 px-6 py-3 rounded-lg inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'Interior Painting Solutions',
                description: 'Transform your indoor spaces with our premium interior paints',
                icon: '🏠',
                image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
                features: [
                  'Eco-friendly, low VOC paints',
                  'Stain-resistant finishes',
                  'Moisture-resistant bathroom paints',
                  'Heat-resistant kitchen paints'
                ],
                link: '/about'
              },
              {
                title: 'Exterior Painting Services',
                description: 'Protect and beautify your property with durable exterior finishes',
                icon: '🏢',
                image: 'https://images.unsplash.com/photo-1560170412-0f7df0eb0fb1?auto=format&fit=crop&q=80',
                features: [
                  'Weather-resistant coatings',
                  'UV protection technology',
                  'Waterproofing solutions',
                  'Anti-fungal treatments'
                ],
                link: '/about'
              },
              {
                title: 'Specialized Painting Services',
                description: 'Custom solutions for unique painting requirements',
                icon: '🎨',
                image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80',
                features: [
                  'Texture finishes & wall designs',
                  'Metal & wood painting',
                  'Epoxy floor coatings',
                  'Commercial painting solutions'
                ],
                link: '/color-picker'
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 p-6">
                      <span className="text-3xl">{service.icon}</span>
                      <h3 className="text-xl font-bold text-white mt-2">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary-600 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary-600"
                  >
                    Learn More
                    <svg
                      className="w-5 h-5 ml-2"
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
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Completed Projects Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Our Completed Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                {
                  title: 'Modern Apartment',
                  type: 'Residential',
                  image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?auto=format&fit=crop&q=80'
                },
                {
                  title: 'Office Complex',
                  type: 'Commercial',
                  image: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80'
                },
                {
                  title: 'Villa Exterior',
                  type: 'Residential',
                  image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80'
                },
                {
                  title: 'Retail Store',
                  type: 'Commercial',
                  image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80'
                }
              ].map((project) => (
                <div
                  key={project.title}
                  className="relative rounded-lg overflow-hidden shadow-md"
                >
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold">{project.title}</h3>
                      <p className="text-gray-300 text-sm">{project.type}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Link 
              to="/projects" 
              className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home