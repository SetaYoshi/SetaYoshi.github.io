import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CaoQYx49.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout, a as $$Card } from '../chunks/Card_CDAiffAe.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": "SetaHome" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, {}, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="card-title">Welcome</p> <p class="card-text">Sample text. Click to select the Text Element.</p> ` })} ` })}`;
}, "C:/Users/setayoshi/Documents/ToyBox/Website - Copy/src/pages/index.astro", void 0);

const $$file = "C:/Users/setayoshi/Documents/ToyBox/Website - Copy/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
