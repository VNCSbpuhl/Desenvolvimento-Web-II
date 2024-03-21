<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora - Em vue</title>
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <link rel="stylesheet" href="style.css" class="css">
</head>

<body>
    <div id="app">
        <div class="calculadora">
            <div class="display">
                {{ display }}
            </div>

            <div class="linha">
                <button class="operador" @click="">C</button>
            </div>

            <div class="linha">
                <button @click="LidarBotao('7')">7</button>
                <button @click="LidarBotao('8')">8</button>
                <button @click="LidarBotao('9')">9</button>
                <button class="operador" @click="LidarBotao('%')">%</button>
            </div>

            <div class="linha">
                <button @click="LidarBotao('4')">4</button>
                <button @click="LidarBotao('5')">5</button>
                <button @click="LidarBotao('6')">6</button>
                <button class="operador" @click="LidarBotao('*')">*</button>
            </div>

            <div class="linha">
                <button @click="LidarBotao('1')">1</button>
                <button @click="LidarBotao('2')">2</button>
                <button @click="LidarBotao('3')">3</button>
                <button class="operador" @click="LidarBotao('-')">-</button>
            </div>

            <div class="linha">
                <button class="decimal" @click="LidarBotao('.')">.</button>
                <button @click="LidarBotao('0')">0</button>
                <button class="igual" @click="LidarBotao('=')">=</button>
                <button class="operador" @click="LidarBotao('+')">+</button>
            </div>

        </div>

    </div>
</body>

</html>

<script src="index.js"></script>
