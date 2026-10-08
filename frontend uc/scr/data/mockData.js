export const mockIssues = [
  {
    id: "issue-001",
    title: "Large pothole on main road",
    description:
      "There is a large pothole near the junction. It is becoming difficult for bikes and cars to pass safely.",
    category: "Pothole",
    status: "Reported",
    latitude: 13.0827,
    longitude: 80.2707,
    location: "Chennai, Tamil Nadu",
    photo:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
    createdAt: "2 hours ago",
    author: "Arun Kumar",
    points: 20,
    verifications: 8,
  },

  {
    id: "issue-002",
    title: "Garbage accumulation",
    description:
      "Garbage has been accumulating near the residential area for several days.",
    category: "Garbage",
    status: "Verified",
    latitude: 13.0674,
    longitude: 80.2376,
    location: "T. Nagar, Chennai",
    photo:
      "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=900&q=80",
    createdAt: "5 hours ago",
    author: "Priya S",
    points: 30,
    verifications: 14,
  },

  {
    id: "issue-003",
    title: "Broken streetlight",
    description:
      "The streetlight has not been working for the last few nights.",
    category: "Streetlight",
    status: "In Progress",
    latitude: 13.0475,
    longitude: 80.2824,
    location: "Mylapore, Chennai",
    photo:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    createdAt: "Yesterday",
    author: "Rahul M",
    points: 25,
    verifications: 11,
  },

  {
    id: "issue-004",
    title: "Blocked drainage",
    description:
      "Drainage is blocked and water is collecting along the roadside.",
    category: "Drainage",
    status: "Reported",
    latitude: 13.0339,
    longitude: 80.2619,
    location: "Adyar, Chennai",
    photo:
      "https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=900&q=80",
    createdAt: "Yesterday",
    author: "Karthik R",
    points: 20,
    verifications: 5,
  },
];

export const mockProfile = {
  name: "Community Member",
  username: "@communitymember",
  avatar:
    "https://ui-avatars.com/api/?name=Community+Member&background=2563eb&color=fff",
  points: 385,
  reports: 14,
  verifications: 27,
  resolved: 6,
};

export const mockBadges = [
  {
    id: "first-report",
    name: "First Report",
    description: "Submitted your first community issue.",
    icon: "📢",
    earned: true,
  },
  {
    id: "evidence",
    name: "Evidence Collector",
    description: "Submitted 5 photo verified reports.",
    icon: "📸",
    earned: true,
  },
  {
    id: "watcher",
    name: "Community Watcher",
    description: "Reported issues in multiple locations.",
    icon: "👀",
    earned: true,
  },
  {
    id: "helper",
    name: "Helpful Neighbor",
    description: "Verified 25 community issues.",
    icon: "🤝",
    earned: true,
  },
  {
    id: "problem-solver",
    name: "Problem Solver",
    description: "Submitted 25 reports.",
    icon: "🛠️",
    earned: false,
  },
  {
    id: "top-contributor",
    name: "Top Contributor",
    description: "Become one of the most active community members.",
    icon: "🏆",
    earned: false,
  },
];

export const categories = [
  {
    id: "pothole",
    name: "Pothole",
    icon: "🕳️",
    color: "#ef4444",
  },
  {
    id: "garbage",
    name: "Garbage",
    icon: "🗑️",
    color: "#f59e0b",
  },
  {
    id: "streetlight",
    name: "Streetlight",
    icon: "💡",
    color: "#8b5cf6",
  },
  {
    id: "drainage",
    name: "Drainage",
    icon: "🌧️",
    color: "#3b82f6",
  },
  {
    id: "road",
    name: "Road Damage",
    icon: "🚧",
    color: "#f97316",
  },
  {
    id: "water",
    name: "Water Issue",
    icon: "💧",
    color: "#06b6d4",
  },
  {
    id: "other",
    name: "Other",
    icon: "📍",
    color: "#64748b",
  },
];