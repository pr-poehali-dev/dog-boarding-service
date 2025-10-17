import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Dog" size={32} className="text-primary" />
          <span className="text-xl font-bold">У Нас Лапки</span>
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
  );
};

export default Header;
