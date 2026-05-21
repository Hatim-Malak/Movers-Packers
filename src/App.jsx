import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Package, 
  Truck, 
  Warehouse, 
  Globe, 
  Home, 
  Building2, 
  MessageSquare,
  PhoneCall,
  Quote,
  ChevronRight
} from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
);
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
);

const App = () => {
  const sectionPadding = "py-20 px-4 md:px-6 max-w-[1200px] mx-auto";
  const headingStyle = "text-[32px] md:text-[48px] font-bold text-[#191c1d] mb-6 tracking-tight leading-tight";

  const SectionSubtitle = ({ text }) => (
    <div className="flex items-center justify-center gap-4 mb-4">
      <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
      <span className="text-[#FF6B35] font-semibold uppercase tracking-wider text-sm">{text}</span>
      <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
    </div>
  );

  return (
    <div className="text-[#44474e] h-[100vh] w-[100vw] bg-[#f8f9fa] selection:bg-[#FF6B35] selection:text-white" style={{ fontFamily: '"Inter", sans-serif' }}>
      
      <div className="hidden w-full  lg:flex justify-between items-center bg-white py-4 px-6 border-b border-[#e9ecef] text-sm ">
        <div className="flex items-center">
            <div className="flex items-center gap-2">
                <Truck size={32} className="text-[#FF6B35]" />
                <div className="flex flex-col text-[#002046]">
                  <span className="font-bold text-lg leading-tight">Nitin packers</span>
                  <span className="font-bold text-lg leading-tight">and movers</span>
                </div>
            </div>
        </div>
        <div className="flex items-center gap-8 text-sm font-medium text-[#44474e]">
            <div className="flex items-center gap-2">
                <div className="bg-[#f3f4f5] p-2 rounded-[8px] text-[#FF6B35]"><PhoneCall size={16}/></div>
                <span>+91 8435395050 / +91 8435395050</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="bg-[#f3f4f5] p-2 rounded-[8px] text-[#FF6B35]"><Mail size={16}/></div>
                <span>nitinpackers@gmail.com</span>
            </div>
            <button className="bg-[#FF6B35] text-white px-8 py-3 rounded-[8px] hover:bg-[#e55a2b] transition-colors font-semibold text-[16px]">
              Free Quote
            </button>
        </div>
      </div>

      <nav className="bg-[#002046] text-white py-4 flex justify-center sticky top-0 z-50 shadow-md">
        <div className="flex justify-between items-center w-full max-w-[1200px] px-6">
          <div className="flex gap-8 text-[16px] font-medium">
            <a href="#" className="text-white hover:text-[#FF6B35] transition-colors">Home</a>
            <a href="#" className="text-[#FF6B35]">Our Service</a>
            <a href="#" className="text-white hover:text-[#FF6B35] transition-colors">About Us</a>
            <a href="#" className="text-white hover:text-[#FF6B35] transition-colors">Contact</a>
            <a href="#" className="text-white hover:text-[#FF6B35] transition-colors">FAQs</a>
            <a href="#" className="text-white hover:text-[#FF6B35] transition-colors">Blog</a>
          </div>
          <div className="flex gap-6 text-[#aec7f7]">
            <a href="#" className="hover:text-white transition-colors"><FacebookIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="#" className="hover:text-white transition-colors"><TwitterIcon /></a>
          </div>
        </div>
      </nav>

      <header className="relative h-[75%] bg-transparent flex items-center overflow-hidden">
        <img 
          src="./packers-and-movers-1440-x-646-px.png" 
          alt="Hero BG" 
          className="absolute inset-0 w-full h-full object-cover opacity-95 brightness-[0.7]"
        />
        <div className="relative z-10 w-full flex justify-between items-center max-w-[1200px] mx-auto px-6">
            <div className="max-w-xl ">
                <h1 className="text-[48px] font-bold text-white mb-4 tracking-tight leading-[56px]">Our Service</h1>
                <p className="text-white mb-6 text-[18px] leading-[28px] font-semibold">From local shifting to cross-city relocations, we offer a full range of moving services designed to make your move stress-free. Let our experienced team take care of everything.</p>
                <div className="text-white text-[14px] font-semibold flex items-center gap-2">
                  <span>Home</span>
                  <span className="text-[#FF6B35]">•</span>
                  <span className="text-[#FF6B35]">Services</span>
                </div>
            </div>
        </div>
      </header>

      <section className={sectionPadding}>
        <div className="text-center mb-16 mt-8">
            <SectionSubtitle text="ABOUT SERVICE" />
            <h2 className={headingStyle}>We Make Sure to Always Provide<br/>Maximum Service to Our Customers</h2>
        </div>
        
        <div className="relative max-w-5xl mx-auto mb-24">
            <img src="./packers-and-movers-4.png" alt="Truck" className="w-full h-[450px] object-cover rounded-[12px]"/>
            
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-[#002046] text-white py-10 px-12 flex flex-wrap justify-center gap-16 w-[80%] max-w-3xl rounded-[12px] shadow-[0_8px_24px_rgba(27,54,93,0.15)]">
                <div className="text-center">
                    <div className="text-[48px] font-bold text-[#FF6B35] mb-1 leading-none">170</div>
                    <div className="text-[14px] uppercase font-semibold tracking-[0.05em] text-[#aec7f7]">Satisfied Client</div>
                </div>
                <div className="text-center">
                    <div className="text-[48px] font-bold text-[#FF6B35] mb-1 leading-none">200</div>
                    <div className="text-[14px] uppercase font-semibold tracking-[0.05em] text-[#aec7f7]">Projects Done</div>
                </div>
                <div className="text-center">
                    <div className="text-[48px] font-bold text-[#FF6B35] mb-1 leading-none">20</div>
                    <div className="text-[14px] uppercase font-semibold tracking-[0.05em] text-[#aec7f7]">Years Experience</div>
                </div>
            </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-6 max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
            <SectionSubtitle text="OUR SERVICE" />
            <h2 className={headingStyle}>Get Your Moving Solution</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
                icon={<Package size={32} strokeWidth={2}/>}
                title="Packing & Unpacking"
                desc="We use high-quality packing materials to keep your items safe. Our team packs and unpacks with extra care."
            />
            <ServiceCard 
                icon={<Warehouse size={32} strokeWidth={2}/>}
                title="Storage Removal"
                desc="Need temporary space? We offer secure storage with easy pickup and drop-off options across major cities."
            />
            <ServiceCard 
                icon={<Building2 size={32} strokeWidth={2}/>}
                title="Commercial Movers"
                desc="We help shift offices, shops, and commercial spaces with minimal downtime and professional handling."
            />
            <ServiceCard 
                icon={<Home size={32} strokeWidth={2}/>}
                title="Residential Movers"
                desc="Moving your home? We handle everything from kitchen items to wardrobes - stress-free and damage-free."
            />
            <ServiceCard 
                icon={<Globe size={32} strokeWidth={2}/>}
                title="Cross City & Country Express"
                desc="Fast and reliable interstate or long-distance moves with full support from start to finish."
            />
            <ServiceCard 
                icon={<Truck size={32} strokeWidth={2}/>}
                title="Household Moving"
                desc="We make home shifting easy, whether it's a 1BHK or a full villa - safe packing, smooth delivery."
            />
        </div>
      </section>

      <section className={sectionPadding}>
        <div className="text-center mb-16">
            <SectionSubtitle text="TESTIMONIAL" />
            <h2 className={headingStyle}>What Our Costumer Say?</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-5xl mx-auto bg-white rounded-[16px] shadow-[0_4px_12px_rgba(27,54,93,0.05)] border border-[#e9ecef] overflow-hidden">
            <div className="p-16 flex flex-col justify-center relative bg-white">
                <Quote className="text-[#e9ecef] absolute top-12 left-12" size={64} />
                <p className="text-[18px] text-[#44474e] mb-8 leading-[28px] font-normal z-10 relative mt-4">
                    "The team was on time, professional, and packed everything with care. My entire 2BHK move from Delhi to Jaipur was super smooth. Highly recommended!"
                </p>
                <div className="z-10 relative">
                    <h4 className="font-semibold text-[#191c1d] text-[18px]">Rakesh Mehra</h4>
                    <p className="text-[14px] text-[#74777f]">Software Engineer, Indore</p>
                </div>
            </div>
            <div className="relative ">
                <img src="./packers-and-movers-4.png" alt="Customer Support" className="w-full h-full object-cover min-h-[400px]" />
                <div className="absolute bottom-0 right-0 bg-[#002046] text-white p-8 w-[80%] max-w-sm rounded-tl-[16px]">
                    <div className="text-[32px] font-bold text-white mb-2 flex items-baseline gap-2">
                      100+ <span className="text-[18px] font-semibold text-[#aec7f7]">Positive Reviews</span>
                    </div>
                    <p className="text-[14px] text-[#d6e3ff] leading-[20px]">Join hundreds of happy customers who've trusted us for their safe and stress-free relocation across India.</p>
                </div>
            </div>
        </div>
      </section>

      <section className={`${sectionPadding} mb-12`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(27,54,93,0.05)]">
                <img src="./happy.png" alt="Team" className="w-full h-full object-cover" />
                <div className="absolute bottom-12 left-0 bg-[#002046] text-white p-10 w-80 rounded-r-[16px] shadow-[0_8px_24px_rgba(27,54,93,0.15)]">
                    <h3 className="text-[24px] font-bold mb-6">Need Help?</h3>
                    <div className="flex items-center gap-4">
                        <div className="text-[#FF6B35]"><PhoneCall size={28} strokeWidth={2}/></div>
                        <span className="text-[24px] font-semibold">+91 8435395050</span>
                    </div>
                </div>
            </div>
            
            <div className="bg-white p-10 rounded-[16px] border border-[#e9ecef] shadow-[0_4px_12px_rgba(27,54,93,0.05)]">
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-[2px] bg-[#FF6B35]"></div>
                    <span className="text-[#FF6B35] font-semibold uppercase tracking-wider text-[14px]">REQUEST</span>
                  </div>
                  <h2 className="text-[32px] font-bold text-[#191c1d]">Request Quote</h2>
                </div>
                
                <form className="space-y-6">
                    <div>
                      <label className="block text-[14px] font-semibold text-[#191c1d] mb-2">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full p-3 bg-[#f8f9fa] border border-[#e9ecef] rounded-[8px] focus:outline-none focus:border-2 focus:border-[#002046] focus:bg-white transition-all text-[16px]" />
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-[#191c1d] mb-2">Phone Number</label>
                      <input type="text" placeholder="+91 00000 00000" className="w-full p-3 bg-[#f8f9fa] border border-[#e9ecef] rounded-[8px] focus:outline-none focus:border-2 focus:border-[#002046] focus:bg-white transition-all text-[16px]" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label className="block text-[14px] font-semibold text-[#191c1d] mb-2">Move From</label>
                          <input type="text" placeholder="City or Zip" className="w-full p-3 bg-[#f8f9fa] border border-[#e9ecef] rounded-[8px] focus:outline-none focus:border-2 focus:border-[#002046] focus:bg-white transition-all text-[16px]" />
                        </div>
                        <div>
                          <label className="block text-[14px] font-semibold text-[#191c1d] mb-2">Move To</label>
                          <input type="text" placeholder="City or Zip" className="w-full p-3 bg-[#f8f9fa] border border-[#e9ecef] rounded-[8px] focus:outline-none focus:border-2 focus:border-[#002046] focus:bg-white transition-all text-[16px]" />
                        </div>
                    </div>
                    <div>
                      <label className="block text-[14px] font-semibold text-[#191c1d] mb-2">Message</label>
                      <textarea placeholder="Tell us about your inventory..." rows="4" className="w-full p-3 bg-[#f8f9fa] border border-[#e9ecef] rounded-[8px] focus:outline-none focus:border-2 focus:border-[#002046] focus:bg-white transition-all text-[16px]"></textarea>
                    </div>
                    <button className="w-full bg-[#FF6B35] text-white py-4 rounded-[8px] font-semibold text-[16px] hover:bg-[#e55a2b] transition-colors mt-2">
                      Request Quote
                    </button>
                </form>
            </div>
        </div>
      </section>

      <footer className="bg-[#002046] text-[#aec7f7] pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 max-w-[1200px] mx-auto px-6">
            <div className="md:col-span-4">
                <div className="flex items-center gap-2 w-fit mb-6 text-white">
                    <Truck size={36} />
                    <div className="flex flex-col">
                      <span className="font-bold text-[24px] leading-tight tracking-tight">Nitin packers</span>
                      <span className="font-bold text-[24px] leading-tight tracking-tight">and movers</span>
                    </div>
                </div>
                <div className="space-y-5 text-[16px] mt-8">
                    <div className="flex gap-4 items-start"><MapPin className="text-[#FF6B35] flex-shrink-0" size={24}/><span className="mt-1 text-white">295-B, New Loha Mandi, Indore 452010</span></div>
                    <div className="flex gap-4 items-center"><Phone className="text-[#FF6B35] flex-shrink-0" size={24}/> <span className="text-white">+91 8435395050</span></div>
                    <div className="flex gap-4 items-center"><Mail className="text-[#FF6B35] flex-shrink-0" size={24}/> <span className="text-white">nitinpackers@gmail.com</span></div>
                </div>
            </div>
            
            <div className="md:col-span-5">
                <h4 className="text-[24px] font-bold mb-8 text-white">Location</h4>
                <div className="overflow-hidden h-[250px] w-full bg-[#1b365d] rounded-[12px] border border-[#2e476f]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.5565734346!2d75.78663249001405!3d22.72410998341639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1716300000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Indore City Map"
                  ></iframe>
                </div>
            </div>
            
            <div className="md:col-span-3">
                <h4 className="text-[24px] font-bold mb-8 text-white">Links</h4>
                <ul className="text-[16px] space-y-4">
                    <li className="hover:text-[#FF6B35] cursor-pointer flex items-center gap-2 transition-colors"><span className="text-[#FF6B35]">•</span> Terms of Service</li>
                    <li className="hover:text-[#FF6B35] cursor-pointer flex items-center gap-2 transition-colors"><span className="text-[#FF6B35]">•</span> Privacy Policy</li>
                    <li className="hover:text-[#FF6B35] cursor-pointer flex items-center gap-2 transition-colors"><span className="text-[#FF6B35]">•</span> Cookie Policy</li>
                </ul>
            </div>
        </div>
        
        <div className="border-t border-[#2e476f] pt-8 flex justify-between items-center text-[14px] max-w-[1200px] mx-auto px-6">
            <div>Copyright © 2024 Indore Movers. All Rights Reserved.</div>
            <div className="flex gap-6">
              <span className="hover:text-white transition-colors cursor-pointer">Terms of service</span>
              <span className="hover:text-white transition-colors cursor-pointer">Privacy policy</span>
              <span className="hover:text-white transition-colors cursor-pointer">Cookie policy</span>
            </div>
        </div>
      </footer>

    </div>
  );
};

const ServiceCard = ({ icon, title, desc }) => (
  <div className="bg-white rounded-[12px] border border-[#e9ecef] shadow-[0_4px_12px_rgba(27,54,93,0.05)] hover:shadow-[0_8px_24px_rgba(27,54,93,0.08)] transition-all duration-300 p-8 flex flex-col group cursor-pointer overflow-hidden relative">
    
    <div className="text-[#002046] mb-6 bg-[#f3f4f5] w-16 h-16 rounded-[8px] flex items-center justify-center group-hover:bg-[#002046] group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    
    <h3 className="text-[24px] font-semibold mb-3 text-[#191c1d] group-hover:text-[#002046] transition-colors">{title}</h3>
    <p className="text-[16px] text-[#74777f] leading-[24px] mb-6 flex-grow">{desc}</p>
    
    <div className="flex items-center text-[#002046] font-semibold text-[14px] uppercase tracking-wider gap-1">
      Read More <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform"/>
    </div>
  </div>
);

export default App;