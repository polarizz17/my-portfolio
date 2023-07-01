function ProjectsCard(props) {
  return (
    <>
      <div className="projects_card">
        <img src={props.src} alt={props.alt} />
        <a
          href={props.link}
          className={props.bg}
          target="_blank"
          rel="noreferrer"
        >
          <span>{props.icon}</span>
          <h4>{props.title}</h4>
        </a>
      </div>
    </>
  );
}

export default ProjectsCard;
