window.adxApp =
  window.adxApp ||
  (() => {
    const embeddedFooters = document.querySelectorAll(
      ".adx-footer a[href^='https://www.allesdigital.io']"
    );

    for (const embeddedFooter of embeddedFooters) {
      const url = new URL(embeddedFooter.getAttribute("href"));

      const widget = document.createElement("iframe");
      widget.setAttribute("scrolling", "no");
      widget.setAttribute("allowtransparency", "true");
      widget.setAttribute("allowfullscreen", "true");
      widget.setAttribute("frameborder", 0);
      widget.style.position = "static";
      widget.style.visibility = "visible";
      widget.style.width = "560px";
      widget.style.height = "690px";
      widget.style.display = "block";
      widget.style.flexGrow = 1;
      widget.src = "http://127.0.0.1:3001/";

      const container = document.createElement("div");
      container.classList.add("adx-footer");
      container.classList.add("adx-footer-rendered");
      container.appendChild(widget);

      embeddedFooter.closest(".adx-footer").replaceWith(container);
    }
  })();
