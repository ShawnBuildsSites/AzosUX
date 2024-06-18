import {AzosElement, html} from '../../../../azos-js/packages/azos-ui/ui.js';
import {selectStyles} from './styles.js';

export class AzSelect extends AzosElement{
    static properties={
        listItems:{}
    };
    static styles=[selectStyles];
    constructor(){
        super();
        this.listItems=this.getAttribute('choices').split('|');
        this.disable=false; this.require=false;
        if(this.getAttribute('state')){
            this.getAttribute('state')=='disable' ? this.disable=true :
            this.require=true;
        }
    }
    render(){
        return html`
            <label>
                ${this.getAttribute('label')}</label>
                <select id="${this.id}" name="${this.id}" ?disabled=${this.disable} ?required=${this.require} >
                    <option>${this.getAttribute('placeholder') ? this.getAttribute('placeholder') : html`Select&hellip;`}</option>
                    ${this.listItems.map(
                        (i) => html`<option value="${i}">${i}</option>`
                    )}
                </select>
        `;
    }
}