export function unlockBody() {
  if (document.body.classList.contains('locked')) {
    document.body.classList.remove('locked');
  }
}
