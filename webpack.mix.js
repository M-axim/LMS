const mix = require('laravel-mix');
var docxConverter = require('docx-pdf');


//var docxConverter = require('docx-pdf');
//console.log(docxConverter);
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js').vue()
mix.sass('resources/sass/app.scss', 'public/css')
    .extract(['vue', 'bootstrap'])

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.pug$/,
                oneOf: [
                {   
                    resourceQuery: /^\?vue/,
                    use: ['pug-plain-loader']
                },
                {
                    use: ['raw-loader', 'pug-plain-loader']
                }
                ]
            },
            {
            test: /\.docx$/,
                use: [
                    {
                    loader: "docx-loader",
                    options: {
                        removeLinks: true
                        }
                    }
                ]
            }
        ]
    }
    });

//mix.js('resources/js/components/*.vue', 'public/js').pug()