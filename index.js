export default {
  fetch(request) {
    const url = new URL(request.url);

    if (
      url.hostname === "shopsummercamp.com" ||
      url.hostname === "www.shopsummercamp.com"
    ) {
      return Response.redirect(
        "https://hotelx.com.au" + url.pathname + url.search,
        301
      );
    }

    return fetch(request);
  }
};
