import { projectManager } from "./projectManager.js";
import { toDoManager } from "./toDoManager.js";
import { sorter } from "./sorter.js";
import { projectCardManager } from "./projectCard.js";
import { getToDoCard } from "./toDoCard.js";

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
// Gym Project
toDoManager.addToDo(
  "Leg Day",
  "Do squats, lunges, and deadlifts",
  false,
  "2025-10-25",
  "high",
  projectManager.getProject("Gym").title
);
toDoManager.addToDo(
  "Upper Body",
  "Bench press, push-ups, and pull-ups",
  false,
  "2025-10-27",
  "medium",
  projectManager.getProject("Gym").title
);
toDoManager.addToDo(
  "Cardio",
  "30 minutes running or cycling",
  false,
  "2025-10-29",
  "low",
  projectManager.getProject("Gym").title
);

// Grocery Shopping Project
toDoManager.addToDo(
  "Buy Essentials",
  "Milk, bread, and eggs",
  false,
  "2025-10-28",
  "high",
  projectManager.getProject("Grocery Shopping").title
);
toDoManager.addToDo(
  "Fruits & Vegetables",
  "Bananas, apples, carrots, spinach",
  false,
  "2025-10-28",
  "medium",
  projectManager.getProject("Grocery Shopping").title
);
toDoManager.addToDo(
  "Snacks",
  "Pick up chips and cookies",
  false,
  "2025-10-28",
  "low",
  projectManager.getProject("Grocery Shopping").title
);

// Read Book Project
toDoManager.addToDo(
  "Read Chapter 10",
  "Continue 'The Hitchhiker's Guide to the Galaxy'",
  false,
  "2025-11-05",
  "medium",
  projectManager.getProject("Read Book").title
);
toDoManager.addToDo(
  "Read Chapter 11",
  "Take notes of important quotes",
  false,
  "2025-11-06",
  "low",
  projectManager.getProject("Read Book").title
);
toDoManager.addToDo(
  "Finish Book",
  "Complete the final chapters",
  false,
  "2025-11-10",
  "high",
  projectManager.getProject("Read Book").title
);

// Project Alpha
toDoManager.addToDo(
  "Outline Research",
  "Draft an outline of key topics",
  false,
  "2025-10-30",
  "high",
  projectManager.getProject("Project Alpha").title
);
toDoManager.addToDo(
  "Collect Resources",
  "Save articles and references",
  false,
  "2025-11-01",
  "medium",
  projectManager.getProject("Project Alpha").title
);
toDoManager.addToDo(
  "First Draft",
  "Write the initial version of the project proposal",
  false,
  "2025-11-03",
  "high",
  projectManager.getProject("Project Alpha").title
);

// Doctor's Appointment
toDoManager.addToDo(
  "Prepare Questions",
  "Write down health concerns for check-up",
  true,
  "2025-10-22",
  "medium",
  projectManager.getProject("Doctor's Appointment").title
);
toDoManager.addToDo(
  "Bring Documents",
  "Insurance card and medical history",
  false,
  "2025-10-22",
  "high",
  projectManager.getProject("Doctor's Appointment").title
);
toDoManager.addToDo(
  "Schedule Next Visit",
  "Book follow-up appointment",
  false,
  "2025-10-22",
  "low",
  projectManager.getProject("Doctor's Appointment").title
);

// Laundry Project
toDoManager.addToDo(
  "Wash Clothes",
  "Separate colors and start washing",
  false,
  "2025-10-26",
  "medium",
  projectManager.getProject("Laundry").title
);
toDoManager.addToDo(
  "Dry Clothes",
  "Move clothes to dryer or hang them",
  false,
  "2025-10-26",
  "low",
  projectManager.getProject("Laundry").title
);
toDoManager.addToDo(
  "Fold and Organize",
  "Fold and put away clothes",
  false,
  "2025-10-27",
  "medium",
  projectManager.getProject("Laundry").title
);

// Pay Bills Project
toDoManager.addToDo(
  "Pay Electricity Bill",
  "Pay via online banking",
  false,
  "2025-11-15",
  "high",
  projectManager.getProject("Pay Bills").title
);
toDoManager.addToDo(
  "Pay Water Bill",
  "Use city utilities portal",
  false,
  "2025-11-15",
  "medium",
  projectManager.getProject("Pay Bills").title
);
toDoManager.addToDo(
  "Pay Internet Bill",
  "Check ISP website for payment",
  false,
  "2025-11-15",
  "medium",
  projectManager.getProject("Pay Bills").title
);

// Car Maintenance
toDoManager.addToDo(
  "Book Service",
  "Schedule oil change and tire rotation",
  true,
  "2025-10-20",
  "high",
  projectManager.getProject("Car Maintenance").title
);
toDoManager.addToDo(
  "Check Tire Pressure",
  "Ensure tires are at correct PSI",
  false,
  "2025-10-21",
  "medium",
  projectManager.getProject("Car Maintenance").title
);
toDoManager.addToDo(
  "Wash Car",
  "Clean exterior and interior",
  false,
  "2025-10-22",
  "low",
  projectManager.getProject("Car Maintenance").title
);

// Vacation Planning
toDoManager.addToDo(
  "Check Flights",
  "Look for deals online",
  false,
  "2025-12-01",
  "high",
  projectManager.getProject("Vacation Planning").title
);
toDoManager.addToDo(
  "Book Hotel",
  "Find affordable accommodation",
  false,
  "2025-12-03",
  "high",
  projectManager.getProject("Vacation Planning").title
);
toDoManager.addToDo(
  "Plan Activities",
  "Make a list of places to visit",
  false,
  "2025-12-05",
  "medium",
  projectManager.getProject("Vacation Planning").title
);

// Study for Exam
toDoManager.addToDo(
  "Review Chapter 3",
  "Focus on key formulas",
  false,
  "2025-11-10",
  "high",
  projectManager.getProject("Study for Exam").title
);
toDoManager.addToDo(
  "Practice Problems",
  "Solve exercises from chapters 1-5",
  false,
  "2025-11-11",
  "high",
  projectManager.getProject("Study for Exam").title
);
toDoManager.addToDo(
  "Mock Test",
  "Time yourself with a practice exam",
  false,
  "2025-11-12",
  "high",
  projectManager.getProject("Study for Exam").title
);

export const displayManager = {
  // All event listeners that dont belong to a specific loop go here
  addEventListeners() {
    // Add Project Button
    const addProjectBtn = document.getElementById("addProjectBtn");
    const addProjectModal = document.getElementById("addProjectModal");
    addProjectBtn.addEventListener("click", () => {
      const errorSpace = document.getElementById("errorSpace");
      errorSpace.innerText = projectManager.getErrors();
      addProjectModal.showModal();
    });
    // Add Project Form
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
    // Project Sort Button and sorters
    const sortBtn = document.getElementById("sortBtn");
    sortBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sorter.setSortArray(projectManager.getProjects());
      sortModal.showModal();
    });
    const sortToDosBtn = document.getElementById("sortToDosBtn");
    sortToDosBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sorter.setSortArray(
        toDoManager.getToDoListByProjectTitle(
          projectManager.getSelectedProject().title
        )
      );
      sortModal.showModal();
    });
    const sortAlphabeticallyBtn = document.getElementById(
      "sortAlphabeticallyBtn"
    );
    sortAlphabeticallyBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sorter.sortAlphabetically();
      this.renderProjects(projectManager.getProjects());
      this.renderToDos(sorter.getSortArray());
      console.log(sorter.getSortArray());
      sortModal.close();
    });
    const sortAlphabeticallyReverseBtn = document.getElementById(
      "sortAlphabeticallyReverseBtn"
    );
    sortAlphabeticallyReverseBtn.addEventListener("click", () => {
      const sortModal = document.getElementById("sortModal");
      sorter.sortAlphabeticallyReverse();
      this.renderProjects(projectManager.getProjects());
      this.renderToDos(sorter.getSortArray());
      sortModal.close();
    });
    const sortByDueDateBtn = document.getElementById("sortByDueDateBtn");
    sortByDueDateBtn.addEventListener("click", () => {
      sorter.sortByDueDate();
      this.renderProjects(projectManager.getProjects());
      this.renderToDos(sorter.getSortArray());
      sortModal.close();
    });
    const sortByDueDateReverseBtn = document.getElementById(
      "sortByDueDateReverseBtn"
    );
    sortByDueDateReverseBtn.addEventListener("click", () => {
      sorter.sortByDueDateReverse();
      this.renderProjects(projectManager.getProjects());
      this.renderToDos(sorter.getSortArray());
      sortModal.close();
    });
    // Add To Do Button
    const addToDoModal = document.getElementById("addToDoModal");
    const addToDoBtn = document.getElementById("addToDoBtn");
    addToDoBtn.addEventListener("click", () => {
      const errorSpace = document.getElementById("errorSpace2");
      errorSpace.innerText = projectManager.getErrors();
      addToDoModal.showModal();
    });
    // Add To Do Form
    const addToDoForm = document.getElementById("addToDoForm");
    addToDoForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let title = document.getElementById("toDoTitle").value;
      let desc = document.getElementById("toDoDesc").value;
      let dueDate = document.getElementById("toDoDueDate").value;
      let importance = document.getElementById("importanceSelection").value;
      toDoManager.addToDo(
        title,
        desc,
        false,
        dueDate,
        importance,
        projectManager.getSelectedProject().title
      );
      if (toDoManager.getErrors().length > 0) {
        const errorSpace = document.getElementById("errorSpace2");
        errorSpace.innerText = toDoManager.getErrors();
        return;
      }
      addToDoModal.close();
      this.renderToDos(
        toDoManager.getToDoListByProjectTitle(
          projectManager.getSelectedProject().title
        )
      );
      this.clearToDoModal();
      console.log("confirm");
      console.log(toDoManager.getToDos());
    });
  },
  getToDoCard() {},
  renderProjects(projects) {
    const container = document.getElementById("projectContainer");
    this.clearContainer(container);
    for (let i = 0; i < projects.length; i++) {
      const projectData = projects[i];
      const project = document.createElement("div");
      container.appendChild(project);
      if (projectManager.getSelectedProject() == projectData) {
        project.innerHTML = projectCardManager.getSelectedProjectCard(
          projects[i]
        );
      } else {
        project.innerHTML = projectCardManager.getProjectCard(projects[i]);
      }
      // Render To Dos When Clicked
      project.addEventListener("click", () => {
        if (projects.some((element) => element.title == projectData.title)) {
          projectManager.setSelectedProject(projectData);
          this.renderToDos(
            toDoManager.getToDoListByProjectTitle(projectData.title)
          );
          this.renderProjects(projectManager.getProjects());
        }
      });
      // Project Delete Button
      const deleteBtn = project.querySelector(".delete");
      deleteBtn.addEventListener("click", () => {
        projectManager.deleteProject(projectData.title);
        this.renderProjects(projectManager.getProjects());
        this.clearContainer(document.getElementById("toDoContainer"));
      });
    }
  },
  renderToDos(toDos) {
    const container = document.getElementById("toDoContainer");
    this.clearContainer(container);

    for (let i = 0; i < toDos.length; i++) {
      const toDoData = toDos[i];
      const toDo = document.createElement("div");
      container.appendChild(toDo);
      toDo.innerHTML = getToDoCard(toDos[i]);
      // Delete To Do Button
      const deleteToDo = toDo.querySelector(".deleteToDo");
      deleteToDo.addEventListener("click", () => {
        toDoManager.deleteToDo(toDoData.title);
        this.renderToDos(
          toDoManager.getToDoListByProjectTitle(toDoData.projectOwner)
        );
        console.log("delete!");
      });
      toDo.addEventListener("click", () => {
        if (toDo.querySelector(".toDoDesc").hasAttribute("hidden")) {
          toDo.querySelector(".toDoDesc").removeAttribute("hidden");
        } else {
          toDo.querySelector(".toDoDesc").setAttribute("hidden", "");
        }
      });
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
  clearToDoModal() {
    document.getElementById("toDoTitle").value = "";
    document.getElementById("toDoDesc").value = "";
    document.getElementById("toDoDueDate").value = "";
    document.getElementById("importanceSelection").value = "";
  },
};

displayManager.renderProjects(projectManager.getProjects());
