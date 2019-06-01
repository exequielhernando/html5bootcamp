"use strict";
document.addEventListener("DOMContentLoaded", function(){
    let output = document.getElementById("output");
    let socket = new WebSocket("ws://echo.websocket.org");

    function testWebSocket(){

        socket.addEventListener("open",function(event){
            socket.send('Hello Server!');
            on_open(event);
        });
        socket.addEventListener("close",function(event){
            on_close(event);
            alert("Closed w/ status: " + event.code);
        });
        socket.addEventListener("message", function(event){
            console.log('Message from server ', event.data);
            on_message(event);
            alert("Received message: " + event.data);
        });
        socket.addEventListener("error", function(event){
            on_error(event);
            alert("Error");
        });
    }


    function on_open(evt){
        writeToScreen("CONNECTED");
        doSend("WebSocket rocks");
    }

    function on_close(evt){
        writeToScreen("DISCONNECTED");
    }

    function on_message(evt){
        writeToScreen('<span style="color: blue;">RESPONSE: ' + evt.data+'</span>');
        socket.close();
    }

    function on_error(evt){
        writeToScreen('<span style="color: red;">ERROR:</span> ' + evt.data);
    }

    function doSend(message){
        writeToScreen("SENT: " + message);
        socket.send(message);
    }

    function writeToScreen(message){
        var pre = document.createElement("p");
        pre.style.wordWrap = "break-word";
        pre.innerHTML = message;
        output.appendChild(pre);
    }

    testWebSocket();
});


