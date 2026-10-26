(function () {
  "use strict";

  var translations = {
    en: {
      invitation: "Wedding invitation",
      cardKicker: "Together with our families",
      cardTap: "Tap the card to open",
      cardAria: "Open Asifiwe and Didier’s wedding invitation",
      welcomeCopy: "With the blessing of our families, Asifiwe and Didier warmly invite you to celebrate their wedding.",
      chooseLanguage: "Choose your language",
      continueInvitation: "Continue in English",
      letterPrompt: "Your invitation is waiting",
      musicHint: "The music begins as the card opens.",
      navInvitation: "Invitation",
      navCountdown: "Countdown",
      navProgram: "Program",
      navVenues: "Venues",
      navGallery: "Gallery",
      navContact: "Contact",
      tocWelcome: "Welcome",
      tocInvitation: "Our invitation",
      tocCountdown: "Countdown",
      tocProgram: "Program",
      tocVenues: "Venues",
      tocStory: "Our story",
      tocContact: "RSVP & contact",
      heroIntro: "With the blessing of our families, we invite you to join us as we celebrate our wedding.",
      seeProgram: "See the day’s program",
      saveDate: "Save the date",
      scroll: "Scroll to discover",
      quoteRw: "Bityo rero ntibaba bakiri babiri, ahubwo baba umwe. Nuko rero icyo Imana yafatanije, umuntu ntakagitandukanyukane.",
      quoteEn: "“Therefore they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”",
      invitationCopy: "Together with our families, we joyfully invite you to witness and celebrate our marriage.",
      signoff: "We look forward to celebrating with you!",
      until: "Until we say “I do”",
      countdownTitle: "The day is getting closer",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      addCalendar: "Add to calendar",
      googleCalendar: "Google Calendar",
      programLabel: "The wedding day",
      programTitle: "Three moments, one beautiful day",
      programSubtitle: "Join us in Rubavu — Gisenyi for a day filled with love, faith and celebration.",
      firstGathering: "The first gathering",
      ceremonyTitle: "Traditional family celebration",
      blessing: "A sacred blessing",
      religiousTitle: "Religious wedding ceremony",
      evening: "The evening celebration",
      receptionTitle: "Reception for invited guests",
      eventDescriptionFirst: "A joyful traditional celebration with our families.",
      eventDescriptionChurch: "Join us for our church wedding ceremony.",
      eventDescriptionEvening: "Welcoming our guests for an evening of celebration.",
      directions: "Directions on Maps",
      localTime: "All listed times are Rwanda local time (CAT).",
      programNote: "We look forward to celebrating with you!",
      where: "Where to join us",
      venueTitle: "Find your way to the celebration",
      venueSubtitle: "Both venues are in Rubavu — Gisenyi, Rwanda.",
      hallType: "Ceremony & reception",
      firstAt: "Gather from",
      andAgain: "and again at",
      openMaps: "Open in Maps",
      churchType: "Religious ceremony · 13:00",
      churchLocation: "Rubavu · Gisenyi",
      churchTip: "Use the shared church pin for the most direct location.",
      openChurchMap: "Open church pin in Maps",
      mapFootnote: "The Google Maps links open directions in a new tab.",
      ourStory: "A glimpse of our story",
      galleryTitle: "A little love, a lot of joy",
      rsvpLabel: "Save us a place in your heart",
      contactTitle: "We can’t wait to celebrate with you",
      contactSubtitle: "For questions or to share your RSVP, reach Asifiwe or Didier directly.",
      bride: "The bride",
      groom: "The groom",
      messageAsifiwe: "Message Asifiwe",
      messageDidier: "Message Didier",
      galleryMsgAsifiwe: "A joyful heart, ready for a lifetime of love.",
      galleryMsgTogether: "Together is a beautiful place to be.",
      galleryMsgPromise: "A promise made for every season.",
      galleryMsgSide: "Every story is sweeter side by side.",
      galleryMsgMoments: "The little moments become our favorite memories.",
      galleryMsgHolding: "A promise, held close.",
      galleryShowPhoto: "Show photo",
      galleryPrevious: "Previous photo",
      galleryNext: "Next photo",
      galleryChoosePhoto: "Choose a photo",
      moreContacts: "More family contacts",
      footerLine: "With love, Asifiwe & Didier · 13 December 2026 · Rubavu, Rwanda",
      musicLabel: "Our song",
      musicOff: "Tap to play",
      musicOn: "Now playing",
      musicError: "Could not play audio",
      copied: "Invitation link copied",
      shareTitle: "Asifiwe & Didier — Wedding Invitation",
      shareText: "Join us to celebrate on 13 December 2026 in Rubavu — Gisenyi.",
      afterWedding: "The celebration day is here. With love, Asifiwe & Didier."
    },
    rw: {
      invitation: "Ubutumire bw’ubukwe",
      cardKicker: "Turi kumwe n’imiryango yacu",
      cardTap: "Kanda ku ikarita uyifungure",
      cardAria: "Fungura ubutumire bw’ubukwe bwa Asifiwe na Didier",
      welcomeCopy: "Imiryango yacu ibifurije amahoro, Asifiwe na Didier barabatumiye mu birori by’ubukwe bwabo.",
      chooseLanguage: "Hitamo ururimi",
      continueInvitation: "Komeza mu Kinyarwanda",
      letterPrompt: "Ubutumire bwawe buragutegereje",
      musicHint: "Indirimbo iracuranga igihe ufungura ikarita.",
      navInvitation: "Ubutumire",
      navCountdown: "Igihe gisigaye",
      navProgram: "Gahunda",
      navVenues: "Aho tuzahurira",
      navGallery: "Amafoto",
      navContact: "Abo mwavugana",
      tocWelcome: "Ahabanza",
      tocInvitation: "Ubutumire",
      tocCountdown: "Igihe gisigaye",
      tocProgram: "Gahunda",
      tocVenues: "Aho tuzahurira",
      tocStory: "Inkuru yacu",
      tocContact: "RSVP & abo mwavugana",
      heroIntro: "Tuzishimira kwifatanya namwe mu birori by’ubukwe bwacu.",
      seeProgram: "Reba gahunda y’umunsi",
      saveDate: "Bika itariki",
      scroll: "Manuka urebe ibikurikira",
      quoteRw: "Bityo rero ntibaba bakiri babiri, ahubwo baba umwe. Nuko rero icyo Imana yafatanije, umuntu ntakagitandukanyukane.",
      quoteEn: "“Therefore they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.”",
      invitationCopy: "Tuzishimira kwifatanya namwe mu birori by’ubukwe bwacu.",
      signoff: "Kwifatanya natwe bizadushimisha!",
      until: "Hasigaye igihe gito tukavuga tuti “Ndabyemeye”",
      countdownTitle: "Umunsi uragenda wegereza",
      days: "Iminsi",
      hours: "Amasaha",
      minutes: "Iminota",
      seconds: "Amasegonda",
      addCalendar: "Bika muri kalendari",
      googleCalendar: "Google Calendar",
      programLabel: "Gahunda y’umunsi w’ubukwe",
      programTitle: "Ibihe bitatu by’umunsi w’ibyishimo",
      programSubtitle: "Tuzabonana i Rubavu — Gisenyi mu munsi w’urukundo, ukwemera n’ibyishimo.",
      firstGathering: "Gusaba no gukwa",
      ceremonyTitle: "Gusaba no gukwa",
      blessing: "Umuhango wo gusezerana",
      religiousTitle: "Gusezerana imbere y’Imana",
      evening: "Kwizihiza nimugoroba",
      receptionTitle: "Abatumirwa bazakirirwa",
      eventDescriptionFirst: "Ibirori byo gusaba no gukwa n’imiryango yacu.",
      eventDescriptionChurch: "Muze twifatanye mu muhango wo gusezerana imbere y’Imana.",
      eventDescriptionEvening: "Kwakira abashyitsi no kwishimira urukundo.",
      directions: "Reba inzira kuri Maps",
      localTime: "Amasaha yose yavuzwe ni ay’igihe cyo mu Rwanda (CAT).",
      programNote: "Kwifatanya natwe bizadushimisha!",
      where: "Aho tuzahurira",
      venueTitle: "Dore uko wagera aho ibirori bizabera",
      venueSubtitle: "Aho hombi ni i Rubavu — Gisenyi, mu Rwanda.",
      hallType: "Gusaba no gukwa · Kwakira abashyitsi",
      firstAt: "Tuzahurira saa",
      andAgain: "tuzongera saa",
      openMaps: "Fungura ikarita",
      churchType: "Gusezerana imbere y’Imana · 13:00",
      churchLocation: "Rubavu · Gisenyi",
      churchTip: "Koresha pin y’urusengero twasangije kugira ngo urubone neza.",
      openChurchMap: "Reba urusengero kuri Maps",
      mapFootnote: "Ikarita ya Google izafunguka mu rubuga rushya.",
      ourStory: "Inkuru y’urukundo rwacu",
      galleryTitle: "Urukundo n’ibyishimo byinshi",
      rsvpLabel: "Tuzishimira kukubona",
      contactTitle: "Twishimiye kuzabana namwe",
      contactSubtitle: "Ku bibazo cyangwa kubamenyesha ko muzaza, muvugane na Asifiwe cyangwa Didier.",
      bride: "Umugeni",
      groom: "Umukwe",
      messageAsifiwe: "Andikira Asifiwe",
      messageDidier: "Andikira Didier",
      galleryMsgAsifiwe: "Umutima wuzuye ibyishimo, witeguye urukundo rw’iteka.",
      galleryMsgTogether: "Kuba hamwe ni ibyiza cyane.",
      galleryMsgPromise: "Isezerano ry’urukundo ry’ibihe byose.",
      galleryMsgSide: "Inkuru yacu irushaho kuba nziza turi kumwe.",
      galleryMsgMoments: "Ibihe bito bidusigira urwibutso rwiza.",
      galleryMsgHolding: "Urukundo ruduhuza.",
      galleryShowPhoto: "Reba ifoto",
      galleryPrevious: "Ifoto ibanza",
      galleryNext: "Ifoto ikurikira",
      galleryChoosePhoto: "Hitamo ifoto",
      moreContacts: "Abandi bo mu miryango mwavugana",
      footerLine: "Urukundo rwinshi, Asifiwe & Didier · 13 Ukuboza 2026 · Rubavu, Rwanda",
      musicLabel: "Indirimbo yacu",
      musicOff: "Kanda uyumve",
      musicOn: "Iririmo gucuranga",
      musicError: "Indirimbo ntiyacuranzwe",
      copied: "Link y’ubutumire yakopiwe",
      shareTitle: "Asifiwe & Didier — Ubutumire bw’ubukwe",
      shareText: "Muze twifatanye mu birori byo ku wa 13 Ukuboza 2026 i Rubavu — Gisenyi.",
      afterWedding: "Umunsi w’ibirori urageze. Urukundo rwinshi, Asifiwe & Didier."
    }
  };

  var currentLanguage = "en";
  var welcome = document.getElementById("welcome");
  var continueButton = document.getElementById("continue-invitation");
  var openButton = document.getElementById("open-invitation");
  var introStage = document.getElementById("welcome-intro-stage");
  var letterStage = document.getElementById("welcome-letter-stage");
  var flowerRain = document.getElementById("flower-rain");
  var music = document.getElementById("wedding-music");
  var musicButton = document.getElementById("music-toggle");
  var musicStatus = document.getElementById("music-status");
  var toast = document.getElementById("toast");
  var menuToggle = document.getElementById("menu-toggle");
  var navigation = document.getElementById("main-navigation");
  var siteHeader = document.querySelector(".site-header");
  var weddingDate = new Date("2026-12-13T09:00:00+02:00").getTime();
  var toastTimer;
  var openingStarted = false;
  var gallerySlides = Array.from(document.querySelectorAll(".gallery-slide"));
  var galleryTrack = document.getElementById("gallery-track");
  var galleryDotsRoot = document.getElementById("gallery-dots");
  var galleryStatus = document.getElementById("gallery-status");
  var gallerySlideIndex = 0;
  var galleryTimer = null;
  var galleryInView = false;
  var galleryHover = false;
  var galleryFocus = false;
  var galleryTouchPause = false;
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setLanguage(language) {
    currentLanguage = language === "rw" ? "rw" : "en";
    document.documentElement.lang = currentLanguage === "rw" ? "rw" : "en";
    var copy = translations[currentLanguage];
    document.querySelectorAll("[data-copy]").forEach(function (element) {
      var key = element.getAttribute("data-copy");
      if (Object.prototype.hasOwnProperty.call(copy, key)) {
        element.textContent = copy[key];
      }
    });
    document.querySelectorAll("[data-language]").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-language") === currentLanguage ? "true" : "false");
    });
    document.querySelectorAll("[data-aria-copy]").forEach(function (element) {
      var key = element.getAttribute("data-aria-copy");
      if (Object.prototype.hasOwnProperty.call(copy, key)) {
        element.setAttribute("aria-label", copy[key]);
      }
    });
    if (Date.now() >= weddingDate) {
      document.querySelector('[data-copy="countdownTitle"]').textContent = copy.afterWedding;
    }
    document.querySelectorAll(".gallery-dot").forEach(function (dot, index) {
      dot.setAttribute("aria-label", copy.galleryShowPhoto + " " + (index + 1));
    });
    updateGalleryStatus();
    musicStatus.textContent = music.paused ? copy.musicOff : copy.musicOn;
    musicButton.setAttribute("aria-label", music.paused ? copy.musicOff : copy.musicOn);
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove("is-visible");
    }, 2800);
  }

  function initializeSlideshow(containerId, interval) {
    var container = document.getElementById(containerId);
    if (!container || reducedMotion) return;
    var slides = Array.from(container.querySelectorAll("[data-slideshow-slide]"));
    if (slides.length < 2) return;
    var activeIndex = Math.max(0, slides.findIndex(function (slide) {
      return slide.classList.contains("is-active");
    }));
    window.setInterval(function () {
      if (document.hidden) return;
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % slides.length;
      slides[activeIndex].classList.add("is-active");
    }, interval);
  }

  function initializeAmbientLights(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var count = window.matchMedia("(max-width: 700px)").matches ? 11 : 20;
    for (var index = 0; index < count; index += 1) {
      var mote = document.createElement("span");
      mote.className = "firefly";
      mote.style.left = (4 + Math.random() * 92) + "%";
      mote.style.top = (5 + Math.random() * 88) + "%";
      mote.style.setProperty("--size", (1.5 + Math.random() * 2.2).toFixed(1) + "px");
      mote.style.setProperty("--delay", (-Math.random() * 8).toFixed(2) + "s");
      mote.style.setProperty("--duration", (5 + Math.random() * 6).toFixed(2) + "s");
      mote.style.setProperty("--dx", ((Math.random() - .5) * 55).toFixed(0) + "px");
      mote.style.setProperty("--dy", ((Math.random() - .5) * 70).toFixed(0) + "px");
      container.appendChild(mote);
    }
    for (var streak = 0; streak < 2; streak += 1) {
      var shootingStar = document.createElement("span");
      shootingStar.className = "shooting-star";
      shootingStar.style.setProperty("--shoot-top", (8 + Math.random() * 48).toFixed(1) + "%");
      shootingStar.style.setProperty("--shoot-delay", (-Math.random() * 8.5).toFixed(2) + "s");
      container.appendChild(shootingStar);
    }
  }

  function initializeFlowerRain() {
    if (!flowerRain) return;
    var flowers = ["✿", "❀", "✽", "✾"];
    for (var index = 0; index < 34; index += 1) {
      var flower = document.createElement("span");
      flower.className = "flower-petal";
      flower.textContent = flowers[index % flowers.length];
      flower.style.left = (Math.random() * 100).toFixed(1) + "%";
      flower.style.setProperty("--flower-delay", (Math.random() * .55).toFixed(2) + "s");
      flower.style.setProperty("--flower-duration", (1.7 + Math.random() * 1.25).toFixed(2) + "s");
      flower.style.setProperty("--flower-drift", ((Math.random() - .5) * 170).toFixed(0) + "px");
      flower.style.setProperty("--flower-size", (12 + Math.random() * 16).toFixed(0) + "px");
      flowerRain.appendChild(flower);
    }
  }

  function updateGalleryStatus() {
    if (!galleryStatus || !gallerySlides.length) return;
    if (currentLanguage === "rw") {
      galleryStatus.textContent = "Ifoto " + (gallerySlideIndex + 1) + " muri " + gallerySlides.length;
    } else {
      galleryStatus.textContent = "Photo " + (gallerySlideIndex + 1) + " of " + gallerySlides.length;
    }
  }

  function showGallerySlide(index) {
    if (!gallerySlides.length || !galleryTrack) return;
    gallerySlideIndex = (index + gallerySlides.length) % gallerySlides.length;
    galleryTrack.style.transform = "translate3d(" + (-gallerySlideIndex * 100) + "%,0,0)";
    gallerySlides.forEach(function (slide, slideIndex) {
      var active = slideIndex === gallerySlideIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");
    });
    document.querySelectorAll(".gallery-dot").forEach(function (dot, dotIndex) {
      dot.setAttribute("aria-current", dotIndex === gallerySlideIndex ? "true" : "false");
    });
    updateGalleryStatus();
  }

  function syncGalleryAutoplay() {
    var shouldPlay = galleryInView && !galleryHover && !galleryFocus && !galleryTouchPause && !reducedMotion && !document.hidden;
    if (!shouldPlay) {
      if (galleryTimer) window.clearInterval(galleryTimer);
      galleryTimer = null;
      return;
    }
    if (!galleryTimer) {
      galleryTimer = window.setInterval(function () {
        showGallerySlide(gallerySlideIndex + 1);
      }, 6400);
    }
  }

  function initializeGallery() {
    var carousel = document.getElementById("gallery-carousel");
    var viewport = document.getElementById("gallery-viewport");
    if (!carousel || !viewport || !galleryDotsRoot || !gallerySlides.length) return;
    gallerySlides.forEach(function (slide, index) {
      slide.setAttribute("aria-hidden", index === 0 ? "false" : "true");
      var dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gallery-dot";
      dot.setAttribute("aria-current", index === 0 ? "true" : "false");
      dot.setAttribute("aria-label", translations[currentLanguage].galleryShowPhoto + " " + (index + 1));
      dot.addEventListener("click", function () {
        showGallerySlide(index);
      });
      galleryDotsRoot.appendChild(dot);
    });
    document.getElementById("gallery-previous").addEventListener("click", function () {
      showGallerySlide(gallerySlideIndex - 1);
    });
    document.getElementById("gallery-next").addEventListener("click", function () {
      showGallerySlide(gallerySlideIndex + 1);
    });
    if (window.matchMedia("(hover: hover)").matches) {
      carousel.addEventListener("mouseenter", function () {
        galleryHover = true;
        syncGalleryAutoplay();
      });
      carousel.addEventListener("mouseleave", function () {
        galleryHover = false;
        syncGalleryAutoplay();
      });
    }
    carousel.addEventListener("focusin", function () {
      galleryFocus = true;
      syncGalleryAutoplay();
    });
    carousel.addEventListener("focusout", function (event) {
      if (!carousel.contains(event.relatedTarget)) {
        galleryFocus = false;
        syncGalleryAutoplay();
      }
    });
    var pointerStart = null;
    viewport.addEventListener("pointerdown", function (event) {
      if (event.pointerType !== "touch") return;
      pointerStart = event.clientX;
      galleryTouchPause = true;
      syncGalleryAutoplay();
    }, { passive: true });
    viewport.addEventListener("pointerup", function (event) {
      if (pointerStart === null) return;
      var delta = event.clientX - pointerStart;
      if (Math.abs(delta) > 45) {
        showGallerySlide(gallerySlideIndex + (delta < 0 ? 1 : -1));
      }
      pointerStart = null;
      window.setTimeout(function () {
        galleryTouchPause = false;
        syncGalleryAutoplay();
      }, 1200);
    }, { passive: true });
    viewport.addEventListener("pointercancel", function () {
      pointerStart = null;
      galleryTouchPause = false;
      syncGalleryAutoplay();
    }, { passive: true });
    if ("IntersectionObserver" in window) {
      var galleryObserver = new IntersectionObserver(function (entries) {
        galleryInView = entries.some(function (entry) { return entry.isIntersecting; });
        syncGalleryAutoplay();
      }, { threshold: .2 });
      galleryObserver.observe(carousel);
    } else {
      galleryInView = true;
      syncGalleryAutoplay();
    }
    document.addEventListener("visibilitychange", syncGalleryAutoplay);
  }

  document.querySelectorAll("[data-language]").forEach(function (button) {
    button.addEventListener("click", function () {
      setLanguage(button.getAttribute("data-language"));
    });
  });

  continueButton.addEventListener("click", function () {
    welcome.classList.add("show-letter");
    introStage.setAttribute("aria-hidden", "true");
    letterStage.setAttribute("aria-hidden", "false");
    window.setTimeout(function () { openButton.focus(); }, 350);
  });

  openButton.addEventListener("click", function () {
    if (openingStarted) return;
    openingStarted = true;
    openButton.disabled = true;
    welcome.classList.add("is-opening");
    music.play().then(function () {
      musicButton.setAttribute("aria-pressed", "true");
      musicButton.setAttribute("aria-label", translations[currentLanguage].musicOn);
      musicStatus.textContent = translations[currentLanguage].musicOn;
    }).catch(function () {
      showToast(translations[currentLanguage].musicError);
    });
    window.setTimeout(function () {
      document.body.classList.add("opened");
      welcome.classList.add("is-dismissed");
      var motion = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      document.getElementById("home").scrollIntoView({ behavior: motion, block: "start" });
      window.setTimeout(function () {
        welcome.setAttribute("aria-hidden", "true");
        document.querySelector(".brand").focus({ preventScroll: true });
      }, 150);
    }, reducedMotion ? 550 : 3600);
  });

  menuToggle.addEventListener("click", function () {
    var expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    menuToggle.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !expanded);
  });

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navigation.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  });

  musicButton.addEventListener("click", function () {
    if (music.paused) {
      music.play().then(function () {
        musicButton.setAttribute("aria-pressed", "true");
        musicButton.setAttribute("aria-label", translations[currentLanguage].musicOn);
        musicStatus.textContent = translations[currentLanguage].musicOn;
      }).catch(function () {
        showToast(translations[currentLanguage].musicError);
      });
    } else {
      music.pause();
      musicButton.setAttribute("aria-pressed", "false");
      musicButton.setAttribute("aria-label", translations[currentLanguage].musicOff);
      musicStatus.textContent = translations[currentLanguage].musicOff;
    }
  });

  music.addEventListener("ended", function () {
    musicButton.setAttribute("aria-pressed", "false");
    musicStatus.textContent = translations[currentLanguage].musicOff;
  });

  document.getElementById("share-button").addEventListener("click", async function () {
    var shareData = {
      title: translations[currentLanguage].shareTitle,
      text: translations[currentLanguage].shareText,
      url: window.location.href
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        if (error && error.name !== "AbortError") {
          showToast(window.location.href);
        }
      }
    } else if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast(translations[currentLanguage].copied);
      } catch (error) {
        showToast(window.location.href);
      }
    } else {
      showToast(window.location.href);
    }
  });

  function updateCountdown() {
    var remaining = weddingDate - Date.now();
    if (remaining <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      document.querySelector('[data-copy="countdownTitle"]').textContent = translations[currentLanguage].afterWedding;
      return;
    }
    var seconds = Math.floor(remaining / 1000);
    var values = {
      days: Math.floor(seconds / 86400),
      hours: Math.floor((seconds % 86400) / 3600),
      minutes: Math.floor((seconds % 3600) / 60),
      seconds: seconds % 60
    };
    Object.keys(values).forEach(function (key) {
      document.getElementById(key).textContent = String(values[key]).padStart(2, "0");
    });
  }
  function syncHeaderSurface() {
    var hero = document.getElementById("home");
    if (!siteHeader || !hero) return;
    siteHeader.classList.toggle("is-solid", hero.getBoundingClientRect().bottom <= siteHeader.offsetHeight + 1);
  }

  initializeSlideshow("welcome-backdrop", 5600);
  initializeSlideshow("hero-slideshow", 5600);
  initializeAmbientLights("welcome-lights");
  initializeAmbientLights("hero-lights");
  initializeFlowerRain();
  initializeGallery();
  setLanguage("en");
  updateCountdown();
  window.setInterval(updateCountdown, 1000);
  syncHeaderSurface();
  window.addEventListener("scroll", syncHeaderSurface, { passive: true });
  window.addEventListener("resize", syncHeaderSurface);

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(function (element) {
      observer.observe(element);
    });
    var tocLinks = Array.from(document.querySelectorAll(".toc-link"));
    var tocObserver = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; })[0];
      if (!visible) return;
      tocLinks.forEach(function (link) {
        if (link.getAttribute("href") === "#" + visible.target.id) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    }, { rootMargin: "-20% 0px -58% 0px", threshold: [0, .12, .4] });
    ["home", "invitation", "countdown", "program", "venues", "gallery", "contact"].forEach(function (id) {
      var section = document.getElementById(id);
      if (section) tocObserver.observe(section);
    });
  } else {
    document.querySelectorAll(".reveal").forEach(function (element) {
      element.classList.add("is-visible");
    });
  }
})();
