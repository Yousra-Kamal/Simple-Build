import FinancialChart from "../components/FinancialChart";

const tasks = {
  items: [
    {
      id: 1,
      description: "Site Preparation",
      status: "In Progress",
      stage: "Slab",
    },
    {
      id: 2,
      description: "Foundation Work",
      status: "In Progress",
      stage: "Setup",
    },
    {
      id: 3,
      description: "Design Approval",
      status: "Pending",
      stage: "Frame",
    },
    {
      id: 4,

      description: "Landscaping",
      status: "Completed",
      stage: "Fixing",
    },
  ],
};

export default function ProjectSummary() {
  return (
    <>
      <main>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Financial Chart */}
            <div className="lg:col-start-3 lg:row-end-1">
              <h2 className="sr-only">Summary</h2>
              <div className="rounded-lg bg-gray-50 shadow-sm ring-1 ring-gray-900/5">
                <dl className="flex flex-wrap">
                  <div className="flex-auto pl-6 pt-6">
                    <p className="text-xl font-semibold leading-6 text-gray-900">
                      Financial Chart
                    </p>
                  </div>

                  <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                    <FinancialChart />
                  </div>
                </dl>
                <div className="mt-6 border-t italic text-gray-400 border-gray-900/5 px-6 py-6">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="-mx-4 px-4 py-8 shadow-sm ring-1 ring-gray-900/5 sm:mx-0 sm:rounded-lg sm:px-8 sm:pb-14 lg:col-span-2 lg:row-span-2 lg:row-end-2 xl:px-16 xl:pb-20 xl:pt-16">
              <h2 className=" text-xl pb-4 font-semibold leading-6 text-gray-900">
                Description
              </h2>

              <div className="sm:pr-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                odit, quos ab saepe beatae, corporis pariatur vel debitis
                laboriosam consectetur necessitatibus rerum fuga dolorum,
                repellendus adipisci assumenda. Dolorum, expedita nulla.
              </div>

              {/* Tasks table */}
              <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
                <colgroup>
                  <col className="w-full" />
                  <col />
                  <col />
                  <col />
                </colgroup>
                <thead className="border-b border-gray-200 text-gray-900">
                  <tr>
                    <th scope="col" className="px-0 py-3 text-xl font-semibold">
                      Tasks
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
                    >
                      Stage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tasks.items.map((item) => (
                    <tr key={item.id} className="border-b border-gray-100">
                      <td className="max-w-0 px-0 py-5 align-top">
                        <div className="truncate text-gray-500">
                          {item.description}
                        </div>
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {item.status}
                      </td>
                      <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
                        {item.stage}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
