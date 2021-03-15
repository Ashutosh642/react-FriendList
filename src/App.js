import React, { useState } from "react";
import "./App.css";
import FrndList from "./FrndList";
import FrndsForm from "./FrndsForm";
import Pagination from "./Pagination";

const App = () => {
  const [frndList, setFrndList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);
  const [value, setValue] = React.useState("");
  const [searchList, setSearchList] = React.useState([]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = frndList.slice(indexOfFirstPost, indexOfLastPost);

  const addFrnd = text => {
    let x = { name: text, isFav: false };
    const newFrnds = [...frndList, x];
    setFrndList(newFrnds);
  };

  const favFrnd = frnds => {
    let fromindex = Boolean;
    let x = frndList.map((x, ind) => {
      if (x.name === frnds.name) {
        x.isFav = !x.isFav;
        fromindex = ind;
      }
      return x;
    });
    let y = x.splice(fromindex, 1);
    x = [...y, ...x];
    x = x.sort((a, b) => b.isFav - a.isFav);
    setFrndList(x);
    x.map((frnd, ind) => {
      if (frnd.name == frnds.name) {
        setCurrentPage(Math.ceil((ind + 1) / 4));
      }
    });
    //setValue("");
    setSearchList([]);
  };

  const highlight = value => {
    frndList.map((frnd, ind) => {
      if (frnd.name == value) {
        setCurrentPage(Math.ceil((ind + 1) / 4));
      }
    });
  };
  const handleSuggClick = x => {
    setSearchList([]);
    setValue(x.name);
    highlight(x.name);
  };
  const removeFrnd = ({ name }) => {
    if (
      window.confirm("Are you sure!, you want to remove from the FriendList?")
    ) {
      const newFrnds = frndList.filter(x => x.name != name);
      setFrndList(newFrnds);
      setValue("");
      setSearchList([]);
    }
  };

  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="app">
      <h3 class="font-weight-bolder mb-0 py-2 pl-2">Friends List</h3>
      <div className="frnd-list">
        <FrndsForm
          addFrnd={addFrnd}
          frndList={frndList}
          highlight={highlight}
          value={value}
          setValue={setValue}
          searchList={searchList}
          setSearchList={setSearchList}
          handleSuggClick={handleSuggClick}
          setCurrentPage={setCurrentPage}
        />

        {currentPosts.map((frnds, index) => (
          <FrndList
            key={index}
            index={index}
            currentvalue={value}
            frnds={frnds}
            removeFrnd={removeFrnd}
            favFrnd={favFrnd}
          />
        ))}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={frndList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default App;
