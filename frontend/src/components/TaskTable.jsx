 

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

function TaskTable() {
  return (
    <table className="mt-16 w-full whitespace-nowrap text-left text-sm leading-6">
      <colgroup>
        <col className="w-full" />
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
            Stage
          </th>
          <th
            scope="col"
            className="hidden py-3 pl-8 pr-0 text-right font-semibold sm:table-cell"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {tasks.items.map((item) => (
          <tr key={item.id} className="border-b border-gray-100">
            <td className="max-w-0 px-0 py-5 align-top">
              <div className="truncate text-gray-500">{item.description}</div>
            </td>
            <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
              {item.stage}
            </td>
            <td className="hidden py-5 pl-8 pr-0 text-right align-top tabular-nums text-gray-700 sm:table-cell">
              {item.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskTable;
