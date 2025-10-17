import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [boardingDate, setBoardingDate] = useState<Date>();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Передержка',
      description: 'Комфортное пребывание вашего питомца в уютных условиях',
      icon: 'Home',
      price: 'от 1500₽/сутки'
    },
    {
      title: 'Групповые занятия',
      description: 'Социализация и обучение в группе с профессиональным кинологом',
      icon: 'Users',
      price: 'от 800₽/занятие'
    },
    {
      title: 'Индивидуальные тренировки',
      description: 'Персональный подход к воспитанию и дрессировке',
      icon: 'Award',
      price: 'от 2000₽/час'
    },
    {
      title: 'Консультации',
      description: 'Помощь в решении поведенческих проблем',
      icon: 'MessageCircle',
      price: 'от 1200₽'
    }
  ];

  const gallery = [
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/fffaa0f2-4767-408c-b8c7-e98b808a9ab0.jpg', name: 'Макс' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/939f4313-13e3-4e53-8b64-325104aa89b2.jpg', name: 'Групповое занятие' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/740754de-aaae-4330-a292-dd37cd19e1c4.jpg', name: 'Тренировка' }
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
            <span className="text-xl font-bold">Бульдог Клуб</span>
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

      <section id="hero" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 -z-10" />
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Профессиональная забота о вашем питомце
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Кинологические услуги с любовью к бульдогам. Передержка, групповые занятия и индивидуальные тренировки.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => scrollToSection('booking')}>
                  Забронировать место
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('services')}>
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/2102eaf2-fd2f-4ee4-9ecf-d9cd281eee67.jpg"
                alt="Белый английский бульдог"
                className="rounded-2xl shadow-2xl w-full"
              />
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
                      mode="single"
                      selected={boardingDate}
                      onSelect={setBoardingDate}
                      className="rounded-md border"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                  {boardingDate && (
                    <div className="p-4 bg-accent/50 rounded-lg space-y-4">
                      <p className="font-medium">Выбранная дата: {boardingDate.toLocaleDateString('ru-RU')}</p>
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