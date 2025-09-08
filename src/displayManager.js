import { projectManager } from "./projectManager.js";
import { toDoManager } from "./toDoManager.js";
import { sorter } from "./sorter.js";

// init for testing

projectManager.addProject(
  "Gym",
  "Morning workout routine",
  false,
  "2025-10-25"
);
projectManager.addProject(
  "Grocery Shopping",
  "Buy milk, bread, and eggs",
  false,
  "2025-10-28"
);
projectManager.addProject(
  "Read Book",
  "Finish 'The Hitchhiker's Guide to the Galaxy'",
  false,
  "2025-11-05"
);
projectManager.addProject(
  "Project Alpha",
  "Initial planning and research",
  false,
  "2025-10-30"
);
projectManager.addProject(
  "Doctor's Appointment",
  "Annual check-up",
  true,
  "2025-10-22"
);
projectManager.addProject(
  "Laundry",
  "Wash and dry clothes",
  false,
  "2025-10-26"
);
projectManager.addProject(
  "Pay Bills",
  "Electricity, water, and internet bills",
  false,
  "2025-11-15"
);
projectManager.addProject(
  "Car Maintenance",
  "Oil change and tire rotation",
  true,
  "2025-10-20"
);
projectManager.addProject(
  "Vacation Planning",
  "Book flights and hotel",
  false,
  "2025-12-01"
);
projectManager.addProject(
  "Study for Exam",
  "Review chapters 1-5",
  false,
  "2025-11-10"
);

// toDoManager.addToDo(
//   "open store",
//   "aaaaa",
//   false,
//   "11-11-11",
//   "hight",
//   projectManager.getProject("work").title
// );

// toDoManager.addToDo(
//   "close store",
//   "aaaaa",
//   false,
//   "11-11-11",
//   "hight",
//   projectManager.getProject("work").title
// );

// toDoManager.addToDo(
//   "clean store",
//   "aaaaa",
//   false,
//   "11-11-11",
//   "hight",
//   projectManager.getProject("work").title
// );

// toDoManager.addToDo(
//   "go to gym",
//   "aaaaa",
//   false,
//   "11-11-11",
//   "hight",
//   projectManager.getProject("gym").title
// );

export const displayManager = {
  addEventListeners() {
    const addProjectBtn = document.getElementById("addProjectBtn");
    const addProjectModal = document.getElementById("addProjectModal");
    addProjectBtn.addEventListener("click", () => {
      const errorSpace = document.getElementById("errorSpace");
      errorSpace.innerText = projectManager.getErrors();
      addProjectModal.showModal();
    });
    const addProjectFrom = document.getElementById("addProjectForm");
    addProjectFrom.addEventListener("submit", (e) => {
      e.preventDefault();
      let title = document.getElementById("projectTitle").value;
      let desc = document.getElementById("projectDesc").value;
      let dueDate = document.getElementById("projectDueDate").value;
      projectManager.addProject(title, desc, false, dueDate);
      if (projectManager.getErrors().length > 0) {
        const errorSpace = document.getElementById("errorSpace");
        errorSpace.innerText = projectManager.getErrors();
        return;
      }
      addProjectModal.close();
      this.renderProjects(projectManager.getProjects());
      this.clearProjectModal();
    });
    const sortBtn = document.getElementById("sortBtn");
    sortBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sortModal.showModal();
    });
    const sortAlphabeticallyBtn = document.getElementById(
      "sortAlphabeticallyBtn"
    );
    sortAlphabeticallyBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sorter.sortAlphabetically(projectManager.getProjects());
      this.renderProjects(projectManager.getProjects());
      sortModal.close();
    });
    const sortAlphabeticallyReverseBtn = document.getElementById(
      "sortAlphabeticallyReverseBtn"
    );
    sortAlphabeticallyReverseBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sorter.sortAlphabeticallyReverse(projectManager.getProjects());
      this.renderProjects(projectManager.getProjects());
      sortModal.close();
    });
  },
  getProjectCard(project) {
    return `
  <div
    class="bg-main text-secondary rounded-3xl p-1 pl-4 pr-4 pt-1 pb-1 h-30 flex flex-col gap-3 justify-center"
  >
    <div class="flex items-center justify-between">
      <div class="font-semibold">${project.title}</div>
      <div class="flex gap-1 items-center">
        <svg
          class=""
          width="18px"
          height="18px"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z"
            fill="#EEEEEE"
          />
          <path
            d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z"
            fill="#EEEEEE"
          />
        </svg>
        <svg
          
          class="delete"
          width="20px"
          height="20px"
          viewBox="-0.5 0 19 19"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.91666667,14.8888889 C4.91666667,15.3571429 5.60416667,16 6.0625,16 
       L12.9375,16 C13.3958333,16 14.0833333,15.3571429 14.0833333,14.8888889 
       L14.0833333,6 L4.91666667,6 L4.91666667,14.8888889 Z 
       M15,3.46500003 L12.5555556,3.46500003 L11.3333333,2 L7.66666667,2 
       L6.44444444,3.46500003 L4,3.46500003 L4,4.93000007 L15,4.93000007 Z"
            fill="#EEEEEE"
          ></path>
        </svg>
      </div>
    </div>
    <div class="flex flex-col items-center justify-between">
      <div class="text-wrap break-all">${project.desc}</div>
      <div class="justify-end mt-auto self-end">${project.dueDate}</div>
    </div>
  </div>
`;
  },
  renderProjects(projects) {
    const container = document.getElementById("projectContainer");
    this.clearContainer(container);
    for (let i = 0; i < projects.length; i++) {
      const projectData = projects[i];
      const project = document.createElement("div");
      container.appendChild(project);
      project.innerHTML = this.getProjectCard(projects[i]);
      project.classList.add("text-secondary", "cursor-pointer");
      const deleteBtn = project.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        projectManager.deleteProject(projectData.title);
        this.renderProjects(projectManager.getProjects());
        console.log(projects);
        this.clearContainer(document.getElementById("toDoContainer"));
      });
      project.addEventListener("click", () => {
        if (projects.some((element) => element.title == projectData.title))
          this.renderToDos(projectData.title);
      });
    }
  },
  renderToDos(projectTitle) {
    const container = document.getElementById("toDoContainer");
    this.clearContainer(container);

    let toDos = toDoManager.getToDoListByProjectTitle(projectTitle);
    for (let i = 0; i < toDos.length; i++) {
      const toDo = document.createElement("div");
      container.appendChild(toDo);
      toDo.textContent = toDos[i].title;
      toDo.classList.add("text-secondary", "cursor-pointer");
    }
  },
  clearContainer(container) {
    container.innerHTML = "";
  },
  clearProjectModal() {
    document.getElementById("projectTitle").value = "";
    document.getElementById("projectDesc").value = "";
    document.getElementById("projectDueDate").value = "";
  },
};

displayManager.renderProjects(projectManager.getProjects());
