/* eslint-disable no-unused-vars */
import logo from "/images/logo.png";
import house from "/images/house.png";

import { Doughnut, Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS ,defaults} from "chart.js/auto";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

export default function HomePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Bar
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },

              {
                label: "Expenses",
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
              {
                label: "Profit",
                data: [10, 16, 5, 8, 1, 2],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,

              },
              {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },

              {
                label: "Expenses",
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
              {
                label: "Profit",
                data: [10, 16, 5, 8, 1, 2],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,

              },
              {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },

              {
                label: "Expenses",
                data: [2, 3, 20, 5, 1, 4],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
              {
                label: "Profit",
                data: [10, 16, 5, 8, 1, 2],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,

              },
              {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],

                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132 ,1)",
                borderWidth: 1,
                  
              }, 

            ],
          }}
        />
      </div>{" "}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Line
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
              {
                label: "Expenses",
                data: [2, 3, 20, 5, 1, 4],
                fill: false,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
              {
                label: "Profit",
                data: [10, 16, 5, 8, 1, 2],
                fill: false,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
              },
              
            ],
          }}

          options={{
            plugins: {
               title: {
                display: true,
                text: 'Custom Chart Title',
                font: {
                  size: 20,
                },
              },
            },

          }}
        />
      </div>{" "}

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Line
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                label: "Revenue",
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
              {
                label: "Expenses",
                data: [2, 3, 20, 5, 1, 4],
                fill: false,
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>{" "}
      {/*  <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <div className="hidden sm:mb-20 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500   ring-gray-900/10 hover:ring-gray-900/20">
                    .{" "}
                  </div>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  <img
                    className="h-12 w-auto inline-block mr-2.5"
                    src={logo}
                    alt="Your Company"
                  />
                  SimpleBuild
                </h1>

                <p className="mt-6 text-lg leading-8 text-gray-600">
                  SimpleBuild is a revolutionary platform that empowers users to
                  easily create and manage construction projects. Our intuitive
                  interface allows you to plan, track, and collaborate on
                  projects with ease. Say goodbye to paperwork and complex
                  software—join SimpleBuild and streamline your construction
                  management today.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <Link
                    to="/signup"
                    className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Sign up
                  </Link>
                  <Link
                    to="/login"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Login<span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src={house}
            alt="house image "
          />
        </div>
      </div> */}
    </div>
  );
}
