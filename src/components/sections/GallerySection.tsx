import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const GALLERY_API = 'https://functions.poehali.dev/66ee5a7d-a386-43a8-861e-8c0a9d2fd130';

const GallerySection = () => {
  const { toast } = useToast();
  const [gallery, setGallery] = useState<Array<{ id: number; url: string; name: string }>>([]);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [photoName, setPhotoName] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [showDeleteMode, setShowDeleteMode] = useState(false);
  const [deletePassword, setDeletePassword] = useState('');
  const [isDeleteAuthenticated, setIsDeleteAuthenticated] = useState(false);

  const UPLOAD_PASSWORD = '130125765';

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const response = await fetch(GALLERY_API);
      const data = await response.json();
      setGallery(data.photos || []);
    } catch (error) {
      console.error('Failed to load gallery:', error);
      toast({
        title: '❌ Ошибка загрузки',
        description: 'Не удалось загрузить фотографии',
        variant: 'destructive',
      });
    }
  };

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
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast({
        title: '❌ Ошибка',
        description: 'Выберите хотя бы одно фото',
        variant: 'destructive',
      });
      return;
    }

    setIsUploading(true);
    let uploadedCount = 0;
    let failedCount = 0;

    for (const file of selectedFiles) {
      try {
        const dataUrl = await new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = (e) => resolve(e.target?.result as string);
          reader.readAsDataURL(file);
        });

        const fileName = photoName || file.name.replace(/\.[^/.]+$/, '');

        const response = await fetch(GALLERY_API, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Password': password,
          },
          body: JSON.stringify({
            name: selectedFiles.length > 1 ? `${fileName} ${uploadedCount + 1}` : fileName,
            url: dataUrl
          })
        });

        if (response.ok) {
          uploadedCount++;
        } else {
          failedCount++;
        }
      } catch (error) {
        failedCount++;
      }
    }

    setIsUploading(false);

    if (uploadedCount > 0) {
      toast({
        title: '✅ Фото загружены',
        description: `Успешно загружено: ${uploadedCount} из ${selectedFiles.length}`,
      });
      await loadGallery();
    }

    if (failedCount > 0) {
      toast({
        title: '⚠️ Не все фото загружены',
        description: `Не удалось загрузить: ${failedCount} фото`,
        variant: 'destructive',
      });
    }

    setSelectedFiles([]);
    setPhotoName('');
    setShowUploadDialog(false);
    setIsAuthenticated(false);
    setPassword('');
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

  const handleDeletePhoto = async (photoId: number, photoName: string) => {
    if (!isDeleteAuthenticated) return;
    
    const confirmed = confirm(`Удалить фото "${photoName}"?`);
    if (confirmed) {
      try {
        const enteredPassword = prompt('Введите пароль еще раз:');
        if (enteredPassword !== UPLOAD_PASSWORD) {
          toast({
            title: '❌ Неверный пароль',
            description: 'Операция отменена',
            variant: 'destructive',
          });
          return;
        }

        const response = await fetch(`${GALLERY_API}?id=${photoId}`, {
          method: 'DELETE',
          headers: {
            'X-Password': enteredPassword,
          },
        });

        if (response.ok) {
          toast({
            title: '✅ Фото удалено',
            description: 'Фотография успешно удалена из галереи',
          });
          await loadGallery();
        } else {
          const result = await response.json();
          toast({
            title: '❌ Ошибка',
            description: result.error || 'Не удалось удалить фото',
            variant: 'destructive',
          });
        }
      } catch (error) {
        toast({
          title: '❌ Ошибка',
          description: 'Не удалось удалить фото',
          variant: 'destructive',
        });
      }
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
          {gallery.map((photo) => (
            <div 
              key={photo.id} 
              className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all ${
                showDeleteMode ? 'cursor-pointer ring-2 ring-destructive' : ''
              }`}
              onClick={() => showDeleteMode && handleDeletePhoto(photo.id, photo.name)}
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
                  setSelectedFiles([]);
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
                    <label className="text-sm font-medium mb-2 block">
                      Название (необязательно для нескольких фото)
                    </label>
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
                      multiple
                      className="w-full px-4 py-2 rounded-md border bg-background"
                      onChange={handleFileSelect}
                    />
                  </div>
                  {selectedFiles.length > 0 && (
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p className="font-semibold">Выбрано файлов: {selectedFiles.length}</p>
                      <div className="max-h-32 overflow-y-auto space-y-1">
                        {selectedFiles.map((file, i) => (
                          <div key={i} className="truncate">• {file.name}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  <Button 
                    onClick={handleUpload} 
                    className="w-full"
                    disabled={selectedFiles.length === 0 || isUploading}
                  >
                    {isUploading ? 'Загрузка...' : `Загрузить (${selectedFiles.length})`}
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