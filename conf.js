exports.config = {
		directConnect:true,
		framework: 'jasmine',

		seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['multicalc.js'],

		jasmineNodeOpts: {defaultTimeoutInterval: 600000},
		onPrepare : function (){
			browser.driver.manage().window().maximize();
		}
		// capabilities: {
		// browserName: 'firefox'
		// }
};
