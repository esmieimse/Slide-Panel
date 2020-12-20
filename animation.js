(function() {
  let type = window.getComputedStyle(document.documentElement).getPropertyValue('--slide-animation');
  let speed = window.getComputedStyle(document.documentElement).getPropertyValue('--slide-speed');
  let items = window.getComputedStyle(document.documentElement).getPropertyValue('--num-of-items');
  let time = window.getComputedStyle(document.documentElement).getPropertyValue('--display-time');
  type = type.trim();
  items = Number(items);
  time = parseInt(time);
  
  var end = 100 / items;
  var start = (end / 2) * (1 / Number(speed));
  var middle = end - start;

  let delay = [];
  let animation;

    css = document.createElement('style');
  css.media = 'all';
  

  for (i = 0; i < items; i++) {
    delay = [delay, '.panel div:nth-of-type(', i+1, ') { animation-delay: ', i * time, 's }\n'].join('');
  }

  
  switch (type) {
    case 'fade':
      animation =  '@keyframes fade {\n' + [
        '0% {opacity: 0}',
        start + '% {opacity: 1}',
        middle + '0% {opacity: 1}',
        end + '0% {opacity: 0}',
        '100% {opacity: 0}'
      ].join('\n') + '}';
      break;

    case 'rotateX':
      animation = '@keyframes rotateX {\n' + [
        '0% {opacity: 0; transform: rotateX(90deg)}',
        start + '% {opacity: 1; transform: rotateX(0deg)}',
        middle + '% {opacity: 1; transform: rotateX(0deg)}',
        end + '% {opacity: 0; transform: rotateX(90deg)}',
        '100% {opacity: 0; transform: rotateX(90deg) }'
      ].join('\n') + '}';
      break;
    
    case 'rotateY':
      animation = '@keyframes rotateY {\n' + [
        '0% {opacity: 0; transform: rotateY(90deg)}',
        start + '% {opacity: 1; transform: rotateY(0deg)}',
        middle + '% {opacity: 1; transform: rotateY(0deg)}',
        end + '% {opacity: 0; transform: rotateY(90deg)}',
        '100% {opacity: 0; transform: rotateY(90deg) }'
      ].join('\n') + '}';
      break;

    case 'slideRtoL':
      animation = '@keyframes slideRtoL {\n' + [
        '0% {opacity: 0; left: 100%}',
        start + '% {opacity: 1; left: 0}',
        middle + '% {opacity: 1; left: 0}',
        end + '% {opacity: 0; left: -100%}',
        '100% {opacity: 0; left: -100%}'
      ].join('\n') + '}';
      break;

    case 'slideLtoR':
      animation = '@keyframes slideLtoR {\n' + [
        '0% {opacity: 0; left: -100%}',
        start + '% {opacity: 1; left: 0}',
        middle + '% {opacity: 1; left: 0}',
        end + '% {opacity: 0; left: 100%}',
      '100% {opacity: 0; left: 100%}'
      ].join('\n') + '}';
      break;
    
    case 'slideTtoB':
      animation = '@keyframes slideTtoB {\n' + [
        '0% {opacity: 0; top: -100%}',
        start + '% {opacity: 1; top: 0}',
        middle + '% {opacity: 1; top: 0}',
        end + '% {opacity: 0; top: 100%}',
      '100% {opacity: 0; top: 100%}'
      ].join('\n') + '}'; 
      break;
    
    case 'slideBtoT':
      animation = '@keyframes slideBtoT {\n' + [
        '0% {opacity: 0; top: 100%}',
        start + '% {opacity: 1; top: 0}',
        middle + '% {opacity: 1; top: 0}',
        end + '% {opacity: 0; top: -100%}',
      '100% {opacity: 0; top: -100%}'
      ].join('\n') + '}';
      break;

    default:
      break;
  }
  

  rules = document.createTextNode([delay, animation].join('\n'));
  css.appendChild(rules);

  document.getElementsByTagName('head')[0].appendChild(css);
}());