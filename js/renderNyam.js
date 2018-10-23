'use strict';
// import * as bd from './bd';

var content = {
    default: ['Чего сидишь, порадуй котэ, ', 'купи'],
    disable: ['Печалька, ', ' закончился']
}

var products = [
    {
        title: 'Сказачное заморское яство',
        lable: 'Нямушка',
        kind:  'c фуагра',
        stock:  true,
        description: "Печень утки разварная с артишоками."
    },
    {
        title: 'Сказачное заморское яство',
        lable: 'Нямушка',
        kind:  'с рыбой',
        stock:  true,
        description: "Головы щучьи с чесноком да свежайшая сёмушка."
    },
    {
        title: 'Сказачное заморское яство',
        lable: 'Нямушка',
        kind:  'c курой',
        stock:  false,
        description: "Филе из цыплят с трюфелями в бульоне."
    }
]
var size =  [
    {portions: 10,  mouses: 1, mass: '0,5'},
    {portions: 40,  mouses: 2, mass: '2'},
    {portions: 100, mouses: 5, mass: '5'},
]


var items = [
    {
        product: 0,
        content: 'default',
        size: 0
    },
    {
        product: 1,
        content: 'default',
        size: 1
    },
    {
        product: 2,
        content: 'disable',
        size: 2
    }
]


var NyamObject = function (product, size, base_class){
    
    this.product = product;
    this.size    = size;
    this.base_class = base_class;
    this.text = {

        default:  $('<div class="nyam-block-text">'+ content['default'][0] + '<a>' + content['default'][1] +'</a>' + '</div>'), // чего сидашь, порадуй котэ, купи
        disable:  $('<div class="nyam-block-text" style="color: #FFFF66">'+ content['disable'][0]  + this.product.kind + content['disable'][1] +'</a>' + '</div>'), // печалька, с чем-то там закончился
        selected: $('<div class="nyam-block-text">'+this.product.description + '</div>'), // описание
}
    this.nyam = $(`
        <div class="nyam">
            <div class="nyam-border `+this.base_class+`">
                <div class="nyam-block">
                    <div class="nyam-block-title">
                        <p>`+ this.product.title+`</p>
                        <h2>`+this.product.lable+`</h2>
                        <p>`+this.product.kind+`</p>
                    </div>
                    <div class="nyam-block-container">
                        <p><span>`+this.size.portions+`</span> порций</p>
                        <p><span>`+this.size.mouses+`</span> мыши в подарок</p>
                    </div>
                    <img src="img/funbox_logo.png" alt="">
                    <div class="nyam-block-circle">
                        <p><span>`+this.size.mass+`</span><br> кг</p>
                    </div>
                </div>
            </div>
            <div class="nyam-block-text"></div>
           
        </div>
    `)
    this.nyam_border = this.nyam.find('.nyam-border');

}

NyamObject.prototype.renderNyam = function(){
    $('.nyams').append(this.nyam)
    this.nyam.find('.nyam-block-text').replaceWith(this.text[this.base_class])

}
NyamObject.prototype.clicker = function(){
    var local_product = this.product,
        local_text    = this.text,
        local_border  = this.nyam_border,
        local_a       = local_text['default'].find('a');
     
    function action(border){
        if (border.hasClass('selected')){

            border.removeClass('selected hover');
            border.addClass('default');
            border.next().replaceWith(local_text['default'])
            local_a.click(function(){
                action(local_border)
            })

        }else if ((border.hasClass('default'))){

            border.removeClass('default hover');
            border.addClass('selected');
            border.next().replaceWith(local_text['selected'])

        }
    }

    local_a.click(function(){
        action(local_border)
    })

    local_border.click(function(){
        action($(this))    
    })
}




items.forEach(function(elem){
    
    
    var item = new NyamObject(products[elem.product], size[elem.size], elem.content);

    item.renderNyam()
    item.clicker()
});