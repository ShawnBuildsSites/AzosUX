import {AzosElement, html} from '../../../../../azos-js/packages/azos-ui/ui.js';
import {checkboxStyles,customCheck,switchCheck} from './styles.js';

export class AzCheckbox extends AzosElement{
    static properties={
        checked:{}, labelText:{}, customCheck:{}, indeterminate:{}
    };
    static styles=[
        checkboxStyles, customCheck, switchCheck
    ];
    constructor(){
        super();
        this.checked=false;
        this.labelText=this.getAttribute('label');
        this.getAttribute('isSwitch')&&this.getAttribute('isSwitch')=='true' ? this.customCheck='switch' : this.customCheck='customCheck';
        this.indeterminate=this.getAttribute('indeterminate');
    }
    render(){
        /*function addIndeterminate(cb){
            if(cb.readOnly){
                cb.checked=cb.readOnly=false;
            }else if(!cb.checked){
                cb.readOnly=cb.indeterminate=true;
            }
        }
        Add to rendered input? ->  ${this.indeterminate=='true' ?  html`@click="addIndeterminate(this)"` : html``}
        This doesn't work...
        */
        return html`
            <div>
                <label for="${this.id}">
                    <input type="checkbox" class="${this.customCheck}" id="${this.id}" name="${this.id}">
                    ${this.labelText}
                </label>
            </div>
        `;
    }
    
}

