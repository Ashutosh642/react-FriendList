import React from "react";
import "./App.css";

const FrndList = ({ frnds, removeFrnd, favFrnd, currentvalue, index }) => {
  return (
    <div
      className={
        currentvalue && frnds.name.toLowerCase().startsWith(currentvalue)
          ? "indexcolor"
          : ""
      }
    >
      <div class="row mt-2 mb-0">
        <div class="col-7 ml-3 ">
          <b>{frnds.name}</b>
          <pre class="mt-3">is your friend</pre>
        </div>

        <div class="col-2 my-auto">
          <p onClick={_ => favFrnd(frnds)}>
            <i
              class={frnds.isFav ? "fa fa-star fa-lg" : "fa fa-star-o fa-lg"}
              aria-hidden="true"
            />
          </p>
        </div>

        <div class="col-2 my-auto">
          <p onClick={_ => removeFrnd(frnds)}>
            <i class="fa fa-trash fa-lg" aria-hidden="true" />
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};
export default FrndList;
