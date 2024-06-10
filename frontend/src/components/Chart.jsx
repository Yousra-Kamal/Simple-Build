import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = () => {
  const chartData = {
    labels: ["Estimated", "Markup", "Expenses"],
    datasets: [
      {
        label: "%",
        data: [13, 8, 3],
        backgroundColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
        ],
        borderColor: [
          "rgba(75, 192, 192)",
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
        borderRadius: 5,
        spacing: 5,
        cutout: 130,
      },
    ],
  };

  return (
    <>
      <div className="flex flex-col gap-6 items-center mx-auto z-20 relative justify-center">
        <div className="flex flex-wrap w-full justify-center items-center gap-6">
          <div className="h-[330px] w-[330px] md:h-[360px] md:w-[360px]">
            <Doughnut data={chartData} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Chart;
