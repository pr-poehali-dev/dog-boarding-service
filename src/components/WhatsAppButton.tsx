const WhatsAppButton = () => {
  const telegramUrl = 'https://t.me/+r6XHXlmkqcY2MDFi';

  const handleClick = () => {
    window.open(telegramUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 via-green-600 to-red-600 hover:from-red-700 hover:via-green-700 hover:to-red-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 px-6 py-4 group hover:scale-105 animate-pulse"
      aria-label="Хочу новогоднее чудо!"
    >
      <span className="text-2xl">🎄</span>
      <span className="font-bold text-sm whitespace-nowrap">Хочу новогоднее чудо!</span>
      <span className="text-2xl">✨</span>
    </button>
  );
};

export default WhatsAppButton;
