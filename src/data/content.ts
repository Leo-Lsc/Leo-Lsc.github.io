export const navItems = [
  { label: "About", id: "about" },
  { label: "Publications", id: "publications" },
  { label: "Experiences", id: "experiences" },
  { label: "CV", id: "cv" },
  { label: "Misc", id: "misc" },
] as const;

export const sectionIds = navItems.map((item) => item.id);
