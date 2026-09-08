"use strict";

/* ================= CONFIG ================= */

const WHATSAPP = "5493844546841";

const CGLITE_URL =
  "https://www.mediafire.com/file/1r919ffuo64vpan/CGLite.apk/file";

const HTTP_CUSTOM_URL =
  "https://play.google.com/store/apps/details?id=xyz.easypro.httpcustom";

/* ================= STREAMING ================= */

const streamingProducts = [
  {
    id: "netflix-premium",
    name: "Netflix Premium 4K",
    duration: "1 Mes",
    price: 10000,
    oldPrice: 13000,
    icon: "netflix"
  },

  {
    id: "disney-standard",
    name: "Disney+ Estándar",
    duration: "1 Mes",
    price: 6000,
    oldPrice: 8000,
    icon: "disney"
  },

  {
    id: "disney-premium",
    name: "Disney+ Premium",
    duration: "1 Mes",
    price: 6500,
    oldPrice: 9000,
    icon: "disney"
  },

  {
    id: "hbo-1",
    name: "HBO Max",
    duration: "1 Mes",
    price: 5000,
    oldPrice: 7000,
    icon: "hbo"
  },

  {
    id: "hbo-2",
    name: "HBO Max",
    duration: "2 Meses",
    price: 7500,
    oldPrice: 10000,
    icon: "hbo"
  },

  {
    id: "hbo-3",
    name: "HBO Max",
    duration: "3 Meses",
    price: 9500,
    oldPrice: 12000,
    icon: "hbo"
  },

  {
    id: "prime-1",
    name: "Prime Video",
    duration: "1 Mes",
    price: 5000,
    oldPrice: 7000,
    icon: "prime"
  },

  {
    id: "prime-2",
    name: "Prime Video",
    duration: "2 Meses",
    price: 7500,
    oldPrice: 10000,
    icon: "prime"
  },

  {
    id: "prime-3",
    name: "Prime Video",
    duration: "3 Meses",
    price: 9500,
    oldPrice: 12000,
    icon: "prime"
  },

  {
    id: "paramount",
    name: "Paramount+",
    duration: "1 Mes",
    price: 6500,
    oldPrice: 8000,
    icon: "paramount"
  },

  {
    id: "vix",
    name: "ViX",
    duration: "1 Mes",
    price: 4500,
    oldPrice: 7000,
    icon: "vix"
  },

  {
    id: "apple-tv",
    name: "Apple TV+",
    duration: "1 Mes",
    price: 4500,
    oldPrice: 7000,
    icon: "apple"
  },

  {
    id: "youtube",
    name: "YouTube Premium",
    duration: "1 Mes",
    price: 5000,
    oldPrice: 7500,
    icon: "youtube"
  }
];

/* ================= LOGOS ================= */

function streamingLogo(type) {
  const common =
    'aria-hidden="true" focusable="false"';

  switch (type) {

    case "netflix":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />
          <path
            d="M17 13h10l10 38H27z"
            fill="#E50914"
          />
          <path
            d="M37 13h10v38H37z"
            fill="#B20710"
          />
          <path
            d="M27 13h10l10 38H37z"
            fill="#E50914"
          />
        </svg>
      `;

    case "disney":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <path
            d="M13 28
               C23 19, 39 17, 51 23"
            fill="none"
            stroke="#1687FF"
            stroke-width="3.5"
            stroke-linecap="round"
          />

          <text
            x="32"
            y="43"
            text-anchor="middle"
            fill="#FFFFFF"
            font-size="10"
            font-family="Arial,sans-serif"
            font-style="italic"
            font-weight="700"
          >
            Disney+
          </text>
        </svg>
      `;

    case "hbo":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <text
            x="32"
            y="40"
            text-anchor="middle"
            fill="#FFFFFF"
            font-size="21"
            font-family="Arial,sans-serif"
            font-weight="900"
            letter-spacing="-1"
          >
            HBO
          </text>
        </svg>
      `;

    case "prime":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <text
            x="32"
            y="35"
            text-anchor="middle"
            fill="#FFFFFF"
            font-size="13"
            font-family="Arial,sans-serif"
            font-weight="700"
          >
            prime
          </text>

          <path
            d="M17 42
               C26 48, 39 48, 48 42"
            fill="none"
            stroke="#20A8E0"
            stroke-width="3"
            stroke-linecap="round"
          />

          <path
            d="M45 40l5 2-4 4"
            fill="none"
            stroke="#20A8E0"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      `;

    case "paramount":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <path
            d="M16 42L32 19L48 42"
            fill="none"
            stroke="#FFFFFF"
            stroke-width="3"
            stroke-linejoin="round"
          />

          <path
            d="M21 43h22"
            stroke="#FFFFFF"
            stroke-width="2"
            stroke-linecap="round"
          />

          <text
            x="32"
            y="52"
            text-anchor="middle"
            fill="#FFFFFF"
            font-size="6.5"
            font-family="Arial,sans-serif"
            font-weight="700"
          >
            PARAMOUNT+
          </text>
        </svg>
      `;

    case "vix":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <text
            x="32"
            y="43"
            text-anchor="middle"
            fill="#FF8A00"
            font-size="24"
            font-family="Arial,sans-serif"
            font-weight="900"
          >
            ViX
          </text>
        </svg>
      `;

    case "apple":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <path
            d="
              M39 20
              C37 20 35 21 32 23
              C30 21 28 20 25 20
              C20 20 16 25 16 31
              C16 38 21 49 26 49
              C29 49 30 47 32 47
              C34 47 35 49 38 49
              C42 49 47 41 48 35
              C44 34 42 31 42 28
              C42 25 44 23 47 21
              C45 20 42 19 39 20
              Z
            "
            fill="#FFFFFF"
          />

          <path
            d="
              M39 12
              C39 16 36 19 32 19
              C32 15 35 12 39 12
              Z
            "
            fill="#FFFFFF"
          />
        </svg>
      `;

    case "youtube":
      return `
        <svg ${common} viewBox="0 0 64 64">
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="14"
            fill="#111111"
          />

          <rect
            x="10"
            y="18"
            width="44"
            height="28"
            rx="9"
            fill="#FF0000"
          />

          <path
            d="M28 25L40 32L28 39Z"
            fill="#FFFFFF"
          />
        </svg>
      `;

    default:
      return "";
  }
}

/* ================= ELEMENTOS ================= */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  document.querySelectorAll(selector);

/* ================= CART ================= */

let cart = [];

const CART_KEY = "personalnet_cart";

function loadCart() {
  try {
    const saved =
      localStorage.getItem(CART_KEY);

    cart = saved
      ? JSON.parse(saved)
      : [];

    if (!Array.isArray(cart)) {
      cart = [];
    }

  } catch {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cart)
  );
}

function money(value) {
  return "$" +
    Number(value).toLocaleString("es-AR");
}

function showToast(message) {
  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer =
    setTimeout(() => {
      toast.classList.remove("show");
    }, 1800);
}

/* ================= ADD TO CART ================= */

function addToCart(product) {

  const existing =
    cart.find(
      item =>
        item.id === product.id
    );

  if (existing) {

    existing.quantity =
      (existing.quantity || 1) + 1;

  } else {

    cart.push({
      ...product,
      quantity: 1
    });
  }

  saveCart();
  renderCart();

  showToast(
    "✓ Agregado al carrito"
  );
}

/* ================= REMOVE ================= */

function removeFromCart(id) {

  cart =
    cart.filter(
      item =>
        item.id !== id
    );

  saveCart();
  renderCart();
}

/* ================= CART RENDER ================= */

function renderCart() {

  const box =
    $("#cartItems");

  const empty =
    $("#cartEmpty");

  const footer =
    $("#cartFooter");

  const count =
    cart.reduce(
      (total, item) =>
        total +
        (item.quantity || 1),
      0
    );

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        Number(item.price) *
        (item.quantity || 1),
      0
    );

  if ($("#cartCount")) {
    $("#cartCount").textContent =
      count;
  }

  if ($("#bottomCartCount")) {
    $("#bottomCartCount").textContent =
      count;
  }

  if (!box) return;

  box.innerHTML = "";

  if (!cart.length) {

    if (empty) {
      empty.style.display =
        "block";
    }

    if (footer) {
      footer.style.display =
        "none";
    }

    return;
  }

  if (empty) {
    empty.style.display =
      "none";
  }

  if (footer) {
    footer.style.display =
      "block";
  }

  cart.forEach(item => {

    const row =
      document.createElement(
        "div"
      );

    row.className =
      "cart-item";

    const quantity =
      item.quantity || 1;

    row.innerHTML = `
      <div>

        <strong>
          ${escapeHTML(item.name)}
        </strong>

        <small>
          ${escapeHTML(
            item.duration || ""
          )}

          ${
            quantity > 1
              ? ` · Cantidad: ${quantity}`
              : ""
          }
        </small>

        <button
          type="button"
          class="remove"
          data-remove="${escapeHTML(item.id)}"
        >
          Quitar
        </button>

      </div>

      <div class="cart-price">
        ${money(
          Number(item.price) *
          quantity
        )}
      </div>
    `;

    box.appendChild(row);
  });

  if ($("#cartTotal")) {
    $("#cartTotal").textContent =
      money(total);
  }

  box
    .querySelectorAll(
      "[data-remove]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          removeFromCart(
            button.dataset.remove
          );

        }
      );

    });
}

/* ================= ESCAPE HTML ================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll(
      "&",
      "&amp;"
    )
    .replaceAll(
      "<",
      "&lt;"
    )
    .replaceAll(
      ">",
      "&gt;"
    )
    .replaceAll(
      '"',
      "&quot;"
    )
    .replaceAll(
      "'",
      "&#039;"
    );
}

/* ================= MODALS ================= */

function openModal(id) {

  const modal =
    document.getElementById(id);

  if (!modal) return;

  modal.classList.add(
    "open"
  );
}

function closeModal(id) {

  const modal =
    document.getElementById(id);

  if (!modal) return;

  modal.classList.remove(
    "open"
  );
}

function closeAllModals() {

  $$(".modal")
    .forEach(
      modal =>
        modal.classList.remove(
          "open"
        )
    );
}

/* ================= SCROLL ================= */

function scrollToSection(selector) {

  const element =
    document.querySelector(
      selector
    );

  if (!element) return;

  closeAllModals();

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ================= INTERNET ================= */

const selectedInternetPlans =
  new Map();

function hideInternetCartButton(card) {

  if (!card) return;

  const addButton =
    card.querySelector(
      ".internet-add-cart"
    );

  if (!addButton) return;

  addButton.style.display =
    "none";

  addButton.classList.remove(
    "added"
  );

  addButton.textContent =
    "🛒 Agregar al carrito";
}

function createInternetCartButton(
  planButton
) {

  const card =
    planButton.closest(
      ".internet-card"
    );

  if (!card) return;

  let addButton =
    card.querySelector(
      ".internet-add-cart"
    );

  if (!addButton) {

    addButton =
      document.createElement(
        "button"
      );

    addButton.type =
      "button";

    addButton.className =
      "button primary-button full internet-add-cart";

    addButton.textContent =
      "🛒 Agregar al carrito";

    const plans =
      card.querySelector(
        ".internet-plans"
      );

    if (plans) {

      plans.insertAdjacentElement(
        "afterend",
        addButton
      );
    }
  }

  selectedInternetPlans.set(
    card,
    planButton
  );

  addButton.style.display =
    "flex";

  addButton.classList.remove(
    "added"
  );

  addButton.textContent =
    "🛒 Agregar al carrito";

  addButton.onclick = () => {

    const selected =
      selectedInternetPlans.get(
        card
      );

    if (!selected) return;

    addToCart({

      id:
        selected.dataset.product,

      name:
        selected.dataset.product,

      duration:
        "",

      price:
        Number(
          selected.dataset.price
        )
    });

    addButton.classList.add(
      "added"
    );

    addButton.textContent =
      "✓ Agregado al carrito";

    setTimeout(() => {

      addButton.classList.remove(
        "added"
      );

      addButton.textContent =
        "🛒 Agregar al carrito";

    }, 1500);
  };
}

function setupInternetPlans() {

  $$(".internet-plan")
    .forEach(button => {

      button.setAttribute(
        "aria-pressed",
        "false"
      );

      button.addEventListener(
        "click",
        () => {

          const card =
            button.closest(
              ".internet-card"
            );

          if (!card) return;

          const wasSelected =
            button.classList.contains(
              "selected"
            );

          if (wasSelected) {

            button.classList.remove(
              "selected"
            );

            button.setAttribute(
              "aria-pressed",
              "false"
            );

            selectedInternetPlans.delete(
              card
            );

            hideInternetCartButton(
              card
            );

            return;
          }

          card
            .querySelectorAll(
              ".internet-plan"
            )
            .forEach(plan => {

              plan.classList.remove(
                "selected"
              );

              plan.setAttribute(
                "aria-pressed",
                "false"
              );

            });

          button.classList.add(
            "selected"
          );

          button.setAttribute(
            "aria-pressed",
            "true"
          );

          createInternetCartButton(
            button
          );

        }
      );

    });
}

/* ================= STREAMING ================= */

function renderStreaming() {

  const grid =
    $("#streamGrid");

  if (!grid) return;

  grid.innerHTML = "";

  streamingProducts.forEach(
    product => {

      const card =
        document.createElement(
          "article"
        );

      card.className =
        "stream-card";

      card.innerHTML = `
        <div
          class="stream-logo"
          style="
            display:flex!important;
            align-items:center!important;
            justify-content:center!important;
            visibility:visible!important;
            opacity:1!important;
          "
        >
          ${streamingLogo(
            product.icon
          )}
        </div>

        <h3>
          ${escapeHTML(
            product.name
          )}
        </h3>

        <div class="duration">
          ${escapeHTML(
            product.duration
          )}
        </div>

        <div class="price-box">

          <div class="old-price">
            ${money(
              product.oldPrice
            )}
          </div>

          <div class="offer-price">
            ${money(
              product.price
            )}
          </div>

        </div>

        <button
          type="button"
          class="add-button"
          data-streaming-id="${escapeHTML(
            product.id
          )}"
        >
          🛒 Agregar
        </button>
      `;

      grid.appendChild(card);
    }
  );

  grid
    .querySelectorAll(
      "[data-streaming-id]"
    )
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const product =
            streamingProducts.find(
              item =>
                item.id ===
                button.dataset
                  .streamingId
            );

          if (!product) return;

          addToCart({

            id:
              product.id,

            name:
              product.name,

            duration:
              product.duration,

            price:
              product.price

          });

          button.classList.add(
            "added"
          );

          button.textContent =
            "✓ Agregado";

          setTimeout(() => {

            button.classList.remove(
              "added"
            );

            button.textContent =
              "🛒 Agregar";

          }, 1400);

        }
      );

    });
}

/* ================= CHECKOUT ================= */

function renderCheckout() {

  const box =
    $("#checkoutProducts");

  if (!box) return;

  box.innerHTML = "";

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        Number(item.price) *
        (item.quantity || 1),
      0
    );

  cart.forEach(item => {

    const line =
      document.createElement(
        "div"
      );

    line.className =
      "checkout-line";

    const quantity =
      item.quantity || 1;

    line.innerHTML = `
      <span>
        ${escapeHTML(
          item.name
        )}

        ${
          quantity > 1
            ? ` × ${quantity}`
            : ""
        }
      </span>

      <span>
        ${money(
          Number(item.price) *
          quantity
        )}
      </span>
    `;

    box.appendChild(line);
  });

  if ($("#checkoutTotal")) {

    $("#checkoutTotal").textContent =
      money(total);
  }
}

/* ================= WHATSAPP ================= */

function openWhatsApp(message) {

  const url =
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      message
    )}`;

  window.open(
    url,
    "_blank",
    "noopener"
  );
}

/* ================= SEND ORDER ================= */

function sendOrder() {

  if (!cart.length) {

    showToast(
      "El carrito está vacío"
    );

    return;
  }

  const name =
    $("#customerName")?.value.trim()
    || "No indicado";

  const phone =
    $("#customerPhone")?.value.trim()
    || "No indicado";

  const total =
    cart.reduce(
      (sum, item) =>
        sum +
        Number(item.price) *
        (item.quantity || 1),
      0
    );

  const lines =
    cart.map(item => {

      const quantity =
        item.quantity || 1;

      return (
        `• ${item.name}` +
        `${
          item.duration
            ? ` — ${item.duration}`
            : ""
        }` +
        `${
          quantity > 1
            ? ` — Cantidad: ${quantity}`
            : ""
        }` +
        ` — ${money(
          Number(item.price) *
          quantity
        )}`
      );

    }).join("\n");

  const message =
`Hola CJ SERVICES 👋

Quiero realizar este pedido:

${lines}

Total: ${money(total)}

Nombre: ${name}
Teléfono: ${phone}`;

  openWhatsApp(message);
}

/* ================= TRIAL ================= */

function sendTrial() {

  const name =
    $("#trialName")?.value.trim()
    || "No indicado";

  const phone =
    $("#trialPhone")?.value.trim()
    || "No indicado";

  const message =
`Hola CJ SERVICES 👋

Quiero solicitar una prueba.

Nombre: ${name}
Teléfono: ${phone}`;

  openWhatsApp(message);
}

/* ================= EVENTS ================= */

function setupEvents() {

  $$("[data-scroll]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          scrollToSection(
            button.dataset.scroll
          );

        }
      );

    });

  $("#menuButton")
    ?.addEventListener(
      "click",
      () =>
        openModal(
          "menuModal"
        )
    );

  $("#cartButton")
    ?.addEventListener(
      "click",
      () => {

        renderCart();

        openModal(
          "cartModal"
        );

      }
    );

  $("#bottomCart")
    ?.addEventListener(
      "click",
      () => {

        renderCart();

        openModal(
          "cartModal"
        );

      }
    );

  $$("[data-close]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          closeModal(
            button.dataset.close
          );

        }
      );

    });

  $("#checkoutButton")
    ?.addEventListener(
      "click",
      () => {

        if (!cart.length) {

          showToast(
            "El carrito está vacío"
          );

          return;
        }

        renderCheckout();

        openModal(
          "checkoutModal"
        );

      }
    );

  $("#sendOrder")
    ?.addEventListener(
      "click",
      sendOrder
    );

  $("#supportButton")
    ?.addEventListener(
      "click",
      () =>
        openWhatsApp(
          "Hola CJ SERVICES 👋 Necesito ayuda."
        )
    );

  $("#whatsappQuick")
    ?.addEventListener(
      "click",
      () =>
        openWhatsApp(
          "Hola CJ SERVICES 👋 Quiero consultar por los servicios."
        )
    );

  $("#menuWhatsapp")
    ?.addEventListener(
      "click",
      () =>
        openWhatsApp(
          "Hola CJ SERVICES 👋 Quiero consultar por los servicios."
        )
    );

  $("#trialButton")
    ?.addEventListener(
      "click",
      () =>
        openModal(
          "trialModal"
        )
    );

  $("#cgliteTrial")
    ?.addEventListener(
      "click",
      () =>
        openModal(
          "trialModal"
        )
    );

  $("#sendTrial")
    ?.addEventListener(
      "click",
      sendTrial
    );

  $$("#menuModal [data-scroll]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          closeModal(
            "menuModal"
          );

        }
      );

    });
}

/* ================= INIT ================= */

loadCart();
renderCart();
renderStreaming();
setupInternetPlans();
setupEvents();
