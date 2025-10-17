import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
      <div className="container">
        <div className="text-center space-y-8 animate-fade-in">
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
