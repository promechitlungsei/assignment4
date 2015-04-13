var win1 = Titanium.UI.createWindow({
	backgroundColor:'white',
});

var view1 = Titanium.UI.createView({
	backgroundColor:'white',
	layout:'vertical'
});

var label1 = Titanium.UI.createLabel({
	text:'Jacob Parish',
	textAlign:'center',
	font:{
		fontFamily:'Harrington',
		fontSize:24,
		fontWeight:'bold'
	},
	height:'auto',
	width:'95%'
});

var label2 = Titanium.UI.createLabel({
	text:'Masters of Accountancy\nB.S. in Accounting\nB.S. in Finance\nB.S. in Information Systems',
	textAlign:'center',
	font:{
		fontFamily:'Times New Roman',
		fontSize:20
	},
	height:'auto',
	width:'95%'
});

view1.add(label1);
view1.add(label2);
win1.add(view1);
win1.open();

