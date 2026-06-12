import { c as createComponent, b as createAstro, a as renderTemplate, d as renderSlot, e as renderHead, f as addAttribute, m as maybeRenderHead } from './astro/server_CaoQYx49.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>", "</title>", "</head> <body> ", ' <!-- <script>\n			import "../scripts/menu.js";\n			<\/script> --> </body></html>'])), addAttribute(Astro2.generator, "content"), pageTitle, renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/setayoshi/Documents/ToyBox/Website - Copy/src/layouts/BaseLayout.astro", void 0);

const $$Card = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="card" data-astro-cid-dohjnao5> <!-- <center> --> ${renderSlot($$result, $$slots["default"])} <!-- </center> --> </section>`;
}, "C:/Users/setayoshi/Documents/ToyBox/Website - Copy/src/components/Card.astro", void 0);

export { $$BaseLayout as $, $$Card as a };
