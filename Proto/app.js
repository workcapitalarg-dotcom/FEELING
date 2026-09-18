/* FEELING APP - INTERACTIVE CONTROLLER (SCR-201 HOME & SCR-301/SCR-302 AGENDA) */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // -------------------------------------------------------------
  // 1. OS DEVICE VIEW SWITCHER (Ambos / Android / iOS)
  // -------------------------------------------------------------
  const btnBoth = document.getElementById('btn-both');
  const btnAndroid = document.getElementById('btn-android');
  const btnIos = document.getElementById('btn-ios');

  const mockupAndroid = document.getElementById('mockup-android');
  const mockupIos = document.getElementById('mockup-ios');

  const allBtns = [btnBoth, btnAndroid, btnIos];

  function setActiveBtn(activeBtn) {
    allBtns.forEach(btn => btn?.classList.remove('active'));
    activeBtn?.classList.add('active');
  }

  if (btnBoth) {
    btnBoth.addEventListener('click', () => {
      setActiveBtn(btnBoth);
      mockupAndroid?.classList.remove('hidden');
      mockupIos?.classList.remove('hidden');
    });
  }

  if (btnAndroid) {
    btnAndroid.addEventListener('click', () => {
      setActiveBtn(btnAndroid);
      mockupAndroid?.classList.remove('hidden');
      mockupIos?.classList.add('hidden');
    });
  }

  if (btnIos) {
    btnIos.addEventListener('click', () => {
      setActiveBtn(btnIos);
      mockupAndroid?.classList.add('hidden');
      mockupIos?.classList.remove('hidden');
    });
  }

  // -------------------------------------------------------------
  // 2. ACCORDION CONTROLLER FOR HOME DISCOVERY CARDS
  // -------------------------------------------------------------
  const accordionCards = document.querySelectorAll('.accordion-card');
  const heroIntroBtns = document.querySelectorAll('.hero-intro-btn');
  const heroCards = document.querySelectorAll('.hero-card');

  let activeCardType = null;

  function activateCard(cardType) {
    if (activeCardType === cardType) {
      activeCardType = null;
    } else {
      activeCardType = cardType;
    }

    if (activeCardType === null) {
      heroCards.forEach(hero => hero.classList.remove('blurred-collapsed'));
      accordionCards.forEach(card => card.classList.remove('expanded'));

      document.querySelectorAll('[data-view="home"]').forEach(viewport => {
        viewport.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      heroCards.forEach(hero => hero.classList.add('blurred-collapsed'));

      accordionCards.forEach(card => {
        if (card.dataset.card === activeCardType) {
          card.classList.add('expanded');
          setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        } else {
          card.classList.remove('expanded');
        }
      });
    }
  }

  accordionCards.forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.classList.contains('card-btn')) return;
      const type = card.dataset.card;
      activateCard(type);
    });
  });

  heroIntroBtns.forEach(hero => {
    hero.addEventListener('click', (e) => {
      if (e.target.classList.contains('cta-pill-btn')) return;
      if (activeCardType !== null) {
        activateCard(null);
      }
    });
  });

  // -------------------------------------------------------------
  // 3. BOTTOM NAVBAR CONTROLLER (SWITCH BETWEEN HOME & AGENDA)
  // -------------------------------------------------------------
  const navItems = document.querySelectorAll('.nav-item');

  function switchMainView(viewName) {
    navItems.forEach(item => {
      if (item.dataset.nav === viewName) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    const homeViews = document.querySelectorAll('[data-view="home"]');
    const agendaViews = document.querySelectorAll('[data-view="agenda"]');

    if (viewName === 'agenda') {
      homeViews.forEach(v => v.classList.add('hidden'));
      agendaViews.forEach(v => v.classList.remove('hidden'));
    } else {
      homeViews.forEach(v => v.classList.remove('hidden'));
      agendaViews.forEach(v => v.classList.add('hidden'));
    }
  }

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const navTarget = item.dataset.nav;
      if (navTarget === 'agenda' || navTarget === 'home') {
        switchMainView(navTarget);
      }
    });
  });

  // -------------------------------------------------------------
  // 4. AGENDA SUB-VIEW SWITCHER (PROXIMAMENTE vs CALENDARIO)
  // -------------------------------------------------------------
  const agendaTabBtns = document.querySelectorAll('.agenda-tab-btn');

  function switchAgendaTab(tabName) {
    agendaTabBtns.forEach(btn => {
      if (btn.dataset.agendaTab === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    const subviewsProximamente = document.querySelectorAll('[data-subview="proximamente"]');
    const subviewsCalendario = document.querySelectorAll('[data-subview="calendario"]');

    if (tabName === 'calendario') {
      subviewsProximamente.forEach(s => s.classList.add('hidden'));
      subviewsCalendario.forEach(s => s.classList.remove('hidden'));
    } else {
      subviewsProximamente.forEach(s => s.classList.remove('hidden'));
      subviewsCalendario.forEach(s => s.classList.add('hidden'));
    }
  }

  agendaTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabName = btn.dataset.agendaTab;
      switchAgendaTab(tabName);
    });
  });

  // -------------------------------------------------------------
  // 5. MINI-CAROUSEL CONTROLLER FOR EVENT CARDS
  // -------------------------------------------------------------
  const eventImages = {
    bano: [
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/DFD_8902.jpg',
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/2024-01-06-440.jpg',
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/DFDP1540.jpg',
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/DFDP1921.jpg',
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/DFD_8905.jpg',
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/DFD_9379.jpg',
      '../FOTOGRAFIAS/EVENTOS/BAÑO CEREMONIAL/DSC_8308.JPG'
    ],
    diwali: [
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4096.jpg',
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4109.jpg',
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4137.jpg',
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4144.jpg',
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4178.jpg',
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4223.jpg',
      '../FOTOGRAFIAS/EVENTOS/DIWALI/DIE_4235.jpg'
    ],
    peregrino: [
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-03-21-193.jpg',
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-03-21-203.jpg',
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-03-21-207.jpg',
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-03-23-141.jpg',
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-03-23-99.jpg',
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-03-29-105.jpg',
      '../FOTOGRAFIAS/EVENTOS/PEREGRINO/2024-10-16-301.jpg'
    ],
    vibhuti: [
      '../FOTOGRAFIAS/VIBHUTI.jpg',
      '../FOTOGRAFIAS/EVENTOS/VIBHUTI/02 DFD_8673.jpg',
      '../FOTOGRAFIAS/EVENTOS/VIBHUTI/04 DFDP1408.jpg',
      '../FOTOGRAFIAS/EVENTOS/VIBHUTI/05 DFDP1583.jpg',
      '../FOTOGRAFIAS/EVENTOS/VIBHUTI/06 DFD_9493.jpg',
      '../FOTOGRAFIAS/EVENTOS/VIBHUTI/08 DFDP1632.jpg'
    ]
  };

  const photoBoxes = document.querySelectorAll('.agenda-photo-box');
  photoBoxes.forEach(box => {
    const carouselKey = box.dataset.carousel;
    if (!carouselKey || !eventImages[carouselKey]) return;

    const imgEl = box.querySelector('.agenda-photo-img');
    const prevBtn = box.querySelector('.carousel-arrow.prev');
    const nextBtn = box.querySelector('.carousel-arrow.next');

    let currentIndex = 0;
    const images = eventImages[carouselKey];

    const updateImage = (index) => {
      imgEl.style.opacity = '0.5';
      setTimeout(() => {
        imgEl.src = images[index];
        imgEl.style.opacity = '1';
      }, 100);
    };

    prevBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage(currentIndex);
    });

    nextBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % images.length;
      updateImage(currentIndex);
    });
  });

  // -------------------------------------------------------------
  // 6. INTERACTIVE MODAL CONTROLLER (AGENDAR & ASISTIR AL EVENTO)
  // -------------------------------------------------------------
  const modalAgendar = document.getElementById('modal-agendar');
  const modalAsistir = document.getElementById('modal-asistir');

  const btnTriggersAgendar = document.querySelectorAll('.btn-trigger-agendar');
  const btnTriggersAsistir = document.querySelectorAll('.btn-trigger-asistir');

  const closeAgendar = document.getElementById('close-modal-agendar');
  const closeAsistir = document.getElementById('close-modal-asistir');
  const btnSyncCalendar = document.getElementById('btn-sync-calendar');

  btnTriggersAgendar.forEach(btn => {
    btn.addEventListener('click', () => {
      modalAgendar?.classList.remove('hidden');
    });
  });

  btnTriggersAsistir.forEach(btn => {
    btn.addEventListener('click', () => {
      modalAsistir?.classList.remove('hidden');
    });
  });

  closeAgendar?.addEventListener('click', () => {
    modalAgendar?.classList.add('hidden');
  });

  closeAsistir?.addEventListener('click', () => {
    modalAsistir?.classList.add('hidden');
  });

  btnSyncCalendar?.addEventListener('click', () => {
    alert('Sincronizando evento con tu calendario nativo...');
    modalAgendar?.classList.add('hidden');
  });

  // Close modals on overlay backdrop click
  [modalAgendar, modalAsistir].forEach(modal => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.add('hidden');
      }
    });
  });
});
