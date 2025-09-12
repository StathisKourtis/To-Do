export function getToDoCard(toDo) {
  return `
<div class="flex flex-col justify-center gap-3 rounded-3xl bg-main p-1 pt-1 pr-4 pb-1 pl-4 text-secondary">
  <div class="flex items-center justify-between">
    <div class="font-semibold">${toDo.title}</div>
    <div class="flex items-center gap-1">
      <div class="mt-auto justify-end self-end">${toDo.dueDate}</div>
      <svg 
        id="expandBtn"
        width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.5071469,14.0062893 L14.7166953,14.0062893 L14.4365352,13.7361349 C15.4170955,12.5954831 16.0074328,11.1146369 16.0074328,9.50371641 C16.0074328,5.91166381 13.095769,3 9.50371641,3 C5.91166381,3 3,5.91166381 3,9.50371641 C3,13.095769 5.91166381,16.0074328 9.50371641,16.0074328 C11.1146369,16.0074328 12.5954831,15.4170955 13.7361349,14.4365352 L14.0062893,14.7166953 L14.0062893,15.5071469 L19.0091481,20.5 L20.5,19.0091481 L15.5071469,14.0062893 Z M9.50371641,14.0062893 C7.01229274,14.0062893 5.00114351,11.9951401 5.00114351,9.50371641 C5.00114351,7.01229274 7.01229274,5.00114351 9.50371641,5.00114351 C11.9951401,5.00114351 14.0062893,7.01229274 14.0062893,9.50371641 C14.0062893,11.9951401 11.9951401,14.0062893 9.50371641,14.0062893 Z" 
        fill="#EEEEEE"></path>
      </svg>
      <svg width="18px" height="18px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.29289 3.70711L1 11V15H5L12.2929 7.70711L8.29289 3.70711Z" fill="#EEEEEE" />
        <path d="M9.70711 2.29289L13.7071 6.29289L15.1716 4.82843C15.702 4.29799 16 3.57857 16 2.82843C16 1.26633 14.7337 0 13.1716 0C12.4214 0 11.702 0.297995 11.1716 0.828428L9.70711 2.29289Z" fill="#EEEEEE" />
      </svg>
      <svg class="deleteToDo cursor-pointer" width="20px" height="20px" viewBox="-0.5 0 19 19" xmlns="http://www.w3.org/2000/svg">
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
  <div hidden class="toDoDesc flex flex-col items-center justify-between">
    <div class="text-wrap break-all">${toDo.desc}</div>
    
  </div>
</div>
`;
}
