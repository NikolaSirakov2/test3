import { html, render } from 'https://unpkg.com/lit-html?module';



const p = name => html`<p>Hello ${name}</p>`;

render(p('Nikola'), document.querySelector('main'));
render(p('Noncheto'), document.querySelector('nav'));