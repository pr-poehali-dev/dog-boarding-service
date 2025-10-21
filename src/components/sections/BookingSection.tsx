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
  const [boardingForm, setBoardingForm] = useState({ petName: '', breed: '', age: '', phone: '', name: '' });
  const [trainingForm, setTrainingForm] = useState({ petName: '', breed: '', age: '', name: '', phone: '', time: '08:00 - 09:00' });
  const [kinologistForm, setKinologistForm] = useState({ petName: '', breed: '', age: '', name: '', phone: '', task: '', time: '08:00 - 09:00' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleBookingSubmit = () => {
    if (!boardingDateRange?.from || !boardingDateRange?.to) return;
    
    const days = Math.ceil((boardingDateRange.to.getTime() - boardingDateRange.from.getTime()) / (1000 * 60 * 60 * 24));
    const cost = days * 1200;
    
    const whatsappNumber = '79105884816';
    const message = `🐾 *Новое бронирование передержки!*

👤 Клиент: ${boardingForm.name}
📞 Телефон: ${boardingForm.phone}
🐶 Питомец: ${boardingForm.petName}
🐕 Порода: ${boardingForm.breed}
🎂 Возраст: ${boardingForm.age}
📅 Даты: ${boardingDateRange.from.toLocaleDateString('ru-RU')} - ${boardingDateRange.to.toLocaleDateString('ru-RU')}
📆 Количество дней: ${days}
💰 Стоимость: ${cost.toLocaleString('ru-RU')}₽`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: '✅ Открываем WhatsApp!',
      description: 'Отправьте сообщение для подтверждения бронирования.',
    });
    
    setBoardingForm({ petName: '', breed: '', age: '', phone: '', name: '' });
    setBoardingDateRange(undefined);
  };

  const handleTrainingSubmit = () => {
    if (!selectedDate) return;
    
    const whatsappNumber = '79105884816';
    const message = `🐾 *Запись в дневную группу!*

👤 Клиент: ${trainingForm.name}
📞 Телефон: ${trainingForm.phone}
🐶 Питомец: ${trainingForm.petName}
🐕 Порода: ${trainingForm.breed}
🎂 Возраст: ${trainingForm.age}
📅 Дата: ${selectedDate.toLocaleDateString('ru-RU')}
⏰ Время: ${trainingForm.time}
💰 Стоимость: 800₽`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: '✅ Открываем WhatsApp!',
      description: 'Отправьте сообщение для подтверждения записи.',
    });
    
    setTrainingForm({ petName: '', breed: '', age: '', name: '', phone: '', time: '08:00 - 09:00' });
    setSelectedDate(undefined);
  };

  const handleKinologistSubmit = () => {
    if (!selectedDate) return;
    
    const whatsappNumber = '79105884816';
    const message = `🐕 *Запись на услуги кинолога!*

👤 Клиент: ${kinologistForm.name}
📞 Телефон: ${kinologistForm.phone}
🐶 Питомец: ${kinologistForm.petName}
🐕 Порода: ${kinologistForm.breed}
🎂 Возраст: ${kinologistForm.age}
📅 Дата: ${selectedDate.toLocaleDateString('ru-RU')}
⏰ Время: ${kinologistForm.time}
📝 Задача: ${kinologistForm.task}
💰 Стоимость: от 3000₽`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: '✅ Открываем WhatsApp!',
      description: 'Отправьте сообщение для подтверждения записи.',
    });
    
    setKinologistForm({ petName: '', breed: '', age: '', name: '', phone: '', task: '', time: '08:00 - 09:00' });
    setSelectedDate(undefined);
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
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="boarding">Передержка</TabsTrigger>
            <TabsTrigger value="training">Дневная группа</TabsTrigger>
            <TabsTrigger value="kinologist">Услуги кинолога</TabsTrigger>
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
                      <label className="text-sm font-medium">Возраст</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, 3 года" 
                        value={boardingForm.age}
                        onChange={(e) => setBoardingForm({...boardingForm, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Как к вам обращаться?" 
                        value={boardingForm.name}
                        onChange={(e) => setBoardingForm({...boardingForm, name: e.target.value})}
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
                      disabled={!boardingForm.petName || !boardingForm.phone || !boardingForm.name}
                      onClick={handleBookingSubmit}
                    >
                      Отправить в WhatsApp
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="training" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Записаться в дневную группу</CardTitle>
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
                      <select 
                        className="w-full px-4 py-2 rounded-md border bg-background"
                        value={trainingForm.time}
                        onChange={(e) => setTrainingForm({...trainingForm, time: e.target.value})}
                      >
                        <option>08:00 - 09:00</option>
                        <option>09:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                        <option>12:00 - 13:00</option>
                        <option>13:00 - 14:00</option>
                        <option>14:00 - 15:00</option>
                        <option>15:00 - 16:00</option>
                        <option>16:00 - 17:00</option>
                        <option>17:00 - 18:00</option>
                        <option>18:00 - 19:00</option>
                        <option>19:00 - 20:00</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя питомца</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, Макс" 
                        value={trainingForm.petName}
                        onChange={(e) => setTrainingForm({...trainingForm, petName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Порода</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, Английский бульдог" 
                        value={trainingForm.breed}
                        onChange={(e) => setTrainingForm({...trainingForm, breed: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Возраст</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, 2 года" 
                        value={trainingForm.age}
                        onChange={(e) => setTrainingForm({...trainingForm, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Как к вам обращаться?" 
                        value={trainingForm.name}
                        onChange={(e) => setTrainingForm({...trainingForm, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваш телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="+7 (999) 123-45-67" 
                        value={trainingForm.phone}
                        onChange={(e) => setTrainingForm({...trainingForm, phone: e.target.value})}
                      />
                    </div>
                    <div className="mt-3 p-3 bg-primary/10 rounded-lg border-2 border-primary/30">
                      <p className="text-lg font-bold text-primary">Стоимость: 800₽</p>
                      <p className="text-xs text-muted-foreground mt-1">за одно занятие</p>
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
                      disabled={!trainingForm.petName || !trainingForm.name || !trainingForm.phone}
                      onClick={handleTrainingSubmit}
                    >
                      Отправить в WhatsApp
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="kinologist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>🐕 Услуги кинолога</CardTitle>
                <CardDescription>Индивидуальные занятия с профессиональным кинологом</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border"
                    disabled={(date) => date < new Date()}
                  />
                </div>
                {selectedDate && (
                  <div className="p-4 bg-accent/50 rounded-lg space-y-4">
                    <p className="font-medium">Выбранная дата: {selectedDate.toLocaleDateString('ru-RU')}</p>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Время занятия</label>
                      <select 
                        className="w-full px-4 py-2 rounded-md border bg-background"
                        value={kinologistForm.time}
                        onChange={(e) => setKinologistForm({...kinologistForm, time: e.target.value})}
                      >
                        <option>08:00 - 09:00</option>
                        <option>09:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                        <option>12:00 - 13:00</option>
                        <option>13:00 - 14:00</option>
                        <option>14:00 - 15:00</option>
                        <option>15:00 - 16:00</option>
                        <option>16:00 - 17:00</option>
                        <option>17:00 - 18:00</option>
                        <option>18:00 - 19:00</option>
                        <option>19:00 - 20:00</option>
                      </select>
                    </div>
                    <div className="mt-3 p-3 bg-primary/10 rounded-lg border-2 border-primary/30">
                      <p className="text-lg font-bold text-primary">Стоимость: от 3000₽</p>
                      <p className="text-xs text-muted-foreground mt-1">за индивидуальное занятие</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Имя питомца</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Кличка вашего питомца" 
                        value={kinologistForm.petName}
                        onChange={(e) => setKinologistForm({...kinologistForm, petName: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Порода</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, Английский бульдог" 
                        value={kinologistForm.breed}
                        onChange={(e) => setKinologistForm({...kinologistForm, breed: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Возраст</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Например, 1 год" 
                        value={kinologistForm.age}
                        onChange={(e) => setKinologistForm({...kinologistForm, age: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="Как к вам обращаться?" 
                        value={kinologistForm.name}
                        onChange={(e) => setKinologistForm({...kinologistForm, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваш телефон</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-2 rounded-md border bg-background" 
                        placeholder="+7 (999) 123-45-67" 
                        value={kinologistForm.phone}
                        onChange={(e) => setKinologistForm({...kinologistForm, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Опишите задачу</label>
                      <textarea 
                        className="w-full px-4 py-2 rounded-md border bg-background min-h-[80px]" 
                        placeholder="Что хотите улучшить в поведении питомца?" 
                        value={kinologistForm.task}
                        onChange={(e) => setKinologistForm({...kinologistForm, task: e.target.value})}
                      />
                    </div>
                    <Button 
                      className="w-full" 
                      size="lg"
                      disabled={!kinologistForm.petName || !kinologistForm.name || !kinologistForm.phone || !kinologistForm.task}
                      onClick={handleKinologistSubmit}
                    >
                      Отправить в WhatsApp
                    </Button>
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