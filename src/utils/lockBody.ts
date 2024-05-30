export function lockBody() {
  if (!document.body.classList.contains('locked')) {
    document.body.classList.add('locked');
  }
}
