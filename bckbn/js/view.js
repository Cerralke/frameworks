define([
    'backbone',
    'collection'
], function (Backbone, DataCollection) {
    'use strict'

    // "wierzchnia" warstwa UI
    var AppView = Backbone.View.extend({

        initialize () {
            let self = this

            // ładowanie danych z pliku JSON
            this.data = new DataCollection()
            this.data.url = 'http://localhost:1337/datas'
            this.data.fetch().done(function () {
                // dynamiczne wygenerowanie widoku z danymi
                let dataGenerated = self.generateDataView()
                // przesłanie widoku do el
                document.getElementById('datarows').appendChild(dataGenerated)
            })
        },

        generateDataView () {
            let div = document.createElement('div')
            this.data.each(function (model) {
                model.get('items').forEach(function (item) {
                    if (item.bool) {
                        var paragraph = document.createElement('p')
                        paragraph.textContent = "Name is " + item.fullname + ". Mail adress is " + item.email + ". Has a child named " + item.name + " " + item.surname + ". Numbers are " + item.float + ", " + item.index + ", " + item.index_start_at + ", " + item.integer + "."
                        div.appendChild(paragraph)
                    }
                })
            })
            return div;
        }
    })

    return AppView
})