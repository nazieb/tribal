if (location.href.indexOf("page=all") < 0) {
  const nextPage = "?page=2";
  const uri = location.href.split("?")[0];
  const nextUri = uri + nextPage;
  const anchor = document.querySelectorAll(`[href="${nextPage}"],[href="${nextUri}"]`);

  if (anchor.length > 0) {
    const params = new URLSearchParams(location.search);
    params.set("page", "all");

    location.search = params.toString();
  }
}