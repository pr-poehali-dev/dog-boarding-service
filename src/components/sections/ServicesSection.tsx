import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ServicesSection = () => {
  const services = [
    {
      title: 'Передержка',
      description: 'Комфортное пребывание вашего питомца в уютных условиях',
      icon: 'Home',
      price: '1800₽/сутки'
    },
    {
      title: 'Неполный день',
      description: 'Присмотр за питомцем от 4-х часов',
      icon: 'Clock',
      price: '800₽'
    },
    {
      title: 'Дневная группа',
      description: 'Групповые занятия и социализация с другими питомцами',
      icon: 'Users',
      price: '800₽'
    },
    {
      title: 'Абонемент 10 дней',
      description: 'Выгодное предложение на 10 дней передержки',
      icon: 'Ticket',
      price: '10 000₽'
    },
    {
      title: 'Абонемент 21 день',
      description: 'Максимальная выгода на 21 день передержки',
      icon: 'TicketCheck',
      price: '19 500₽'
    },
    {
      title: 'Доставка по городу',
      description: 'Привезем и заберем вашего питомца',
      icon: 'Car',
      price: 'по договоренности'
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Полный спектр кинологических услуг для вашего любимца
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-2 hover:border-primary/50 hover:scale-[1.02]">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={service.icon as any} className="text-primary" size={24} />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-primary">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;