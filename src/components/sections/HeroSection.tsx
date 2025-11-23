import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      <div className="container">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-12">
            <a 
              href="https://wa.me/79107020758" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button 
                size="lg" 
                className="text-2xl md:text-4xl px-12 md:px-16 py-8 md:py-12 font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient"
              >
                💬 Написать нам в WhatsApp
              </Button>
            </a>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.poehali.dev/files/7d114a4f-545b-4114-a2ba-28bc4d7d2770.png"
              alt="У Нас Лапки - Кинологический клуб"
              className="w-full max-w-2xl md:max-w-3xl animate-warm-bounce-in"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Профессиональная забота о вашем питомце
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Кинологические услуги с любовью к бульдогам. Передержка, групповые занятия и индивидуальные тренировки.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('booking')}>
              Забронировать место
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
              Наши услуги
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;