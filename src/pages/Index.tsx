import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { DateRange } from 'react-day-picker';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [boardingDateRange, setBoardingDateRange] = useState<DateRange | undefined>();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Передержка',
      description: 'Комфортное пребывание вашего питомца в уютных условиях',
      icon: 'Home',
      price: '1200₽/сутки'
    },
    {
      title: 'Неполный день',
      description: 'Присмотр за питомцем от 4-х часов',
      icon: 'Clock',
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

  const gallery = [
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/8ba251f4-713a-4df8-b0e5-95adfa989f67.jpg', name: 'Макс' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/2a1e9638-3a15-42e7-bbcd-273ce3cc044e.jpg', name: 'Групповое занятие' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/77a58d04-c426-4ba2-8457-f7bf40fe0aad.jpg', name: 'Комфортные условия' }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Оставляли нашего бульдога Макса на две недели. Вернулись к счастливому и довольному псу! Спасибо за заботу!',
      rating: 5
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Отличные групповые занятия! За месяц наш пёс стал гораздо послушнее и спокойнее с другими собаками.',
      rating: 5
    },
    {
      name: 'Мария Кузнецова',
      text: 'Профессиональный подход, чистота и внимание к каждому питомцу. Рекомендую!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Dog" size={32} className="text-primary" />
            <span className="text-xl font-bold">У Нас Лапки</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('booking')} className="text-sm font-medium hover:text-primary transition-colors">Бронирование</button>
            <button onClick={() => scrollToSection('gallery')} className="text-sm font-medium hover:text-primary transition-colors">Наши подопечные</button>
            <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </nav>
          <Button onClick={() => scrollToSection('booking')}>Записаться</Button>
        </div>
      </header>

      <section id="hero" className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-accent/30 to-background">
        <div className="container">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center mb-8">
              <img
                src="https://cdn.poehali.dev/files/3edf6327-2a7d-4237-8bfb-41ce77d7b7a7.png"
                alt="У Нас Лапки - Кинологический клуб"
                className="w-full max-w-2xl md:max-w-3xl"
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

      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создаем лучшие условия для вашего питомца
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Heart" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold">Любовь к породе</h3>
              <p className="text-muted-foreground">Специализируемся на бульдогах и знаем все особенности породы</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Shield" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold">Безопасность</h3>
              <p className="text-muted-foreground">Круглосуточное видеонаблюдение и постоянный контроль состояния питомцев</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Icon name="Star" className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold">Опыт 10+ лет</h3>
              <p className="text-muted-foreground">Профессиональные кинологи с большим опытом работы</p>
            </div>
          </div>
        </div>
      </section>

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
              <Card key={index} className="hover:shadow-lg transition-shadow animate-fade-in border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-primary">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Бронирование</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите удобную дату и время для вашего питомца
            </p>
          </div>
          <Tabs defaultValue="boarding" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="boarding">Передержка</TabsTrigger>
              <TabsTrigger value="training">Групповые занятия</TabsTrigger>
            </TabsList>
            <TabsContent value="boarding" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Забронировать передержку</CardTitle>
                  <CardDescription>Выберите даты пребывания вашего питомца</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    <Calendar
                      mode="range"
                      selected={boardingDateRange}
                      onSelect={setBoardingDateRange}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                      numberOfMonths={2}
                    />
                  </div>
                  {boardingDateRange?.from && (
                    <div className="p-4 bg-accent/50 rounded-lg space-y-4">
                      <div className="space-y-2">
                        <p className="font-medium">Дата заезда: {boardingDateRange.from.toLocaleDateString('ru-RU')}</p>
                        {boardingDateRange.to && (
                          <>
                            <p className="font-medium">Дата выезда: {boardingDateRange.to.toLocaleDateString('ru-RU')}</p>
                            <p className="text-sm text-muted-foreground">
                              Количество дней: {Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24))}
                            </p>
                            <div className="mt-3 p-3 bg-primary/10 rounded-lg border-2 border-primary/30">
                              <p className="text-lg font-bold text-primary">
                                Стоимость: {(Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24)) * 1200).toLocaleString('ru-RU')}₽
                              </p>
                              <p className="text-xs text-muted-foreground mt-1">1200₽ за сутки</p>
                            </div>
                          </>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя питомца</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="Например, Макс" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Порода</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="Например, Английский бульдог" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Ваш телефон</label>
                        <input type="tel" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <Button className="w-full" size="lg">Забронировать</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="training" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Записаться на групповое занятие</CardTitle>
                  <CardDescription>Выберите удобную дату для занятия</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-center">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                    />
                  </div>
                  {selectedDate && (
                    <div className="p-4 bg-accent/50 rounded-lg space-y-4">
                      <p className="font-medium">Выбранная дата: {selectedDate.toLocaleDateString('ru-RU')}</p>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Время занятия</label>
                        <select className="w-full px-4 py-2 rounded-md border bg-background">
                          <option>10:00 - 11:00</option>
                          <option>12:00 - 13:00</option>
                          <option>15:00 - 16:00</option>
                          <option>17:00 - 18:00</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Имя питомца</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="Например, Макс" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Ваше имя</label>
                        <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="Как к вам обращаться?" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Ваш телефон</label>
                        <input type="tel" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="+7 (999) 123-45-67" />
                      </div>
                      <Button className="w-full" size="lg">Записаться</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Фото наших подопечных</h2>
            <p className="text-lg text-muted-foreground">
              Счастливые моменты с нашими любимцами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.map((photo, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={photo.url}
                  alt={photo.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <p className="text-white font-semibold text-xl">{photo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят наши довольные клиенты
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="fill-primary text-primary" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Наши контакты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Телефон</p>
                      <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">info@bulldog-club.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Адрес</p>
                      <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary mt-1" />
                    <div>
                      <p className="font-medium">Режим работы</p>
                      <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Напишите нам</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя</label>
                    <input type="text" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="Введите имя" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <input type="email" className="w-full px-4 py-2 rounded-md border bg-background" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Сообщение</label>
                    <textarea className="w-full px-4 py-2 rounded-md border bg-background min-h-[100px]" placeholder="Ваше сообщение..."></textarea>
                  </div>
                  <Button className="w-full">Отправить</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Dog" size={24} className="text-primary" />
              <span className="font-semibold">Бульдог Клуб</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Бульдог Клуб. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;