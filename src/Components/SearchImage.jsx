import axios from "axios";
import { useState } from "react";
import style from "./Search.module.css";

const SearchImage = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const feachHandler = () => {
    let key = "34308323-8cfbd94959043e738daefeff4";
    axios
      .get(
        `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setImages(res.data.hits);
      })

      .catch((error) => {
        console.log(error);
      });
  };
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };
  return (
    <div className={style.main}>
      <div className={style.input_box}>
        <input
          type={"search"}
          placeholder="Enter any name for search images"
          onChange={searchHandler}
        />
        <button onClick={feachHandler}>Feach</button>
      </div>

      <div>
        {images.length <= 0 && <h2>No Mathes Found...!!</h2>}
        {images.length <= 0 && (
          <h3>
            Enter any name in search bar for searching any images releted to
            that particular thing.Example =`{">"}` car,cat,dog.....!!
          </h3>
        )}
        {images.map((img,index) => {
          return (
            <div className={style.images} key={index}>
              <div>
                <img src={img.largeImageURL} alt="" />
                <p>{img.tags}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SearchImage;
