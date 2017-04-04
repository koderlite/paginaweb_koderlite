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
    {{-- js necesarios para el efecto hover de los servicios --}}
    {{ Html::script(asset('js/plugins/hoverEfect/modernizr.custom.79639.js')) }}
    <script>
        (function() {
	
				function init() {
					var speed = 330,
						easing = mina.backout;

					[].slice.call ( document.querySelectorAll( '#grid > a' ) ).forEach( function( el ) {
						var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
							pathConfig = {
								from : path.attr( 'd' ),
								to : el.getAttribute( 'data-path-hover' )
							};

						el.addEventListener( 'mouseenter', function() {
							path.animate( { 'path' : pathConfig.to }, speed, easing );
						} );

						el.addEventListener( 'mouseleave', function() {
							path.animate( { 'path' : pathConfig.from }, speed, easing );
						} );
					} );
				}

				init();

			})();
    </script>
</body>
</html>
