import Icon from '@/components/ui/icon';

const GallerySection = () => {
  const galleryImages = [
    {
      url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/20b2d084-65a3-4d3c-8c73-43a30cbc087e.jpg',
      title: 'Игровая комната',
      description: 'Весёлые игры под присмотром'
    },
    {
      url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/17b415db-b9f0-4cc4-8d03-7546dfb54f7a.jpg',
      title: 'Дружная компания',
      description: 'Социализация и новые друзья'
    },
    {
      url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/b8f8ad08-8109-438c-a3c5-0ace87e62993.jpg',
      title: 'Уютные номера',
      description: 'Комфортный отдых'
    }
  ];

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-background to-accent/20">
      <div className="container">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
            <Icon name="Image" className="text-primary" size={20} />
            <span className="text-primary font-semibold">Фотогалерея</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Наши подопечные</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Счастливые моменты из жизни нашего отеля
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-2xl mb-2">{image.title}</h3>
                <p className="text-white/90">{image.description}</p>
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Icon name="Heart" className="text-white fill-white" size={24} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '450ms' }}>
          <p className="text-muted-foreground text-lg">
            Каждый день мы делимся фотоотчётами с владельцами 📸
          </p>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
