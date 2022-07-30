const githubLottieFileHTML = `<lottie-player
class="project-social-icon"
src="https://assets4.lottiefiles.com/packages/lf20_easggm31.json"
background="transparent"
speed="1"
style="width: 70%; height: 70%"
hover
loop
></lottie-player>
`;

const getJsonData = async (path) => {
    return await fetch(path).then((result) => result.json());
};

const getProject = (projectData) => {
    //Project container
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    if (!projectData["demo-link"]) {
        projectElement.classList.add("no-demo");
    }
    if (!projectData["github-link"]) {
        projectElement.classList.add("no-github");
    }

    //Project title
    const projectTitle = document.createElement("div");
    projectTitle.classList.add("project-title");
    projectTitle.innerText = projectData["title"];
    projectElement.appendChild(projectTitle);

    //Project image wrapper
    const projectImageWrapper = document.createElement("div");
    projectImageWrapper.classList.add("project-image-wrapper");

    //Image
    const projectImage = document.createElement("img");
    projectImage.classList.add("project-image");
    projectImage.src = projectData["project-picture-path"];
    projectImage.alt = `${projectData["title"]} image`;
    projectImageWrapper.appendChild(projectImage);

    //Github Link for mobile
    let projectGithubIcon;
    if (projectData["github-link"]) {
        projectGithubIcon = document.createElement("a");
        projectGithubIcon.classList = "transition social-icon-wrapper";
        projectGithubIcon.title = "Project Github Link";
        projectGithubIcon.href = projectData["github-link"];
        projectGithubIcon.target = "_blank";
        projectGithubIcon.innerHTML = githubLottieFileHTML;
        projectImageWrapper.appendChild(projectGithubIcon);
    }
    projectElement.appendChild(projectImageWrapper);

    const projectContent = document.createElement("div");
    projectContent.classList.add('project-content');

    //Project description
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerText = projectData["description"];
    projectContent.appendChild(projectDescription);

    //View demo button
    if (projectData["demo-link"]) {
        const projectDemoLink = document.createElement("a");
        projectDemoLink.classList.add("view-project-btn");
        projectDemoLink.href = projectData["demo-link"];
        projectDemoLink.innerText = "View demo";
        projectDemoLink.target = "_blank";
        projectContent.appendChild(projectDemoLink);
    }

    //Github Link for desktop
    if (projectGithubIcon) {
        projectContent.appendChild(projectGithubIcon.cloneNode(true));
    }

    projectElement.appendChild(projectContent);
    return projectElement;
};

const showProjects = async () => {
    const projectsData = await getJsonData("./projects.json");
    const projectsContainer = document.getElementById("projects-wrapper");
    projectsData.forEach((singleProjectData) => projectsContainer.appendChild(getProject(singleProjectData)));
};

window.addEventListener("load", showProjects);
