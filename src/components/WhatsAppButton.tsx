import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const whatsappNumber = '79105884816';
  const defaultMessage = 'Здравствуйте! Хочу узнать подробнее об услугах У Нас Лапки 🐾';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={32} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
    </button>
  );
};

export default WhatsAppButton;
