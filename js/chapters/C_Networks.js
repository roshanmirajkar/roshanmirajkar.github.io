// 1 - NETWORKS
SLIDES.push(

// PLAY AROUND: how to connect & disconnect
{

	chapter: "Networks",

	clear:true,
	add:[

		// The top instructions
		{
			type:"box",
			text:"networks_tutorial_start", x:260, y:0, w:440, h:70, align:"center"
		},

		// The fullscreen simulation
		{
			type:"sim",
			x:0, y:10,
			fullscreen: true,
			network: {
				"contagion":0,
				"peeps":[[44,184,0],[155,215,0],[237,105,0],[309,213,0],[646,211,0],[328,305,0],[629,308,0],[417,111,0],[538,362,0],[216,299,0],[94,314,0],[-61,220,0],[68,455,0],[733,147,0],[760,293,0],[776,437,0],[759,48,0],[134,33,0],[929,181,0],[848,111,0],[1013,330,0],[880,269,0],[538,128,0],[189,388,0],[853,356,0]],
				//"connections":[[5,6,0]],
				"connections":[[1,0,0],[0,11,0],[2,17,0],[9,23,0],[9,10,0],[9,1,0],[9,5,0],[23,12,0],[3,2,0],[4,13,0],[13,16,0],[13,19,0],[6,14,0],[14,24,0],[14,15,0],[14,21,0],[21,20,0],[21,18,0],[5,6,0]]
			}
		},

		// "Connect" instruction (words & picture)
		{
			type:"box",
			id:"connect_words",
			text:"networks_tutorial_connect", x:280, y:183-7, w:400, align:"center", color:"#bbb"
		},
		{
			type:"box",
			id:"connect_pic",
			img:"sprites/tutorial_connect.png", x:330, y:150-7, w:300, h:100
		},

		// "Disconnect" instruction (words & picture)
		{
			type:"box",
			id:"disconnect_words",
			text:"networks_tutorial_disconnect", x:280, y:280, w:400, align:"center", color:"#bbb"
		},
		{
			type:"box",
			id:"disconnect_pic",
			img:"sprites/tutorial_disconnect.png", x:327, y:245, w:300, h:100
		},

		// The bottom instructions & button (hidden at first)
		{
			type:"box",
			id:"end_words",
			text:"networks_tutorial_end", x:230, y:400, w:500, h:70, align:"center",
			hidden:true
		}

	],

	// Logic to fade in/out words & stuff
	onupdate:function(slideshow, state){

		// Count number of connections this & last time
		var sim = slideshow.simulations.sims[0];
		var numConnections = sim.connections.length;
		if(state.lastConnections===undefined) state.lastConnections=numConnections;
		state.currConnections = numConnections;

		// SHOW/HIDE INSTRUCTIONS
		var boxes = slideshow.boxes;
		// If connections went UP, hide "connect" instructions
		if(state.currConnections > state.lastConnections && !state.canConnect){
			state.canConnect = true;
			boxes.removeChildByID("connect_words", true);
			boxes.removeChildByID("connect_pic", true);
		}
		// If connections went DOWN, hide "disconnect" instructions
		if(state.currConnections < state.lastConnections && !state.canDisconnect){
			state.canDisconnect = true;
			boxes.removeChildByID("disconnect_words", true);
			boxes.removeChildByID("disconnect_pic", true);
		}
		// If did both, show end
		if(state.canConnect && state.canDisconnect && !state.BUTTON_SHOWED){
			state.BUTTON_SHOWED = true;
			boxes.showChildByID("end_words", true);
			//boxes.showChildByID("end_button");
		}

		// update # of connections in state
		state.lastConnections = state.currConnections;

	}

},

// PLAY AROUND: how the "threshold" model workds
// diagonal
{

	chapter: "Networks-Threshold",

	clear:true,
	add:[

		// TEXT
		{
			type:"box",
			id:"networks_threshold",
			text:"networks_threshold", x:60, y:25, w:400
		},
		{
			type:"box",
			id:"networks_threshold_instruction",
			text:"networks_threshold_instruction", x:110, y:260, w:300,
			align:"center"
		},
		{
			type:"box",
			id:"networks_threshold_end",
			text:"networks_threshold_end", x:60, y:350, w:400
		},
		{
			type:"box",
			id:"networks_threshold_end",
			text:"networks_threshold_end", x:60, y:350, w:400
		},

		// SIMULATION: THRESHOLD
		{
			type:"sim",
			x:420, y:70,
			fullscreen: true,
			network: {
				"contagion":0.5,
				"peeps":[[141,99,0],[444,373,1],[442,103,1],[144,371,0]],
				"connections":[[2,1,0],[3,2,0]]
			},
			options:{
				infectedFrame: 2,
				scale: 2,
				_bottle: true
			}
		}

	]
},

// pre-puzzle ramble
{
	remove:[
		{ type:"box", id:"networks_threshold" },
		{ type:"box", id:"networks_threshold_instruction" },
		{ type:"box", id:"networks_threshold_explanation" },
		{ type:"box", id:"networks_threshold_end" }
		
	],
	add:[
		{
			type:"box",
			id:"networks_pre_puzzle",
			text:"networks_pre_puzzle", x:60, y:0, w:400,
			lineHeight:"1.3em"
		},
		{
			type:"box",
			id:"networks_pre_puzzle_2",
			text:"networks_pre_puzzle_2", x:60, y:107, w:400,
			lineHeight:"1.3em"
		},
		{
			type:"box",
			text:"optional_reading", x:60, y:220, w:400, h:30,
			fontSize:"17px", color:"#bbb"
		}
	]
},


// PUZZLE: The "Majority Illusion" puzzle


// post-puzzle ramble, introduce simple contagion

);