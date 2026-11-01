(() => {
  const BASE = window.PORTFOLIO_BASE || "/portfolio/";
  const works = window.WORKS || [];
  const languages = ["zh", "ja", "en"];
  const LANGUAGE_STORAGE_KEY = "cai-xiaoyao-language-v2";
  const homeText = {
    zh: {
      skip: "浏览作品", navSelected: "代表作品", navWorks: "作品目录", navAbout: "关于", navContact: "联系",
      heroEyebrow: "动画 · 绘本 · 插画", name: "蔡逍遥", romanName: "CAI XIAOYAO / サイ・ショウヨウ",
      role: "动画创作者 · 绘本作者 · 插画家 · 大学讲师", intro: "从手绘出发，在动画、绘本与图像叙事中，寻找感知、记忆和传统文化的新表达。",
      explore: "浏览作品", selectedTitle: "代表作品", worksTitle: "作品目录", worksNote: "动画、漫画、插画、绘本与视觉设计",
      aboutTitle: "关于我", bio: "蔡逍遥，动画创作者、绘本作者、插画家、大学讲师。毕业于中国美术学院硕士研究生课程，目前在中国高校从事动画与影像相关教学。创作领域包括手绘二维动画、绘本、漫画与插画，关注个人感知、日常经验、传统文化与视觉叙事之间的关系。",
      practice: "创作领域", practiceValue: "手绘二维动画、绘本、漫画、插画", education: "教育经历", educationValue: "中国美术学院 · 硕士",
      contactTitle: "联系", contactText: "有关作品放映、出版、展览、讲座及合作，请通过邮件联系。", rights: "© 2026 蔡逍遥. 保留所有权利。",
      allWorks: "全部作品", previous: "上一件作品", next: "下一件作品", back: "返回作品目录", watch: "观看完整影片"
    },
    ja: {
      skip: "作品を見る", navSelected: "代表作品", navWorks: "作品一覧", navAbout: "プロフィール", navContact: "お問い合わせ",
      heroEyebrow: "アニメーション・絵本・イラストレーション", name: "蔡逍遥", romanName: "サイ・ショウヨウ / CAI XIAOYAO",
      role: "アニメーション作家・絵本作家・イラストレーター・大学講師", intro: "手描きを起点に、アニメーション、絵本、ビジュアル・ナラティブを通して、感覚、記憶、伝統文化の新たな表現を探究しています。",
      explore: "作品を見る", selectedTitle: "代表作品", worksTitle: "作品一覧", worksNote: "アニメーション、マンガ、イラストレーション、絵本、ビジュアルデザイン",
      aboutTitle: "プロフィール", bio: "蔡逍遥（サイ・ショウヨウ）。アニメーション作家、絵本作家、イラストレーター、大学講師。中国美術学院大学院修士課程修了。現在、中国の大学でアニメーション・映像分野の教育に携わっている。手描き2Dアニメーション、絵本、マンガ、イラストレーションを中心に制作し、個人の感覚や日常経験、伝統文化とビジュアル・ナラティブの関係を探究している。",
      practice: "制作分野", practiceValue: "手描き2Dアニメーション、絵本、マンガ、イラストレーション", education: "学歴", educationValue: "中国美術学院大学院 · 修士",
      contactTitle: "お問い合わせ", contactText: "上映、出版、展覧会、講演、コラボレーションについては、メールでお問い合わせください。", rights: "© 2026 蔡逍遥. All rights reserved.",
      allWorks: "作品一覧", previous: "前の作品", next: "次の作品", back: "作品一覧へ戻る", watch: "全編を見る"
    },
    en: {
      skip: "Explore works", navSelected: "Selected", navWorks: "Works", navAbout: "About", navContact: "Contact",
      heroEyebrow: "Animation · Picture Books · Illustration", name: "CAI XIAOYAO", romanName: "蔡逍遥 / サイ・ショウヨウ",
      role: "Animation Artist · Picture Book Artist · Illustrator · University Lecturer", intro: "Beginning with hand drawing, her practice explores new expressions of perception, memory, and traditional culture through animation, picture books, and visual narratives.",
      explore: "Explore works", selectedTitle: "Selected Works", worksTitle: "Works", worksNote: "Animation, comics, illustration, picture books, and visual design",
      aboutTitle: "About", bio: "Cai Xiaoyao is an animation artist, picture book artist, illustrator, and university lecturer. She holds a master’s degree from the China Academy of Art and currently teaches animation and visual media at a university in China. Her practice encompasses hand-drawn 2D animation, picture books, comics, and illustration, exploring the relationships among personal perception, everyday experience, traditional culture, and visual storytelling.",
      practice: "Practice", practiceValue: "Hand-drawn 2D animation, picture books, comics, illustration", education: "Education", educationValue: "China Academy of Art · MA",
      contactTitle: "Contact", contactText: "For screenings, publishing, exhibitions, lectures, and collaborations, please get in touch by email.", rights: "© 2026 CAI XIAOYAO. All rights reserved.",
      allWorks: "ALL WORKS", previous: "PREVIOUS WORK", next: "NEXT WORK", back: "BACK TO ALL WORKS", watch: "WATCH FULL FILM"
    }
  };

  const heroSlugs = ["unseen", "mikan", "diary", "zen"];
  const heroCategories = {
    unseen: "PICTURE BOOK",
    mikan: "ANIMATION",
    diary: "MANGA / VISUAL DIARY",
    zen: "ILLUSTRATION / SERIES"
  };
  const heroSlideCopy = {
    zh: {
      unseen: "以四季与自然感知，思考存在与“被看见”。",
      mikan: "文学改编与水墨动画实验。",
      diary: "以时间轴记录日常生活的漫画实验。",
      zen: "在山水、月色与留白之间展开的系列插画。"
    },
    ja: {
      unseen: "四季と自然の感覚から、存在と「見られること」を考える絵本。",
      mikan: "文学作品の翻案と水墨表現によるアニメーション実験。",
      diary: "時間軸に沿って日常生活を記録するマンガ実験。",
      zen: "山水、月、余白のあいだに展開するイラストレーション・シリーズ。"
    },
    en: {
      unseen: "A picture book reflecting on existence and being seen through the changing seasons.",
      mikan: "An animation experiment in literary adaptation and ink-wash expression.",
      diary: "A comics experiment recording everyday life along a timeline.",
      zen: "An illustration series shaped by landscape, moonlight, and open space."
    }
  };

  const title = (work, lang) => work[`title_${lang}`];
  const description = (work, lang) => work[`description_${lang}`];
  const summary = (work, lang) => work[`summary_${lang}`] || "";
  const asset = path => `${BASE}${path}`;
  const languageFromQuery = new URLSearchParams(location.search).get("lang");
  let lang = languages.includes(languageFromQuery) ? languageFromQuery : localStorage.getItem(LANGUAGE_STORAGE_KEY);
  let heroIndex = 0;
  let heroAnimating = false;
  let heroTouchStartX = null;
  let heroTouchStartY = null;
  let suppressHeroClick = false;
  let heroFlipToken = 0;
  if (!languages.includes(lang)) {
    lang = "ja";
  }

  function workHref(slug) {
    return `${BASE}work.html?work=${encodeURIComponent(slug)}&lang=${lang}`;
  }

  function setLanguage(next) {
    if (!languages.includes(next)) return;
    lang = next;
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    document.querySelectorAll("[data-lang]").forEach(button => {
      button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
    document.querySelectorAll("[data-i18n]").forEach(node => {
      const value = homeText[lang][node.dataset.i18n];
      if (value) node.textContent = value;
    });
    if (document.body.dataset.page === "home") renderHome();
    if (document.body.dataset.page === "work") renderWork();
  }

  function imageMarkup(src, alt, eager = false) {
    return `<img src="${asset(src)}" alt="${escapeHtml(alt)}" ${eager ? "fetchpriority=\"high\"" : "loading=\"lazy\""}>`;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[character]));
  }

  function heroPageMarkup(index) {
    const slug = heroSlugs[index];
    const work = works.find(item => item.slug === slug);
    if (!work) return "";
    const number = String(index + 1).padStart(2, "0");
    return `<div class="hero-page-paper hero-paper-${slug}">
      <figure class="hero-page-image hero-page-image-${slug}">${imageMarkup(work.cover, title(work, lang), true)}</figure>
      <div class="hero-page-copy">
        <div class="hero-page-heading">
          <p class="hero-page-meta">${number} / ${heroCategories[slug]}</p>
          <h2>${escapeHtml(title(work, lang))}</h2>
          <time>${escapeHtml(work.year)}</time>
        </div>
        <div class="hero-page-note">
          <p>${escapeHtml(heroSlideCopy[lang][slug])}</p>
          <a href="${workHref(slug)}">VIEW PROJECT ↗</a>
        </div>
      </div>
    </div>`;
  }

  function updateHeroCounter(index) {
    const counter = document.getElementById("hero-counter");
    if (counter) counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(heroSlugs.length).padStart(2, "0")}`;
  }

  function preloadHeroPages(index) {
    [index, (index + 1) % heroSlugs.length].forEach(pageIndex => {
      const work = works.find(item => item.slug === heroSlugs[pageIndex]);
      if (!work) return;
      const preload = new Image();
      preload.src = asset(work.cover);
    });
  }

  function renderHero() {
    const page = document.getElementById("hero-page");
    const turn = document.getElementById("hero-page-turn");
    if (!page || !turn) return;
    heroFlipToken += 1;
    heroAnimating = false;
    turn.hidden = true;
    turn.className = "hero-page-turn";
    turn.innerHTML = "";
    page.innerHTML = heroPageMarkup(heroIndex);
    page.dataset.heroIndex = String(heroIndex);
    page.setAttribute("aria-label", `Artwork ${heroIndex + 1} of ${heroSlugs.length}: ${title(works.find(item => item.slug === heroSlugs[heroIndex]), lang)}`);
    updateHeroCounter(heroIndex);
    preloadHeroPages(heroIndex);
  }

  function flipHero(direction) {
    const page = document.getElementById("hero-page");
    const turn = document.getElementById("hero-page-turn");
    if (!page || !turn || heroAnimating) return;
    const targetIndex = (heroIndex + direction + heroSlugs.length) % heroSlugs.length;
    const targetWork = works.find(item => item.slug === heroSlugs[targetIndex]);
    if (!targetWork) return;

    heroAnimating = true;
    const token = ++heroFlipToken;
    turn.className = "hero-page-turn";
    turn.innerHTML = page.innerHTML;
    turn.hidden = false;
    page.innerHTML = heroPageMarkup(targetIndex);
    page.dataset.heroIndex = String(targetIndex);
    page.setAttribute("aria-label", `Artwork ${targetIndex + 1} of ${heroSlugs.length}: ${title(targetWork, lang)}`);
    void turn.offsetWidth;
    turn.classList.add(direction > 0 ? "is-turning-next" : "is-turning-previous");

    let finished = false;
    const finish = () => {
      if (finished || token !== heroFlipToken) return;
      finished = true;
      heroIndex = targetIndex;
      heroAnimating = false;
      turn.hidden = true;
      turn.className = "hero-page-turn";
      turn.innerHTML = "";
      updateHeroCounter(heroIndex);
      preloadHeroPages(heroIndex);
    };
    turn.addEventListener("animationend", finish, { once: true });
    window.setTimeout(finish, 900);
  }

  function initHero() {
    const stage = document.getElementById("hero-book-stage");
    const previous = document.getElementById("hero-prev");
    const next = document.getElementById("hero-next");
    if (!stage || !previous || !next || stage.dataset.bound === "true") return;
    stage.dataset.bound = "true";

    previous.addEventListener("click", () => flipHero(-1));
    next.addEventListener("click", () => flipHero(1));
    stage.addEventListener("click", event => {
      if (suppressHeroClick || event.target.closest("a, button")) return;
      const bounds = stage.getBoundingClientRect();
      flipHero(event.clientX < bounds.left + bounds.width / 2 ? -1 : 1);
    });
    stage.addEventListener("touchstart", event => {
      const touch = event.changedTouches[0];
      heroTouchStartX = touch.clientX;
      heroTouchStartY = touch.clientY;
    }, { passive: true });
    stage.addEventListener("touchend", event => {
      if (heroTouchStartX === null || heroTouchStartY === null) return;
      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - heroTouchStartX;
      const deltaY = touch.clientY - heroTouchStartY;
      heroTouchStartX = null;
      heroTouchStartY = null;
      if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY) * 1.2) return;
      suppressHeroClick = true;
      flipHero(deltaX < 0 ? 1 : -1);
      window.setTimeout(() => { suppressHeroClick = false; }, 800);
    }, { passive: true });

    document.addEventListener("keydown", event => {
      if (document.body.dataset.page !== "home" || (event.key !== "ArrowLeft" && event.key !== "ArrowRight")) return;
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      const tagName = event.target.tagName;
      if (["INPUT", "TEXTAREA", "SELECT", "BUTTON"].includes(tagName) || event.target.isContentEditable) return;
      const bounds = stage.getBoundingClientRect();
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return;
      event.preventDefault();
      flipHero(event.key === "ArrowRight" ? 1 : -1);
    });
  }

  function renderHome() {
    const selected = document.getElementById("selected-layout");
    const catalog = document.getElementById("works-catalog");
    if (!selected || !catalog) return;
    renderHero();

    const selectedCard = (slug, index, extended = false) => {
      const work = works.find(item => item.slug === slug);
      const projectCopy = extended
        ? `<div class="selected-project-copy">
            <p class="work-card-meta">${slug === "mikan" ? "ANIMATION" : "MANGA / VISUAL DIARY"}</p>
            <h3>${escapeHtml(title(work, lang))}</h3>
            <time>${work.year}</time>
            <p class="selected-summary">${escapeHtml(summary(work, lang))}</p>
            <span class="selected-view">VIEW PROJECT →</span>
          </div>`
        : `<div class="caption-row"><div><p class="work-card-meta">${escapeHtml(work.category[lang])}</p><h3>${escapeHtml(title(work, lang))}</h3></div><time>${work.year}</time></div>`;
      return `<a class="selected-card selected-${slug}" href="${workHref(slug)}">
        <figure>${imageMarkup(work.cover, title(work, lang), index === 0)}</figure>
        ${projectCopy}
      </a>`;
    };
    selected.innerHTML = `
      ${selectedCard("unseen", 0)}
      <div class="selected-pair">
        ${selectedCard("mikan", 1, true)}
        ${selectedCard("diary", 2, true)}
      </div>
      ${selectedCard("zen", 3)}
    `;

    const groups = [
      { key: "ANIMATION", slugs: ["diaoji", "mikan"] },
      { key: "MANGA", slugs: ["diary"] },
      { key: "ILLUSTRATION", slugs: ["digital", "zen"] },
      { key: "PICTURE BOOK", slugs: ["weisheng", "jigong", "nuwa", "unseen"] },
      { key: "VISUAL DESIGN", slugs: ["calendar"] }
    ];
    catalog.innerHTML = groups.map(group => `<section class="catalog-group">
      <h3 class="catalog-group-title">${group.key}</h3>
      ${group.slugs.map(slug => {
        const work = works.find(item => item.slug === slug);
        return `<a class="catalog-card" href="${workHref(slug)}">
          <figure>${imageMarkup(work.cover, title(work, lang))}</figure>
          <div class="catalog-card-copy"><h3>${escapeHtml(title(work, lang))}</h3><time>${work.year}</time></div>
        </a>`;
      }).join("")}
    </section>`).join("");
  }

  function galleryItem(src, work, className = "gallery-item") {
    const alt = `${title(work, lang)} — ${src.split("/").pop()}`;
    return `<figure class="${className}"><button class="art-button" type="button" data-lightbox-src="${asset(src)}" aria-label="${escapeHtml(alt)}">${imageMarkup(src, alt)}</button></figure>`;
  }

  function renderStandardGallery(work) {
    const classMap = {
      diary: "gallery-diary",
      editorial: "gallery-editorial",
      series: "gallery-series",
      circles: "gallery-circles",
      picturebook: "gallery-picturebook",
      "picturebook-wide": "gallery-picturebook-wide",
      storybook: "gallery-picturebook"
    };
    return `<section class="work-gallery ${classMap[work.layoutType] || "gallery-stack"}">${work.images.map(src => galleryItem(src, work)).join("")}</section>`;
  }

  function renderSpecialGallery(work) {
    if (work.layoutType === "animation-title") {
      return `<section class="work-gallery gallery-stack">${work.images.map(src => galleryItem(src, work)).join("")}</section>`;
    }
    if (work.layoutType === "mikan") {
      const classes = ["mikan-poster", "mikan-wide", "mikan-study", "mikan-wide"];
      return `<section class="work-gallery">${work.images.map((src, index) => galleryItem(src, work, classes[index])).join("")}
        <p class="film-bottom"><a class="film-link" href="${work.video}" target="_blank" rel="noopener noreferrer">${homeText[lang].watch} ↗</a></p></section>`;
    }
    if (work.layoutType === "weisheng-editorial") {
      return `<section class="work-gallery gallery-weisheng">
        ${work.galleryGroups.map(group => `<div class="weisheng-row weisheng-${group.type}">
          ${group.images.map(src => galleryItem(src, work)).join("")}
        </div>`).join("")}
      </section>`;
    }
    if (work.layoutType === "calendar") {
      return `<section class="calendar-gallery">
        ${work.annual.map(item => `<figure class="annual-calendar"><figcaption class="calendar-year">${item.year}</figcaption><button class="art-button" type="button" data-lightbox-src="${asset(item.src)}">${imageMarkup(item.src, `${title(work, lang)} ${item.year}`)}</button></figure>`).join("")}
        <h2 class="calendar-2026-title">2026</h2>
        <div class="calendar-months">${work.months2026.map((src, index) => `<figure><figcaption class="calendar-year">${String(index + 1).padStart(2, "0")}</figcaption><button class="art-button" type="button" data-lightbox-src="${asset(src)}">${imageMarkup(src, `${title(work, lang)} 2026-${index + 1}`)}</button></figure>`).join("")}</div>
      </section>`;
    }
    return renderStandardGallery(work);
  }

  function renderStory(work) {
    const blocks = work[`story_${lang}`];
    if (!Array.isArray(blocks) || !blocks.length) return "";
    return `<section class="work-story" aria-label="${escapeHtml(title(work, lang))}">
      ${blocks.map(block => `<p>${escapeHtml(block).replace(/\n/g, "<br>")}</p>`).join("")}
    </section>`;
  }

  function renderWork() {
    const container = document.getElementById("work-page");
    if (!container) return;
    const slug = new URLSearchParams(location.search).get("work");
    const workIndex = works.findIndex(item => item.slug === slug);
    if (workIndex < 0) {
      container.innerHTML = `<section class="not-found"><h1>Work not found</h1><a class="arrow-link" href="${BASE}#works">← ${homeText[lang].allWorks}</a></section>`;
      return;
    }
    const work = works[workIndex];
    const previous = works[(workIndex - 1 + works.length) % works.length];
    const next = works[(workIndex + 1) % works.length];
    const titleImage = work.titleImage ? `<figure class="title-image">${imageMarkup(work.titleImage, title(work, lang), true)}</figure>` : "";
    const topFilm = work.video && work.layoutType !== "mikan" ? `<a class="film-link" href="${work.video}" target="_blank" rel="noopener noreferrer">${homeText[lang].watch} ↗</a>` : "";
    const articleClass = work.layoutType === "weisheng-editorial" ? "work-weisheng" : "";
    document.body.classList.toggle("weisheng-detail", work.layoutType === "weisheng-editorial");
    container.innerHTML = `<article class="${articleClass}">
      <header class="work-intro">
        <p class="work-meta">${escapeHtml(work.category[lang])} · ${work.year}</p>
        <div class="work-titles"><h1>${escapeHtml(work.title_zh)}</h1><p class="title-ja">${escapeHtml(work.title_ja)}</p><p class="title-en">${escapeHtml(work.title_en)}</p></div>
        ${titleImage}
        <p class="work-description">${escapeHtml(description(work, lang))}</p>
        ${topFilm}
      </header>
      ${renderStory(work)}
      ${renderSpecialGallery(work)}
      <nav class="work-nav" aria-label="Work navigation">
        <div class="work-nav-links">
          <a href="${workHref(previous.slug)}"><small>← ${homeText[lang].previous}</small><strong>${escapeHtml(title(previous, lang))}</strong></a>
          <a href="${workHref(next.slug)}"><small>${homeText[lang].next} →</small><strong>${escapeHtml(title(next, lang))}</strong></a>
        </div>
        <a class="back-bottom" href="${BASE}#works">← ${homeText[lang].back}</a>
      </nav>
    </article>`;
    document.title = `${title(work, lang)} / CAI XIAOYAO`;
    bindLightbox();
  }

  function bindLightbox() {
    const lightbox = document.getElementById("lightbox");
    const image = document.getElementById("lightbox-image");
    if (!lightbox || !image) return;
    document.querySelectorAll("[data-lightbox-src]").forEach(button => {
      button.addEventListener("click", () => {
        image.src = button.dataset.lightboxSrc;
        image.alt = button.querySelector("img")?.alt || "";
        lightbox.hidden = false;
        document.body.classList.add("lightbox-open");
        lightbox.querySelector("button").focus();
      });
    });
    const close = () => {
      lightbox.hidden = true;
      image.removeAttribute("src");
      document.body.classList.remove("lightbox-open");
    };
    lightbox.addEventListener("click", event => { if (event.target === lightbox || event.target.closest(".lightbox-close")) close(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape" && !lightbox.hidden) close(); });
  }

  document.querySelectorAll("[data-lang]").forEach(button => button.addEventListener("click", () => setLanguage(button.dataset.lang)));
  const menu = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = menu.getAttribute("aria-expanded") !== "true";
      menu.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => { menu.setAttribute("aria-expanded", "false"); nav.classList.remove("is-open"); }));
  }
  initHero();
  setLanguage(lang);
})();
