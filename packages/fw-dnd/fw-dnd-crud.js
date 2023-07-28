import { LitElement, html } from "lit";
import "@polymer/iron-icons";
import "@polymer/paper-button";
import "@polymer/paper-input/paper-input.js";
import "@polymer/paper-input/paper-textarea.js";
import "@polymer/paper-icon-button";
import { BoxInputStyles } from "@fw-components/styles/input-styles.js";
import { CustomDndStyles, HeaderRowStyle, ItemRowStyle, BoxTextAreaStyles } from "./styles/index.js";
import "./fw-dnd.js";

export class crudDnDList extends LitElement {
  static get properties() {
    return {
      list: Array,
      primaryAttribute: String,
      secondaryAttribute: String,
      positionAttribute: String,
      idAttribute: String,
      preventDeleteAttribute: String,
      primaryHeaderValue: String,
      secondaryHeaderValue: String,
      editable: Boolean,
      stepSize: Number,
      _addItemFieldVisible: Boolean,
      _newItemPrimaryAttribute: Boolean,
      _newItemSecondaryAttribute: Boolean,
      _editItemFieldVisible: Boolean,
      _activeItemEditsDetails: Boolean,
    };
  }

  constructor() {
    super();
    this.list = [];
    this.stepSize = 1024;
    this._addItemFieldVisible = false;
    this._editItemFieldVisible = [];
    this._activeItemEditsDetails = [];
  }

  render() {
    return html` ${BoxInputStyles} ${CustomDndStyles} ${BoxTextAreaStyles} ${this.headerRow()}
    ${this.primaryAttribute && this.idAttribute
      ? html`
          ${this.editable && this._addItemFieldVisible
            ? html` <div class="item-row item-bottom-border">
                <iron-icon style="visibility:hidden" id="drag-icon" icon="reorder"></iron-icon>
                <div class="item-grid-container">
                  <paper-input
                    id="add-primary-input"
                    class="box"
                    .noLabelFloat=${true}
                    .value=${this._newItemPrimaryAttribute}
                    @keydown=${(e) => {
                      if (e.keyCode === 13) this.addNewItem();
                    }}
                    @value-changed=${(e) => {
                      this._newItemPrimaryAttribute = e.target.value;
                      this._removeErrorMsg(e.target);
                    }}
                  ></paper-input>
                  ${this.secondaryAttribute
                    ? html`<paper-textarea
                        class="box grid-row-2-item"
                        .noLabelFloat=${true}
                        .value=${this._newItemSecondaryAttribute}
                        @value-changed=${(e) => {
                          this._newItemSecondaryAttribute = e.target.value;
                        }}
                      ></paper-textarea>`
                    : null}

                  <paper-icon-button
                    icon="check"
                    @tap=${() => {
                      this.addNewItem();
                    }}
                  ></paper-icon-button>
                  <paper-icon-button
                    icon="cancel"
                    @tap=${() => {
                      this._clearAddNewItemProperties();
                    }}
                  ></paper-icon-button>
                </div>
              </div>`
            : null}

          <drag-drop-list
            .list=${this.list}
            .headerName=${this.primaryHeaderValue}
            @item-reordered=${(e) => this.reorderItem(e.detail)}
            .dragItemRenderer=${(item) => this.renderListItem(item)}
          ></drag-drop-list>
        `
      : null}`;
  }

  headerRow() {
    return html`
      ${HeaderRowStyle}
      <div style=${this.editable && this.positionAttribute ? "" : "padding-left:10px;width:99%;gap:5px"} class="header-row">
        <span>${this.primaryHeaderValue || ""}</span>
        <span class="grid-row-2-item">${this.secondaryHeaderValue || ""}</span>
        ${this.editable
          ? html`<paper-button
              id="add-new-item-btn"
              noink
              raised
              class="grid-row-2-item"
              @click=${() => {
                this._addItemFieldVisible = true;
              }}
            >
              <iron-icon icon="add-circle-outline"></iron-icon> ADD
            </paper-button>`
          : null}
      </div>
    `;
  }

  renderListItem(item) {
    return html` <div class="item-row ${this.editable && this.positionAttribute ? "item-bottom-border" : null}">
      ${this.editable && this.positionAttribute ? html`<iron-icon id="drag-icon" icon="reorder"></iron-icon>` : null}
      <div
        style=${this.editable ? "" : "gap:15px;padding-left:10px;"}
        class="item-grid-container ${this.secondaryAttribute ? null : "grid-template-3-column"}${!this.editable || !this.positionAttribute ? "item-bottom-border" : null}"
        draggable="true"
        @dragstart=${(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        ${this._editItemFieldVisible?.includes(item[this.idAttribute])
          ? this._renderItemEditFields(item)
          : html` <span>${item[this.primaryAttribute]}</span>
              ${this.secondaryAttribute ? html` <span class="grid-row-2-item">${item[this.secondaryAttribute]}</span>` : null}
              ${this.editable
                ? html`
                    <paper-icon-button
                      class="edit-btn"
                      icon="create"
                      @tap=${() => {
                        this._editItemFieldVisible = [...this._editItemFieldVisible, item[this.idAttribute]];
                      }}
                    ></paper-icon-button>
                    ${item[this.preventDeleteAttribute]
                      ? html`<paper-icon-button
                          icon="info"
                          noink
                          class="info-btn ${this.secondaryAttribute ? "" : "grid-reposition-btn"}"
                          @tap=${(e) => e.target.classList.toggle("info-btn-text")}
                          title=${this.defaultAttributeHoverMessage ? this.defaultAttributeHoverMessage(item) : null}
                        ></paper-icon-button>`
                      : html`<paper-icon-button
                          icon="delete"
                          class="delete-btn ${this.secondaryAttribute ? "" : "grid-reposition-btn"}"
                          @tap=${() => {
                            this.deleteItem(item);
                          }}
                        ></paper-icon-button>`}
                  `
                : null}`}
      </div>
    </div>`;
  }

  _renderItemEditFields(item) {
    return html`
      <paper-input
        class="box"
        .noLabelFloat=${true}
        id="edit-input-${item[this.idAttribute]}"
        .value=${item[this.primaryAttribute]}
        @keydown=${(e) => {
          if (e.keyCode === 13) this.updateItem(item[this.idAttribute]);
        }}
        @value-changed=${(e) => {
          this._updateActiveEdits(item[this.idAttribute], this.primaryAttribute, e.target.value);
          this._removeErrorMsg(e.currentTarget);
        }}
      ></paper-input>

      ${this.secondaryAttribute
        ? html` <paper-textarea
            .noLabelFloat=${true}
            class="box grid-row-2-item"
            .value=${item[this.secondaryAttribute]}
            @value-changed=${(e) => {
              this._updateActiveEdits(item[this.idAttribute], this.secondaryAttribute, e.target.value);
            }}
          ></paper-textarea>`
        : null}

      <paper-icon-button
        icon="check"
        @tap=${() => {
          this.updateItem(item[this.idAttribute]);
        }}
      ></paper-icon-button>

      <paper-icon-button
        icon="cancel"
        class="${this.secondaryAttribute ? "" : "grid-reposition-btn"}"
        @tap=${() => {
          this._removeItemFromActiveEdits(item[this.idAttribute]);
        }}
      ></paper-icon-button>
    `;
  }

  updateItem(itemId) {
    let updatedDetails = this._activeItemEditsDetails.find((item) => item[this.idAttribute] === itemId);
    const initialDetails = this.list?.find((item) => item[this.idAttribute] === itemId);
    updatedDetails = { ...initialDetails, ...updatedDetails };
    updatedDetails[this.primaryAttribute] = updatedDetails[this.primaryAttribute].trim();
    if (updatedDetails[this.primaryAttribute] === "") {
      if (typeof initialDetails[this.preventDeleteAttribute] === "string") updatedDetails[this.primaryAttribute] = initialDetails[this.preventDeleteAttribute];
      else {
        const editInputField = this.shadowRoot.querySelector("drag-drop-list").shadowRoot.querySelector(`#edit-input-${itemId}`);
        this._displayErrorMessage(editInputField, "Required");
        return;
      }
    } else if (this._itemAlreadyExist(updatedDetails)) {
      const editInputField = this.shadowRoot.querySelector("drag-drop-list").shadowRoot.querySelector(`#edit-input-${itemId}`);
      this._displayErrorMessage(editInputField, "Already Exist");
      return;
    }

    this._removeItemFromActiveEdits(itemId);

    let updateEvent = new CustomEvent("item-updated", {
      detail: { data: { ...updatedDetails } },
      bubbles: true,
      composed: true,
    });
    if (this.editable) this.dispatchEvent(updateEvent);
  }

  deleteItem(item) {
    let deleteEvent = new CustomEvent("item-deleted", {
      detail: { data: { ...item } },
      bubbles: true,
      composed: true,
    });
    if (this.editable) this.dispatchEvent(deleteEvent);
  }

  addNewItem() {
    if (this._newItemPrimaryAttribute.trim() === "") {
      this._displayErrorMessage(this.shadowRoot.querySelector("#add-primary-input"), "Required");
      return;
    }
    let newItemDetails = { [this.primaryAttribute]: this._newItemPrimaryAttribute.trim() };
    if (this.secondaryAttribute && this._newItemSecondaryAttribute.trim()) newItemDetails[this.secondaryAttribute] = this._newItemSecondaryAttribute.trim();
    if (this.positionAttribute) newItemDetails[this.positionAttribute] = (this.list.at(0)?.[this.positionAttribute] || 0) - this.stepSize;

    if (this._itemAlreadyExist(newItemDetails)) {
      this._displayErrorMessage(this.shadowRoot.querySelector("#add-primary-input"), "Already Exists");
      return;
    }
    let addEvent = new CustomEvent("item-added", {
      detail: { data: { ...newItemDetails } },
      bubbles: true,
      composed: true,
    });
    this._clearAddNewItemProperties();
    if (this.editable) this.dispatchEvent(addEvent);
  }

  reorderItem(reorderEventDetails) {
    if (!this.editable || !this.positionAttribute) return;
    let newIndex = reorderEventDetails.newIndex;
    let updatedItem = { ...reorderEventDetails.draggedItem };
    if (newIndex == 0) {
      updatedItem[this.positionAttribute] = this.list[newIndex][this.positionAttribute] - this.stepSize;
    } else if (newIndex == this.list?.length - 1) {
      updatedItem[this.positionAttribute] = this.list[newIndex][this.positionAttribute] + this.stepSize;
    } else {
      updatedItem[this.positionAttribute] =
        this.list[newIndex][this.positionAttribute] > updatedItem[this.positionAttribute]
          ? (this.list[newIndex][this.positionAttribute] + this.list[newIndex + 1][this.positionAttribute]) / 2
          : (this.list[newIndex][this.positionAttribute] + this.list[newIndex - 1][this.positionAttribute]) / 2;
    }
    let positionUpdateEvent = new CustomEvent("item-updated", {
      detail: { data: { ...updatedItem } },
      bubbles: true,
      composed: true,
    });
    if (this.editable) this.dispatchEvent(positionUpdateEvent);
  }

  firstUpdated() {
    const styleNode = document.createElement("style");
    const dragDropNode = this.shadowRoot.querySelector("drag-drop-list").shadowRoot;
    dragDropNode.appendChild(styleNode);
    dragDropNode.querySelector("style").insertAdjacentHTML("beforebegin", CustomDndStyles.strings[0]);
    dragDropNode.querySelector("custom-style").insertAdjacentHTML("beforebegin", ItemRowStyle.strings[0]);
    dragDropNode.querySelector("custom-style").insertAdjacentHTML("beforebegin", BoxTextAreaStyles.strings[0]);
    dragDropNode.querySelector("custom-style").insertAdjacentHTML("beforebegin", BoxInputStyles.strings[1]);
  }

  willUpdate(changedPropertiesMap) {
    if (this.positionAttribute && changedPropertiesMap.has("list")) this.list.sort((a, b) => a[this.positionAttribute] - b[this.positionAttribute]);

    if (changedPropertiesMap.has("_editItemFieldVisible")) this.list = [].concat(this.list);

    if (changedPropertiesMap.has("editable")) {
      this._editItemFieldVisible = [];
      this._addItemFieldVisible = false;
      this._newItemPrimaryAttribute = "";
      this._newItemSecondaryAttribute = "";
      this.list = [].concat(this.list);
    }
  }

  _updateActiveEdits(itemId, editedField, newValue) {
    const itemIndex = this._activeItemEditsDetails.findIndex((item) => item[this.idAttribute] === itemId);
    if (itemIndex > -1) {
      this._activeItemEditsDetails[itemIndex][editedField] = newValue;
      return;
    }
    let editedItem = { [this.idAttribute]: itemId, [editedField]: newValue };
    this._activeItemEditsDetails.push(editedItem);
  }

  _clearAddNewItemProperties() {
    this._newItemPrimaryAttribute = "";
    this._newItemSecondaryAttribute = "";
    this._addItemFieldVisible = false;
  }

  _removeItemFromActiveEdits(itemId) {
    const itemIndex = this._activeItemEditsDetails.findIndex((obj) => obj[this.idAttribute] === itemId);
    this._activeItemEditsDetails.splice(itemIndex, 1);
    this._editItemFieldVisible = this._editItemFieldVisible.filter((id) => id != itemId);
  }

  _itemAlreadyExist(newItem) {
    return this.list.some(
      (item) => item[this.primaryAttribute].toLowerCase() === newItem[this.primaryAttribute].toLowerCase() && item[this.idAttribute] != newItem[this.idAttribute]
    );
  }

  _displayErrorMessage(inputElement, message) {
    inputElement.invalid = true;
    inputElement.errorMessage = message;
    inputElement.classList.add("add-warning-margin");
    if (inputElement.nextSibling) inputElement.nextElementSibling.classList.add("add-warning-margin");
  }

  _removeErrorMsg(inputElement) {
    inputElement.invalid = false;
    inputElement.classList.remove("add-warning-margin");
    if (inputElement.nextSibling) inputElement.nextElementSibling.classList.remove("add-warning-margin");
  }
}

window.customElements.define("fw-dnd-crud", crudDnDList);
