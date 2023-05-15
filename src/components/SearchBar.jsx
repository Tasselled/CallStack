import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchTags from "./searchTags";
import { setSearchResultPosts, setTags } from "../store/userReducer";

export default function SearchBar() {
  const tags = useSelector((state) => state.userReducer.tags);
  const dispatch = useDispatch();
  const searchResultPosts = useSelector(
    (state) => state.userReducer.searchResultPosts
  );

  function search(searchData) {
    const array = [
      {
        postTitle: "This is a post",
        postBody: "This really is a really good post",
        postUser: "Kevin Fan",
        createdAt: "6:45PM March 3, 2023",
      },
      {
        postTitle: "This is another post",
        postBody: "This really is a really bad post",
        postUser: "Sooji",
        createdAt: "7:35PM March 9, 2023",
      },
      {
        postTitle: "This is a third post",
        postBody: "This really is a really really really good post",
        postUser: "Hunter",
        createdAt: "6:15PM March 3, 2013",
      },
    ];
    console.log(searchData, tags);

    dispatch(setTags("delete"));
    for (let i = 0; i < array.length; i++) {
      dispatch(
        setSearchResultPosts(
          <div>
            <h1>{array[i].postTitle}</h1>
            <p>{array[i].postBody}</p>
            <p>
              by {array[i].postUser} on {array[i].createdAt}
            </p>
          </div>
        )
      );
    }

    // fetch('/main/searchPosts', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'Application/JSON',
    //   },
    //   body: JSON.stringify({
    //     search: searchData,
    //     tags: tags,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     dispatch(setTags('delete'));
    //     dispatch(setTags('delete'));
    //     for (let i = 0; i < res.length; i++) {
    //       dispatch(
    //         setSearchResultPosts(
    //           <div>
    //             <h1>{res[i].postTitle}</h1>
    //             <p>{res[i].postBody}</p>
    //             <p>
    //               by {res[i].postUser} on {res[i].createdAt}
    //             </p>
    //           </div>
    //         )
    //       );
    //     }
    //   });
  }

  return (
    <form className="mainPageSearchBar">
      <input
        type="text"
        placeholder="Searching for something?"
        className="mainPageSearchField"
      />

      <SearchTags />

      <button
        className="mainPageSearchButton"
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          dispatch(setSearchResultPosts("delete"));
          search(document.querySelector(".mainPageSearchField").value);
        }}
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      {searchResultPosts}
    </form>
  );
}
