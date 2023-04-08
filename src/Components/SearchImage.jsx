import axios from "axios";
import { useState } from "react";
import style from "./Search.module.css";
import searchIcon from "./icons8-search.gif"

const SearchImage = () => {
  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);
  const [IsMatch,setIsMAtch] = useState(false)
  const feachHandler = () => {
    let key = "34308323-8cfbd94959043e738daefeff4";
    axios
      .get(
        `https://pixabay.com/api/?key=${key}&q=${search}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setImages(res.data.hits);
        if(res.data.hits.length<1){
          setIsMAtch(true)
        }
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
        <img  onClick={feachHandler} src={searchIcon} alt="search icon" />
        {/* <button onClick={feachHandler}></button> */}
      </div>

      <div>
        {images.length <= 0 && IsMatch && <h2>No Mathes Found...!!</h2>}
        {images.length <= 0 && (
          <p>
            Enter any name in search bar for searching any images releted to
            that particular name .Example =`{">"}` car,cat,dog.....!!
          </p>
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
