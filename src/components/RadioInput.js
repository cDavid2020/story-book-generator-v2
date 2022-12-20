export default function RadioInput({label, name, checked}) {
  return `
  <div class="flex items-center gap-x-1">
    <label for="${label.toLowerCase()}">${label}</label>
    <input id="${label.toLowerCase()}" type="radio" name="${name}" value="us" ${checked ? "checked" : ""}>
  </div>
  `
}
