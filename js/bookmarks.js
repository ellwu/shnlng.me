bookmarks = {

	"init": function(){
		var body = d3.select("body");

		d3.json("data/branchs.json", function(branchs){
			bookmarks.genui(body, branchs);
		});

	},
	
	"genui": function(element, branchs){

		if(branchs.length == 0){
			return;
		}
		
		var ul = element.append("ul");

		for(i in branchs){
			var b = branchs[i];
			var li = ul.append("li");

			li.text(b.name);

			if(b.child){
				bookmarks.genui(li, b.child);
			}
		}
		
	}
	
}
