const WhatsAppButton = () => {
  const telegramUrl = 'https://t.me/tuladogs';

  const handleClick = () => {
    window.open(telegramUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-emerald-500 via-green-600 to-emerald-700 hover:from-emerald-600 hover:via-green-700 hover:to-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 px-6 py-4 group hover:scale-105"
      aria-label="Хочу новогоднее чудо!"
    >
      <span className="text-2xl">🎄</span>
      <span className="font-bold text-sm whitespace-nowrap">Хочу новогоднее чудо!</span>
      <span className="text-2xl">✨</span>
    </button>
  );
};

export default WhatsAppButton;