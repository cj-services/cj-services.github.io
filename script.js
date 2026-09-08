/* =====================================================
   PERSONALNET
   SCRIPT PRINCIPAL
===================================================== */


/* ================= CONFIGURACIÓN ================= */

const WHATSAPP = "5493844546841";

const CGLITE_URL =
  "https://www.mediafire.com/file/1r919ffuo64vpan/CGLite.apk/file";

const HTTP_CUSTOM_URL =
  "https://play.google.com/store/apps/details?id=xyz.easypro.httpcustom";


/* ================= STREAMING ================= */

const streamingProducts = [

  {
    id: "netflix",
    name: "Netflix Premium 4K",
    duration: "1 Mes",
    oldPrice: 13000,
    price: 10000,
    logo: "N",
    color: "#E50914"
  },

  {
    id: "disney-standard",
    name: "Disney+ Estándar",
    duration: "1 Mes",
    oldPrice: 8000,
    price: 6000,
    logo: "D+",
    color: "#2563EB"
  },

  {
    id: "disney-premium",
    name: "Disney+ Premium",
    duration: "1 Mes",
    oldPrice: 9000,
    price: 6500,
    logo: "D+",
    color: "#2563EB"
  },

  {
    id: "max-1",
    name: "HBO Max",
    duration: "1 Mes",
    oldPrice: 7000,
    price: 5000,
    logo: "MAX",
    color: "#8B5CF6"
  },

  {
    id: "max-2",
    name: "HBO Max",
    duration: "2 Meses",
    oldPrice: 10000,
    price: 7500,
    logo: "MAX",
    color: "#8B5CF6"
  },

  {
    id: "max-3",
    name: "HBO Max",
    duration: "3 Meses",
    oldPrice: 12000,
    price: 9500,
    logo: "MAX",
    color: "#8B5CF6"
  },

  {
    id: "prime-1",
    name: "Prime Video",
    duration: "1 Mes",
    oldPrice: 7000,
    price: 5000,
    logo: "prime",
    color: "#00A8E1"
  },

  {
    id: "prime-2",
    name: "Prime Video",
    duration: "2 Meses",
    oldPrice: 10000,
    price: 7500,
    logo: "prime",
    color: "#00A8E1"
  },

  {
    id: "prime-3",
    name: "Prime Video",
    duration: "3 Meses",
    oldPrice: 12000,
    price: 9500,
    logo: "prime",
    color: "#00A8E1"
  },

  {
    id: "paramount",
    name: "Paramount+",
    duration: "1 Mes",
    oldPrice: 8000,
    price: 6500,
    logo: "P+",
    color: "#0064FF"
  },

  {
    id: "vix",
    name: "ViX",
    duration: "1 Mes",
    oldPrice: 7000,
    price: 4500,
    logo: "ViX",
    color: "#F59E0B"
  },

  {
    id: "apple",
    name: "Apple TV+",
    duration: "1 Mes",
    oldPrice: 7000,
    price: 4500,
    logo: " TV",
    color: "#FFFFFF"
  },

  {
    id: "youtube",
    name: "YouTube Premium",
    duration: "1 Mes",
    oldPrice: 7500,
    price: 5000,
    logo: "YT",
    color: "#FF0033"
  }

];


/* ================= CARRITO ================= */

let cart = JSON.parse(
  localStorage.getItem("personalnet_cart") || "[]"
);


/* ================= HELPERS ================= */

const $ = selector =>
  document.querySelector(selector);


const $$ = selector =>
  [...document.querySelectorAll(selector)];


function money(value) {

  return "$" +
    Number(value).toLocaleString("es-AR");

}


/* ================= CART FUNCTIONS ================= */

function saveCart() {

  localStorage.setItem(
    "personalnet_cart",
    JSON.stringify(cart)
  );

  updateCart();

}


function getCartCount() {

  return cart.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

}


function getCartTotal() {

  return cart.reduce(
    (total, item) =>
      total +
      item.price *
      item.quantity,
    0
  );

}


/* ================= RENDER STREAMING ================= */

function renderStreaming() {

  const grid = $("#streamGrid");

  if (!grid) return;


  grid.innerHTML =
    streamingProducts.map(product => `

      <article class="stream-card">

        <div
          class="stream-logo"
          style="
            color:${product.color};
            border:1px solid ${product.color}22;
          "
        >
          ${product.logo}
        </div>


        <h3>
          ${product.name}
        </h3>


        <div class="duration">
          ${product.duration}
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
          class="add-button"
          data-stream="${product.id}"
        >
          🛒 Agregar
        </button>

      </article>

    `).join("");


  $$(".add-button").forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const product =
          streamingProducts.find(
            item =>
              item.id ===
              button.dataset.stream
          );


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

        }, 900);

      }
    );

  });

}


/* ================= ADD CART ================= */

function addToCart(product) {

  const existing =
    cart.find(
      item =>
        item.id === product.id
    );


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({

      ...product,

      quantity: 1

    });

  }


  saveCart();

  showToast(
    "Producto agregado al carrito"
  );

}


/* ================= INTERNET ================= */

$$(".internet-plan").forEach(button => {

  button.addEventListener(
    "click",
    () => {

      addToCart({

        id:
          button.dataset.product,

        name:
          button.dataset.product,

        duration:
          "",

        price:
          Number(
            button.dataset.price
          )

      });

    }
  );

});


/* ================= UPDATE CART ================= */

function updateCart() {

  const count =
    getCartCount();


  $("#cartCount").textContent =
    count;

  $("#bottomCartCount").textContent =
    count;


  const items =
    $("#cartItems");

  const empty =
    $("#cartEmpty");

  const footer =
    $("#cartFooter");


  if (!cart.length) {

    items.innerHTML = "";

    empty.style.display =
      "block";

    footer.style.display =
      "none";

  } else {

    empty.style.display =
      "none";

    footer.style.display =
      "block";


    items.innerHTML =
      cart.map(
        (item, index) => `

          <div class="cart-item">

            <div>

              <strong>
                ${item.name}
              </strong>

              <small>
                ${
                  item.duration
                    ? item.duration + " · "
                    : ""
                }

                Cantidad:
                ${item.quantity}

              </small>


              <button
                class="remove"
                data-remove="${index}"
              >
                Eliminar
              </button>

            </div>


            <div class="cart-price">

              ${money(
                item.price *
                item.quantity
              )}

            </div>

          </div>

        `
      ).join("");


    $$(".remove").forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const index =
            Number(
              button.dataset.remove
            );


          cart.splice(
            index,
            1
          );


          saveCart();

        }
      );

    });

  }


  $("#cartTotal").textContent =
    money(getCartTotal());


  renderCheckout();

}


/* ================= CHECKOUT ================= */

function renderCheckout() {

  $("#checkoutTotal").textContent =
    money(getCartTotal());


  const container =
    $("#checkoutProducts");


  if (!cart.length) {

    container.innerHTML =
      `<div class="checkout-line">
        <span>Sin productos</span>
        <span>$0</span>
      </div>`;

    return;

  }


  container.innerHTML =
    cart.map(
      item => `

        <div class="checkout-line">

          <span>
            ${item.name}
            × ${item.quantity}
          </span>

          <span>
            ${money(
              item.price *
              item.quantity
            )}
          </span>

        </div>

      `
    ).join("");

}


/* ================= MODALS ================= */

function openModal(id) {

  const modal =
    $(id);

  if (!modal) return;


  modal.classList.add("open");

  document.body.style.overflow =
    "hidden";

}


function closeModal(id) {

  const modal =
    $(id);

  if (!modal) return;


  modal.classList.remove("open");


  if (
    !document.querySelector(
      ".modal.open"
    )
  ) {

    document.body.style.overflow =
      "";

  }

}


/* ================= CLOSE BUTTONS ================= */

$$("[data-close]").forEach(button => {

  button.addEventListener(
    "click",
    () => {

      closeModal(
        "#" +
        button.dataset.close
      );

    }
  );

});


/* ================= SCROLL ================= */

$$("[data-scroll]").forEach(button => {

  button.addEventListener(
    "click",
    () => {

      const target =
        button.dataset.scroll;


      $$(".modal.open").forEach(
        modal => {

          closeModal(
            "#" + modal.id
          );

        }
      );


      setTimeout(() => {

        document
          .querySelector(target)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

      }, 50);

    }
  );

});


/* ================= MENU ================= */

$("#menuButton")
  .addEventListener(
    "click",
    () => {

      openModal(
        "#menuModal"
      );

    }
  );


$("#menuWhatsapp")
  .addEventListener(
    "click",
    () => {

      closeModal(
        "#menuModal"
      );

      openWhatsApp(
        "Hola PERSONALNET 👋 Quiero hacer una consulta."
      );

    }
  );


/* ================= CART ================= */

$("#openCart")
  .addEventListener(
    "click",
    () => {

      openModal(
        "#cartModal"
      );

    }
  );


$("#bottomCart")
  .addEventListener(
    "click",
    () => {

      openModal(
        "#cartModal"
      );

    }
  );


$("#checkoutButton")
  .addEventListener(
    "click",
    () => {

      if (!cart.length) {

        showToast(
          "El carrito está vacío"
        );

        return;

      }


      closeModal(
        "#cartModal"
      );


      openModal(
        "#checkoutModal"
      );

    }
  );


/* ================= WHATSAPP ================= */

function openWhatsApp(message) {

  const url =
    "https://wa.me/" +
    WHATSAPP +
    "?text=" +
    encodeURIComponent(
      message
    );


  window.open(
    url,
    "_blank"
  );

}


$("#whatsappButton")
  .addEventListener(
    "click",
    () => {

      openWhatsApp(
        "Hola PERSONALNET 👋 Quiero consultar por Internet o Streaming."
      );

    }
  );


$("#supportWhatsapp")
  .addEventListener(
    "click",
    () => {

      openWhatsApp(
        "Hola PERSONALNET 👋 Necesito ayuda con una compra."
      );

    }
  );


/* ================= CHECKOUT FORM ================= */

$("#checkoutForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      if (!cart.length) {

        showToast(
          "El carrito está vacío"
        );

        return;

      }


      const name =
        $("#customerName")
          .value
          .trim();


      const phone =
        $("#customerPhone")
          .value
          .trim();


      const payment =
        $("#paymentMethod")
          .value;


      const order =
        "PN-" +
        Date.now()
          .toString()
          .slice(-6);


      const products =
        cart.map(
          item =>
            `• ${item.name}` +
            `${
              item.duration
                ? " (" +
                  item.duration +
                  ")"
                : ""
            }` +
            ` × ${item.quantity}` +
            ` — ${money(
              item.price *
              item.quantity
            )}`
        )
        .join("\n");


      const message =

`Hola PERSONALNET 👋

Quiero realizar una compra.

Pedido: ${order}

Nombre: ${name}

WhatsApp: ${phone}

Forma de pago: ${payment}

${products}

Total: ${money(
  getCartTotal()
)}

Quedo atento para continuar con el pago.`;


      openWhatsApp(
        message
      );


      showToast(
        "Pedido preparado"
      );

    }
  );


/* ================= TRIAL ================= */

$("#openTrial")
  .addEventListener(
    "click",
    () => {

      openModal(
        "#trialModal"
      );

    }
  );


$("#trialCglite")
  .addEventListener(
    "click",
    () => {

      openModal(
        "#trialModal"
      );

    }
  );


$("#trialForm")
  .addEventListener(
    "submit",
    event => {

      event.preventDefault();


      const operator =
        $("#trialOperator")
          .value;


      const name =
        $("#trialName")
          .value
          .trim();


      const phone =
        $("#trialPhone")
          .value
          .trim();


      const message =

`Hola PERSONALNET 👋

Quiero Solicitar Una Prueba De Internet.

Operadora: ${operator}

Aplicación: CGLite

Nombre: ${name}

WhatsApp: ${phone}`;


      openWhatsApp(
        message
      );


      closeModal(
        "#trialModal"
      );


      showToast(
        "Solicitud preparada"
      );

    }
  );


/* ================= TOAST ================= */

let toastTimer;


function showToast(message) {

  const toast =
    $("#toast");


  toast.textContent =
    message;


  toast.classList.add(
    "show"
  );


  clearTimeout(
    toastTimer
  );


  toastTimer =
    setTimeout(
      () => {

        toast.classList.remove(
          "show"
        );

      },
      2200
    );

}


/* ================= NAV ACTIVE ================= */

window.addEventListener(
  "scroll",
  () => {

    const sections = [
      "inicio",
      "internet",
      "streaming"
    ];


    let current =
      "inicio";


    sections.forEach(
      id => {

        const section =
          document.getElementById(
            id
          );


        if (
          section &&
          window.scrollY >=
          section.offsetTop - 140
        ) {

          current = id;

        }

      }
    );


    $$(".nav-item")
      .forEach(
        item =>
          item.classList.remove(
            "active"
          )
      );


    const active =
      document.querySelector(
        `.nav-item[data-scroll="#${current}"]`
      );


    if (active) {

      active.classList.add(
        "active"
      );

    }

  }
);


/* ================= ESC ================= */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      $$(".modal.open")
        .forEach(
          modal =>
            closeModal(
              "#" + modal.id
            )
        );

    }

  }
);


/* ================= START ================= */

renderStreaming();

updateCart();
