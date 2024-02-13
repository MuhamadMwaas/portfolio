(function ($) {
  //نص البطاعة
  if ($(".text_typed").length == 1) {
    var typed = new Typed(".text_typed", {
      strings: ["Web Developer ", "Software engineer"],
      typeSpeed: 40,
      backSpeed: 15,
      smartBackspace: false,
      loop: true,
    });
  }

  //تحريك قسم ال skill عند ظهوره
  window.addEventListener("load", function () {
    var animatedDiv = document.getElementById("skills");
    console.log(animatedDiv);
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
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    // بدء مراقبة الديف المتحرك
    observer.observe(animatedDiv);
  });
})(jQuery);

//من اجل اضافة كلاس الاكتف عند الضفط على رابط في الشريط العلوي 
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
