// create your App component here
import { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fetchDogImage() {
      try {
        await fetch("https://dog.ceo/api/breeds/image/random")
          .then((resp) => resp.json())
          .then((data) => setImage(data.message));
      } catch (error) {
        console.error("Error resolving this page", error);
      } finally {
        setloading(false);
      }
    }
    fetchDogImage();
  }, []);
  return (
    <div>
      {loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}
export default App;
