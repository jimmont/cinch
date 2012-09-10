Ext.define('GS.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	scrollable: true,
	styleHtmlContent: true,
	cls: 'home',
	config: {
		title: 'Home',
		iconCls: 'home',

		html: ['<img/><h1>hi</h1><p>blah</p>'].join('')
	}
})
