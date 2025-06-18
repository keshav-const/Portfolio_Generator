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

  // Sanitize and provide fallbacks for props
  const safeProps = {
    name: formData.name || "Your Name",
    title: formData.title || "Your Title",
    github: formData.github || "https://github.com",
    projects: Array.isArray(formData.projects) ? formData.projects : [],
    socials: Array.isArray(formData.socials) ? formData.socials : [],
    contact: {
      email: formData.contact?.email || "your@email.com",
      phone: formData.contact?.phone || "",
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
