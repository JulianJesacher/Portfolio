const githubDarkLottieFileHTML = `<lottie-player
class="project-social-icon light"
src="https://assets4.lottiefiles.com/packages/lf20_pbgriaz0.json"
background="transparent"
speed="1"
style="width: 70%"
hover
loop
></lottie-player>
`;

const githubLightLottieFileHTML = `<lottie-player
class="project-social-icon dark"
src="https://assets5.lottiefiles.com/packages/lf20_vb2mcaz9.json"
background="transparent"
speed="1"
style="width: 70%"
hover
loop
></lottie-player>
`;

/**
 * Parses a json file at the given path and returns the content as javascript object
 * @param {string} path Path to the file
 * @returns 
 */
const getJsonData = async (path) => {
    return await fetch(path).then((result) => result.json());
};

/**
 * Takes the required data for a project and returns an HTMLElement with all required childs and classes to display the project
 * @param projectData 
 * @returns HTMLElement of the Project 
 */
const getProject = (projectData) => {
    //Project-wrapper
    const projectWrapper = document.createElement("div");
    projectWrapper.classList.add("project-wrapper");
    //Project
    const projectElement = document.createElement("div");
    projectWrapper.appendChild(projectElement);
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
        projectGithubIcon.innerHTML = githubLightLottieFileHTML + githubDarkLottieFileHTML;
        projectImageWrapper.appendChild(projectGithubIcon);
    }
    projectElement.appendChild(projectImageWrapper);

    const projectContent = document.createElement("div");
    projectContent.classList.add("project-content");

    //Project description
    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.innerText = projectData["description"];
    projectContent.appendChild(projectDescription);

    //Separator
    if (projectData["demo-link"] || projectData["github-link"]) {
        const projectSeparator = document.createElement("div");
        projectSeparator.classList.add("project-content-separator");
        projectContent.appendChild(projectSeparator);
    }

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
    return projectWrapper;
};

/**
 * Parses projects.json and appends the contained projects to the projects container. If more than one project was appended, 
 * horizontal scroll for the projects section is initialized
 */
const showProjects = async () => {
    const projectsData = await getJsonData("./projects.json");
    const projectsContainer = document.getElementById("projects-container");
    projectsData.forEach((singleProjectData) => projectsContainer.appendChild(getProject(singleProjectData)));

    if (projectsData.length > 1) {
        initializeVerticalScroll();
    }
};

/**
 * Initializes gsap ScrollTrigger to set horizontal scroll animation to the projects section
 */
const initializeVerticalScroll = () => {
    const projectContainer = document.getElementById("projects-container");
    const projects = gsap.utils.toArray("#projects-container .project-wrapper");
    console.log(projectContainer, projects);

    tween = gsap.to(projects, {
        xPercent: -100 * (projects.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: "#projects-container",
            pin: true,
            start: "top top",
            scrub: 1,
            snap: {
                snapTo: 1 / (projects.length - 1),
                inertia: false,
                duration: { min: 0.1, max: 0.1 },
            },
            end: () => "+=" + projectContainer.offsetWidth * projects.length,
        },
    });
};

window.addEventListener("load", showProjects);
