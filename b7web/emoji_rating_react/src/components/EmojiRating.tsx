type Props = {
  rate: number;
}

export const EmojiRating = ({ rate }: Props) => {
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  const rateInt = Math.floor(rate);
  //const stars = '🌟'.repeat(rateInt) + '💩'.repeat(5 - rateInt);

  //---fazendo de outro jeito;

  const emojis = ['😭', '😢', '😋', '😁', '🧐']
  const stars = `${emojis[rateInt - 1]}`.repeat(rateInt) + '💩'.repeat(5 - rateInt);

  return (
    <div className="text-6xl flex items-center">
      <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
      <div>{stars}</div>
    </div>
  );
}
