'use client'

import { useState } from "react";
import { photoList } from "@/data/photoList";
import Photo from '@/components/Photo'
import Modal from "@/components/Modal";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  function openModal(id: number) {
    const photo = photoList.find(photo => photo.id === id);

    if (photo) {
      setImageModal(photo.url);
      setShowModal(true)
    }
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <div>
      <h1 className="font-bold text-3xl text-center my-10">Fotos Galasticas</h1>
      <section className="container m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map(photo => (
          <Photo
            key={photo.id}
            photo={photo}
            onClick={() => openModal(photo.id)}
          />
        ))}
      </section>
      {showModal &&
        <Modal image={imageModal} closeModal={closeModal} />
      }
    </div>
  );
}
