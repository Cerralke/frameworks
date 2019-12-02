'use strict'

require.config({
	// Configure dependencies for scripts that do not call define() to register a module
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		text: '../node_modules/requirejs-text/text'
	}
})

require([
	'backbone',
	'view'
], function (Backbone, AppView) {

	// Start Backbone.history()
	Backbone.history.start()

	// Initialize the application view
	new AppView()
})