const btnPrev = document.querySelector(".viewer-btns .prev");
const btnNext = document.querySelector(".viewer-btns .next");
const browser_PC = document.querySelector(".browser.pc");
const browser_MB = document.querySelector(".browser.mb");
const inner_PC = browser_PC.querySelector(".inner");
const inner_MB = browser_MB.querySelector(".inner");
const img_PC = browser_PC.querySelector("img");
const img_MB = browser_MB.querySelector("img");
let viewIndex = 0;
const works = [
  {
    pc: "spot",
    mb: "spot_m",
  },
  {
    pc: "space",
    mb: "space_m",
  },
  {
    pc: "office",
    mb: "office_m",
  },
  {
    pc: "benefit",
    mb: "benefit_m",
  },
  {
    pc: "blog",
    mb: "blog_m",
  },
  {
    pc: "broker",
    mb: "broker_m",
  },
  {
    pc: "event",
    mb: "event_m",
  },
];
const setting_IMG = (idx = 0) => {
  img_PC.src = `./common/images/fastfive/${works[idx].pc}.jpg`;
  img_MB.src = `./common/images/fastfive//${works[idx].mb}.jpg`;
};
const updateButtons = () => {
  if (viewIndex === 0) {
    btnPrev.setAttribute("disabled", true);
  } else {
    btnPrev.removeAttribute("disabled");
  }
  if (viewIndex === works.length - 1) {
    btnNext.setAttribute("disabled", true);
  } else {
    btnNext.removeAttribute("disabled");
  }
  inner_PC.scrollTo({ top: 0, behavior: "instant" });
  inner_MB.scrollTo({ top: 0, behavior: "instant" });
};
//init
setting_IMG();
updateButtons();

btnPrev.addEventListener("click", () => {
  if (viewIndex > 0) {
    --viewIndex;
    console.log(viewIndex);
    setting_IMG(viewIndex);
  }
  updateButtons();
});
btnNext.addEventListener("click", () => {
  if (viewIndex < works.length - 1) {
    ++viewIndex;
    console.log(viewIndex);
    setting_IMG(viewIndex);
  }
  updateButtons();
});
