import {AzosElement, html} from '../../../../azos-js/packages/azos-ui/ui.js';
import {inputStyles} from './styles.js';

export class AzTextInput extends AzosElement{
    static styles=[inputStyles];
    constructor(){
        super();
        if(this.getAttribute('inputType')=='password') this.fieldType=html`input type="password"`;
        this.disable=false; this.readonly=false; this.require=false;
        if(this.getAttribute('state')){
            this.getAttribute('state')=='disable' ? this.disable=true :
            this.getAttribute('state')=='readonly' ? this.readonly=true :
            this.require=true;
        }
        this.compArea = this.getAttribute('inputType')=='long' ? html`<textarea id="${this.id}" minlength="${this.getAttribute('minLength')}" maxlength="${this.getAttribute('maxLength')}" rows="4" placeholder="${this.getAttribute('placeholder')}" .value=${this.getAttribute("value")} ?disabled=${this.disable} ?readonly=${this.readonly} ?required=${this.require}></textarea>`
            : this.getAttribute('inputType')=='password' ? html`<input type="password" id="${this.id}" minlength="${this.getAttribute('minLength')}" maxlength=${this.getAttribute('maxLength')} placeholder="${this.getAttribute('placeholder')}" value="${this.getAttribute('value')}" ?disabled=${this.disable} ?readonly=${this.readonly} ?required=${this.require}>`
            : html`<input type="text" id="${this.id}" minlength="${this.getAttribute('minLength')}" maxlength="${this.getAttribute('maxLength')}" placeholder="${this.getAttribute('placeholder')}" value="${this.getAttribute('value')}" ?disabled=${this.disable} ?readonly=${this.readonly} ?required=${this.require}>`;
    }
    render(){
        return html`
            <label>${this.getAttribute('label')}</label>${this.compArea}
        `;
    }
}