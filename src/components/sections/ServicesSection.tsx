import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      title: 'Проживание Стандарт',
      description: 'Теплое и просторное помещение с лежанками, друзьями и прогулками, скучно не будет!',
      icon: 'Home',
      price: '1 200₽',
      period: 'в сутки',
      features: []
    },
    {
      title: 'Проживание праздники',
      description: 'Теплое и просторное помещение с лежанками, друзьями и прогулками, скучно не будет!',
      icon: 'PartyPopper',
      price: '1 800₽',
      period: 'в сутки',
      features: []
    },
    {
      title: 'Дневное пребывание',
      description: 'Присмотр за питомцем от 4-х до 8-ми часов',
      icon: 'Sun',
      price: '800₽',
      period: 'за день',
      features: ['Прогулка', 'Кормление', 'Игры']
    },
    {
      title: 'Абонемент 10 дней',
      description: 'Выгодное предложение при длительном пребывании',
      icon: 'Ticket',
      price: '10 000₽',
      period: 'экономия 2000₽',
      features: ['Стандарт номер', 'Все включено', 'Скидка 17%']
    },
    {
      title: 'Абонемент 21 день',
      description: 'Максимальная выгода для долгих командировок',
      icon: 'TicketCheck',
      price: '19 500₽',
      period: 'экономия 5700₽',
      features: ['Стандарт номер', 'Все включено', 'Скидка 23%']
    },
    {
      title: 'Доставка питомца',
      description: 'Привезём и заберём вашего любимца по городу',
      icon: 'Car',
      price: 'от 300₽',
      period: 'в одну сторону',
      features: ['Комфортная перевозка', 'Опытный водитель', 'Быстро']
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-accent/20 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA0MGMwLTUgMi01IDUtNXM1IDIgNSA1LTIgNS01IDUtNS0yLTUtNXoiIGZpbGw9IiNhODU1ZjciIG9wYWNpdHk9Ii4wNSIvPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="Briefcase" className="text-primary" size={20} />
            <span className="text-primary font-semibold">Услуги и цены</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Прайс-лист</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Прозрачные цены без скрытых платежей. Выберите подходящий тариф для вашего питомца
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in border-2 hover:border-primary/50 overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full -mr-16 -mt-16"></div>
              
              <CardHeader className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon as any} className="text-primary" size={28} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10 space-y-4">
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                
                <div className="pt-3 border-t border-border">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-primary">{service.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{service.period}</p>
                </div>
                
                <div className="space-y-2 pt-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-primary flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '600ms' }}>
          <p className="text-muted-foreground mb-4">Не нашли подходящий вариант?</p>
          <Button size="lg" variant="outline" className="gap-2">
            <Icon name="Phone" size={20} />
            Позвоните нам для консультации
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;