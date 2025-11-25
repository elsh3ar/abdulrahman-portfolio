// ======= Language toggle =======
const arBtn = document.getElementById("arBtn");
const enBtn = document.getElementById("enBtn");
const htmlTag = document.documentElement;
const body = document.body;

function setLanguage(lang){
  body.setAttribute("data-lang", lang);

  if(lang === "ar"){
    htmlTag.setAttribute("lang", "ar");
    htmlTag.setAttribute("dir", "rtl");
    arBtn && arBtn.classList.add("active");
    enBtn && enBtn.classList.remove("active");
  }else{
    htmlTag.setAttribute("lang", "en");
    htmlTag.setAttribute("dir", "ltr");
    enBtn && enBtn.classList.add("active");
    arBtn && arBtn.classList.remove("active");
  }

  // كل العناصر اللي فيها data-ar / data-en
  const elements = document.querySelectorAll("[data-ar][data-en]");
  elements.forEach(el => {
    const text = el.getAttribute(lang === "ar" ? "data-ar" : "data-en");
    if(text) el.textContent = text;
  });
}

arBtn && arBtn.addEventListener("click", () => setLanguage("ar"));
enBtn && enBtn.addEventListener("click", () => setLanguage("en"));

// بداية الصفحة تبقى عربي
setLanguage("ar");

// ======= Theme toggle (dark / light) =======
const themeToggle = document.getElementById("themeToggle");

function setTheme(mode){
  if(mode === "light"){
    body.classList.add("light");
    body.classList.remove("dark");
    themeToggle.textContent = body.getAttribute("data-lang") === "ar"
      ? "وضع داكن"
      : "Dark Mode";
  }else{
    body.classList.add("dark");
    body.classList.remove("light");
    themeToggle.textContent = body.getAttribute("data-lang") === "ar"
      ? "تغيير الألوان"
      : "Switch Colors";
  }
}

themeToggle && themeToggle.addEventListener("click", () => {
  if(body.classList.contains("light")){
    setTheme("dark");
  }else{
    setTheme("light");
  }
});

// بداية الثيم داكن
setTheme("dark");
