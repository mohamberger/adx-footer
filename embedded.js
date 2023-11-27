window.twitterApp =
  window.twitterApp ||
  (() => {
    const embeddedTweets = document.querySelectorAll(
      ".twitter-tweet a[href^='https://twitter.com']"
    );
    const origin = new URL(document.currentScript.src).origin;

    for (const embeddedTweet of embeddedTweets) {
      const url = new URL(embeddedTweet.getAttribute("href"));

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
      widget.src = origin + "/embed" + url.pathname;

      const container = document.createElement("div");
      container.classList.add("twitter-tweet");
      container.classList.add("twitter-tweet-rendered");
      container.appendChild(widget);

      embeddedTweet.closest(".twitter-tweet").replaceWith(container);
    }
  })();
