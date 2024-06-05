import { useEffect, useRef, useState } from "react"
import "../Home/Home.css"
import HomeImageCard from "./HomeImageCard";
import axios from "axios";
import { useParams } from "react-router-dom";
function Home() {
  const [image, setImage] = useState("");
  const [imageObj, setImageObj] = useState({});
  const [name, setName] = useState("");
  const [id, setId] = useState(0);
  const [son, setSon] = useState(0);
  const [Item, setItem] = useState(imageObj);
  const [addTage, setAddTag] = useState("");
  const [imageAll, setImageAll] = useState([]);
  const [galereyaAll, setGalereyaAll] = useState([]);
  const [newImageCard, setNewImageCard] = useState([]);

  const addImg = () => {
    const newImage = {
      image,
      id: imageAll.length + 1
    };
    setImageObj(newImage)
    setImageAll([...imageAll, newImage]);
    console.log(imageAll) // Clear the input field after adding the image
    // const formData=new FormData()
    // formData.append("rasm",image)
    // formData.append("id",imageAll.length+1)
  };
  const onclik = (item) => {
    setItem(item)
    setId(item.id)
    alert(item.id)
  }
  console.log(imageAll)
  const ImageHaendlear = (e) => {
    e.preventDefault()
    const NewImage = {
      name,
      addTage,
      img: Item.id === id ? Item.image : Item.image,
      id
    }
    setNewImageCard([...newImageCard, NewImage])
  }
  useEffect(() => {
    function fetchData() {
      axios.get(`http://localhost:2008/images`)
        .then((res) => setGalereyaAll(res.data))
        .catch(() => console.log("hatolik bor"))
    }
    fetchData()
  }, [son])
  console.log(newImageCard)
  // const ADD_Image_Json = () => {
  //   setSon(p => p + 1)
  //   function fetchData() {
  //     axios.post(`http://localhost:2008/images`, newImageCard)
  //   }
  //   fetchData()
  // }

  return (
    <div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
        />
        <button onClick={addImg}>Add</button>

        <div className="ImageContener">
          {imageAll.map((item) => (
            // <HomeImageCard item={item} key={item.id} />
            <div key={item.id}>
              <img onClick={() => onclik(item)} className="image" src={item.image} key={item.id} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div>
        <form onSubmit={ImageHaendlear}>
          <input type="text" name="name" onChange={e => setName(e.target.value)} placeholder="name" />
          <input type="text" name="add teg" onChange={e => setAddTag(e.target.value)} placeholder="add teg" />
          <button>Add Image</button>
        </form>
        {/* <button onClick={ADD_Image_Json}>ADD Image Json</button> */}
      </div>
      <div>
        <HomeImageCard galereyaAll={galereyaAll} />
      </div>
    </div>
  );
};
export default Home
