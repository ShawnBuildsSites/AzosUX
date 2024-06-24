import {AzosElement, html} from '../../../../azos-js/packages/azos-ui/ui.js';
import {baseStyles,radioStyles,switchStyles,checkStyles} from './styles.js';

export class AzRadioGroup extends AzosElement{
    static styles=[baseStyles,radioStyles,switchStyles,checkStyles];
    constructor(){
        super();
        this.options=this.getElementsByTagName('option');
        (!this.getAttribute('type')||this.getAttribute('type')=='radio') ? this.check='radio' : this.getAttribute('type')=='check' ? this.check='check' : this.check='switch';
        this.optionList='';
        for(let i=0;i<this.options.length;i++){
            this.optionList+=html`
                <div>
                    <label>
                        <input type="radio" class="${this.check}" id="${this.id}_${this.options.indexOf(option)}" name="${this.id}">
                        <span>${option.innerHTML}</span>
                    </label>
                </div>
            `;
        }
    }
    render(){
        const ranks=['','xl','lg','md','sm','xs'];
        const rank=ranks[!this.getAttribute('rank') ? 3 : this.getAttribute('rank')];
        this.status='';
        !this.getAttribute('status') ? this.status='text_dark' : this.getAttribute('status')=='disabled' ? this.status='text_disabled' : this.status=`text_${this.getAttribute('status')}`;
        this.getAttribute('status')=='disabled' ? this.disabled=true : this.disabled=false;
        console.table(this.options);
        console.log(this.options.length);
        return html`
            <div class="text_${rank} ${this.status}">
                <p>${this.getElementsByTagName('label')[0].innerHTML}</p>
                ${this.optionList}
            </div>
        `;
    }
}