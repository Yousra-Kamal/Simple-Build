import { Link } from "react-router-dom";
import LayoutGrid from "../components/ui/layout-grid.jsx";

function ServiceCards() {
  const SkeletonOne = () => (
    <div>
      <p className="font-bold text-4xl text-white">Site Investigation</p>
      <p className="font-normal text-base text-white">
        {" "}
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <button
        className="font-normal text-base my-4 max-w-lg text-neutral-200 bg-transparent border border-neutral-200 rounded-full px-4 py-2 hover:bg-neutral-200 hover:text-black transition-colors duration-300"
        onClick={() => {
          console.log("Purchase button clicked");
          // Add your purchase logic here
        }}
      >
        <Link to="/checkout">Purchase</Link>
      </button>
    </div>
  );

  const SkeletonTwo = () => (
    <div>
      <p className="font-bold text-4xl text-white">Interior Design </p>
      <p className="font-normal text-base text-white">
        {" "}
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <button
        className="font-normal text-base my-4 max-w-lg text-neutral-200 bg-transparent border border-neutral-200 rounded-full px-4 py-2 hover:bg-neutral-200 hover:text-black transition-colors duration-300"
        onClick={() => {
          console.log("Purchase button clicked");
          // Add your purchase logic here
        }}
      >
        <Link to="/checkout">Purchase</Link>
      </button>
    </div>
  );

  const SkeletonThree = () => (
    <div>
      <p className="font-bold text-4xl text-white">Site Meeting </p>
      <p className="font-normal text-base text-white">
        {" "}
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <button
        className="font-normal text-base my-4 max-w-lg text-neutral-200 bg-transparent border border-neutral-200 rounded-full px-4 py-2 hover:bg-neutral-200 hover:text-black transition-colors duration-300"
        onClick={() => {
          console.log("Purchase button clicked");
          // Add your purchase logic here
        }}
      >
        <Link to="/checkout">Purchase</Link>
      </button>
    </div>
  );

  const SkeletonFour = () => (
    <div>
      <p className="font-bold text-4xl text-white">House Design</p>
      <p className="font-normal text-base text-white">
        {" "}
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
      <button
        className="font-normal text-base my-4 max-w-lg text-neutral-200 bg-transparent border border-neutral-200 rounded-full px-4 py-2 hover:bg-neutral-200 hover:text-black transition-colors duration-300"
        onClick={() => {
          console.log("Purchase button clicked");
          // Add your purchase logic here
        }}
      >
        <Link to="/checkout">Purchase</Link>
      </button>
    </div>
  );

  const cards = [
    {
      id: 1,
      content: <SkeletonOne />,
      className: "md:col-span-2",
      thumbnail: "/images/site2.jpg" /* /images/site2.jpg */,
    },
    {
      id: 2,
      content: <SkeletonTwo />,
      className: "col-span-1",
      thumbnail: "/images/decor.jpg",
    },
    {
      id: 3,
      content: <SkeletonThree />,
      className: "col-span-1",
      thumbnail: "/images/meeting.jpg",
    },
    {
      id: 4,
      content: <SkeletonFour />,
      className: "md:col-span-2",
      thumbnail: "/images/design.webp",
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

export default ServiceCards;
