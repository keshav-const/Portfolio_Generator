import React, { Suspense } from "react";

const templates = {
  minimalist: React.lazy(() => import("../templates/minimalist")),
  "modern-pro": React.lazy(() => import("../templates/modern-pro")),
  devfolio: React.lazy(() => import("../templates/devfolio")),
  "creative-edge": React.lazy(() => import("../templates/creative-edge")),
};

const LivePreview = ({ selectedTemplate, formData }) => {
  const SelectedComponent = templates[selectedTemplate];

  return (
    <div className="mt-10 border rounded-lg p-4 bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
      <div className="p-2 max-h-[70vh] overflow-y-auto border rounded-md">
        <Suspense fallback={<div>Loading Preview...</div>}>
          <SelectedComponent {...formData} />
        </Suspense>
      </div>
    </div>
  );
};

export default LivePreview;
