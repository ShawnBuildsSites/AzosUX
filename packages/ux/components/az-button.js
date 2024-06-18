import {AzosElement, html} from '../../../../../azos-js/packages/azos-ui/ui.js';
import {buttonStyles} from './styles.js';

export class AzButton extends AzosElement{
    static properties={
        color:{}, inverted:{}, width:{}
    };
    static styles=[buttonStyles];
    constructor(){
        super();
        this.getAttribute('invertColors')=='true' ? this.inverted='inverted' : this.inverted='';
        let acceptedColors=['primary','secondary','light','dark'];
        this.getAttribute('color')&&acceptedColors.includes(this.getAttribute('color')) ? this.color=this.getAttribute('color') : this.color='primary';
        let acceptedWidths=['initial','half','full'];
        this.getAttribute('width')&&acceptedWidths.includes(this.getAttribute('width')) ? this.width=this.getAttribute('width') : this.width='initial';
    }
    render(){
        return html`
            <button class="${this.color}_btn ${this.inverted} ${this.width}_width" id="${this.id}">
                ${this.getAttribute('label')}
            </button>
        `;
    }
}