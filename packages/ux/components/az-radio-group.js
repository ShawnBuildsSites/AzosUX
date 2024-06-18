import {AzosElement, html} from '../../../../azos-js/packages/azos-ui/ui.js';
import {radioStyles,switchCheck} from './styles.js';

export class AzRadioGroup extends AzosElement{
    static styles=[radioStyles,switchCheck];
    constructor(){
        super();
        this.listItems=this.getAttribute('choices').split('|');
        this.getAttribute('isSwitch') ? this.customCheck='switch' : this.customCheck='radio';
    }
    render(){
        return html`
            <div>
                <p>${this.getAttribute('label')}</p>
                ${this.listItems.map(
                    (i) => html`
                        <div>
                            <label>
                                <input type="radio" class="${this.customCheck}" id="${this.id}_${this.listItems.indexOf(i)}" name="${this.id}">
                                ${i}
                            </label>
                        </div>
                    `
                )}
            </div>
        `;
    }
}