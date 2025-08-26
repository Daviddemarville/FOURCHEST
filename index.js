const citySelectIndex = document.getElementById("default-search");

citySelectIndex.addEventListener("change", () => {
	localStorage.setItem("citySelected", citySelectIndex.value);
});
