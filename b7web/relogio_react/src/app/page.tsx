
export default function Home() {
  const fullTime = new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    hour12: false,
  }).format();

  const hour = new Date().getHours();

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-indigo-500 to-sky-500 text-black'>
      <div className='text-9xl'>{fullTime}</div>
      <div className='text-5xl font-bold'>
        {hour >= 0 && hour < 12 && 'Bom dia 🌅'}
        {hour >= 12 && hour < 18 && 'Boa tarde ☀️'}
        {hour >= 18 && hour <= 23 && 'Boa noite 🌕'}
      </div>
    </div>
  );
};
