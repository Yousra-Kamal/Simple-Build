// Hardcoded array of 5 users
const usersData = [
  {
    _id: "1",
    username: "user1",
    name: "User One",
    password: "password1",
  },
  {
    _id: "2",
    username: "user2",
    name: "User Two",
    password: "password2",
  },
  {
    _id: "3",
    username: "user3",
    name: "User Three",
    password: "password3",
  },
];

// Hardcoded array of 5 projects
const projectsData = [
  {
    _id: "1",
    userId: "1",
    name: "Blue Mountains Retreat",
    description:
      "Construction of eco-friendly homes in the picturesque Blue Mountains region of Western Sydney.",
    status: "In Progress",
    createdAt: "2024-04-25T10:00:00Z",
    updatedAt: "2024-04-26T15:30:00Z",
    taskIDs: ["1", "2", "3", "4"],
  },
  {
    _id: "2",
    userId: "2",
    name: "Parramatta Riverside Residences",
    description:
      "Development of luxury riverside residences in Parramatta, Western Sydney.",
    status: "Completed",
    createdAt: "2024-02-15T11:30:00Z",
    updatedAt: "2024-04-01T16:00:00Z",
    taskIDs: ["5", "6", "7"],
  },
  {
    _id: "3",
    userId: "3",
    name: "Blacktown Hills Estate",
    description:
      "Construction of hillside residences with expansive views in the Blacktown area of Western Sydney.",
    status: "Planning",
    createdAt: "2024-04-25T10:00:00Z",
    updatedAt: "2024-04-26T15:30:00Z",
    taskIDs: ["8", "9", "10"],
  },
  {
    _id: "4",
    userId: "1",
    name: "Penrith Lakeside Retreat",
    description:
      "Building a community of lakeside homes in Penrith, Western Sydney, offering a tranquil lifestyle.",
    status: "In Progress",
    createdAt: "2024-04-25T10:00:00Z",
    updatedAt: "2024-04-26T15:30:00Z",
    taskIDs: ["11"],
  },
  {
    _id: "5",
    userId: "2",
    name: "Liverpool Greenview Villas",
    description:
      "Development of green-themed villas in Liverpool, Western Sydney, emphasizing sustainability.",
    status: "Completed",
    createdAt: "2024-03-01T12:00:00Z",
    updatedAt: "2024-04-15T11:20:00Z",
    taskIDs: [],
  },
];

// Hardcoded array of 11 tasks
const tasksData = [
  {
    _id: "1",
    projectId: "1",
    title: "Site Preparation",
    description: "Clearing the site and preparing the land for construction.",
    status: "Completed",
    stage: "Planning",
    sequenceNumber: 1,
  },
  {
    _id: "2",
    projectId: "1",
    title: "Foundation Work",
    description: "Laying the foundation for the homes.",
    status: "In Progress",
    stage: "Construction",
    sequenceNumber: 2,
  },
  {
    _id: "3",
    projectId: "1",
    title: "Building Construction",
    description: "Construction of the eco-friendly homes.",
    status: "Pending",
    stage: "Construction",
    sequenceNumber: 3,
  },
  {
    _id: "4",
    projectId: "1",
    title: "Landscaping",
    description: "Creating gardens and outdoor spaces.",
    status: "Pending",
    stage: "Finishing",
    sequenceNumber: 4,
  },
  {
    _id: "5",
    projectId: "2",
    title: "Design Approval",
    description: "Obtaining approval for the design of the residences.",
    status: "Completed",
    stage: "Planning",
    sequenceNumber: 1,
  },
  {
    _id: "6",
    projectId: "2",
    title: "Construction",
    description: "Building the luxury riverside residences.",
    status: "Completed",
    stage: "Construction",
    sequenceNumber: 2,
  },
  {
    _id: "7",
    projectId: "2",
    title: "Landscaping",
    description: "Creating gardens and outdoor spaces.",
    status: "Completed",
    stage: "Finishing",
    sequenceNumber: 3,
  },
  {
    _id: "8",
    projectId: "3",
    title: "Site Survey",
    description: "Surveying the site for the hillside residences.",
    status: "Completed",
    stage: "Planning",
    sequenceNumber: 1,
  },
  {
    _id: "9",
    projectId: "3",
    title: "Design Approval",
    description:
      "Obtaining approval for the design of the hillside residences.",
    status: "Completed",
    stage: "Planning",
    sequenceNumber: 2,
  },
  {
    _id: "10",
    projectId: "3",
    title: "Construction",
    description: "Building the hillside residences.",
    status: "Pending",
    stage: "Construction",
    sequenceNumber: 3,
  },
  {
    _id: "11",
    projectId: "4",
    title: "Site Preparation",
    description: "Clearing the site and preparing the land for construction.",
    status: "Completed",
    stage: "Planning",
    sequenceNumber: 1,
  },
];

// Export the arrays
export { projectsData, usersData, tasksData };
