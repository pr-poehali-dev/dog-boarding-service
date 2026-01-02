import Icon from '@/components/ui/icon';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: 'Clock',
      title: 'Круглосуточная забота',
      description: 'Наши специалисты всегда рядом с вашим питомцем, 24/7 контроль и забота'
    },
    {
      icon: 'Sparkles',
      title: 'Чистота и уют',
      description: 'Ежедневная уборка, свежие подстилки, комфортная температура'
    },
    {
      icon: 'GraduationCap',
      title: 'Опытные кинологи',
      description: 'Профессионалы с многолетним стажем и любовью к животным'
    },
    {
      icon: 'Camera',
      title: 'Видеонаблюдение',
      description: 'Смотрите за питомцем в реальном времени через приложение'
    },
    {
      icon: 'Trees',
      title: 'Ежедневные прогулки',
      description: 'Активные игры на свежем воздухе и социализация'
    },
    {
      icon: 'Image',
      title: 'Фотоотчёты',
      description: 'Каждый день получайте фото и видео вашего любимца'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="Award" className="text-primary" size={20} />
            <span className="text-primary font-semibold">Наши преимущества</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Почему нам доверяют</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Создаём лучшие условия для комфортного пребывания вашего питомца
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Icon name={benefit.icon} className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
