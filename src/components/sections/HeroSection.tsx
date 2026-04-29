import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative pt-20 pb-32 px-4 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/30">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNhODU1ZjciIG9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Icon name="Heart" className="text-primary" size={20} />
              <span className="text-primary font-semibold">Отель с заботой о вашем питомце</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              У Нас Лапки
              <span className="block text-primary mt-2">Где каждой лапке рады! 🐾</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Комфортное проживание для вашего питомца. Круглосуточная забота, уют и профессиональный уход, пока вы в отъезде.
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollToSection('booking')} className="gap-2 text-lg px-8">
                <Icon name="Calendar" size={20} />
                Забронировать
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="gap-2 text-lg px-8">
                <Icon name="Info" size={20} />
                Узнать больше
              </Button>
            </div>
            
            <div 
              onClick={() => window.open('https://t.me/tula_dogs', '_blank')}
              className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Icon name="Radio" className="text-white" size={18} />
              </div>
              <span className="text-white font-semibold">Telegram канал LIVE 📹</span>
              <Icon name="ArrowRight" className="text-white group-hover:translate-x-1 transition-transform" size={18} />
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Clock" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">24/7</p>
                  <p className="text-sm text-muted-foreground">Круглосуточно</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Image" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Фото и видео</p>
                  <p className="text-sm text-muted-foreground">Отчёты каждый день</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-semibold">Опытные</p>
                  <p className="text-sm text-muted-foreground">Кинологи</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-warm-bounce-in">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-primary rounded-3xl blur-2xl opacity-20 animate-gradient bg-size-200"></div>
            <div className="relative rounded-3xl shadow-2xl w-full overflow-hidden aspect-square">
              <img 
                src="https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/bucket/b80b86a2-8b99-4412-9312-7c8134d0a27c.jpeg"
                alt="Счастливая собака в отеле"
                className="w-full h-full object-cover"
                style={{ filter: 'contrast(1.08) brightness(1.05) saturate(1.1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-3xl" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <p className="text-white font-bold text-xl md:text-2xl leading-tight drop-shadow-lg"
                  style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 12px rgba(0,0,0,0.7)', letterSpacing: '0.01em' }}
                >
                  У Нас Лапки —<br />
                  <span className="text-yellow-300">у Вас спокойствие!</span>
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 animate-scale-in" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Star" className="text-primary fill-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-lg">4.9/5.0</p>
                  <p className="text-sm text-muted-foreground">Рейтинг</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;