import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, DollarSign, TrendingUp, BarChart3, Car, Users, MapPin, CheckCircle, Star, ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
function App() {
  const {
    toast
  } = useToast();
  const handleFeatureClick = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 60
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  return <>
      <Helmet>
        <title>Ads on Wheels - Turn Your Drive Into Income | Mobile Advertising Platform</title>
        <meta name="description" content="Transform your vehicle into a mobile billboard and earn passive income. Connect with brands looking to advertise on vehicles across the city with our innovative mobile advertising platform." />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Toaster />
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">Ads on Wheels</span>
              </div>
              
              <div className="hidden md:flex items-center space-x-8">
                <button onClick={handleFeatureClick} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>
                <button onClick={handleFeatureClick} className="text-gray-600 hover:text-blue-600 transition-colors">About Us</button>
                <button onClick={handleFeatureClick} className="text-gray-600 hover:text-blue-600 transition-colors">Cities</button>
                <button onClick={handleFeatureClick} className="text-gray-600 hover:text-blue-600 transition-colors">How it Works</button>
                <button onClick={handleFeatureClick} className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</button>
                <button onClick={handleFeatureClick} className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-16 gradient-bg overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="text-white" initial={{
              opacity: 0,
              x: -50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8
            }}>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Turn Your Drive Into
                  <span className="block text-orange-400">Income</span>
                </h1>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Connect with brands looking to advertise on vehicles or find 
                  drivers to display your ads across the city
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={handleFeatureClick} className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                    I'm an Advertiser
                  </Button>
                  <Button onClick={handleFeatureClick} variant="outline" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
                    Become a Driver Partner
                  </Button>
                </div>
              </motion.div>
              
              <motion.div className="relative" initial={{
              opacity: 0,
              x: 50
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                <div className="relative">
                  <img alt="Car with mobile advertising display showing branded content" className="w-full h-auto rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1662655780053-5a744e6b2bc9" />
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    MOBILE ADVERTISING
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                    DRIVE YOUR BRAND
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Ads on Wheels?</h2>
            </motion.div>
            
            <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
            once: true
          }}>
              {[{
              icon: Target,
              title: "Targeted Advertising",
              description: "Target specific neighborhoods, routes, and demographics with our advanced location-based advertising platform."
            }, {
              icon: DollarSign,
              title: "Cost-Effective",
              description: "Get more impressions for your budget compared to traditional billboard advertising with flexible pricing options."
            }, {
              icon: TrendingUp,
              title: "Passive Income",
              description: "Drivers earn extra income simply by driving their normal routes - turning their daily commute into profit."
            }, {
              icon: BarChart3,
              title: "Performance Tracking",
              description: "Real-time tracking and analytics to measure campaign performance and optimize your advertising strategy."
            }].map((feature, index) => <motion.div key={index} className="bg-white p-8 rounded-2xl shadow-lg card-hover cursor-pointer" variants={fadeInUp} onClick={handleFeatureClick}>
                  <div className="feature-icon w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            </motion.div>

            <div className="bg-blue-600 rounded-3xl p-8 mb-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">HOW IT WORKS</h3>
                <div className="flex justify-center space-x-8">
                  <span className="text-white font-semibold">FOR ADVERTISERS</span>
                  <span className="text-white font-semibold">FOR DRIVERS</span>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Advertisers Flow */}
                <div className="space-y-6">
                  {[{
                  icon: Users,
                  title: "Sign up and create campaign",
                  description: "Register your business and set up your advertising campaign with target demographics"
                }, {
                  icon: MapPin,
                  title: "Select coverage area and vehicle types",
                  description: "Choose specific routes, neighborhoods, and vehicle types for maximum impact"
                }, {
                  icon: Play,
                  title: "Upload advertisement design",
                  description: "Submit your creative assets and let our team optimize them for mobile display"
                }, {
                  icon: BarChart3,
                  title: "Track campaign performance",
                  description: "Monitor real-time analytics and measure your campaign's effectiveness"
                }].map((step, index) => <motion.div key={index} className="flex items-start space-x-4 bg-white/10 p-4 rounded-xl cursor-pointer" whileHover={{
                  scale: 1.02
                }} onClick={handleFeatureClick}>
                      <div className="bg-orange-500 p-3 rounded-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                        <p className="text-blue-100 text-sm">{step.description}</p>
                      </div>
                    </motion.div>)}
                </div>

                {/* Drivers Flow */}
                <div className="space-y-6">
                  {[{
                  icon: Car,
                  title: "Register your vehicle",
                  description: "Sign up and provide details about your vehicle and driving patterns"
                }, {
                  icon: CheckCircle,
                  title: "Get approved",
                  description: "Complete our quick verification process and get approved to start earning"
                }, {
                  icon: Shield,
                  title: "Receive and apply magnetic advertisements",
                  description: "Get professional magnetic ads delivered and easily apply them to your vehicle"
                }, {
                  icon: DollarSign,
                  title: "Earn money while driving",
                  description: "Start earning passive income just by driving your normal routes"
                }].map((step, index) => <motion.div key={index} className="flex items-start space-x-4 bg-white/10 p-4 rounded-xl cursor-pointer" whileHover={{
                  scale: 1.02
                }} onClick={handleFeatureClick}>
                      <div className="bg-green-500 p-3 rounded-lg">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{step.title}</h4>
                        <p className="text-blue-100 text-sm">{step.description}</p>
                      </div>
                    </motion.div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Options</h2>
              <p className="text-xl text-gray-600">Choose the perfect plan for your advertising needs</p>
            </motion.div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-blue-600 mb-8">ADS ON WHEELS</h3>
            </div>

            <motion.div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
            once: true
          }}>
              {[{
              name: "BASIC",
              price: "$199",
              color: "bg-blue-600",
              features: ["SMALL COVERAGE", "1 MONTH", "SMALL/ECONOMY"],
              popular: false
            }, {
              name: "STANDARD",
              price: "$299",
              color: "bg-gray-800",
              features: ["MEDIUM COVERAGE", "3 MONTHS", "MID-SIZE"],
              popular: true
            }, {
              name: "PREMIUM",
              price: "$399",
              color: "bg-green-600",
              features: ["EXTENDED COVERAGE", "6 MONTHS", "LUXURY/PREMIUM"],
              popular: false
            }].map((plan, index) => <motion.div key={index} className={`pricing-card ${plan.popular ? 'featured' : ''} bg-white rounded-2xl p-8 shadow-lg cursor-pointer relative`} variants={fadeInUp} onClick={handleFeatureClick}>
                  {plan.popular && <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </div>}
                  
                  <div className={`${plan.color} text-white text-center py-3 rounded-lg mb-6`}>
                    <span className="font-bold text-lg">{plan.name}</span>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center justify-center">
                        <span className="text-gray-600 font-medium">{feature}</span>
                      </div>)}
                  </div>
                  
                  <Button onClick={handleFeatureClick} className="w-full btn-primary py-3 rounded-lg font-semibold">
                    Choose Plan
                  </Button>
                </motion.div>)}
            </motion.div>

            <div className="text-center mt-8">
              <button onClick={handleFeatureClick} className="text-blue-600 hover:text-blue-800 font-semibold underline">
                View detailed pricing →
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            </motion.div>

            <motion.div className="grid md:grid-cols-3 gap-8" variants={staggerContainer} initial="initial" whileInView="animate" viewport={{
            once: true
          }}>
              {[{
              text: "Ads on Wheels helped us reach neighborhoods we couldn't target with traditional advertising. The ROI has been incredible!",
              author: "John Doe",
              company: "Local Restaurant Chain CEO"
            }, {
              text: "The earning are great! $400 per month just by driving my normal route to work. It's literally passive income.",
              author: "Sarah Miller",
              company: "Driver Partner"
            }, {
              text: "The analytics dashboard is impressive. We can track exactly where our ads are being seen and optimize in real-time.",
              author: "Mike Johnson",
              company: "Marketing Director"
            }].map((testimonial, index) => <motion.div key={index} className="testimonial-card p-8 rounded-2xl border border-gray-200 cursor-pointer" variants={fadeInUp} onClick={handleFeatureClick}>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>)}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }} viewport={{
            once: true
          }}>
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Whether you're looking to advertise your business or earn extra income as a 
                driver, we have the perfect solution for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleFeatureClick} className="btn-primary px-8 py-4 text-lg font-semibold rounded-lg">
                  I'm an Advertiser
                </Button>
                <Button onClick={handleFeatureClick} variant="outline" className="btn-secondary px-8 py-4 text-lg font-semibold rounded-lg">
                  Become a Driver Partner
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                    <Car className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold">Ads on Wheels</span>
                </div>
                <p className="text-gray-400 mb-6">
                  Ads on Wheels connects advertisers with drivers, creating a win-win solution for mobile advertising and passive income generation.
                </p>
                <div className="flex space-x-4">
                  <button onClick={handleFeatureClick} className="text-gray-400 hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </button>
                  <button onClick={handleFeatureClick} className="text-gray-400 hover:text-white transition-colors">
                    <Zap className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <span className="text-lg font-semibold mb-4 block">Quick Links</span>
                <div className="space-y-3">
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">About</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Cities</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">How it Works</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Pricing</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">FAQ</button>
                </div>
              </div>

              <div>
                <span className="text-lg font-semibold mb-4 block">For Advertisers</span>
                <div className="space-y-3">
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Campaign Planning</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Targeting Options</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Analytics Dashboard</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Creative Services</button>
                </div>
              </div>

              <div>
                <span className="text-lg font-semibold mb-4 block">For Drivers</span>
                <div className="space-y-3">
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Registration</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Requirements</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Application Process</button>
                  <button onClick={handleFeatureClick} className="block text-gray-400 hover:text-white transition-colors">Earnings Calculator</button>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center">
              <p className="text-gray-400">© 2024 Ads on Wheels. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>;
}
export default App;