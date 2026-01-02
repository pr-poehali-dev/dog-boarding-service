import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { DateRange } from 'react-day-picker';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const BookingSection = () => {
  const { toast } = useToast();
  const [boardingDateRange, setBoardingDateRange] = useState<DateRange | undefined>();
  const [boardingForm, setBoardingForm] = useState({ 
    petName: '', 
    breed: '', 
    age: '', 
    phone: '', 
    name: '',
    roomType: 'standard'
  });

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    
    if (cleaned.startsWith('8')) {
      return '+7' + cleaned.slice(1);
    }
    
    if (cleaned.startsWith('7')) {
      return '+' + cleaned;
    }
    
    if (cleaned.length > 0) {
      return '+7' + cleaned;
    }
    
    return '';
  };

  const handleBookingSubmit = () => {
    if (!boardingDateRange?.from || !boardingDateRange?.to) return;
    
    const days = Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24));
    const pricePerDay = boardingForm.roomType === 'standard' ? 1200 : 1800;
    const cost = days * pricePerDay;
    
    const telegramUrl = 'https://t.me/tuladogs';
    
    window.open(telegramUrl, '_blank');
    
    toast({
      title: '✅ Открываем Telegram!',
      description: 'Отправьте нам данные для бронирования.',
    });
    
    setBoardingForm({ petName: '', breed: '', age: '', phone: '', name: '', roomType: 'standard' });
    setBoardingDateRange(undefined);
  };

  const calculateCost = () => {
    if (!boardingDateRange?.from || !boardingDateRange?.to) return 0;
    const days = Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24));
    const pricePerDay = boardingForm.roomType === 'standard' ? 1200 : 1800;
    return days * pricePerDay;
  };

  const calculateDays = () => {
    if (!boardingDateRange?.from || !boardingDateRange?.to) return 0;
    return Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24));
  };

  return (
    <section id="booking" className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="Calendar" className="text-primary" size={20} />
            <span className="text-primary font-semibold">Бронирование</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Забронировать место</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Заполните форму, и мы свяжемся с вами для подтверждения
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-2xl border-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
          <CardHeader className="text-center border-b bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Icon name="Home" className="text-primary" size={28} />
              Бронирование проживания
            </CardTitle>
            <CardDescription className="text-base">
              Укажите данные вашего питомца и выберите даты пребывания
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon name="User" size={16} className="text-primary" />
                  Ваше имя
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 bg-background focus:border-primary transition-colors" 
                  placeholder="Как к вам обращаться?" 
                  value={boardingForm.name}
                  onChange={(e) => setBoardingForm({...boardingForm, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  Ваш телефон
                </label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg border-2 bg-background focus:border-primary transition-colors" 
                  placeholder="+7 (999) 123-45-67" 
                  value={boardingForm.phone}
                  onChange={(e) => setBoardingForm({...boardingForm, phone: formatPhoneNumber(e.target.value)})}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon name="Dog" size={16} className="text-primary" />
                  Имя питомца
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 bg-background focus:border-primary transition-colors" 
                  placeholder="Кличка" 
                  value={boardingForm.petName}
                  onChange={(e) => setBoardingForm({...boardingForm, petName: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon name="PawPrint" size={16} className="text-primary" />
                  Порода
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 bg-background focus:border-primary transition-colors" 
                  placeholder="Порода собаки" 
                  value={boardingForm.breed}
                  onChange={(e) => setBoardingForm({...boardingForm, breed: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Icon name="Cake" size={16} className="text-primary" />
                  Возраст
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border-2 bg-background focus:border-primary transition-colors" 
                  placeholder="Например, 2 года" 
                  value={boardingForm.age}
                  onChange={(e) => setBoardingForm({...boardingForm, age: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium flex items-center gap-2">
                <Icon name="Star" size={16} className="text-primary" />
                Тип номера
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div 
                  onClick={() => setBoardingForm({...boardingForm, roomType: 'standard'})}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    boardingForm.roomType === 'standard' 
                      ? 'border-primary bg-primary/5 shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon name="Home" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-lg">Стандарт</p>
                      <p className="text-sm text-muted-foreground">1 200₽ / сутки</p>
                    </div>
                  </div>
                </div>
                <div 
                  onClick={() => setBoardingForm({...boardingForm, roomType: 'luxury'})}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    boardingForm.roomType === 'luxury' 
                      ? 'border-primary bg-primary/5 shadow-lg' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Icon name="PartyPopper" className="text-primary mt-1" size={24} />
                    <div>
                      <p className="font-semibold text-lg">Праздники</p>
                      <p className="text-sm text-muted-foreground">1 800₽ / сутки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium flex items-center gap-2">
                <Icon name="CalendarDays" size={16} className="text-primary" />
                Выберите даты проживания
              </label>
              <div className="flex justify-center p-4 bg-accent/30 rounded-xl">
                <Calendar
                  mode="range"
                  selected={boardingDateRange}
                  onSelect={setBoardingDateRange}
                  className="rounded-md border-0"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </div>

            {boardingDateRange?.from && boardingDateRange?.to && (
              <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border-2 border-primary/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Период:</span>
                  <span className="font-semibold">
                    {boardingDateRange.from.toLocaleDateString('ru-RU')} - {boardingDateRange.to.toLocaleDateString('ru-RU')}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Количество дней:</span>
                  <span className="font-semibold">{calculateDays()}</span>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-primary/20">
                  <span className="text-lg font-semibold">Итого:</span>
                  <span className="text-2xl font-bold text-primary">{calculateCost().toLocaleString('ru-RU')}₽</span>
                </div>
              </div>
            )}

            <Button 
              className="w-full h-14 text-lg gap-2" 
              size="lg"
              disabled={!boardingForm.petName || !boardingForm.phone || !boardingForm.name || !boardingDateRange?.from || !boardingDateRange?.to}
              onClick={handleBookingSubmit}
            >
              <Icon name="Send" size={20} />
              Отправить менеджеру в телеграмм
            </Button>
          </CardContent>
        </Card>

        <div className="text-center mt-12 space-y-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <p className="text-muted-foreground">Или свяжитесь с нами напрямую:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('tel:+79107020758', '_self')}>
              <Icon name="Phone" size={20} />
              +7 (910) 702-07-58
            </Button>
            <Button variant="outline" size="lg" className="gap-2" onClick={() => window.open('https://t.me/tuladogs', '_blank')}>
              <Icon name="Send" size={20} />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;