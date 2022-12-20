// ⚠️ ASSUMPTION: The label will be a single word
export default function TextInput(label = "Name") {
  return `
  <div class="flex gap-x-2 items-center">
    <label for="${label.toLowerCase()}">${label}</label>
    <input id="${label.toLowerCase()}" type="text">
   </div>
    `
}