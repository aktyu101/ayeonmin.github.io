class ProjectItemList {
  constructor(list = []) {
    this.list = list;
  }

  get listSortedByDate() {
    return [...this.list].sort((a, b) => {
      if (new Date(a.startPeriod) === new Date(b.startPeriod)) return 0;
      if (new Date(a.startPeriod) > new Date(b.startPeriod)) return -1;
      if (new Date(a.startPeriod) < new Date(b.startPeriod)) return 1;
    });
  }
}

class ProjectItem {
  constructor(
    id,
    name = "",
    imageUrl = null,
    startPeriod = null,
    endPeriod = null,
    type = null
  ) {
    this.id = id;
    this.name = name;
    this.imageUrl = imageUrl;
    this.startPeriod = startPeriod;
    this.endPeriod = endPeriod;
    this.type = type;
  }

  get url() {
    return `images/portfolio/${this.imageUrl}`;
  }

  get period() {
    return `${this.startPeriod}~${this.endPeriod}`;
  }
}

export const projectList = new ProjectItemList([
  new ProjectItem(
    1,
    "test",
    "versel.svg",
    "2024.04.04",
    "2024.04.05",
    "HTML&CSS"
  ),
  new ProjectItem(
    2,
    "test2",
    "vercel.svg",
    "2024.01.01",
    "2024.04.05",
    "JAVASCRIPT"
  ),
  new ProjectItem(3, "3", "vercel.svg", "2024.04.05", "2024.04.05", "HTML&CSS"),
  new ProjectItem(4, "4", "vercel.svg", "2024.04.02", "2024.04.05", "HTML&CSS"),
  new ProjectItem(5, "5", "vercel.svg", "2024.04.03", "2024.04.05", "HTML&CSS"),
  new ProjectItem(6, "6", "vercel.svg", "2023.12.04", "2024.04.05", "HTML&CSS"),
]);
