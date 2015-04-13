//business card window as landing page

var busCard = Titanium.UI.createWindow({
	backgroundColor:'white',
});

var view1 = Titanium.UI.createView({
	backgroundColor:'white',
	layout:'vertical'
});

var name = Titanium.UI.createLabel({
	text:'Jacob M. Parish',
	textAlign:'center',
	font:{
		fontFamily:'Harrington',
		fontSize:36,
		fontWeight:'bold',
		textDecoration:'underline'
	},
	height:'auto',
	width:'95%'
});

var degree = Titanium.UI.createLabel({
	text:'Masters of Accountancy\nB.S.Business in Accounting\nB.S.Business in Finance\nB.S.Business in Information Systems',
	textAlign:'center',
	font:{
		fontFamily:'Times New Roman',
		fontSize:20
	},
	height:'auto',
	width:'95%'
});

var contact = Titanium.UI.createLabel({
	text:'Email: jparish@vandals.uidaho.edu\nPhone: 208-301-5078',
	textAlign:'center',
	font:{
		fontFamily:'Times New Roman',
		fontSize:20
	},
	height:'auto',
	width:'95%'
});

var profile = Titanium.UI.createButton({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	title:'Profile'
});

profile.addEventListener('click', function(e){
	win2.open();
});

view1.add(name);
view1.add(degree);
view1.add(contact);
view1.add(profile);
busCard.add(view1);

busCard.open();

//personal profile second page

var win2 = Titanium.UI.createWindow({
	backgroundColor:'white',
});

var view2 = Titanium.UI.createView({
	backgroundColor:'white',
	layout:'vertical'
});

var label4 = Titanium.UI.createLabel({
	backgroundImage:'pictures\resume.jpg',
	height:'auto',
	width:'95%'
});

var close = Titanium.UI.createButton({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	title:'Contact'
});

close.addEventListener('click', function(e){
	win2.close();
});

view2.add(label4);
view2.add(close);
win2.add(view2);

