import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ReviewsSection = () => {
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
    <section id="reviews" className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-muted-foreground">
            Что говорят о нас владельцы питомцев
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{review.text}"</p>
                <p className="font-semibold">{review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
