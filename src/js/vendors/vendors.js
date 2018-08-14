import $ from 'jquery';
import slick from 'slick-carousel';

import '../../font-awesome-4.7.0/scss/font-awesome.scss';
import '../../../node_modules/slick-carousel/slick/slick.scss';
import '../../../node_modules/slick-carousel/slick/slick-theme.scss';

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: '<i class="fa fa-chevron-left prev"></i>',
  nextArrow: '<i class="fa fa-chevron-right next"></i>'
});

