<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{ Html::style(asset('css/bootstrap/bootstrap.min.css')) }}
    {{ Html::style(asset('css/bootstrap/material-kit.css')) }}
    {{ Html::style(asset('css/material_icon/icons_md_icon.css')) }}
    {{ Html::style(asset('css/index.css'))}}
    {{-- css necesarios para el efecto hover de los servicios --}}
    {{ Html::style(asset('css/plugins/hoverEfect/common.css')) }}
    {{ Html::style(asset('css/plugins/hoverEfect/style5.css')) }}
    {{ Html::style(asset('css/plugins/animate.css')) }}
    {{ Html::style(asset('css/plugins/slitslider/slitslider.css')) }}
    {{ Html::style(asset('css/plugins/slitslider/slider.css')) }}
    <noscript>
      {{  Html::style(asset('css/plugins/sliteslider/slitesliderNojs.css')) }}
    </noscript>

    <title>KoderLite</title>
</head>
<body>
    {{-- include de las secciones --}}
    @include('secciones.inicio')

    {{-- include seccion servicios --}}
    @include('secciones.servicios')




    {{ Html::script(asset('js/plugins/jquery.min.js')) }}
    {{ Html::script(asset('js/plugins/tether.js')) }}
    {{ Html::script(asset('js/bootstrap/bootstrap.min.js')) }}
    {{ Html::script(asset('js/bootstrap/material.min.js')) }}
    {{ Html::script(asset('js/bootstrap/material-kit.js')) }}
    {{ Html::script(asset('js/plugins/slitslider/modernizr.custom.79639.js')) }}
    {{ Html::script(asset('js/plugins/slitslider/jquery.ba-cond.min.js')) }}
    {{ Html::script(asset('js/plugins/slitslider/jquery.slitslider.js'))}}
    {{ Html::script(asset('js/index.js'))}}


</body>
</html>
