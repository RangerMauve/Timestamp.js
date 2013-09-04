/*
	Specify your timestamps as 
		<time data-timestamp="1293812983213"></time>
	The data-timestamp attribute should be the time since the unix epoch
	You can configure how the time is displayed
*/
(function(){
	var refRate = 1000; // One second by default
	
	var res = {
		get refreshRate(){
			return refRate;
		},
		set refreshRate(newRate){
			if(newRate > 0)refRate = newRate;
		}
	};
	if(module)module.exports = res;
	else window.Timestamp = res;
})()