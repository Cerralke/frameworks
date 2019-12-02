define([
	'backbone',
	'model'
], function (Backbone, Data){
	'use strict'

	var DataCollection = Backbone.Collection.extend({
		model: Data
	})

	return DataCollection
})