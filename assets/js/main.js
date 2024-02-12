(function ($) {
  // $(".progress .progress-bar").each(function () {
  //   $(this).animate(
  //     {
  //       width: $(this).attr("aria-valuenow") + "%",
  //     },
  //     1000
  //   );
  // });

  if ($(".text_typed").length == 1) {
    var typed = new Typed(".text_typed", {
      strings: ["Web Developer ", "Software engineer"],
      typeSpeed: 200,
      backSpeed: 200,
      smartBackspace: false,
      loop: true,
    });
  }

  window.addEventListener("load", function () {
    var animatedDiv = document.getElementById("skills");
    console.log(animatedDiv);

    // إنشاء مراقب Intersection Observer
    var observer = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          // عندما يصبح العنصر مرئيًا
          if (entry.isIntersecting) {
            // تضيف العنصر الكلاس "show" لتشغيل الرسم المتحرك
            $(".progress .progress-bar").each(function () {
              $(this).animate(
                {
                  width: $(this).attr("aria-valuenow") + "%",
                },
                1000
              );
            }); // إيقاف مراقبة العنصر بعد ظهوره
            // observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 1 }
    ); // يتم تشغيل الرسم المتحرك عندما يصبح 50% من العنصر مرئيًا

    // بدء مراقبة الديف المتحرك
    observer.observe(animatedDiv);
  });
})(jQuery);

document.addEventListener("DOMContentLoaded", function () {
  var navLinks = document.querySelectorAll(".nav-item");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      navLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
});
