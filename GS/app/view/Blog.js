Ext.define('GS.view.Blog', {
	extend: 'Ext.navigation.View',
	
	scrollable: true,
	styleHtmlContent: true,
	xtype: 'blog',

	config: {
		title: 'Blog',
		iconCls: 'star',

		items: {
			xtype: 'list',
			itemTpl: '{title}',
	
			store: {
				autoLoad: true,
				fields: 'title,author,content'.split(','),
				proxy: {
					type:'jsonp',
					url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
					reader: {
						type:'json',
						rootProperty: 'responseData.feed.entries'
					}
				}
			}
		}
	}
})
