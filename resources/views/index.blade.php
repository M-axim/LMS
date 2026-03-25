<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Тестовый запуск</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <!-- use the latest VueQuill release -->
</head>
<body>
    <div id="app">
        <div class="container-fluid">
            <v-header></v-header>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>

<script src="{{ asset('js/manifest.js') }}"></script>
<script src="{{ asset('js/vendor.js') }}"></script>
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>