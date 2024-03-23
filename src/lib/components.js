import { h } from "hastscript"

const Note = (props, children) => h(".note", [h("p.text-sapphire.my-2", "Note"), ...children]) 
const Tip = (props, children) => h(".tip", [h("p.text-green.my-2", "Tip"), ...children])
const Important = (props, children) => h(".important", [h("p.text-mauve.my-2", "Important"), ...children])
const Warning = (props, children) => h(".warning", [h("p.text-yellow.my-2", "Warning"), ...children])
const Caution = (props, children) => h(".caution", [h("p.text-red.my-2", "Caution"), ...children])

export { Note, Tip, Important, Warning, Caution }