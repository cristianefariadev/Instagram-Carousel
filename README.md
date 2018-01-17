# Instagram: Carousel de Fotos

Mostre as fotos do Instagram no seu site. Não há necessidade de jQuery.

## Veja ao vivo

**[demo](http://cristianefaria.com/demo/instagram-carousel/)**

## Como funciona

Alguns requisitos para funcionar corretamente:

**[Gere sua chave no instagram](https://www.instagram.com/developer/)**

Neste exemplo usaremos o plugin javascript **[instafeed](http://instafeedjs.com/)** com carousel do **[slick](http://kenwheeler.github.io/slick/)**

Acesse o site dos desenvolvedores ou utilize as bibliotecas do exemplo.

## Uso


### Uso básico

Após o download, alinhe o **id** e a **classe** da sua div conforme o arquivo **index.html** do modelo.

### Uso Avançado

Edite o arquivo **instafeed.js** incluído com o modelo.


Você pode escrever sua própria marcação HTML que será usada para cada imagem que o Instafeed.js obtenha
```javascript
template: '<div><img src="{{image}}" title="{{caption}}"/></div>',
```

Defina as propriedades do seu carousel slick responsivo
```javascript
 $('#instafeed').slick({ ... }
 ```

Instafeed.js oferece vários modelos de personalização
**[veja mais na documentação](http://instafeedjs.com/)**


## Copyright and License

Copyright 2018 Cristiane Faria. Code released under the [MIT](https://github.com/cristiianefaria/Instagram-Carousel/blob/master/LICENSE) license.