import { PhotoType } from "@/data/photoList"

type Props = {
  photo: PhotoType;
  onClick: () => void;
}

function Photo({ photo, onClick }: Props) {
  return (
    <div onClick={onClick} className="cursor-pointer hover:opacity-80">
      <img src={`/assets/${photo.url}`} alt="imagem" className='h-full' />
    </div>
  );
}

export default Photo;
