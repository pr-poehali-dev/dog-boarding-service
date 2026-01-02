import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-24 bg-gradient-to-b from-accent/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUwIDUwYzAgNS01IDUtMTAgNXMtNS01LTUtMTAgNS01IDEwLTUgNSA1IDUgMTB6IiBmaWxsPSIjYTg1NWY3IiBvcGFjaXR5PSIuMDMiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="MapPin" className="text-primary" size={20} />
            <span className="text-primary font-semibold">Как нас найти</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Контакты</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Приезжайте в гости или свяжитесь с нами удобным способом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="MapPin" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Наш адрес</h3>
                  <a 
                    href="https://yandex.ru/profile/100479616846?lang=ru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg block leading-relaxed"
                  >
                    г. Тула, проезд Рабочий 9а<br />
                    У Нас Лапки
                  </a>
                  <Button 
                    variant="outline" 
                    className="mt-4 gap-2"
                    onClick={() => window.open('https://yandex.ru/profile/100479616846?lang=ru', '_blank')}
                  >
                    <Icon name="Navigation" size={18} />
                    Построить маршрут
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Телефон</h3>
                  <a 
                    href="tel:+79107020758" 
                    className="text-muted-foreground hover:text-primary transition-colors text-lg block mb-2"
                  >
                    +7 (910) 702-07-58
                  </a>
                  <p className="text-sm text-muted-foreground mb-3">Звоните с 9:00 до 21:00</p>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open('tel:+79107020758', '_self')}
                  >
                    <Icon name="Phone" size={18} />
                    Позвонить
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-card border-2 border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-xl group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icon name="Send" className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Telegram</h3>
                  <a 
                    href="https://t.me/tuladogs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors text-lg block mb-2"
                  >
                    @tuladogs
                  </a>
                  <p className="text-sm text-muted-foreground mb-3">Быстрые ответы в мессенджере</p>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => window.open('https://t.me/tuladogs', '_blank')}
                  >
                    <Icon name="Send" size={18} />
                    Написать
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <div className="bg-card border-2 border-border rounded-2xl overflow-hidden h-full shadow-xl">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A7cd71de30488e5a2c67e6f2d8e0c1a1b5a3b7e4e2b5e7c3f&amp;source=constructor"
                width="100%"
                height="600"
                frameBorder="0"
                className="w-full h-full min-h-[500px]"
                title="Карта проезда"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Icon name="Clock" className="text-primary mx-auto mb-4" size={48} />
          <h3 className="text-2xl font-bold mb-3">Режим работы</h3>
          <p className="text-lg text-muted-foreground mb-2">Понедельник - Суббота: с 7:00 до 22:00</p>
          <p className="text-sm text-muted-foreground">
            Забота о питомцах: круглосуточно
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;