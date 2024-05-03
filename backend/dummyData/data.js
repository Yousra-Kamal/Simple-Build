// Hardcoded array of 5 users
const usersData = [
  {
    _id: "1",
    username: "user1",
    email: "user1@hotmail.com",
    password: "123456",
  },
  {
    _id: "2",
    username: "user2",
    email: "user2@hotmail.com",
    password: "123456",
  },
  {
    _id: "3",
    username: "user3",
    email: "user3@hotmail.com",
    password: "123456",
  },
];

// Hardcoded array of 5 projects
const projectsData = [
  {
    projectCode: "PR-011",
    name: "Blue Mountains Retreat",
    description:
      "Construction of eco-friendly homes in the picturesque Blue Mountains region of Western Sydney.",
    status: "In Progress",
    startDate: "15/01/2024",
    endDate: "15/01/2025",
  },
  {
    projectCode: "PR-012",
    name: "Parramatta Riverside Residences",
    description:
      "Development of luxury riverside residences in Parramatta, Western Sydney.",
    status: "Completed",
    startDate: "09/02/2023",
    endDate: "09/02/2024",
  },
  {
    projectCode: "M151",
    name: "Blacktown Hills Estate",
    description:
      "Construction of hillside residences with expansive views in the Blacktown area of Western Sydney.",
    status: "Planning",
    startDate: "25/04/2024",
    endDate: "25/04/2025",
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
    stage: "Setup",
    sequenceNumber: 1,
  },
  {
    _id: "2",
    projectId: "1",
    title: "Foundation Work",
    description: "Laying the foundation for the homes.",
    status: "In Progress",
    stage: "Slab",
    sequenceNumber: 2,
  },
  {
    _id: "3",
    projectId: "1",
    title: "Building Construction",
    description: "Construction of the eco-friendly homes.",
    status: "Pending",
    stage: "Frame",
    sequenceNumber: 3,
  },
  {
    _id: "4",
    projectId: "1",
    title: "Landscaping",
    description: "Creating gardens and outdoor spaces.",
    status: "Pending",
    stage: "Lockup",
    sequenceNumber: 4,
  },
  {
    _id: "5",
    projectId: "2",
    title: "Design Approval",
    description: "Obtaining approval for the design of the residences.",
    status: "Completed",
    stage: "Fixing",
    sequenceNumber: 1,
  },
  {
    _id: "6",
    projectId: "2",
    title: "Construction",
    description: "Building the luxury riverside residences.",
    status: "Completed",
    stage: "Completion",
    sequenceNumber: 2,
  },
  {
    _id: "7",
    projectId: "2",
    title: "Landscaping",
    description: "Creating gardens and outdoor spaces.",
    status: "Completed",
    stage: "Handover",
    sequenceNumber: 3,
  },
  {
    _id: "8",
    projectId: "3",
    title: "Site Survey",
    description: "Surveying the site for the hillside residences.",
    status: "Completed",
    stage: "Setup",
    sequenceNumber: 1,
  },
  {
    _id: "9",
    projectId: "3",
    title: "Design Approval",
    description:
      "Obtaining approval for the design of the hillside residences.",
    status: "Completed",
    stage: "Setup",
    sequenceNumber: 2,
  },
  {
    _id: "10",
    projectId: "3",
    title: "Construction",
    description: "Building the hillside residences.",
    status: "Pending",
    stage: "Slab",
    sequenceNumber: 3,
  },
  {
    _id: "11",
    projectId: "4",
    title: "Site Preparation",
    description: "Clearing the site and preparing the land for construction.",
    status: "Completed",
    stage: "Setup",
    sequenceNumber: 1,
  },
];

// Export the arrays
module.exports = { usersData, projectsData, tasksData };
