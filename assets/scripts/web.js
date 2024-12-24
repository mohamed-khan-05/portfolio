const scrollup = document.querySelector(".scrollup");
scrollup.addEventListener("click", () =>
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
);

const skills = document.querySelector(".nskills");
const targetskills = document.querySelector(".skills");
skills.addEventListener("click", (event) => {
  event.preventDefault();
  targetskills.scrollIntoView({ behavior: "smooth" });
});

const projects = document.querySelector(".nprojects");
const targetprojects = document.querySelector(".projects");
projects.addEventListener("click", (event) => {
  event.preventDefault();
  targetprojects.scrollIntoView({ behavior: "smooth" });
});

const cv = document.querySelector(".ncv");
const targetcv = document.querySelector(".cv");
cv.addEventListener("click", (event) => {
  event.preventDefault();
  targetcv.scrollIntoView({ behavior: "smooth" });
});

const contact = document.querySelector(".ncontact");
const targetcontact = document.querySelector(".contact");
contact.addEventListener("click", (event) => {
  event.preventDefault();
  targetcontact.scrollIntoView({ behavior: "smooth" });
});
