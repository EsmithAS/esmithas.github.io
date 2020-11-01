<?php
    error_reporting( 0 );
    header( 'Content-type: application/json; charset=utf-8' );
    $errores = '';
    $enviado = false;

    if( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' ){

        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];

        if ( !empty( $nombre ) ){
            $nombre = trim( $nombre );
            $nombre = filter_var( $nombre , FILTER_SANITIZE_STRING );
        } else {
            $errores .= 'Ingrese un nombre <br />';
        }

        if ( !empty( $correo ) ){
            $correo = trim( $correo );
            $correo = filter_var( $correo , FILTER_SANITIZE_EMAIL );
            if ( !filter_var( $correo , FILTER_VALIDATE_EMAIL ) ) {
                $errores .= 'Ingrese un correo valido <br />';
            };
        } else {
            $errores .= 'Ingrese un correo <br />';
        }

        if ( !empty( $mensaje ) ){
            $mensaje = htmlspecialchars( $mensaje );
            $mensaje = trim( $mensaje );
            $mensaje = stripslashes( $mensaje );
            
        } else {
            $errores .= 'Ingrese el mensaje <br />';
        }

        if ( !$errores ) {

            $destinatario = 'esmith_as@hotmail.com';
            $asunto = 'Enviado desde mi pagina web';
            $cuerpo = "De: $nombre \n";
            $cuerpo .= "Correo: $correo \n";
            $cuerpo .= "Mensaje: " . $mensaje;

            // mail( $destinatario , $asunto , $cuerpo ); // Función para enviar correo

            echo json_encode( { "error" => false } );

        } else {

            echo json_encode( { "error" => $errores } );

        }

    }
    