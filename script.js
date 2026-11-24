const status = document.querySelector("#channel-status");

for (const button of document.querySelectorAll("[data-channel]")) {
  button.addEventListener("click", () => {
    status.textContent = `Ссылка для записи в ${button.dataset.channel} появится после согласования.`;
  });
}
