import { EmojiRating } from "@/components/EmojiRating";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <EmojiRating rate={5} />
    </div>
  );
}
