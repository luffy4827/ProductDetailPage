import React, { useState } from "react";

const ProductDetail = () => {
  const images = [
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsneakernews.com%2Fwp-content%2Fuploads%2F2021%2F04%2FNike-Air-Force-1-DA8301-101-6.jpg%3Fw%3D1140&f=1&nofb=1&ipt=261e70a25e817c62445bd7a6263a2373728f364bf9aa22df618286203d98e161&ipo=images",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F26667981%2Fr%2Fil%2F47565c%2F3524527712%2Fil_fullxfull.3524527712_ar7q.jpg&f=1&nofb=1&ipt=e893326f768b83bfd6d3b58b58da477c3f919b717ce36e33e4fe04fbfc606bc4&ipo=images",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsneakernews.com%2Fwp-content%2Fuploads%2F2018%2F04%2Fnike-air-force-1-blue-gale-aq4134-400-1.jpg%3Fw%3D1140&f=1&nofb=1&ipt=f006f6b8116a95bfacf8c189f7754158d74b03411a5b8402c94afd13f6f0a1b4&ipo=images",
    },
    {
      imgURL:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsneakernews.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fnike-air-force-1-shadow-CI0919-106-6.jpg%3Fw%3D1140&f=1&nofb=1&ipt=6a1a164d0a1a742928e75a53555ec60741876c6549a0700409e28e0cd76bf375&ipo=images",
    },
  ];

  const [activeImg, setActiveImage] = useState(images[0].imgURL);
  //   console.log(images)

  const [amount, setAmount] = useState(1);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-14 items-center">
      {/* image  */}
      <div className="flex flex-col gap-6 md:flex-1">
        <img
          src={activeImg}
          alt=""
          className="w-full h-full aspect-square object-cover rounded-xl"
        />
        <div className="flex flex-row justify-between h-24 overflow-x-scroll">
          {images.map((item, index) => (
            <img
              key={index}
              src={item.imgURL}
              alt=""
              className="w-[17vh] h-24 rounded-md cursor-pointer object-cover"
              onClick={() => setActiveImage(item.imgURL)}
            />
          ))}
        </div>
      </div>

      {/* about */}
      <div className="flex flex-col justify-center gap-4 md:flex-1">
        <div>
          <span className=" text-primary font-semibold">Special Sneaker</span>
          <h1 className="text-3xl font-bold">Nike Air Force 1</h1>
        </div>
        <p className="text-gray-700 leading-snug">
          From musicians to artists to streetwear icons, the Air Force 1 has
          always been more than a sneaker. Everywhere it's gone, it's changed
          the game. But the past 40 years are behind us, so let's set the stage
          for the next 40. Because Force has always been strongest when we do it
          together. <br />
          Designed by Bruce Kilgore and introduced in 1982, the Air Force 1 was
          the first ever basketball shoe to feature Nike Air technology,
          revolutionizing the game and sneaker culture forever. Over three
          decades since its first release, the Air Force 1 remains true to its
          roots while earning its status as a fashion staple for seasons to
          come.
        </p>
        <h6 className="text-2xl font-semibold">$ 199.00</h6>
        <div className="flex flex-row md:flex-col lg:flex-row items-center gap-12">
          <div className="flex flex-row items-center">
            <button
              className="bg-gray-200 py-2 px-5 rounded-lg text-primary text-3xl"
              onClick={() => setAmount((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            <span className="py-4 px-6 rounded-lg">{amount}</span>
            <button
              className="bg-gray-200 py-2 px-4 rounded-lg text-primary text-3xl"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-16 rounded-xl h-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
