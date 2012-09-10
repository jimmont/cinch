Ext.define('GS.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	
	scrollable: true,
	styleHtmlContent: true,
	config: {
		title: 'Contact',
		url: 'blah.php',
		iconCls: 'user',
		cls: 'home',
		items: [
			{
			xtype: 'fieldset',
			title: 'Contact Us ',
			instructions: 'do blah',
			items: [
				{xtype: 'textfield', name: 'name', label:'Name'},
				{xtype: 'emailfield', name: 'email', label:'Email'},
				{xtype: 'textareafield', name: 'message', label:'Message'}
			]
			},
			{
			xtype: 'button',
			text: 'send',
			ui: 'confirm',
			handler: function(){
				this.up('contactform').submit();
			},
			}
		],
		html: ['<img/><h1>Contact</h1><p>blah</p>'].join('')
	}
})
