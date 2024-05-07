import { Link } from "react-router-dom";

const constructionServices = [
  {
    name: "Interior Design",
    description: "Create stunning interiors tailored to your style.",
    price: "$1,500",
  },
  {
    name: "Remodeling",
    description: "Renovate and improve your existing property.",
    price: "$1,500",
  },
  {
    name: "Site Investigation",
    description: "Thorough investigation of potential construction sites.",
    price: "$1,500",
  },
  {
    name: "Site Meeting",
    description:
      "On-site meetings to discuss project details and requirements.",
    price: "$1,500",
  },
];
function ServiceCards() {
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <img
          src="/images/meeting.jpg"
          alt=""
          className="h-96 w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white" />
      </div>

      <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Construction Services
          </h2>
          <p className="mt-4 text-gray-500">
            Explore our range of construction services.
          </p>
        </div>

        <ul className="mx-auto mt-16 grid max-w-2xl gap-y-6 sm:max-w-4xl sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-2">
          {constructionServices.map((service) => (
            <li
              key={service.name}
              className="border border-gray-200 p-4 flex justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-gray-900 mr-2">
                  {service.price}
                </p>
                <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Link to="/checkout">Purchase</Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceCards;
