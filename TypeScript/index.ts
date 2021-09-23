const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  const e = event.currentTarget as HTMLInputElement;
  console.log(e.value)
})