export const sorter = {
  array: [],
  setSortArray(arrayToSort) {
    this.array = arrayToSort;
  },
  getSortArray() {
    return this.array;
  },
  sortAlphabetically() {
    this.array.sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    });
  },
  sortAlphabeticallyReverse() {
    this.array.sort((a, b) => {
      if (a.title < b.title) {
        return 1;
      }
      if (a.title > b.title) {
        return -1;
      }
      return 0;
    });
  },
  sortByDueDate() {
    this.array.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);

      if (dateA < dateB) {
        return -1;
      }
      if (dateA > dateB) {
        return 1;
      }
      return 0;
    });
  },
  sortByDueDateReverse() {
    this.array.sort((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);

      if (dateA < dateB) {
        return 1;
      }
      if (dateA > dateB) {
        return -1;
      }
      return 0;
    });
  },
};
