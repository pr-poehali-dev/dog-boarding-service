import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const GallerySection = () => {
  const { toast } = useToast();
  const [gallery, setGallery] = useState([
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/8ba251f4-713a-4df8-b0e5-95adfa989f67.jpg', name: 'Макс' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/2a1e9638-3a15-42e7-bbcd-273ce3cc044e.jpg', name: 'Групповое занятие' },
    { url: 'https://cdn.poehali.dev/projects/925ccb93-1026-44ff-ab91-699038cc0122/files/77a58d04-c426-4ba2-8457-f7bf40fe0aad.jpg', name: 'Комфортные условия' }
  ]);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [photoName, setPhotoName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [showDeleteMode, setShowDeleteMode] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [isDeleteAuthenticated, setIsDeleteAuthenticated] = useState(false);

  const UPLOAD_PASSWORD = '130125765';

  useEffect(() => {
    const savedPhotos = localStorage.getItem('galleryPhotos');
    if (savedPhotos) {
      try {
        setGallery(JSON.parse(savedPhotos));
      } catch (e) {
        console.error('Failed to load gallery photos');
      }
    }
  }, []);

  const handlePasswordSubmit = () => {
    if (password === UPLOAD_PASSWORD) {
      setIsAuthenticated(true);
      toast({
        title: '✅ Доступ разрешён',
        description: 'Теперь вы можете загружать фотографии',
      });
    } else {
      toast({
        title: '❌ Неверный пароль',
        description: 'Попробуйте ещё раз',
        variant: 'destructive',
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile || !photoName) {
      toast({
        title: '❌ Ошибка',
        description: 'Выберите файл и введите название',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const newPhoto = {
        url: e.target?.result as string,
        name: photoName
      };
      
      const updatedGallery = [...gallery, newPhoto];
      setGallery(updatedGallery);
      localStorage.setItem('galleryPhotos', JSON.stringify(updatedGallery));
      
      toast({
        title: '✅ Фото добавлено',
        description: 'Фотография успешно загружена в галерею',
      });
      
      setSelectedFile(null);
      setPhotoName('');
      setShowUploadDialog(false);
      setIsAuthenticated(false);
      setPassword('');
      setIsUploading(false);
    };
    
    reader.readAsDataURL(selectedFile);
  };

  const handleDeleteModeToggle = () => {
    if (isDeleteAuthenticated) {
      setShowDeleteMode(!showDeleteMode);
    } else {
      const enteredPassword = prompt('Введите пароль для удаления:');
      if (enteredPassword === UPLOAD_PASSWORD) {
        setIsDeleteAuthenticated(true);
        setShowDeleteMode(true);
        toast({
          title: '✅ Режим удаления активирован',
          description: 'Нажмите на фото, чтобы удалить',
        });
      } else if (enteredPassword !== null) {
        toast({
          title: '❌ Неверный пароль',
          description: 'Доступ запрещён',
          variant: 'destructive',
        });
      }
    }
  };

  const handleDeletePhoto = (index: number) => {
    if (!isDeleteAuthenticated) return;
    
    const confirmed = confirm(`Удалить фото "${gallery[index].name}"?`);
    if (confirmed) {
      const updatedGallery = gallery.filter((_, i) => i !== index);
      setGallery(updatedGallery);
      localStorage.setItem('galleryPhotos', JSON.stringify(updatedGallery));
      
      toast({
        title: '✅ Фото удалено',
        description: 'Фотография успешно удалена из галереи',
      });
    }
  };

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Фото наших подопечных</h2>
          <p className="text-lg text-muted-foreground">
            Счастливые моменты с нашими любимцами
          </p>
          <div className="flex gap-4 justify-center mt-6">
            <Button 
              onClick={() => setShowUploadDialog(true)} 
              variant="outline"
            >
              <Icon name="Upload" className="mr-2" size={18} />
              Загрузить фото
            </Button>
            <Button 
              onClick={handleDeleteModeToggle}
              variant={showDeleteMode ? "destructive" : "outline"}
            >
              <Icon name="Trash2" className="mr-2" size={18} />
              {showDeleteMode ? 'Выключить удаление' : 'Удалить фото'}
            </Button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((photo, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                showDeleteMode ? 'cursor-pointer ring-2 ring-destructive' : ''
              }`}
              onClick={() => showDeleteMode && handleDeletePhoto(index)}
            >
              <img
                src={photo.url}
                alt={photo.name}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold text-xl">{photo.name}</p>
              </div>
              {showDeleteMode && (
                <div className="absolute inset-0 bg-destructive/80 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Trash2" size={48} className="mx-auto mb-2" />
                    <p className="font-bold">Нажмите, чтобы удалить</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {showUploadDialog && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowUploadDialog(false)}>
            <div className="bg-background rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Загрузить фото</h3>
                <button onClick={() => {
                  setShowUploadDialog(false);
                  setIsAuthenticated(false);
                  setPassword('');
                  setSelectedFile(null);
                  setPhotoName('');
                }}>
                  <Icon name="X" size={24} />
                </button>
              </div>

              {!isAuthenticated ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Введите пароль</label>
                    <input 
                      type="password"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="Пароль для загрузки"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                    />
                  </div>
                  <Button onClick={handlePasswordSubmit} className="w-full">
                    Подтвердить
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Название фото</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      placeholder="Например, Дружок на прогулке"
                      value={photoName}
                      onChange={(e) => setPhotoName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Выберите фото</label>
                    <input 
                      type="file"
                      accept="image/*"
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      onChange={handleFileSelect}
                    />
                  </div>
                  {selectedFile && (
                    <div className="text-sm text-muted-foreground">
                      Выбран файл: {selectedFile.name}
                    </div>
                  )}
                  <Button 
                    onClick={handleUpload} 
                    className="w-full"
                    disabled={!selectedFile || !photoName || isUploading}
                  >
                    {isUploading ? 'Загрузка...' : 'Загрузить'}
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;