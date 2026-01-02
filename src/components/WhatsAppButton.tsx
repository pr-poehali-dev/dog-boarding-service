import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const telegramUrl = 'https://t.me/tuladogs';

  const handleClick = () => {
    window.open(telegramUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-primary via-secondary to-primary hover:from-primary/90 hover:via-secondary/90 hover:to-primary/90 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 px-6 py-4 group hover:scale-105 border-2 border-white/20"
      aria-label="Написать в Telegram"
    >
      <Icon name="Send" size={24} className="group-hover:rotate-12 transition-transform" />
      <span className="font-bold text-base whitespace-nowrap">Написать нам</span>
    </button>
  );
};

export default WhatsAppButton;
