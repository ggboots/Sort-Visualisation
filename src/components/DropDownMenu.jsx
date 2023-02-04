import React from "react";
export default function DropDownMenu() {
  return (
    <>
      <div className="drop-down-container">
        <div className="w-full md:w-5/5 mx-auto p-2 ">
          <div className="tab w-full overflow-hidden border-t bg-zinc-500">
            <input
              className="absolute opacity-0 "
              id="tab-multi-one"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-one"
            >
              Merge Sort
            </label>
            <div className="tab-content overflow-hidden bg-gray-500 leading-normal">
              <p className="p-5">some text</p>
              <button>Sort</button>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t bg-zinc-500">
            <input
              className="absolute opacity-0"
              id="tab-multi-two"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-two"
            >
              Label
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div className="tab w-full overflow-hidden border-t">
            <input
              className="absolute opacity-0"
              id="tab-multi-three"
              type="checkbox"
              name="tabs"
            />
            <label
              className="block p-5 leading-normal cursor-pointer"
              htmlFor="tab-multi-three"
            >
              Label
            </label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
              <p className="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
