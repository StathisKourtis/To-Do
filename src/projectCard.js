export const projectCardManager = {
  getProjectCard(project) {
    return `
      <div
        class="bg-main text-secondary rounded-3xl pl-4 pr-4 pt-2 pb-2  flex flex-col gap-3 justify-center"
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
                fill="#ff002b"
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

  getSelectedProjectCard(project) {
    return `
      <div class="flex flex-col justify-center gap-3 rounded-3xl bg-main/80 pl-4 pr-4 pt-2 pb-2 text-accent">
        <div class="flex items-center justify-between">
          <div class="font-semibold">${project.title}</div>
          <div class="flex items-center gap-1">
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
                fill="#ff002b"
              ></path>
            </svg>
          </div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <div class="text-wrap break-all">${project.desc}</div>
          <div class="mt-auto justify-end self-end">${project.dueDate}</div>
        </div>
      </div>
    `;
  },
};
