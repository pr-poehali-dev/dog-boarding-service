import Icon from '@/components/ui/icon';

const ContactsSection = () => {
  return (
    <section id="contacts" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
          <p className="text-lg text-muted-foreground">
            Свяжитесь с нами удобным способом
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Icon name="Phone" className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg">Телефон</h3>
            <p className="text-muted-foreground">+7 (910) 588-48-16</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Icon name="Mail" className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg">Email</h3>
            <p className="text-muted-foreground">info@unas-lapki.ru</p>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Icon name="MapPin" className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg">Адрес</h3>
            <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;