/* ============================================================
   KRIDHA STICHES - App Logic
   ============================================================ */

// ── CONFIG ────────────────────────────────────────────────────
const CONFIG = {
  whatsappNumber: '917310776017',
  shopName:       'Kridha Stiches',
  currency:       '₹',
};

// ── SVG Icons ─────────────────────────────────────────────────
const WA_SVG = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const CLOSE_SVG = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;

// ── PRODUCTS ──────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 1,
    name: 'Red Rose Handbag',
    category: 'handbags',
    categoryLabel: 'Purses',
    price: 849,
    originalPrice: 1199,
    description: 'A beautiful handmade red rose-shaped crochet handbag with a pearl center. Perfect as an elegant statement piece.',
    image: 'images/red-rose-handbag.png',
    icon: '🌹',
    gradient: 'linear-gradient(135deg, #B03040 0%, #701020 100%)',
    badge: 'Bestseller',
    badgeStyle: '',
    features: ['Unique rose design', 'Pearl accent', 'Premium cotton yarn', 'Top handle'],
  },
  {
    id: 2,
    name: 'Red Beaded Purse',
    category: 'handbags',
    categoryLabel: 'Purses',
    price: 749,
    originalPrice: 999,
    description: 'A vibrant red structured crochet purse adorned with delicate red beads. Chic and perfect for parties.',
    image: 'images/red-beaded-purse.png',
    icon: '❤️',
    gradient: 'linear-gradient(135deg, #E03040 0%, #A02030 100%)',
    badge: 'New',
    badgeStyle: 'terra',
    features: ['Structured rectangular shape', 'Beaded detailing', 'Top-handle design', 'Secure closure'],
  },
  {
    id: 3,
    name: 'Green Drawstring Sling',
    category: 'sling-bags',
    categoryLabel: 'Sling Bags',
    price: 699,
    originalPrice: 949,
    description: 'A stylish two-tone green and black drawstring sling bag with long tassels. Casual and cute.',
    image: 'images/green-black-drawstring.png',
    icon: '💚',
    gradient: 'linear-gradient(135deg, #A0D0A0 0%, #303030 100%)',
    badge: 'Trending',
    badgeStyle: 'sage',
    features: ['Two-tone green and black', 'Drawstring closure', 'Tassel accents', 'Long adjustable strap'],
  },
  {
    id: 4,
    name: 'Yellow Drawstring Sling',
    category: 'sling-bags',
    categoryLabel: 'Sling Bags',
    price: 699,
    originalPrice: 949,
    description: 'A bright yellow crochet drawstring bag featuring red accents and beautiful red tassels.',
    image: 'images/yellow-red-drawstring.png',
    icon: '💛',
    gradient: 'linear-gradient(135deg, #F0D050 0%, #D03040 100%)',
    badge: null,
    badgeStyle: '',
    features: ['Bright yellow color', 'Red floral accent', 'Long red strap', 'Perfect for casual outings'],
  },
  {
    id: 5,
    name: 'White Cherry Sling',
    category: 'sling-bags',
    categoryLabel: 'Sling Bags',
    price: 799,
    originalPrice: 1099,
    description: 'An adorable fluffy white crochet sling bag with sweet cherry details and a patterned strap.',
    image: 'images/white-cherry-sling.png',
    icon: '🍒',
    gradient: 'linear-gradient(135deg, #F0F0F0 0%, #D0D0D0 100%)',
    badge: 'Cute',
    badgeStyle: '',
    features: ['Fluffy soft yarn', 'Cherry appliques', 'Patterned braided strap', 'Flap closure'],
  },
  {
    id: 6,
    name: 'White Cherry Sling (Modeled)',
    category: 'sling-bags',
    categoryLabel: 'Sling Bags',
    price: 799,
    originalPrice: 1099,
    description: 'Our favorite fluffy white cherry sling bag, modeled to show its perfect crossbody size.',
    image: 'images/white-cherry-sling-model.png',
    icon: '🍒',
    gradient: 'linear-gradient(135deg, #F0F0F0 0%, #D0D0D0 100%)',
    badge: null,
    badgeStyle: '',
    features: ['Fluffy soft yarn', 'Cherry appliques', 'Crossbody length', 'Flap closure'],
  },
  {
    id: 7,
    name: 'Purple Floral Tote',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 999,
    originalPrice: 1399,
    description: 'A spacious and beautifully crafted purple tote bag adorned with three large white crochet flowers.',
    image: 'images/purple-flower-tote.png',
    icon: '💜',
    gradient: 'linear-gradient(135deg, #804080 0%, #502050 100%)',
    badge: 'Popular',
    badgeStyle: '',
    features: ['Spacious interior', 'Large flower motifs', 'Sturdy braided handles', 'Premium quality yarn'],
  },
  {
    id: 8,
    name: 'Brown Floral Tote',
    category: 'tote-bags',
    categoryLabel: 'Tote Bags',
    price: 899,
    originalPrice: 1249,
    description: 'A lovely two-tone brown and beige tote featuring large crochet flowers with mirror-like accents.',
    image: 'images/brown-white-tote.png',
    icon: '🤎',
    gradient: 'linear-gradient(135deg, #F0E0D0 0%, #503020 100%)',
    badge: null,
    badgeStyle: '',
    features: ['Two-tone design', 'Flower accents with shiny centers', 'Long strap', 'Great for everyday use'],
  },
];

// ── STATE ─────────────────────────────────────────────────────
let activeFilter   = 'all';
let activeProduct  = null;

// ── WhatsApp URL Builder ──────────────────────────────────────
function waURL(product) {
  const text = encodeURIComponent(
    `Hi! 👋 I'm interested in *${product.name}* from *${CONFIG.shopName}*.\n\n` +
    `🛍️ *Product:* ${product.name}\n\n` +
    `Please let me know the price and availability. Thank you! 🙏`
  );
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function waGeneralURL() {
  const text = encodeURIComponent(
    `Hi! 👋 I visited *${CONFIG.shopName}* and would love to know more about your handcrafted crochet bags. Please help! 🙏`
  );
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

// ── Render Products ───────────────────────────────────────────
function renderProducts() {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  const list = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  if (!list.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--muted);">No products in this category yet - check back soon!</p>`;
    return;
  }

  list.forEach((p, i) => {
    const el = document.createElement('article');
    el.className = 'p-card reveal';
    el.setAttribute('aria-label', p.name);

    const badgeHTML = p.badge
      ? `<span class="c-badge ${p.badgeStyle}">${p.badge}</span>`
      : '';

    const imgContent = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
      : `<span>${p.icon}</span>`;

    const noImgClass = p.image ? '' : ' no-img';
    const imgStyle   = p.image ? '' : `style="background:${p.gradient};"`;

    const discount = Math.round((1 - p.price / p.originalPrice) * 100);

    el.innerHTML = `
      <div class="card-img${noImgClass}" ${imgStyle}>
        ${imgContent}
        ${badgeHTML}
        <div class="card-overlay">
          <button class="overlay-btn" data-id="${p.id}">Quick View</button>
        </div>
      </div>
      <div class="card-body">
        <p class="card-cat">${p.categoryLabel}</p>
        <h3 class="card-name">${p.name}</h3>
        <p class="card-desc">${p.description}</p>
        <div class="card-bottom">
          <div class="card-price-wrap">
            <div class="card-price" style="font-size: 0.85rem; font-weight: 600; color: var(--terra); letter-spacing: 0.02em;">Price on Request</div>
          </div>
          <button class="card-wa-btn" data-id="${p.id}" aria-label="Inquire about ${p.name} on WhatsApp">
            ${WA_SVG} Contact Us
          </button>
        </div>
      </div>
    `;

    // Quick view
    el.querySelector('.overlay-btn').addEventListener('click', e => {
      e.stopPropagation();
      openModal(p);
    });

    // Card click -> modal (not on WA button)
    el.addEventListener('click', e => {
      if (e.target.closest('.card-wa-btn')) return;
      openModal(p);
    });

    // Direct WhatsApp order button
    el.querySelector('.card-wa-btn').addEventListener('click', e => {
      e.stopPropagation();
      window.open(waURL(p), '_blank');
    });

    grid.appendChild(el);
    requestAnimationFrame(() => revealObserver.observe(el));
  });
}

// ── Filters ───────────────────────────────────────────────────
function initFilters() {
  document.querySelectorAll('.f-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.f-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderProducts();
    });
  });
}

// ── Modal ─────────────────────────────────────────────────────
function openModal(p) {
  activeProduct = p;
  const bg = document.getElementById('modal-bg');
  const discount = Math.round((1 - p.price / p.originalPrice) * 100);

  // Image
  const imgWrap = document.getElementById('m-img-wrap');
  if (p.image) {
    imgWrap.style.background = '';
    imgWrap.style.fontSize = '';
    imgWrap.style.opacity = '1';
    imgWrap.innerHTML = `<img src="${p.image}" alt="${p.name}">`;
  } else {
    imgWrap.style.background = p.gradient;
    imgWrap.style.fontSize = '7rem';
    imgWrap.style.opacity = '0.42';
    imgWrap.innerHTML = p.icon;
  }

  document.getElementById('m-cat').textContent      = p.categoryLabel;
  document.getElementById('m-name').textContent     = p.name;
  document.getElementById('m-desc').textContent     = p.description;
  document.getElementById('m-price').textContent    = `Price on Request`;
  document.getElementById('m-price').style.fontSize = '1.35rem';

  document.getElementById('m-features').innerHTML = p.features
    .map(f => `<li>${f}</li>`)
    .join('');

  bg.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modal-bg').classList.remove('open');
  document.body.style.overflow = '';
  activeProduct = null;
}

function initModal() {
  const bg = document.getElementById('modal-bg');
  bg.addEventListener('click', e => { if (e.target === bg) closeModal(); });
  document.getElementById('m-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  document.getElementById('m-wa-btn').addEventListener('click', () => {
    if (activeProduct) window.open(waURL(activeProduct), '_blank');
  });
}

// ── Scroll-reveal ─────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.10 });

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// ── Header scroll shadow ──────────────────────────────────────
function initHeader() {
  const hdr = document.querySelector('header');
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 24);
  }, { passive: true });
}

// ── Mobile nav ────────────────────────────────────────────────
function initMobileNav() {
  const mob = document.getElementById('mob-nav');
  document.getElementById('hamburger').addEventListener('click', () => mob.classList.add('open'));
  document.getElementById('mob-close').addEventListener('click', () => mob.classList.remove('open'));
  mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));
}

// ── Floating + all WA buttons ─────────────────────────────────
function initWAButtons() {
  document.getElementById('float-wa').addEventListener('click', () => window.open(waGeneralURL(), '_blank'));

  document.querySelectorAll('[data-wa-general]').forEach(btn => {
    btn.addEventListener('click', () => window.open(waGeneralURL(), '_blank'));
  });
}

// ── Smooth scroll ─────────────────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initFilters();
  initModal();
  initReveal();
  initHeader();
  initMobileNav();
  initWAButtons();
  initSmoothScroll();
});
