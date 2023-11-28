window.adxApp =
  window.adxApp ||
  (() => {
    const embeddedFooters = document.querySelectorAll(".adx-footer");
    if (embeddedFooters.length) {
      for (const embeddedFooter of embeddedFooters) {
        embeddedFooter.appendChild(createFooterElement());
      }
    } else {
      document.body.appendChild(createFooterElement());
    }

    function createFooterElement() {
      const div = document.createElement("div");
      const text = document.createElement("p");
      const link = document.createElement("a");

      text.innerText = "Made with ♥ by ";
      link.innerText = "allesdigital";
      link.href = "https://www.allesdigital.io";

      div.style =
        "margin: 0; background: rgb(36, 99, 235); background: linear-gradient(90deg, rgba(36, 99, 235, 1) 0%, rgba(139, 92, 246, 1) 100%); display: flex; justify-content: center; padding: 0.25rem; color: white; font-family: 'Inter', sans-serif;";
      text.style = "margin: 0;";
      link.style = "color: white;";

      div.appendChild(text);
      text.appendChild(link);
      return div;
    }
  })();
