import Icon from '@/components/ui/icon';

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы создаем лучшие условия для вашего питомца
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <Icon name="Heart" className="text-primary transition-transform duration-300 group-hover:scale-110" size={32} />
            </div>
            <h3 className="text-xl font-bold">Любовь к породе</h3>
            <p className="text-muted-foreground">Специализируемся на бульдогах и знаем все особенности породы</p>
          </div>
          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <Icon name="Shield" className="text-primary transition-transform duration-300 group-hover:scale-110" size={32} />
            </div>
            <h3 className="text-xl font-bold">Безопасность</h3>
            <p className="text-muted-foreground">Круглосуточное видеонаблюдение и постоянный контроль состояния питомцев</p>
          </div>
          <div className="text-center space-y-3 group">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
              <Icon name="Star" className="text-primary transition-transform duration-300 group-hover:scale-110" size={32} />
            </div>
            <h3 className="text-xl font-bold">Опыт 10+ лет</h3>
            <p className="text-muted-foreground">Профессиональные кинологи с большим опытом работы</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;