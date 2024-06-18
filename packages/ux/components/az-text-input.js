import {AzosElement, html} from '../../../../../azos-js/packages/azos-ui/ui.js';
import {inputStyles} from './styles.js';

export class AzTextInput extends AzosElement{
    static properties={
        fieldType:{}, compField:{}
    };
    static styles=[inputStyles];
    constructor(){
        super();
        if(this.getAttribute('inputType')=='password') this.fieldType=html`input type="password"`;
        if(this.getAttribute('state')&&this.getAttribute('state')!=''){this.fieldStateTrue=true;}else{this.fieldStateTrue=false;}
        this.compArea = this.getAttribute('inputType')=='long' ? html`<textarea id="${this.id}" ${this.minLen} ${this.maxLen} rows="4" placeholder="${this.getAttribute('placeholder')}" ${this.fieldState} .value=${this.getAttribute("value")} ?disabled=${this.getAttribute('disable')} ?readonly=${this.getAttribute('readonly')} ?required=${this.getAttribute('required')}></textarea>`
            : this.getAttribute('inputType')=='password' ? html`<input type="password" id="${this.id}" ${this.minLen} ${this.maxLen} placeholder="${this.getAttribute('placeholder')}" value="${this.getAttribute('value')}" ?disabled=${this.getAttribute('disable')} ?readonly=${this.getAttribute('readonly')} ?required=${this.getAttribute('required')}>`
            : html`<input type="text" id="${this.id}" minlength="${this.getAttribute('minLength')}" maxlength="${this.getAttribute('maxLength')}" placeholder="${this.getAttribute('placeholder')}" value="${this.getAttribute('value')}" ?disabled=${this.getAttribute('disable')} ?readonly=${this.getAttribute('readonly')} ?required=${this.getAttribute('required')}>`;
    }
    render(){
        console.log(this.getAttribute('maxLength'));
        return html`
            <label>${this.getAttribute('label')}</label>${this.compArea}
        `;
    }
}