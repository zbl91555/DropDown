export default function SetTitle(t) {
  document.title = t
  let i = document.createElement('iframe')
  i.style.display = 'none'
  i.onload = function() {
    setTimeout(function() {
      i.remove()
    }, 9)
  }
  document.body.appendChild(i)
}
