const projects = {
  pingpong: {
    title: "Ping Pong",
    type: "Relançamento de marca / Key Visual",
    img: "assets/img/kv-ping-pong-horizontal.png",
    context: "Projeto de relançamento visual com foco em reposicionar a marca a partir de uma linguagem mais moderna, vibrante e conectada ao público jovem.",
    goal: "Equilibrar nostalgia e atualização de marca, criando uma comunicação mais forte para campanha e presença digital.",
    deliverables: "Key visual, peças de campanha, direção visual e landing page experimental.",
    link: "https://gusgaaa.github.io/sitepingpong/"
  },
  donnat: {
    title: "Donna T Personalizados",
    type: "Relançamento visual / Social Media",
    img: "assets/img/catalogo-donna-t-maes.png",
    context: "Projeto de relançamento visual voltado para uma apresentação mais delicada, leve e profissional da marca.",
    goal: "Valorizar os produtos personalizados e melhorar a forma como a marca se comunica digitalmente.",
    deliverables: "Identidade visual, catálogo, peças para redes sociais e site/catálogo responsivo.",
    link: "https://gusgaaa.github.io/donnat/"
  },
  zana: {
    title: "Zana Brigaderia",
    type: "Nova marca / Site vitrine",
    img: "assets/img/zana-cover.svg",
    context: "Projeto digital desenvolvido para fortalecer a presença online da marca e apresentar seus produtos de forma mais organizada e atrativa.",
    goal: "Criar uma experiência simples, agradável e funcional, valorizando o cardápio e facilitando o contato.",
    deliverables: "Site vitrine, estrutura de cardápio, organização visual e CTA para contato.",
    link: "https://luana-nagoulart.github.io/zanabrigaderia/index.html"
  },
  klock: {
    title: "Klock",
    type: "Nova marca / Identidade visual",
    img: "assets/img/klock-logo.png",
    gallery: ["assets/img/klock-logo.png"],
    context: "Projeto de identidade visual pensado para criar uma marca mais marcante, comercial e alinhada ao universo esportivo.",
    goal: "Construir uma presença visual forte para uma marca de camisas esportivas, com aplicação prática em redes sociais e materiais de divulgação.",
    deliverables: "Logo, direção visual, aplicações de marca, ideias para posts, embalagens e presença digital.",
    link: ""
  },
  copa365: {
    title: "Copa 365",
    type: "Marca esportiva / Comunidade digital",
    img: "assets/img/copa365-barcelona.png",
    gallery: ["assets/img/copa365-barcelona.png", "assets/img/copa365-chaveamento.png", "assets/img/copa365-logo.png"],
    context: "Projeto de criação visual para uma marca com proposta esportiva e digital, reunindo identidade, peças promocionais e materiais voltados para engajamento.",
    goal: "Construir uma linguagem forte, reconhecível e dinâmica, conectada ao universo do futebol e do entretenimento.",
    deliverables: "Identidade, chaveamento do torneio, card de elenco, peças de divulgação e apoio visual para a comunidade.",
    link: ""
  }
};

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
if (menu && links) {
  menu.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menu.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
    links.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
  }));
}

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal-media img");
const modalThumbs = document.querySelector(".modal-thumbs");
const modalType = document.querySelector(".modal-type");
const modalTitle = document.querySelector(".modal-copy h3");
const modalContext = document.querySelector(".modal-context");
const modalGoal = document.querySelector(".modal-goal");
const modalDeliverables = document.querySelector(".modal-deliverables");
const modalLink = document.querySelector(".modal-link");
const modalClose = document.querySelector(".modal-close");

function setModalImage(src, alt) {
  modalImg.src = src;
  modalImg.alt = alt;
}

function renderThumbs(project) {
  if (!modalThumbs) return;
  modalThumbs.innerHTML = "";
  const gallery = project.gallery && project.gallery.length ? project.gallery : [project.img];
  if (gallery.length <= 1) {
    modalThumbs.classList.remove("show");
    return;
  }
  modalThumbs.classList.add("show");
  gallery.forEach((src, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "modal-thumb" + (index === 0 ? " active" : "");
    btn.innerHTML = `<img src="${src}" alt="${project.title} ${index + 1}">`;
    btn.addEventListener("click", () => {
      setModalImage(src, project.title);
      modalThumbs.querySelectorAll(".modal-thumb").forEach(el => el.classList.remove("active"));
      btn.classList.add("active");
    });
    modalThumbs.appendChild(btn);
  });
}

function openProject(id) {
  const p = projects[id];
  if (!p || !modal) return;
  setModalImage(p.img, p.title);
  renderThumbs(p);
  modalType.textContent = p.type;
  modalTitle.textContent = p.title;
  modalContext.textContent = p.context;
  modalGoal.textContent = p.goal;
  modalDeliverables.textContent = p.deliverables;
  if (p.link) {
    modalLink.href = p.link;
    modalLink.classList.add("show");
  } else {
    modalLink.classList.remove("show");
  }
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

document.querySelectorAll("[data-project-card]").forEach(card => {
  card.addEventListener("click", () => openProject(card.dataset.projectCard));
});
document.querySelectorAll("[data-open-project]").forEach(card => {
  card.addEventListener("click", () => openProject(card.dataset.openProject));
});

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}
if (modalClose) modalClose.addEventListener("click", closeModal);
if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach((el, index) => {
  el.style.setProperty("--delay", `${Math.min((index % 6) * 70, 350)}ms`);
  observer.observe(el);
});