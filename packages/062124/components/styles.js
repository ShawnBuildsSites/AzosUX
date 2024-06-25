import {css} from '../../../../azos-js/packages/azos-ui/ui.js';

/*****************************************************
 * This file contains styles for components.         *
 *                                                   *
 * What's included:                                  *
 * baseStyles    *  buttonStyles *  checkStyles      *
 * iconStyles    *  inputStyles  *  radioStyles      *
 * selectStyles  *  switchStyles                     *
 *                                                   *
 * NOTE: Colors are contained in color-pallet.js     *
******************************************************/

export const baseStyles=css`
    a,button{cursor:pointer;}
    *:disabled,.disabled,.border_disabled,.text_disabled,.bg_disabled{cursor:not-allowed;}

    .text_xl{font-size:var(--size-xl);}
    .text_lg{font-size:var(--size-lg);}
    .text_md{font-size:var(--size-md);}
    .text_sm{font-size:var(--size-sm);}
    .text_xs{font-size:var(--size-xs);}

    .padding_xl{padding:var(--size-xl);}
    .padding_top_xl{padding-top:var(--size-xl);}
    .padding_right_xl{padding-right:var(--size-xl);}
    .padding_bottom_xl{padding-bottom:var(--size-xl);}
    .padding_left_xl{padding-left:var(--size-xl);}

    .padding_lg{padding:var(--size-lg);}
    .padding_top_lg{padding-top:var(--size-lg);}
    .padding_right_lg{padding-right:var(--size-lg);}
    .padding_bottom_lg{padding-bottom:var(--size-lg);}
    .padding_left_lg{padding-left:var(--size-lg);}

    .padding_md{padding:var(--size-md);}
    .padding_top_md{padding-top:var(--size-md);}
    .padding_right_md{padding-right:var(--size-md);}
    .padding_bottom_md{padding-bottom:var(--size-md);}
    .padding_left_md{padding-left:var(--size-md);}

    .padding_sm{padding:var(--size-sm);}
    .padding_top_sm{padding-top:var(--size-sm);}
    .padding_right_sm{padding-right:var(--size-sm);}
    .padding_bottom_sm{padding-bottom:var(--size-sm);}
    .padding_left_sm{padding-left:var(--size-sm);}

    .padding_xs{padding:var(--size-xs);}
    .padding_top_xs{padding-top:var(--size-xs);}
    .padding_right_xs{padding-right:var(--size-xs);}
    .padding_bottom_xs{padding-bottom:var(--size-xs);}
    .padding_left_xs{padding-left:var(--size-xs);}

    .margin_xl{margin:var(--size-xl);}
    .margin_top_xl{margin-top:var(--size-xl);}
    .margin_right_xl{margin-right:var(--size-xl);}
    .margin_bottom_xl{margin-bottom:var(--size-xl);}
    .margin_left_xl{margin-left:var(--size-xl);}

    .margin_lg{margin:var(--size-lg);}
    .margin_top_lg{margin-top:var(--size-lg);}
    .margin_right_lg{margin-right:var(--size-lg);}
    .margin_bottom_lg{margin-bottom:var(--size-lg);}
    .margin_left_lg{margin-left:var(--size-lg);}

    .margin_md{margin:var(--size-md);}
    .margin_top_md{margin-top:var(--size-md);}
    .margin_right_md{margin-right:var(--size-md);}
    .margin_bottom_md{margin-bottom:var(--size-md);}
    .margin_left_md{margin-left:var(--size-md);}

    .margin_sm{margin:var(--size-sm);}
    .margin_top_sm{margin-top:var(--size-sm);}
    .margin_right_sm{margin-right:var(--size-sm);}
    .margin_bottom_sm{margin-bottom:var(--size-sm);}
    .margin_left_sm{margin-left:var(--size-sm);}

    .margin_xs{margin:var(--size-xs);}
    .margin_top_xs{margin-top:var(--size-xs);}
    .margin_right_xs{margin-right:var(--size-xs);}
    .margin_bottom_xs{margin-bottom:var(--size-xs);}
    .margin_left_xs{margin-left:var(--size-xs);}

    .bg_dark,.bg_disabled,.bg_alert,.bg_error,.bg_ok{color:var(--color-light);}
    .bg_light,.bg_warning,.bg_info{color:var(--color-dark);}

    .bg_dark{background-color:var(--color-dark);}
    .bg_light{background-color:var(--color-light);}
    .bg_alert{background-color:var(--color-alert);}
    .bg_disabled{background-color:var(--color-disabled);}
    .bg_error{background-color:var(--color-error);}
    .bg_info{background-color:var(--color-info);}
    .bg_ok{background-color:var(--color-ok);}
    .bg_warning{background-color:var(--color-warning);}
    
    .text_dark{color:var(--color-dark);}
    .text_light{color:var(--color-light);}
    .text_alert{color:var(--color-alert);}
    .text_disabled{color:var(--color-disabled);}
    .text_error{color:var(--color-error);}
    .text_info{color:var(--color-info);}
    .text_ok{color:var(--color-ok);}
    .text_warning{color:var(--color-warning);}
    
    .border_none{border:none;}
    .border_dark{
        border:1px solid var(--color-dark);
        color:var(--color-dark);
    }
    .border_light{
        border:1px solid var(--color-light);
        color:var(--color-light);
    }
    .border_alert{
        border:1px solid var(--color-alert);
        color:var(--color-alert);
    }
    .border_disabled{
        border:1px solid var(--color-disabled);
        color:var(--color-disabled);
    }
    .border_error{
        border:1px solid var(--color-error);
        color:var(--color-error);
    }
    .border_info{
        border:1px solid var(--color-info);
        color:var(--color-info);
    }
    .border_ok{
        border:1px solid var(--color-ok);
        color:var(--color-ok);
    }
    .border_warning{
        border:1px solid var(--color-warning);
        color:var(--color-warning);
    }
`;

export const buttonStyles=css`
    /*Basic button styles*/
    button{
        filter: brightness(1);
        margin:10px;
    }
    button:not(.border_disabled):hover{filter:brightness(1.15);}

    /*sizes*/
    .btn_xl{
        font-size:var(--size-xl);
        padding:var(--size-lg) var(--size-xl);
        border-radius:var(--size-lg);
    }
    .btn_lg{
        font-size:var(--size-lg);
        padding:var(--size-md) var(--size-lg);
        border-radius:var(--size-md);
    }
    .btn,.btn_md{
        font-size:var(--size-md);
        padding:var(--size-sm) var(--size-md);
        border-radius:var(--size-sm);
    }
    .btn_sm{
        font-size:var(--size-sm);
        padding:var(--size-xs) var(--size-sm);
        border-radius:var(--size-xs);
    }
    .btn_xs{
        font-size:var(--size-xs);
        padding:var(--size-xs);
        border-radius:0;
    }
`;

export const checkStyles=css`
    div{
        display:block;
        margin:10px;
    }
    label{
        cursor:pointer;
        display:grid;
        grid-template-columns: 1em auto;
        align-items:center;
    }
    label:has(.check){ gap:.75em; }
    label:has(.check):hover,label:has(.check):focus,.check:hover,.check:focus{box-shadow:0 0 3px var(--color-dark);}
    .check{
        cursor:pointer;
        margin:0;
        width:var(--size-md);
        height:var(--size-md);
        appearance:none;
        background-color:var(--color-light);
        border:.1em solid var(--color-dark);
        border-radius:.2em;
        display:grid;
        place-content:center;
    }
    .check::before{
        content:"\u{2713}";
        text-align:center;
        position:relative;
        top:-.25em;
        font-size:var(--size-md);
        width:var(--size-md);
        height:var(--size-md);
        transform:scale(0);
        transform-origin:center center;
        transition:.1s transform ease-in-out;
    }
    .check:checked::before{ transform:scale(1); }
    .padding_xl .check,.padding_xl .check::before{width:var(--size-xl);height:var(--size-xl);}
    .padding_xl .check::before{font-size:var(--size-xl);}
    .padding_lg .check,.padding_lg .check::before{width:var(--size-lg);height:var(--size-lg);}
    .padding_lg .check::before{font-size:var(--size-lg);}
    .padding_sm .check,.padding_sm .check::before{width:var(--size-sm);height:var(--size-sm);}
    .padding_sm .check::before{font-size:var(--size-sm);}
    .padding_xs .check,.padding_xs .check::before{width:var(--size-xs);height:var(--size-xs);}
    .padding_xs .check::before{font-size:var(--size-xs);}
    
    .text_disabled .check{color:var(--color-disabled);border:1px solid var(--color-disabled);}
    .text_ok .check{color:var(--color-ok);border:1px solid var(--color-ok);}
    .text_alert .check{color:var(--color-alert);border:1px solid var(--color-alert);}
    .text_warning .check{color:var(--color-warning);border:1px solid var(--color-warning);}
    .text_info .check{color:var(--color-info);border:1px solid var(--color-info);}
    .text_error .check{color:var(--color-error);border:1px solid var(--color-error);}
    .text_light .check{color:var(--color-light);border:1px solid var(--color-light);}
`;

export const radioStyles=css`
    div{
        display:block;
        margin:10px;
    }
    label{
        cursor:pointer;
        display:grid;
        grid-template-columns: 1em auto;
        gap:.75em;
    }
    label:has(.radio):hover,.radio:hover,label:has(.radio):focus,.radio:focus{box-shadow:0 0 5px var(--color-dark);}
    .radio{
        cursor:pointer;
        appearance:none;
        margin:0;
        width:var(--size-md);
        height:var(--size-md);
        background-color:var(--color-light);
        border-radius:50%;
        border:.1em solid var(--color-dark);
        display:grid;
        place-content:center;
    }
    .radio::before{
        content:"\u{25cf}";
        text-align:center;
        position:relative;
        top:-.125em;
        font-size:var(--size-md);
        width:var(--size-md);
        height:var(--size-md);
        transform:scale(0);
        transform-origin:center center;
        transition:.1s transform ease-in-out;
    }
    .radio:checked::before{ transform:scale(1); }
    .padding_xl .radio,.padding_xl .radio::before{width:var(--size-xl);height:var(--size-xl);}
    .padding_xl .radio::before{font-size:var(--size-xl);}
    .padding_lg .radio,.padding_lg .radio::before{width:var(--size-lg);height:var(--size-lg);}
    .padding_lg .radio::before{font-size:var(--size-lg);}
    .padding_sm .radio,.padding_sm .radio::before{width:var(--size-sm);height:var(--size-sm);}
    .padding_sm .radio::before{font-size:var(--size-sm);}
    .padding_xs .radio,.padding_xs .radio::before{width:var(--size-xs);height:var(--size-xs);}
    .padding_xs .radio::before{font-size:var(--size-xs);}
    
    .text_disabled .radio{color:var(--color-disabled);border:1px solid var(--color-disabled);}
    .text_ok .radio{color:var(--color-ok);border:1px solid var(--color-ok);}
    .text_alert .radio{color:var(--color-alert);border:1px solid var(--color-alert);}
    .text_warning .radio{color:var(--color-warning);border:1px solid var(--color-warning);}
    .text_info .radio{color:var(--color-info);border:1px solid var(--color-info);}
    .text_error .radio{color:var(--color-error);border:1px solid var(--color-error);}
    .text_light .radio{color:var(--color-light);border:1px solid var(--color-light);}
`;

export const switchStyles=css`
    label:has(.switch){ gap:2em;align-items:center; }
    .padding_xs:has(.switch){gap:2.5em;}
    .switch{
        cursor:pointer;
        appearance:none;
        position:relative;
        color:inherit;
        font-size:inherit;
        box-sizing:content-box;
        border:1px solid currentColor;
        border-radius:1em;
        vertical-align:middle;
        background: currentColor;
        transition:.2 all ease;
        width:2em;
        height:1em;
    }
    label:has(.switch):hover,label:has(.switch):focus,.switch:hover,.switch:focus{box-shadow:0 0 5px var(--color-dark);}
    .switch:checked,.bg_danger .switch:checked,.bg_success .switch:checked,.bg_warning .switch:checked,.bg_info .switch:checked,.bg_primary .switch:checked,.bg_disabled .switch:checked,.bg_dark .switch:checked,.bg_light .switch:checked{ background: var(--color-light); }
    .switch::before{
        content:"";
        position:absolute;
        box-sizing:border-box;
        width:.75em;
        height:.75em;
        border:none;
        border-radius:50%;
        background-color: var(--color-light);
        transition:.2s all ease;
        top:50%;
        left:0;
        transform:translate(0,-50%);
        margin:0 .15em;
    }
    .switch:checked::before{
        background-color:currentColor;
        left:1em;
    }
    .bg_error .switch{background:var(--color-error)}
    .bg_ok .switch{background:var(--color-ok)}
    .bg_info .switch{background:var(--color-info)}
    .bg_warning .switch{background:var(--color-warning)}
    .bg_disabled .switch{background:var(--color-disabled)}
    .bg_light .switch{background:var(--color-light)}

    .bg_error .switch:checked::before{background-color:var(--color-error)}
    .bg_ok .switch:checked::before{background-color:var(--color-ok)}
    .bg_info .switch:checked::before{background-color:var(--color-info)}
    .bg_warning .switch:checked::before{background-color:var(--color-warning)}
    .bg_disabled .switch:checked::before{background-color:var(--color-disabled)}
    .bg_light .switch:checked::before{background-color:var(--color-light)}
`;

export const inputStyles=css`
    div{display:block;padding:5px;}
    input[type=text],input[type=password],textarea{
        border:1px solid currentColor;
        border-radius:5px;
        padding:5px;
        width:80%;
        background:var(--color-light);
        color:var(--color-dark);
        filter:brightness(1);
        margin-bottom:10px;
    }
    input[type=text]:read-only,input[type=password]:read-only,textarea:read-only{
        filter:brightness(.85)
    }
    input[type=text]:disabled,input[type=password]:disabled,textarea:disabled{
        color:var(--color-light);
        background:var(--color-dark);
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
        box-shadow:0 0 5px var(--color-dark);
    }
    .text_primary input,.text_primary textarea{border:1px solid var(--color-dark);}
    .text_disabled input,.text_disabled textarea{border:1px solid var(--color-dark);}
    .text_info input,.text_info textarea{border:1px solid var(--color-info);}
    .text_success input,.text_success textarea{border:1px solid var(--color-ok);}
    .text_warning input,.text_warning textarea{border:1px solid var(--color-warning);}
    .text_danger input,.text_danger textarea{border:1px solid var(--color-error);}
    .text_light input,.text_light textarea{border:1px solid var(--color-light);}
    .text_dark input,.text_dark textarea{border:1px solid var(--color-dark);}
`;

export const selectStyles=css`
    label:has(+select){
        display:block;
        margin-bottom:10px; margin-top:10px;
    }
    select{
        border:1px solid currentColor;
        border-radius:5px;
        padding:5px;
        background:var(--color-light);
        color:currentColor;
        filter:brightness(1);
        width:100%;
        margin-bottom:10px;
    }
    select:disabled{
        color:var(--color-light);
        background:var(--color-dark);
    }
`;

export const iconStyles=css`
    .icon{
        width:1.25em;
        height:1.25em;
        float:left;
        margin-right:.75em;
    }
    .icon:has(+label){margin-top:.5em; margin-left:.75em; margin-right:.25em;}
    .fill_info{fill:var(--color-info);}
    .fill_warning{fill:var(--color-warning);}
    .fill_danger{fill:var(--color-error);}
    .fill_success{fill:var(--color-ok);}
    .fill_light{fill:var(--color-light);}
    .fill_dark{fill:var(--color-dark);}

    .bg_success .fill_success{fill:var(--color-light);}
    .bg_info .fill_info,.bg_warning .fill_warning,.bg_danger .fill_danger{fill:var(--color-dark);}
`;