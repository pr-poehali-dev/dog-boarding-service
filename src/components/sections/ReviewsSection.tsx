import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Елена Морозова',
      text: 'Оставляли нашего Рекса на 10 дней. Каждый день получали фотоотчёты, видно что за ним ухаживают как за родным! Вернулись к счастливому и довольному псу. Огромное спасибо!',
      rating: 5,
      pet: 'Рекс, лабрадор'
    },
    {
      name: 'Дмитрий Волков',
      text: 'Впервые оставляли собаку в гостинице и очень переживали. Но тут такая забота и профессионализм! Видеонаблюдение успокоило, видели что наша девочка играет и радуется. Рекомендую!',
      rating: 5,
      pet: 'Белла, хаски'
    },
    {
      name: 'Мария Соколова',
      text: 'Чистота, уют, внимательный персонал. Наш бульдог вернулся домой довольный, а мы спокойно отдохнули. Обязательно вернёмся ещё!',
      rating: 5,
      pet: 'Макс, бульдог'
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="MessageCircle" className="text-primary" size={20} />
            <span className="text-primary font-semibold">Отзывы клиентов</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Что говорят о нас</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Счастливые хозяева делятся своими впечатлениями
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 animate-fade-in overflow-hidden relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-bl-full -mr-12 -mt-12"></div>
              
              <CardContent className="pt-8 pb-6 relative z-10">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon 
                      key={i} 
                      name="Star" 
                      className="text-yellow-400 fill-yellow-400" 
                      size={20} 
                    />
                  ))}
                </div>
                
                <div className="mb-6">
                  <Icon name="Quote" className="text-primary/20 mb-2" size={32} />
                  <p className="text-muted-foreground leading-relaxed italic">
                    {review.text}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-bold text-lg">{review.name}</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                    <Icon name="PawPrint" size={14} />
                    {review.pet}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '450ms' }}>
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-primary/10 rounded-2xl border border-primary/20">
            <div className="flex items-center gap-2">
              <Icon name="Star" className="text-primary fill-primary" size={28} />
              <span className="text-3xl font-bold">4.9</span>
            </div>
            <div className="text-left">
              <p className="font-semibold">Средняя оценка</p>
              <p className="text-sm text-muted-foreground">Более 200 отзывов</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
