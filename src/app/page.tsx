"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "heroImage", "url": "https://images.pexels.com/photos/2909822/pexels-photo-2909822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Colorful pink crust pizza with vegetables and herbs on a wooden platter. Perfect for food lovers." },
  { "id": "aboutImage", "url": "https://images.pexels.com/photos/262047/pexels-photo-262047.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Sophisticated luxury restaurant interior featuring elegant chandeliers and plush seating, perfect for fine dining." },
  { "id": "featureImage", "url": "https://images.pexels.com/photos/5907901/pexels-photo-5907901.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Delicious cheesy pizza with toppings being served hot and fresh from the oven." },
  { "id": "testimonialImage", "url": "https://images.pexels.com/photos/826349/pexels-photo-826349.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Woman enjoying remote work at a café, using a laptop and smartphone." },
  { "id": "contactImage", "url": "https://images.pexels.com/photos/5953493/pexels-photo-5953493.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Chef in mask spreads toppings on pizza dough in a stylish modern kitchen." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: 'Home', id: 'home' },
            { name: 'Menu', id: 'menu' },
            { name: 'About', id: 'about' },
            { name: 'Contact', id: 'contact' },
          ]}
          brandName="Pizzeria"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <HeroSplit
            title="Welcome to Our Pizzeria"
            description="Authentic Italian pizza made with the freshest ingredients."
            imageSrc={assetMap.find(a => a.id === 'heroImage')?.url ?? "/public/images/placeholder.webp"}
            buttons={[
              { text: 'View Menu', href: 'menu' },
              { text: 'Contact Us', href: 'contact' },
            ]}
            className="bg-yellow-100"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-900"
            buttonClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <SplitAbout
            bulletPoints={[
              { title: 'Tradition', description: 'Our recipes go back generations.', icon: 'Award' },
              { title: 'Quality', description: 'We use only the finest ingredients.', icon: 'Star' },
            ]}
            imageSrc={assetMap.find(a => a.id === 'aboutImage')?.url ?? "/public/images/placeholder.webp"}
            className="bg-yellow-100"
            bulletTitleClassName="text-gray-900"
            bulletDescriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <FeatureCardTwo
            features={[
              { title: 'Fresh Ingredients', description: 'Sourced locally daily.', icon: 'Leaf' },
              { title: 'Family Recipes', description: 'Hearty and traditional.', icon: 'Heart' },
            ]}
            className="bg-yellow-100"
            cardTitleClassName="text-gray-900"
            cardDescriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="testimonial" data-section="testimonial" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <TestimonialCardTwo
            testimonials={[
              {
                id: '1',
                name: 'Maria Rossi',
                role: 'Food Blogger',
                testimonial: 'The best pizza in town! A true Italian experience.',
                imageSrc: assetMap.find(a => a.id === 'testimonialImage')?.url ?? "/public/images/placeholder.webp",
              },
              {
                id: '2',
                name: 'John Doe',
                role: 'Regular Customer',
                testimonial: 'Amazing flavors and a cozy atmosphere.',
                icon: 'Quote',
              },
            ]}
            className="bg-yellow-100"
            nameClassName="text-gray-900"
            roleClassName="text-gray-900"
            testimonialClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <ContactSplit
            tag="Contact Us"
            title="Get in Touch"
            description="We’d love to hear from you. Send us a message!"
            imageSrc={assetMap.find(a => a.id === 'contactImage')?.url ?? "/public/images/placeholder.webp"}
            className="bg-yellow-100"
            tagClassName="text-gray-900"
            titleClassName="text-gray-900"
            descriptionClassName="text-gray-900"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6 ">
          <FooterBase
            columns={[
              { title: 'Explore', items: [{ label: 'Home', href: 'home' }, { label: 'Menu', href: 'menu' }, { label: 'Contact', href: 'contact' }] },
              { title: 'Legal', items: [{ label: 'Privacy Policy', href: 'privacy' }, { label: 'Terms of Service', href: 'terms' }] },
            ]}
            copyrightText="© 2025 Pizzeria"
            className="bg-yellow-100"
            columnTitleClassName="text-gray-900"
            columnItemClassName="text-gray-900"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
