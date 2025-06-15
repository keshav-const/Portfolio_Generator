// import React, { useState } from "react";
// import PortfolioForm from "./components/PortfolioForm";
// import LivePreview from "./components/LivePreview";

// function App() {
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     githubUsername: "",
//     projectLinks: [""],
//     socialLinks: {
//       linkedin: "",
//       twitter: "",
//       instagram:"",
//     },
//     contactInfo: {
//       email: "",
//       phone: "",
//     },
//     template: "default",
//   });

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-4xl font-bold text-center mb-6">Portfolio Generator</h1>
//       <PortfolioForm formData={formData} setFormData={setFormData} />
//       <LivePreview selectedTemplate={formData.template} formData={formData} />
//     </div>
//   );
// }

// export default App;
// App.jsx
import React, { useState } from "react";
import PortfolioForm from "./components/PortfolioForm";
import LivePreview from "./components/LivePreview";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState("default");
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    githubUsername: "",
    projectLinks: [""],
    socialLinks: {
      linkedin: "",
      twitter: "",
      instagram: "",
    },
    contactInfo: {
      email: "",
      phone: "",
    },
    template: "default",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Portfolio Generator</h1>
      <PortfolioForm
        formData={formData}
        setFormData={setFormData}
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
      />
      <LivePreview selectedTemplate={selectedTemplate} formData={formData} />
    </div>
  );
}

export default App;
