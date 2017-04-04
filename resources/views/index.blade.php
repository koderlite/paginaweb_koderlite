<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{ Html::style(asset('css/bootstrap/bootstrap.min.css')) }}
    {{ Html::style(asset('css/bootstrap/material-kit.css')) }}
    {{ Html::style(asset('css/material_icon/icons_md_icon.css')) }}
    <title>Document</title>
</head>
<body>
    {{-- include de las secciones --}}
    @include('inicio')

    {{ Html::script(asset('js/plugins/jquery.min.js')) }}
    {{ Html::script(asset('js/plugins/tether.js')) }}
    {{ Html::script(asset('js/bootstrap/bootstrap.min.js')) }}
    {{ Html::script(asset('js/bootstrap/material.min.js')) }}
    {{ Html::script(asset('js/bootstrap/material-kit.js')) }}
</body>
</html>
