// components/LivePreview.jsx
import React, { Suspense } from "react";

// Dynamically import all templates
const templates = {
  minimalist: React.lazy(() => import("../../../Server/templates/minimalist")),
  "modern-pro": React.lazy(() => import("../../../Server/templates/modern-pro")),
  devfolio: React.lazy(() => import("../../../Server/templates/devfolio")),
  "creative-edge": React.lazy(() => import("../../../Server/templates/Creative-edge")),
  darkmode: React.lazy(() => import("../../../Server/templates/darkmode")),
  default: React.lazy(() => import("../../../Server/templates/default")),
};

const LivePreview = ({ selectedTemplate, formData }) => {
  const SelectedComponent = templates[selectedTemplate];

  const safeProps = {
    name: formData.name || "Your Name",
    title: formData.bio || "Developer", // You don't have 'title' field, so use 'bio' here
    github: formData.githubUsername
      ? `https://github.com/${formData.githubUsername}`
      : "https://github.com",

    projects: Array.isArray(formData.projectLinks)
      ? formData.projectLinks.map((link, i) => ({
          name: `Project ${i + 1}`,
          description: "A brief description goes here.",
          link: link,
        }))
      : [],

    socials: Object.entries(formData.socialLinks || {}).map(([platform, link]) => ({
      platform,
      link,
    })),

    contact: {
      email: formData.contactInfo?.email || "your@email.com",
      phone: formData.contactInfo?.phone || "",
    },
  };

  return (
    <div className="mt-10 border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
      <div className="p-2 max-h-[70vh] overflow-y-auto border rounded-md bg-gray-50">
        <Suspense fallback={<div>Loading Preview...</div>}>
          <SelectedComponent {...safeProps} />
        </Suspense>
      </div>
    </div>
  );
};


export default LivePreview;
