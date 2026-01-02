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
      <div className="animate-fade-in">
        <Header scrollToSection={scrollToSection} />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '100ms' }}>
        <HeroSection scrollToSection={scrollToSection} />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
        <WhyChooseUs />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '300ms' }}>
        <ServicesSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
        <BookingSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '500ms' }}>
        <GallerySection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
        <ReviewsSection />
      </div>
      <div className="animate-fade-in" style={{ animationDelay: '700ms' }}>
        <ContactsSection />
      </div>
      
      <WhatsAppButton />
      
      <footer className="py-12 bg-gradient-to-t from-primary/5 to-background border-t border-primary/10">
        <div className="container">
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl">🐾</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">У Нас Лапки</span>
            </div>
            <p className="text-muted-foreground text-center max-w-md">
              Отель для собак с любовью и заботой о каждом питомце
            </p>
            <div className="flex gap-4 mt-4">
              <a href="tel:+79107020758" className="text-muted-foreground hover:text-primary transition-colors">
                +7 (910) 702-07-58
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="https://t.me/tuladogs" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                Telegram
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-6">&copy; 2024 У Нас Лапки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;