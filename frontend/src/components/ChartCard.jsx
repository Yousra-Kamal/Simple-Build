import Chart from "./Chart";

export default function ChartCard() {
  return (
    <>
      <h2 className="sr-only">Summary</h2>
      <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
        <dl className="flex flex-wrap">
          <div className="flex-auto pl-6 pt-6">
            <p className="text-xl font-semibold leading-6 text-gray-900">
              Financial Chart
            </p>
          </div>

          <div className="mt-4 flex w-full flex-none gap-x-4 ">
            <Chart />
          </div>
        </dl>
        <div className="mt-6 border-t italic text-gray-400 border-gray-900/5 px-6 py-6">
          Coming Soon
        </div>
      </div>
    </>
  );
}
