import './App.css';
import React, { Component } from 'react';
import copy from "./images/copy.jpg";
import dipak from "./images/IMG20250212113942.jpg";
import dipak2 from "./images/IMG20250213095739.jpg";

export default class WelcomePage extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="font-roboto">
          {/* Header */}
          <header className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center py-4 px-6">
              <div className="flex items-center">
                <img
                  alt="Compass Logo"
                  className="h-10 w-10"
                  src="https://storage.googleapis.com/a1aa/image/RLb3e9uXSrTC3cYDHFWmqQTIr39KE6mGyV3KjWVY-u4.jpg"
                  width="50"
                  height="50"
                />
                <span className="ml-2 text-xl font-bold text-orange-600">CareerCompass</span>
              </div>
              <nav className="hidden md:flex space-x-6 mt-4 md:mt-0">
                <a className="text-orange-600 font-medium" href="#">Home</a>
                <a className="text-gray-600 hover:text-orange-600" href="#">About us</a>
                <a className="text-gray-600 hover:text-orange-600" href="#">Services</a>
                <a className="text-gray-600 hover:text-orange-600" href="#">Contact us</a>
                <a className="text-gray-600 hover:text-orange-600" href="#">Blog</a>
              </nav>
              <a className="bg-orange-600 text-white px-4 py-2 rounded-md mt-4 md:mt-0" href="/carrier-compass-ui/#/login">Sign In</a>
            </div>
          </header>

          {/* Hero Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
              <div className="md:w-1/2">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800">We create A Clear Path to Success</h1>
                <p className="mt-4 text-gray-600">
                  Finding the right career path can often feel overwhelming. With countless options and paths to choose from, it’s easy to get lost in the sea of possibilities. But don't worry, your search for clarity ends here.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row">
                  <a className="bg-orange-600 text-white px-6 py-3 rounded-md" href="/carrier-compass-ui/#/signup">Get Started</a>
                  <a className="ml-0 sm:ml-4 mt-4 sm:mt-0 text-orange-600" href="#">Explore more</a>
                </div>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <img
                  alt="Animated student"
                  src="https://storage.googleapis.com/a1aa/image/3RuDQbbX08tfZmXdHD9_9cRvgpvFUorI3cOrd0Qi_aQ.jpg"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-gray-800">We Provide The Best <span className="text-orange-600">Services</span></h2>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto" src="https://storage.googleapis.com/a1aa/image/gbK7-YnFrPwAvJIOW-b6yw6tGK5pEcfmE4J8wVWWixw.jpg" alt="SEO icon" width="50" height="50" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Exploring Jobs</h3>
                  <p className="mt-2 text-gray-600">Relevant job roles based on degrees.</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto" src="https://storage.googleapis.com/a1aa/image/qlMq7amVuWiA_0FFZzBsT4m2WY-9SiRRVBsoVrsdEKA.jpg" alt="Marketing icon" width="50" height="50" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Skill Recommendation</h3>
                  <p className="mt-2 text-gray-600">Suggested skills for each career path.</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto" src="https://storage.googleapis.com/a1aa/image/mbvOpMFcfz1kvHdkxwjN3TJUbFIFAESgDwhZEc1ZHgo.jpg" alt="Campaign icon" width="50" height="50" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Job Alerts</h3>
                  <p className="mt-2 text-gray-600">Aggregated job postings from various job portals.</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto" src="https://storage.googleapis.com/a1aa/image/D2w4UgbXv4mbdrQ1yXIsIvKDHm3FoDqRsFPVkVcV16E.jpg" alt="Other services icon" width="50" height="50" />
                  <h3 className="mt-4 text-xl font-semibold text-gray-800">Latest News</h3>
                  <p className="mt-2 text-gray-600">Latest news, Blogs, Articles on new opportunities.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Simple Solutions Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
              <div className="md:w-1/2 flex justify-center">
                <img
                  alt="Person working on laptop"
                  src="https://storage.googleapis.com/a1aa/image/02QXgU0ALdKG15THbuMaT9CSLdQB66draGvGllmXIcc.jpg"
                  width="400"
                  height="300"
                />
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <h2 className="text-3xl font-bold text-gray-800">We make journey <span className="text-orange-600">Simple!</span></h2>
                <p className="mt-4 text-gray-600">
                  We are here to guide you on a journey towards the perfect career—one that aligns with your existing skills and potential.
                </p>
                <ul className="mt-6 space-y-4 text-left">
                  <li className="flex items-center"><i className="fas fa-check-circle text-orange-600 mr-2"></i> Create Profile</li>
                  <li className="flex items-center"><i className="fas fa-check-circle text-orange-600 mr-2"></i> Choose relevant Career</li>
                  <li className="flex items-center"><i className="fas fa-check-circle text-orange-600 mr-2"></i> Acquire Missing Skills</li>
                  <li className="flex items-center"><i className="fas fa-check-circle text-orange-600 mr-2"></i> March Towards Success</li>
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row">
                  <a className="bg-orange-600 text-white px-6 py-3 rounded-md" href="/#/signup">Get Started</a>
                  <a className="ml-0 sm:ml-4 mt-4 sm:mt-0 text-orange-600" href="#">Read more</a>
                </div>
              </div>
            </div>
          </section>

          {/* What Clients Say Section */}
          <section className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto text-center px-4">
              <h2 className="text-3xl font-bold text-gray-800">What Our Existing <span className="text-orange-600">Clients Say!</span></h2>
              <p className="mt-4 text-gray-600">See how services helped many students in making their journey hassle free towards achieving their career goals.</p>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto rounded-full" src={dipak} alt="Client photo" width="50" height="50" />
                  <p className="mt-4 text-gray-600">"Greatly designed, helped me a lot. Highly recommend!"</p>
                  <div className="mt-2 text-yellow-500 flex justify-center">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star-half-alt"></i>
                  </div>
                  <p className="mt-2 text-gray-800 font-semibold">Dipak Saha</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto rounded-full" src={copy} alt="Client photo" width="50" height="50" />
                  <p className="mt-4 text-gray-600">"I was so confused!!. CareerCompass really helped me on my career journey. Delivered great results."</p>
                  <div className="mt-2 text-yellow-500 flex justify-center">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="mt-2 text-gray-800 font-semibold">Saena</p>
                </div>
                <div className="bg-white shadow-md p-6 rounded-md">
                  <img className="mx-auto rounded-full" src={dipak2} alt="Client photo" width="50" height="50" />
                  <p className="mt-4 text-gray-600">"The personalized aggregated job list is awesome. I got to know the openings and skilled myself up based on the requirements. Highly effective."</p>
                  <div className="mt-2 text-yellow-500 flex justify-center">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="mt-2 text-gray-800 font-semibold">Dipak Saha</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </React.StrictMode>
    );
  }
}
