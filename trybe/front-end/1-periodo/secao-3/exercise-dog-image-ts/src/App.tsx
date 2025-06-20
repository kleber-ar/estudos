import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState("");

  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImageUrl(data.message))
      .then(() => setLoading(false));
  };

  useEffect(() => {
    if (!loading) {
      localStorage.setItem("imageUrl", imageUrl);
      const dogBreed = imageUrl.split("/")[4];
      alert(dogBreed);
    }
  }, [imageUrl, loading]);

  useEffect(() => {
    const localImageUrl = localStorage.getItem("imageUrl");

    if (localImageUrl) {
      setImageUrl(localImageUrl);
      setLoading(false);
    } else {
      fetchDog();
    }
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h1>Doguinhos</h1>
      <div>
        <img src={imageUrl} alt="Doguinho aleatório" />
      </div>
      <div>
        <button type="button" onClick={fetchDog}>
          Novo doguinho!
        </button>
      </div>
    </div>
  );
}

export default App;
