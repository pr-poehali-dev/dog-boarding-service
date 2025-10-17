import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import ServicesSection from '@/components/sections/ServicesSection';
import BookingSection from '@/components/sections/BookingSection';
import GallerySection from '@/components/sections/GallerySection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import ContactsSection from '@/components/sections/ContactsSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <WhyChooseUs />
      <ServicesSection />
      <BookingSection />
      <GallerySection />
      <ReviewsSection />
      <ContactsSection />
      
      <WhatsAppButton />
      
      <footer className="py-8 bg-muted/50 border-t">
        <div className="container text-center text-muted-foreground">
          <p>&copy; 2024 У Нас Лапки. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;