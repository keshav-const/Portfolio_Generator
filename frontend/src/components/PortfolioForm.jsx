// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { motion } from "framer-motion";


// const PortfolioForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     bio: "",
//     githubUsername: "",
//     projectLinks: [""],
//     socialLinks: {
//       linkedin: "",
//       twitter: "",
//       instagram: "",
//     },
//     contactInfo: {
//       email: "",
//       phone: "",
//     },
//     template: "default",
//   });

//   const [previewUrl, setPreviewUrl] = useState("");
//   const [zipPath, setZipPath] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [iframeLoading, setIframeLoading] = useState(false);

//   useEffect(() => {
//   const saved = localStorage.getItem("portfolioFormData");
//   if (saved) {
//     setFormData(JSON.parse(saved));
//   }
// }, []);


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes(".")) {
//       const [parent, child] = name.split(".");
//       setFormData((prev) => ({
//         ...prev,
//         [parent]: {
//           ...prev[parent],
//           [child]: value,
//         },
//       }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleProjectChange = (index, value) => {
//     const updated = [...formData.projectLinks];
//     updated[index] = value;
//     setFormData((prev) => ({ ...prev, projectLinks: updated }));
//   };

//   const addProject = () => {
//     setFormData((prev) => ({
//       ...prev,
//       projectLinks: [...prev.projectLinks, ""],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//         toast.loading("Generating your portfolio...");
//         const res = await axios.post("http://localhost:5000/api/generate", formData);
//         toast.dismiss(); // remove loading
//         toast.success("Portfolio generated successfully!");

//       //const res = await axios.post("http://localhost:5000/api/generate", formData);
//       setPreviewUrl(`http://localhost:5000${res.data.previewUrl}`);
//       setZipPath(`http://localhost:5000${res.data.zipPath}`);
//     } catch (err) {
//       toast.dismiss();
//       toast.error("Failed to generate portfolio");

//       console.error(err);
//     }
//     setLoading(false);
//   };

//   return (

//     <motion.div
//   initial={{ opacity: 0, y: 30 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.6 }}
//   className="bg-white p-6 rounded-lg shadow-md"
// >
//   { <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6">
//       <h2 className="text-2xl font-bold">Generate Your Portfolio</h2>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="name" onChange={handleChange} value={formData.name} placeholder="Full Name" className="input" />
//         <textarea name="bio" onChange={handleChange} value={formData.bio} placeholder="Short Bio" className="input" />
//         <input name="githubUsername" onChange={handleChange} value={formData.githubUsername} placeholder="GitHub Username" className="input" />

//         <div>
//           <p className="font-semibold">Project Repo Links</p>
//           {formData.projectLinks.map((link, i) => (
//             <input
//               key={i}
//               value={link}
//               onChange={(e) => handleProjectChange(i, e.target.value)}
//               placeholder={`Project ${i + 1}`}
//               className="input my-1"
//             />
//           ))}
//           <button type="button" className="btn" onClick={addProject}>+ Add Project</button>
//         </div>

//         <div>
//           <p className="font-semibold">Social Links</p>
//           <input name="socialLinks.linkedin" onChange={handleChange} value={formData.socialLinks.linkedin} placeholder="LinkedIn URL" className="input" />
//           <input name="socialLinks.twitter" onChange={handleChange} value={formData.socialLinks.twitter} placeholder="Twitter URL" className="input" />
//           <input name="socialLinks.instagram" onChange={handleChange} value={formData.socialLinks.instagram} placeholder="Instagram URL" className="input" />
//         </div>

//         <div>
//           <p className="font-semibold">Contact Info</p>
//           <input name="contactInfo.email" onChange={handleChange} value={formData.contactInfo.email} placeholder="Email" className="input" />
//           <input name="contactInfo.phone" onChange={handleChange} value={formData.contactInfo.phone} placeholder="Phone" className="input" />
//         </div>

//         <div>
//   <p className="font-semibold mb-2">Choose a Template</p>
//   <div className="grid grid-cols-3 gap-4">
//     {["default", "modern", "darkmode"].map((template) => (
//       <div
//         key={template}
//         onClick={() =>
//           setFormData((prev) => ({ ...prev, template }))
//         }
//         className={`cursor-pointer border-4 rounded-xl p-1 hover:border-blue-400 ${
//           formData.template === template ? "border-blue-500" : "border-transparent"
//         }`}
//       >
//        <motion.img
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.98 }}
//         transition={{ type: "spring", stiffness: 300 }}
//         src={`/templates/${template}.png`}
//         alt={template}
//        />

//         <p className="text-center mt-1 capitalize">{template}</p>
//       </div>
//     ))}
//   </div>
// </div>


//         <button type="submit" className="btn" disabled={loading}>
//           {loading ? "Generating..." : "Generate Portfolio"}
//         </button>
//       </form>

//       {previewUrl && (
//         <motion.div
//     initial={{ opacity: 0, scale: 0.95 }}
//     animate={{ opacity: 1, scale: 1 }}
//     transition={{ duration: 0.5 }}
//     className="mt-6"
//   >
//     <div className="mt-6">
//     <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
//     {iframeLoading && <p className="text-gray-500 mb-2">Loading preview...</p>}
//     <iframe
//       src={previewUrl}
//       className="w-full h-[600px] border"
//       onLoad={() => setIframeLoading(false)}
//       onLoadStart={() => setIframeLoading(true)}
//     />
//   </div>
//   </motion.div>
  
// )}


//       {zipPath && (
//         <a href={zipPath} className="btn mt-4 inline-block" download>
//           📦 Download .ZIP
//         </a>
//       )}
//     </div>}
// </motion.div>


   
//   );
// };

// export default PortfolioForm;
// components/PortfolioForm.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const PortfolioForm = ({ formData, setFormData, selectedTemplate, setSelectedTemplate }) => {
  const [previewUrl, setPreviewUrl] = useState("");
  const [zipPath, setZipPath] = useState("");
  const [loading, setLoading] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolioFormData");
    if (saved) setFormData(JSON.parse(saved));
  }, [setFormData]);

  useEffect(() => {
    localStorage.setItem("portfolioFormData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleProjectChange = (index, value) => {
    const updated = [...formData.projectLinks];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, projectLinks: updated }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projectLinks: [...prev.projectLinks, ""],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      toast.loading("Generating your portfolio...");
      const res = await axios.post("http://localhost:5000/api/generate", {
        ...formData,
        template: selectedTemplate,
      });
      toast.dismiss();
      toast.success("Portfolio generated successfully!");
      setPreviewUrl(`http://localhost:5000${res.data.previewUrl}`);
      setZipPath(`http://localhost:5000${res.data.zipPath}`);
    } catch (err) {
      toast.dismiss();
      toast.error("Failed to generate portfolio");
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="bg-white p-6 rounded-lg shadow-md">
      <div className="max-w-3xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Generate Your Portfolio</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" onChange={handleChange} value={formData.name} placeholder="Full Name" className="input" />
          <textarea name="bio" onChange={handleChange} value={formData.bio} placeholder="Short Bio" className="input" />
          <input name="githubUsername" onChange={handleChange} value={formData.githubUsername} placeholder="GitHub Username" className="input" />

          <div>
            <p className="font-semibold">Project Repo Links</p>
            {formData.projectLinks.map((link, i) => (
              <input key={i} value={link} onChange={(e) => handleProjectChange(i, e.target.value)} placeholder={`Project ${i + 1}`} className="input my-1" />
            ))}
            <button type="button" className="btn" onClick={addProject}>+ Add Project</button>
          </div>

          <div>
            <p className="font-semibold">Social Links</p>
            <input name="socialLinks.linkedin" onChange={handleChange} value={formData.socialLinks.linkedin} placeholder="LinkedIn URL" className="input" />
            <input name="socialLinks.twitter" onChange={handleChange} value={formData.socialLinks.twitter} placeholder="Twitter URL" className="input" />
            <input name="socialLinks.instagram" onChange={handleChange} value={formData.socialLinks.instagram} placeholder="Instagram URL" className="input" />
          </div>

          <div>
            <p className="font-semibold">Contact Info</p>
            <input name="contactInfo.email" onChange={handleChange} value={formData.contactInfo.email} placeholder="Email" className="input" />
            <input name="contactInfo.phone" onChange={handleChange} value={formData.contactInfo.phone} placeholder="Phone" className="input" />
          </div>

          <div>
            <p className="font-semibold mb-2">Choose a Template</p>
            <div className="grid grid-cols-3 gap-4">
              {["default", "modern", "darkmode", "minimalist", "devfolio", "creative-edge"].map((template) => (
                <div
                  key={template}
                  onClick={() => setSelectedTemplate(template)}
                  className={`cursor-pointer border-4 rounded-xl p-1 hover:border-blue-400 ${
                    selectedTemplate === template ? "border-blue-500" : "border-transparent"
                  }`}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    src={`/templates/${template}.png`}
                    alt={template}
                  />
                  <p className="text-center mt-1 capitalize">{template}</p>
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Generating..." : "Generate Portfolio"}
          </button>
        </form>

        {previewUrl && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Live Preview</h3>
            {iframeLoading && <p className="text-gray-500 mb-2">Loading preview...</p>}
            <iframe src={previewUrl} className="w-full h-[600px] border" onLoad={() => setIframeLoading(false)} onLoadStart={() => setIframeLoading(true)} />
          </motion.div>
        )}

        {zipPath && (
          <a href={zipPath} className="btn mt-4 inline-block" download>
            📦 Download .ZIP
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default PortfolioForm;
