import { h } from "hastscript"
import { visit, SKIP } from "unist-util-visit"
import { isElement } from "hast-util-is-element"

const Note = (props, children) => h(".note", [h("p.text-sapphire", "Note"), ...children]) 
const Tip = (props, children) => h(".tip", [h("p.text-green", "Tip"), ...children])
const Important = (props, children) => h(".important", [h("p.text-mauve", "Important"), ...children])
const Warning = (props, children) => h(".warning", [h("p.text-yellow", "Warning"), ...children])
const Caution = (props, children) => h(".caution", [h("p.text-red", "Caution"), ...children])

export { Note, Tip, Important, Warning, Caution }