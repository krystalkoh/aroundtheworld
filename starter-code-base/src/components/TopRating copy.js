// import React, { useState, useEffect } from "react";
// import { getCurrentDate } from "./currentDate";
// import Heart from "./HeartButton";

// import ShowInfoModal from "./ShowInfoModal";
// import SearchBar from "./SearchBar";
// import styles from "./TopRating.module.css";
// // import HeartButton from "./HeartButton";

// // import Carousel from "react-bootstrap/Carousel";

// const TopRating = (props) => {
//   const [error, setError] = useState(null);
//   const [movieData, setMovieData] = useState("");
//   const [showId, setShowId] = useState("");
//   const [show, setShow] = useState(false);

//   const fetchPost = async () => {
//     try {
//       const response = await fetch(`https://api.tvmaze.com/shows?page=1
//       `);
//       //   if (response.status !== 200) {
//       //     throw new Error("something went wrong.");
//       //   }

//       //should try and make it random
//       const trendingImages = await response.json();

//       console.log(trendingImages);
//       //this is 61 items
//       const filteredArr = trendingImages.filter(
//         (images) => images.image.medium !== null
//       );
//       // console.log(filteredArr);

//       const ratingFilteredArr = filteredArr.filter(
//         (rating) => rating.rating.average !== null && rating.rating.average >= 8
//       );

//       // console.log(ratingFilteredArr);
//       //this is to get random shows from the filteredArr
//       function getMultipleRandom(arr, num) {
//         const shuffled = [...arr].sort(() => 0.5 - Math.random());
//         return shuffled.slice(0, num);
//       }
//       const usTrendingArr = getMultipleRandom(ratingFilteredArr, 6);
//       // console.log(usTrendingArr);

//       const handleClick = (index) => {
//         console.log(index);
//         setShowId(index);
//         setShow(true);
//       };

//       const finalUsTrending = usTrendingArr.map((item) => {
//         console.log(item);

//         return (
//           <div>
//             <button>
//               {/* //heeartbutton not possible coz of favourites return different key */}
//               {/* {item && <HeartButton data={item} />} */}
//               {/* //usecontext */}
//               <img
//                 src={item.image.medium}
//                 key={item.id}
//                 index={item.id}
//                 alt="pic not available"
//                 onClick={() => {
//                   handleClick(item.id);
//                 }}
//                 name={item.name}
//               ></img>
//             </button>
//             <h6>Rating: {item.rating.average}</h6>
//             {/* {console.log(item.id)} */}
//           </div>
//         );
//       });
//       // console.log(finalUsTrending);

//       setMovieData(finalUsTrending);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     // console.log(`component is mounted or rendered`);
//     fetchPost();
//   }, []);

//   // console.log(movieData);
//   const handleModalOkay = () => {
//     setShow(false);
//   };
//   return (
//     <>
//       <h2 className="heading"> Top rating</h2>
//       {showId && show && (
//         <ShowInfoModal okayClicked={handleModalOkay} showId={showId} />
//       )}
//       <div class="w-screen">{movieData}</div>
//     </>
//   );
// };

// export default TopRating;
