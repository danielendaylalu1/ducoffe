const Project = () => {
  return (
    <div className={`item item-tall box-column ${checked ? "dark" : "light"}`}>
      <h3>Project</h3>
      <h1>Weshare</h1>
      <div className="project-skills">
        <p>Built with</p>
      </div>
      <img src="" />
      <div className="project-more">
        <div className="project-links"></div>
        <div className="project-about"></div>
      </div>
    </div>
  );
};

export default Project;
