import {css} from '../../../../azos-js/packages/azos-ui/ui.js';
import * as color from './color-pallet.js';

/*****************************************************
 * This file contains styles for components.         *
 *                                                   *
 * What's included:                                  *
 * buttonStyles  *  checkboxStyles  *  customCheck   *
 * inputStyles   *  radioStyles     *  selectStyles  *
 * switchCheck                                       *
 *                                                   *
 * NOTE: Colors are contained in color-pallet.js     *
******************************************************/

export const baseStyles=css`
    .primary_bg{background-color:${color.primary};}
`;

export const buttonStyles=css`
    button{
        cursor:pointer;
        padding:10px 20px;
        border-radius:5px;
        filter: brightness(1);
        font-size:1em;
        margin:10px;
    }
    button:hover{ filter:brightness(1.15); }
    .primary_btn{
        background-color:${color.primary};
        color:${color.light};
        border:2px solid ${color.light};
    }
    .half_width{
        display:block;
        width:50%;
    }
    .full_width{
        display:block;
        width:100%;
    }
    .primary_btn.inverted{
        background-color:${color.light};
        color:${color.primary};
        border:2px solid ${color.primary};
    }
    .secondary_btn{
        background-color:${color.secondary};
        color:${color.light};
        border:2px solid ${color.light};
    }
    .secondary_btn.inverted{
        background-color:${color.light};
        color:${color.secondary};
        border:2px solid ${color.secondary};
    }
    .light_btn,.dark_btn.inverted{
        background-color:${color.light};
        color:${color.dark};
        border:2px solid ${color.dark};
    }
    .light_btn.inverted,.dark_btn{
        background-color:${color.dark};
        color:${color.light};
        border:2px solid ${color.light};
    }
`;

export const checkboxStyles=css`
    div{
        display:block;
        margin:10px;
    }
    label{
        cursor:pointer;
        padding:5px;
        display:grid;
        grid-template-columns: 1em auto;
    }
`;

export const customCheck=css`
    label:has(.customCheck){ gap:.75em; }
    label:has(.customCheck):hover,label:has(.customCheck):focus,.customCheck:hover,.customCheck:focus{box-shadow:0 0 5px ${color.primary};}
    .customCheck{
        cursor:pointer;
        margin:0;
        width:1.25em;
        height:1.25em;
        appearance:none;
        background-color:${color.light};
        border:.1em solid ${color.dark};
        border-radius:.2em;
        display:grid;
        place-content:center;
    }
    .customCheck::before{
        content:"";
        width:1.6em;
        height:1.6em;
        clip-path:polygon(22% 48%, 36% 81%, 80% 0, 100% 21%, 37% 100%, 0 58%);
        transform:scale(0);
        transform-origin:center center;
        transition:.15s transform ease-in-out;
        box-shadow:inset 1em 1em ${color.primary};
    }
    .customCheck:checked::before{ transform:scale(1); }
    .customCheck:indeterminate::before{
        content:"";
        width:1.6em;
        height:1.6em;
        clip-path:polygon(26% 32%, 73% 31%, 100% 50%, 74% 67%, 26% 67%, 0 50%);
        transform:scale(1);
        transform-origin:center center;
        transition:.15s transform ease-in-out;
        box-shadow:inset 1em 1em ${color.primary};
    }
`;

export const radioStyles=css`
    div{
        display:block;
        margin:10px;
    }
    label{
        cursor:pointer;
        padding:5px;
        display:grid;
        grid-template-columns: 1em auto;
        gap:.5em;
    }
    label:has(.radio):hover,.radio:hover,label:has(.radio):focus,.radio:focus{box-shadow:0 0 5px ${color.primary};}
    .radio{
        cursor:pointer;
        margin:0;
        width:1.25em;
        height:1.25em;
        appearance:none;
        background-color:${color.light};
        border:.1em solid ${color.dark};
        border-radius:.2em;
        display:grid;
        place-content:center;
    }
    .radio::before{
        content:"";
        width:1.6em;
        height:1.6em;
        clip-path:polygon(22% 48%, 36% 81%, 80% 0, 100% 21%, 37% 100%, 0 58%);
        transform:scale(0);
        transform-origin:center center;
        transition:.15s transform ease-in-out;
        box-shadow:inset 1em 1em ${color.primary};
    }
    .radio:checked::before{ transform:scale(1); }
`;

export const switchCheck=css`
    label:has(.switch){ gap:2em; }
    .switch{
        cursor:pointer;
        appearance:none;
        position:relative;
        color:inherit;
        font-size:inherit;
        box-sizing:content-box;
        border:1px solid ${color.dark};
        border-radius:1em;
        vertical-align:middle;
        background: ${color.dark};
        transition:.2 all ease;
        width:2em;
        height:1em;
    }
    label:has(.switch):hover,label:has(.switch):focus,.switch:hover,.switch:focus{box-shadow:0 0 5px ${color.primary};}
    .switch:checked{ background: ${color.light}; }
    .switch::before{
        content:"";
        position:absolute;
        box-sizing:border-box;
        width:.75em;
        height:.75em;
        border:none;
        border-radius:50%;
        background-color: ${color.light};
        transition:.2s all ease;
        top:50%;
        left:0;
        transform:translate(0,-50%);
        margin:0 .15em;
    }
    .switch:checked::before{
        background-color:${color.primary};
        left:1em;
    }
`;

export const inputStyles=css`
    input[type=text],input[type=password],textarea{
        border:1px solid ${color.dark};
        border-radius:5px;
        padding:5px;
        background:${color.light};
        color:${color.dark};
        filter:brightness(1);
        width:100%;
        margin-bottom:10px;
    }
    input[type=text]:read-only,input[type=password]:read-only,textarea:read-only{
        filter:brightness(.85)
    }
    input[type=text]:disabled,input[type=password]:disabled,textarea:disabled{
        color:${color.light};
        background:${color.dark};
    }
    label:has(+input[type=text]),label:has(+input[type=password]),label:has(+textarea){
        display:block;
        margin-bottom:10px; margin-top:10px;
    }
    label:has(+input[type=text]:required),label:has(+input[type=password]:required),label:has(+textarea:required){
        font-weight:bold;
    }
    input[type=text]:focus,input[type=password]:focus,textarea:focus,
    input[type=text]:hover,input[type=password]:hover,textarea:hover{
        box-shadow:0 0 5px ${color.primary};
    }
`;

export const selectStyles=css`
    label:has(+select){
        display:block;
        margin-bottom:10px; margin-top:10px;
    }
    select{
        border:1px solid ${color.dark};
        border-radius:5px;
        padding:5px;
        background:${color.light};
        color:${color.dark};
        filter:brightness(1);
        width:100%;
        margin-bottom:10px;
    }
    select:disabled{
        color:${color.light};
        background:${color.dark};
    }
`;