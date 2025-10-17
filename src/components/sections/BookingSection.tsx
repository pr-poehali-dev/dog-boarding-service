import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DateRange } from 'react-day-picker';
import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const { toast } = useToast();
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [boardingDateRange, setBoardingDateRange] = useState<DateRange | undefined>();
  const [boardingForm, setBoardingForm] = useState({ petName: '', breed: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = async () => {
    if (!boardingDateRange?.from || !boardingDateRange?.to) return;
    
    setIsSubmitting(true);
    try {
      const days = Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24));
      const cost = days * 1200;
      
      const response = await fetch('https://functions.poehali.dev/0bcd3ec4-db86-4122-b15e-89d6a9dd9932', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: boardingForm.email.split('@')[0] || 'Клиент',
          email: boardingForm.email,
          phone: boardingForm.phone,
          petName: boardingForm.petName,
          startDate: boardingDateRange.from.toLocaleDateString('ru-RU'),
          endDate: boardingDateRange.to.toLocaleDateString('ru-RU'),
          cost: cost.toString()
        })
      });
      
      if (response.ok) {
        toast({
          title: '✅ Бронирование принято!',
          description: 'Мы отправили подтверждение на вашу почту и свяжемся с вами в ближайшее время.',
        });
        setBoardingForm({ petName: '', breed: '', phone: '', email: '' });
        setBoardingDateRange(undefined);
      } else {
        toast({
          title: '⚠️ Не удалось отправить',
          description: 'Пожалуйста, позвоните нам напрямую или попробуйте позже.',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: '⚠️ Ошибка подключения',
        description: 'Проверьте интернет-соединение и попробуйте снова.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Онлайн бронирование</h2>
          <p className="text-lg text-muted-foreground">
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
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, Макс" 
                        value={boardingForm.petName}
                        onChange={(e) => setBoardingForm({...boardingForm, petName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Порода</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, Английский бульдог" 
                        value={boardingForm.breed}
                        onChange={(e) => setBoardingForm({...boardingForm, breed: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Как к вам обращаться?" 
                        value={boardingForm.email.split('@')[0]}
                        onChange={(e) => setBoardingForm({...boardingForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email для подтверждения</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="example@mail.ru" 
                        value={boardingForm.email}
                        onChange={(e) => setBoardingForm({...boardingForm, email: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваш телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="+7 (999) 123-45-67" 
                        value={boardingForm.phone}
                        onChange={(e) => setBoardingForm({...boardingForm, phone: e.target.value})}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting || !boardingForm.petName || !boardingForm.phone || !boardingForm.email}
                      onClick={handleBookingSubmit}
                    >
                      {isSubmitting ? 'Отправка...' : 'Забронировать'}
                    </Button>
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
  );
};

export default BookingSection;
