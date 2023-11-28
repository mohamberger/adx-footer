window.adxApp =
  window.adxApp ||
  (() => {
    const embeddedFooters = document.querySelectorAll(".adx-footer");

    var styles = {
      adxStyleProps:
        "margin: 0; background: rgb(36, 99, 235); background: linear-gradient(90deg, rgba(36, 99, 235, 1) 0%, rgba(139, 92, 246, 1) 100%); display: flex; justify-content: center; padding: 0.25rem; color: white; font-family: 'Inter', sans-serif;",
      adxFooterTextStyles: "margin: 0;",
      adxStyleLink: "color: white;",
    };

    for (const embeddedFooter of embeddedFooters) {
      const adxFooter = document.createElement("div");
      const adxFooterText = document.createElement("p");
      const adxLink = document.createElement("a");

      adxFooterText.innerText = "Made with ♥ by ";
      adxLink.innerText = " allesdigital";
      adxLink.href = "https://www.allesdigital.io";

      adxFooter.style = styles.adxStyleProps;
      adxFooterText.style = styles.adxFooterTextStyles;
      adxLink.style = styles.adxStyleLink;

      embeddedFooter.appendChild(adxFooter);
      adxFooter.appendChild(adxFooterText);
      adxFooterText.appendChild(adxLink);
    }
  })();
