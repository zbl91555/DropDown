function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
export default function() {
  return 'MAX-' + s4() + s4() + s4()
}
