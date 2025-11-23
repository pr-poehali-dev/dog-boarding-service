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
            <a 
              href="https://wa.me/79107020758" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors inline-block"
            >
              +7 (910) 702-07-58
            </a>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <svg className="text-primary" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5zm5.5-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
              </svg>
            </div>
            <h3 className="font-bold text-lg">VK</h3>
            <a 
              href="https://vk.com/tula_dogs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors inline-block"
            >
              У Нас Лапки | Сообщество
            </a>
          </div>
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Icon name="MapPin" className="text-primary" size={28} />
            </div>
            <h3 className="font-bold text-lg">Адрес</h3>
            <a 
              href="https://yandex.ru/profile/100479616846?lang=ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors inline-block"
            >
              г. Тула, проезд Рабочий 9а<br />У Нас Лапки
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;