const GallerySection = () => {
  const gallery = [
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/8ba251f4-713a-4df8-b0e5-95adfa989f67.jpg', name: 'Макс' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/2a1e9638-3a15-42e7-bbcd-273ce3cc044e.jpg', name: 'Групповое занятие' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/77a58d04-c426-4ba2-8457-f7bf40fe0aad.jpg', name: 'Комфортные условия' }
  ];

  return (
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
  );
};

export default GallerySection;
