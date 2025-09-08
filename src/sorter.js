export const sorter = {
  sortAlphabetically(projects) {
    projects.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  },
  sortAlphabeticallyReverse(projects) {
    projects.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
  },
  sortByDueDate() {},
  sortByDueDateReverse() {},
};
