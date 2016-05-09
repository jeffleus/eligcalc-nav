angular.module('starter.services', [])

.service('DB', function() {
	var self = this;
	self.key = "PG3C33F25KBFK0JR";
	self.curr_artist = {};
	self.curr_album = {};
	self.curr_song = {};
	self.artists = [
		{
			name: 'U2',
			albums: [ {
					title: 'The Joshua Tree',
					songs: [{Track:1.,"Title":"A Sort of Homecoming","Length":"5:28"},
						{Track:2.,"Title":"Pride (In the Name of Love)","Length":"3:48"},
						{Track:3.,"Title":"Wire","Length":"4:19"},
						{Track:4.,"Title":"The Unforgettable Fire","Length":"4:55"},
						{Track:5.,"Title":"Promenade","Length":"2:35"},
						{Track:6.,"Title":"4th of July","Length":"2:12"},
						{Track:7.,"Title":"Bad","Length":"6:09"},
						{Track:8.,"Title":"Indian Summer Sky","Length":"4:17"},
						{Track:9.,"Title":"Elvis Presley and America","Length":"6:23"},
						{Track:10.,"Title":"MLK","Length":"2:31"}]
				},
				{
					title: 'Achtung Baby',
					songs: [{Track:1.,"Title":"Zoo Station","Producer":"Daniel Lanois","Length":"4:36"},
						{Track:2.,"Title":"Even Better Than the Real Thing","Producer":"Steve Lillywhite, with Brian Eno and Lanois","Length":"3:41"},
						{Track:3.,"Title":"One","Producer":"Lanois with Eno","Length":"4:36"},
						{Track:4.,"Title":"Until the End of the World","Producer":"Lanois with Eno","Length":"4:39"},
						{Track:5.,"Title":"Who's Gonna Ride Your Wild Horses","Producer":"Lillywhite, Lanois, and Eno","Length":"5:16"},
						{Track:6.,"Title":"So Cruel","Producer":"Lanois","Length":"5:49"},
						{Track:7.,"Title":"The Fly","Producer":"Lanois","Length":"4:29"},
						{Track:8.,"Title":"Mysterious Ways","Producer":"Lanois with Eno","Length":"4:04"},
						{Track:9.,"Title":"Tryin' to Throw Your Arms Around the World","Producer":"Lanois with Eno","Length":"3:53"},
						{Track:10.,"Title":"Ultraviolet (Light My Way)","Producer":"Lanois with Eno","Length":"5:31"},
						{Track:11.,"Title":"Acrobat","Producer":"Lanois","Length":"4:30"},
						{Track:12.,"Title":"Love Is Blindness","Producer":"Lanois","Length":"4:23"}]
				}]
		},
		{
			name: 'Green Day',
			albums: [ {
					title: 'Dookie',
					songs: [{Track:1.,"Title":"Burnout","Length":"2:07"},
						{Track:2.,"Title":"Having a Blast","Length":"2:44"},
						{Track:3.,"Title":"Chump","Length":"2:54"},
						{Track:4.,"Title":"Longview","Length":"3:59"},
						{Track:5.,"Title":"Welcome to Paradise","Length":"3:44"},
						{Track:6.,"Title":"Pulling Teeth","Length":"2:31"},
						{Track:7.,"Title":"Basket Case","Length":"3:01"},
						{Track:8.,"Title":"She","Length":"2:14"},
						{Track:9.,"Title":"Sassafras Roots","Length":"2:37"},
						{Track:10.,"Title":"When I Come Around","Length":"2:58"},
						{Track:11.,"Title":"Coming Clean","Length":"1:34"},
						{Track:12.,"Title":"Emenius Sleepus","Length":"1:43"},
						{Track:13.,"Title":"In the End","Length":"1:46"},
						{Track:14.,"Title":"F.O.D.","Length":"5:46"}]
				},
				{
					title: 'Insomniac',
					songs: [{Track:1.,"Title":"Armatage Shanks","Length":"2:17"},
						{Track:2.,"Title":"Brat","Length":"1:43"},
						{Track:3.,"Title":"Stuck with Me","Length":"2:16"},
						{Track:4.,"Title":"Geek Stink Breath","Length":"2:15"},
						{Track:5.,"Title":"No Pride","Length":"2:19"},
						{Track:6.,"Title":"Bab's Uvula Who?","Length":"2:08"},
						{Track:7.,"Title":"86","Length":"2:47"},
						{Track:8.,"Title":"Panic Song","Length":"3:35"},
						{Track:9.,"Title":"Stuart and the Ave.","Length":"2:03"},
						{Track:10.,"Title":"Brain Stew","Length":"3:13"},
						{Track:11.,"Title":"Jaded","Length":"1:30"},
						{Track:12.,"Title":"Westbound Sign","Length":"2:12"},
						{Track:13.,"Title":"Tight Wad Hill","Length":"2:01"},
						{Track:14.,"Title":"Walking Contradiction","Length":"2:31"}]
				}]
		},
		{
			name: 'Cold Play',
			albums: [ {
					title: 'Parachutes',
					songs: [{Track:1.,"Title":"Don't Panic","Length":"2:17"},
						{Track:2.,"Title":"Shiver","Length":"5:00"},
						{Track:3.,"Title":"Spies","Length":"5:19"},
						{Track:4.,"Title":"Sparks","Length":"3:47"},
						{Track:5.,"Title":"Yellow","Length":"4:29"},
						{Track:6.,"Title":"Trouble","Length":"4:31"},
						{Track:7.,"Title":"Parachutes","Length":"0:46"},
						{Track:8.,"Title":"High Speed","Length":"4:14"},
						{Track:9.,"Title":"We Never Change","Length":"4:09"},
						{Track:10.,"Title":"Everything's Not Lost","Length":"7:17"}]
				},
				{
					title: 'A Rush of Blood to the Head',
					songs: [{Track:1.,"Title":"Politik","Length":"5:18"},
						{Track:2.,"Title":"In My Place","Length":"3:48"},
						{Track:3.,"Title":"God Put a Smile upon Your Face","Length":"4:57"},
						{Track:4.,"Title":"The Scientist","Length":"5:09"},
						{Track:5.,"Title":"Clocks","Length":"5:07"},
						{Track:6.,"Title":"Daylight","Length":"5:27"},
						{Track:7.,"Title":"Green Eyes","Length":"3:43"},
						{Track:8.,"Title":"Warning Sign","Length":"5:31"},
						{Track:9.,"Title":"A Whisper","Length":"3:58"},
						{Track:10.,"Title":"A Rush of Blood to the Head","Length":"5:51"},
						{Track:11.,"Title":"Amsterdam","Length":"5:19"}]
				}]
		}];
});
