import { LitElement, html } from "lit";
import "@fw-components/fw-theme-builder/fw-theme-builder";
import { ThemeBuilderShowcaseStyles } from "./style";

export class FWThemeBuilderShowcase extends LitElement {
  static get properties() {
    return {
      inputTheme: Object,
    };
  }

  constructor() {
    super();
    this.inputTheme = {
      colors: {
        primary: {
          hex: "#ad38d1",
          rgb: "rgb(173, 56, 209)",
          l1: "#ba68d3",
          l2: "#dcb5e7",
          l3: null,
        },
        secondary: {
          hex: "#4a48c7",
          rgb: "rgb(74, 72, 199)",
          l1: "#5f5dce",
          l2: "#706fd1",
          l3: "#9190df",
          contrast: "#ebdbdb",
        },
        background: {
          hex: "#eeeeee",
          rgb: "rgb(238, 238, 238)",
        },
      },
    };
  }

  changeColorHandler(e) {
    if (e.detail.type.toLowerCase() == "hex")
      document.body.style.setProperty(
        "--" + e.detail.group.toLowerCase(),
        e.detail.value
      );
    else
      document.body.style.setProperty(
        "--" + e.detail.group.toLowerCase() + "-" + e.detail.type.toLowerCase(),
        e.detail.value
      );
  }

  changeSizeHandler(e) {
    document.body.style.setProperty(
      "--font-" + e.detail.type.toLowerCase(),
      e.detail.value
    );
  }

  async changeFontHandler(e) {
    const selectedFont = new FontFace(
      e.detail.value.name,
      `url(${e.detail.value.url})`
    );
    document.fonts.add(selectedFont);
    await selectedFont.load();

    document.body.style.setProperty(
      "--" + e.detail.type.toLowerCase() + "-font",
      e.detail.value.name
    );
  }

  render() {
    return html`
      ${ThemeBuilderShowcaseStyles}
      <main class="showcase-page">
        <div class="content-container">
          <div class="showcase-content">
            <section class="left-section">
              <span class="main-heading">
                Theme Builder
                <span class="alpha-pill">Alpha</span>
              </span>
              <span class="sub-heading"
                >Build and customize your own theme, effortlessly.</span
              >
              <span class="main-buttons">
                <button class="button primary-button">
                  See all components
                </button>
                <button class="button secondary-button">
                  Go to repository
                </button>
              </span>
              <p class="error-text">
                Oops! Seems like an error occured.<strong>Fix this</strong>
              </p>
            </section>
            <section class="right-section">
              <div class="circle-group">
                <span class="primary-color color-circle"></span>
                <span class="secondary-color color-circle"></span>
                <span class="primary-txt-color color-circle"></span>
                <span class="secondary-txt-color color-circle"></span>
                <span class="title-color color-circle"></span>
                <span class="subtitle-color color-circle"></span>
                <span class="body-txt-color color-circle"></span>
              </div>
              <p class="body-text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text. All the Lorem Ipsum generators on
                the Internet tend to repeat predefined chunks as necessary,
                making this the first true generator on the Internet. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable.
              </p>
            </section>
          </div>
          <div class="features">
            <section class="secondary-colors">
              <h4>Build your design system</h4>
              <p>
                In eu sapien risus. Nulla vel lectus faucibus, tincidunt massa
                at, pulvinar metus. Phasellus vitae elit in mi ullamcorper
                commodo. Vivamus consequat eu nunc at auctor.
              </p>
            </section>
            <section>
              <h4>Customize font sizes</h4>
              <p>
                Pellentesque pretium cursus nisi, et hendrerit nulla dictum vel.
                Ut vel erat quis ipsum suscipit tincidunt a eu turpis. Quisque
                felis risus, porta ac lacus eget, efficitur tempor enim.
              </p>
            </section>
            <section class="hide-on-phone">
              <h4>Customize colors</h4>
              <p>
                Cras feugiat ut enim eu congue. Aliquam erat volutpat. Curabitur
                quam tortor, eleifend et interdum eu, venenatis et quam. Donec
                vehicula aliquet lobortis.
              </p>
            </section>
          </div>
        </div>

        <fw-theme-builder
          .viewByGroup=${true}
          @color-changed=${(e) => this.changeColorHandler(e)}
          @font-changed=${(e) => this.changeFontHandler(e)}
          @size-changed=${(e) => this.changeSizeHandler(e)}
          id="theme-builder"
        ></fw-theme-builder>
      </main>
    `;
  }
}

window.customElements.define(
  "fw-theme-builder-showcase",
  FWThemeBuilderShowcase
);
