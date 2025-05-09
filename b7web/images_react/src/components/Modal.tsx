type Props = {
  image: string;
  closeModal: () => void;
}


function Modal({ image, closeModal }: Props) {
  return (
    <>
      <div onClick={closeModal} className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/90">
        <img src={`/assets/${image}`} alt="" className="max-w-screen max-h-screen" />
      </div>
      <div onClick={closeModal} className=" text-5xl font-bold fixed left-5 top-60 cursor-pointer">
        x
      </div>
    </>
  );
}

export default Modal;
