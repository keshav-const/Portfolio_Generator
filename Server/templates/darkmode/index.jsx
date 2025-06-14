import React from "react";

const DarkmodeTemplate = ({ name, title, github, projects, socials, contact }) => {
  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1>{name}</h1>
        <p style={{ color: "#bbb" }}>{title}</p>
      </header>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#fff" }}>Projects</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {projects.map((proj, i) => (
            <li key={i} style={{ backgroundColor: "#1e1e1e", margin: "1rem 0", padding: "1rem", borderRadius: "8px" }}>
              <h3 style={{ margin: 0 }}>{proj.name}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noreferrer" style={{ color: "#90caf9" }}>
                View
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>Socials</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {socials.map((soc, i) => (
            <a key={i} href={soc.link} target="_blank" rel="noreferrer" style={{ color: "#90caf9" }}>
              {soc.platform}
            </a>
          ))}
        </div>
      </section>

      <footer style={{ textAlign: "center", marginTop: "2rem", color: "#bbb" }}>
        Contact: <a href={`mailto:${contact.email}`} style={{ color: "#90caf9" }}>{contact.email}</a>
      </footer>
    </div>
  );
};

export default DarkmodeTemplate;
