var a;
var images = [
	{
		imageTN: 'img/bloodborneTN.jpg',
		image: 'img/bloodborne.jpg',
		gameName: 'Bloodborne, Slayer\'s rainning blood in a game'
	},

	{
		imageTN: 'img/gearsTN.jpg',
		image: 'img/gears.jpg',
		gameName: 'Gears of War, the bro fest shooter'
	},

	{
		imageTN: 'img/godOfwarTN.jpg',
		image: 'img/godOfwar.jpg',
		gameName: 'God of War, just get orbes'
	},

	{
		imageTN: 'img/jokerTN.jpg',
		image: 'img/joker.jpg',
		gameName: 'Batman: Arkham city, become the detective'
	},

	{
		imageTN: 'img/silentHillTN.jpg',
		image: 'img/silentHill.jpg',
		gameName: 'Silent Hill, possible therapy'
	},

	{
		imageTN: 'img/soulReaverTN.jpg',
		image: 'img/soulReaver.jpg',
		gameName: 'Soul Reaver, destiny abhors paradox'
	},

	{
		imageTN: 'img/tlouTN.png',
		image: 'img/tlou.png',
		gameName: 'The Last of Us, emotional scars'
	},

	{
		imageTN: 'img/unchartedTN.jpg',
		image: 'img/uncharted.jpg',
		gameName: 'Uncharted, Naughty Dog\'s jewel'
	}
];



$(document).ready(function(){
	$('.picBox').click(function(){
		var picBoxSrc =  $(this).attr('src');
		for(var i=0; i < images.length; i++){
			var picMatch = images[i].imageTN;
			var captionGame = images[i].gameName;

			if(picMatch === picBoxSrc){
				$('<img id="currentImg" src="' +images[i].image+ '" />').appendTo('#display');
				$('<span id="image-caption">' + images[i].gameName + '</span>').appendTo('.caption h3');
				a = i;
			}
		}
		$('.canvas').fadeIn("fast");
	});
	$('#close').click(function(){
		$('.canvas').hide("slide", {direction: "right"}, 500);
		$('#currentImg, #image-caption').remove();
	});
	$('#next').click(function(){
		
		a++;
		if(a === images.length){
			a = 0;
		}
		$('#currentImg').fadeOut('fast',function(){
			$('#currentImg').fadeIn();
			$('#currentImg').attr('src', images[a].image);
		});

		$('#image-caption').fadeOut('fast',function(){
			$('#image-caption').fadeIn();
			$('#image-caption').text(images[a].gameName);
		});

		
		
	});
	$('#prev').click(function(){
		a--;
		if(a < 0){
			a = images.length-1;
		}
		$('#currentImg').fadeOut('fast',function(){
			$('#currentImg').fadeIn();
			$('#currentImg').attr('src', images[a].image);
		});
		$('#image-caption').fadeOut('fast',function(){
			$('#image-caption').fadeIn();
			$('#image-caption').text(images[a].gameName);
		});
	})
})

