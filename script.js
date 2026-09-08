"use strict";

/* ================= CONFIG ================= */

const WHATSAPP = "5493844546841";

const CGLITE_URL =
  "https://www.mediafire.com/file/1r919ffuo64vpan/CGLite.apk/file";

const HTTP_CUSTOM_URL =
  "https://play.google.com/store/apps/details?id=xyz.easypro.httpcustom";

/* ================= STREAMING ================= */

const streamingProducts = [
  { id:"netflix-premium", name:"Netflix Premium 4K", duration:"1 Mes", price:10000, oldPrice:13000, icon:"netflix" },
  { id:"disney-standard", name:"Disney+ Estándar", duration:"1 Mes", price:6000, oldPrice:8000, icon:"disney" },
  { id:"disney-premium", name:"Disney+ Premium", duration:"1 Mes", price:6500, oldPrice:9000, icon:"disney" },
  { id:"hbo-1", name:"HBO Max", duration:"1 Mes", price:5000, oldPrice:7000, icon:"hbo" },
  { id:"hbo-2", name:"HBO Max", duration:"2 Meses", price:7500, oldPrice:10000, icon:"hbo" },
  { id:"hbo-3", name:"HBO Max", duration:"3 Meses", price:9500, oldPrice:12000, icon:"hbo" },
  { id:"prime-1", name:"Prime Video", duration:"1 Mes", price:5000, oldPrice:7000, icon:"prime" },
  { id:"prime-2", name:"Prime Video", duration:"2 Meses", price:7500, oldPrice:10000, icon:"prime" },
  { id:"prime-3", name:"Prime Video", duration:"3 Meses", price:9500, oldPrice:12000, icon:"prime" },
  { id:"paramount", name:"Paramount+", duration:"1 Mes", price:6500, oldPrice:8000, icon:"paramount" },
  { id:"vix", name:"ViX", duration:"1 Mes", price:4500, oldPrice:7000, icon:"vix" },
  { id:"apple-tv", name:"Apple TV+", duration:"1 Mes", price:4500, oldPrice:7000, icon:"apple" },
  { id:"youtube", name:"YouTube Premium", duration:"1 Mes", price:5000, oldPrice:7500, icon:"youtube" }
];

/* ================= ICONOS ================= */

function streamingLogo(type) {

  const logos = {

    netflix: `
      <span style="
        color:#E50914!important;
        font-size:28px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      ">N</span>
    `,

    disney: `
      <span style="
        color:#1687FF!important;
        font-size:28px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      ">D</span>
    `,

    hbo: `
      <span style="
        color:#000000!important;
        font-size:25px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      ">H</span>
    `,

    prime: `
      <span style="
        color:#1687FF!important;
        font-size:28px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      ">P</span>
    `,

    paramount: `
      <span style="
        color:#1687FF!important;
        font-size:28px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
        position:relative;
      ">P<span style="
        color:#FF8A00!important;
        font-size:15px!important;
        vertical-align:top!important;
        margin-left:1px!important;
      ">+</span></span>
    `,

    vix: `
      <span style="
        color:#FF8A00!important;
        font-size:27px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      ">V</span>
    `,

    apple: `
      <span style="
        color:#000000!important;
        font-size:27px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      "></span>
    `,

    youtube: `
      <span style="
        color:#FF0000!important;
        font-size:25px!important;
        font-weight:900!important;
        line-height:1!important;
        display:block!important;
      ">▶</span>
    `
  };

  return logos[type] || "";
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
    const saved = localStorage.getItem(CART_KEY);
    cart = saved ? JSON.parse(saved) : [];

    if (!Array.isArray(cart)) {
      cart = [];
    }
  } catch {
    cart = [];
  }
}

function saveCart() {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function money(value) {
  return "$" + Number(value).toLocaleString("es-AR");
}

function showToast(message) {

  const toast = $("#toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);

  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

/* ================= ADD TO CART ================= */

function addToCart(product) {

  const existing = cart.find(
    item => item.id === product.id
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

  showToast("✓ Agregado al carrito");
}

/* ================= REMOVE ================= */

function removeFromCart(id) {

  cart = cart.filter(
    item => item.id !== id
  );

  saveCart();
  renderCart();
}

/* ================= CART RENDER ================= */

function renderCart() {

  const box = $("#cartItems");
  const empty = $("#cartEmpty");
  const footer = $("#cartFooter");

  const count = cart.reduce(
    (total, item) =>
      total + (item.quantity || 1),
    0
  );

  const total = cart.reduce(
    (sum, item) =>
      sum +
      Number(item.price) *
      (item.quantity || 1),
    0
  );

  if ($("#cartCount")) {
    $("#cartCount").textContent = count;
  }

  if ($("#bottomCartCount")) {
    $("#bottomCartCount").textContent = count;
  }

  if (!box) return;

  box.innerHTML = "";

  if (!cart.length) {

    if (empty) {
      empty.style.display = "block";
    }

    if (footer) {
      footer.style.display = "none";
    }

    return;
  }

  if (empty) {
    empty.style.display = "none";
  }

  if (footer) {
    footer.style.display = "block";
  }

  cart.forEach(item => {

    const row =
      document.createElement("div");

    row.className = "cart-item";

    const quantity =
      item.quantity || 1;

    row.innerHTML = `
      <div>

        <strong>
          ${escapeHTML(item.name)}
        </strong>

        <small>
          ${escapeHTML(item.duration || "")}

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
          Number(item.price) * quantity
        )}
      </div>
    `;

    box.appendChild(row);
  });

  if ($("#cartTotal")) {
    $("#cartTotal").textContent = money(total);
  }

  box
    .querySelectorAll("[data-remove]")
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
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ================= MODALS ================= */

function openModal(id) {

  const modal =
    document.getElementById(id);

  if (!modal) return;

  modal.classList.add("open");
}

function closeModal(id) {

  const modal =
    document.getElementById(id);

  if (!modal) return;

  modal.classList.remove("open");
}

function closeAllModals() {

  $$(".modal").forEach(
    modal =>
      modal.classList.remove("open")
  );
}

/* ================= SCROLL ================= */

function scrollToSection(selector) {

  const element =
    document.querySelector(selector);

  if (!element) return;

  closeAllModals();

  element.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

/* ================= INTERNET ================= */

const selectedInternetPlans = new Map();

function hideInternetCartButton(card) {

  if (!card) return;

  const addButton =
    card.querySelector(".internet-add-cart");

  if (!addButton) return;

  addButton.style.display = "none";

  addButton.classList.remove("added");

  addButton.textContent =
    "🛒 Agregar al carrito";
}

function createInternetCartButton(planButton) {

  const card =
    planButton.closest(".internet-card");

  if (!card) return;

  let addButton =
    card.querySelector(".internet-add-cart");

  if (!addButton) {

    addButton =
      document.createElement("button");

    addButton.type = "button";

    addButton.className =
      "button primary-button full internet-add-cart";

    addButton.textContent =
      "🛒 Agregar al carrito";

    const plans =
      card.querySelector(".internet-plans");

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

  addButton.style.display = "flex";

  addButton.classList.remove("added");

  addButton.textContent =
    "🛒 Agregar al carrito";

  addButton.onclick = () => {

    const selected =
      selectedInternetPlans.get(card);

    if (!selected) return;

    addToCart({

      id: selected.dataset.product,

      name: selected.dataset.product,

      duration: "",

      price: Number(
        selected.dataset.price
      )

    });

    addButton.classList.add("added");

    addButton.textContent =
      "✓ Agregado al carrito";

    setTimeout(() => {

      addButton.classList.remove("added");

      addButton.textContent =
        "🛒 Agregar al carrito";

    }, 1500);
  };
}

function setupInternetPlans() {

  $$(".internet-plan").forEach(button => {

    button.setAttribute(
      "aria-pressed",
      "false"
    );

    button.addEventListener(
      "click",
      () => {

        const card =
          button.closest(".internet-card");

        if (!card) return;

        const wasSelected =
          button.classList.contains("selected");

        if (wasSelected) {

          button.classList.remove("selected");

          button.setAttribute(
            "aria-pressed",
            "false"
          );

          selectedInternetPlans.delete(card);

          hideInternetCartButton(card);

          return;
        }

        card
          .querySelectorAll(".internet-plan")
          .forEach(plan => {

            plan.classList.remove("selected");

            plan.setAttribute(
              "aria-pressed",
              "false"
            );

          });

        button.classList.add("selected");

        button.setAttribute(
          "aria-pressed",
          "true"
        );

        createInternetCartButton(button);
      }
    );
  });
}

/* ================= STREAMING ================= */

function renderStreaming() {

  const grid = $("#streamGrid");

  if (!grid) return;

  grid.innerHTML = "";

  streamingProducts.forEach(product => {

    const card =
      document.createElement("article");

    card.className = "stream-card";

    card.innerHTML = `
      <div
        class="stream-logo"
        style="
          display:flex!important;
          align-items:center!important;
          justify-content:center!important;
          visibility:visible!important;
          opacity:1!important;
          overflow:hidden!important;
        "
      >
        ${streamingLogo(product.icon)}
      </div>

      <h3>
        ${escapeHTML(product.name)}
      </h3>

      <div class="duration">
        ${escapeHTML(product.duration)}
      </div>

      <div class="price-box">

        <div class="old-price">
          ${money(product.oldPrice)}
        </div>

        <div class="offer-price">
          ${money(product.price)}
        </div>

      </div>

      <button
        type="button"
        class="add-button"
        data-streaming-id="${escapeHTML(product.id)}"
      >
        🛒 Agregar
      </button>
    `;

    grid.appendChild(card);
  });

  grid
    .querySelectorAll("[data-streaming-id]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const product =
            streamingProducts.find(
              item =>
                item.id ===
                button.dataset.streamingId
            );

          if (!product) return;

          addToCart({

            id: product.id,

            name: product.name,

            duration: product.duration,

            price: product.price

          });

          button.classList.add("added");

          button.textContent =
            "✓ Agregado";

          setTimeout(() => {

            button.classList.remove("added");

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
      document.createElement("div");

    line.className = "checkout-line";

    const quantity =
      item.quantity || 1;

    line.innerHTML = `
      <span>
        ${escapeHTML(item.name)}

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
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

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

  $$("[data-scroll]").forEach(button => {

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
        openModal("menuModal")
    );

  $("#cartButton")
    ?.addEventListener(
      "click",
      () => {

        renderCart();

        openModal("cartModal");

      }
    );

  $("#bottomCart")
    ?.addEventListener(
      "click",
      () => {

        renderCart();

        openModal("cartModal");

      }
    );

  $$("[data-close]").forEach(button => {

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

        openModal("checkoutModal");

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
        openModal("trialModal")
    );

  $("#cgliteTrial")
    ?.addEventListener(
      "click",
      () =>
        openModal("trialModal")
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

          closeModal("menuModal");

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
