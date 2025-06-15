// components/LivePreview.jsx
import React, { Suspense } from "react";

const templates = {
  minimalist: React.lazy(() => import("../../../Server/templates/minimalist")),
  "modern-pro": React.lazy(() => import("../../../Server/templates/modern-pro")),
  devfolio: React.lazy(() => import("../../../Server/templates/devfolio")),
  "creative-edge": React.lazy(() => import("../../../Server/templates/creative-edge")),
  darkmode: React.lazy(() => import("../../../Server/templates/darkmode")),
  default: React.lazy(() => import("../../../Server/templates/default")),
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
