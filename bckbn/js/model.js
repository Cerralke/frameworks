define([
	'backbone'
], function (Backbone) {
	'use strict'

	var DataModel = Backbone.Model.extend({
		defaults: {
	        // empty data fields from JSON
	        "index": 0,
			"index_start_at": 0,
			"integer": 0,
			"float": 0.0,
			"name": "",
			"surname": "",
			"fullname": "",
			"email": "",
			"bool": true
	    }
	})

	return DataModel
})