
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.2, // 20% visible = trigger
    }
  );

  reveals.forEach((el) => observer.observe(el));

// function openPage() {
//     window.location.href = "./SenseEd.html";
// }