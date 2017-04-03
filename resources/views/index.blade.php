<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    {{ Html::style(asset('css/bootstrap/bootstrap.min.css')) }}
    {{ Html::style(asset('css/material_icon/icons_md_icon.css')) }}
    <title>Document</title>
</head>
<body>
    <h1>Hola mundo</h1>
    {{-- include de las secciones --}}

    {{ Html::script(asset('js/jquery.js')) }}
    {{ Html::script(asset('js/tether.js')) }}
    {{ Html::script(asset('js/bootstrap/bootstrap.min.js')) }}
</body>
</html>