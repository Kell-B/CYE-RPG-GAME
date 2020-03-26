// global variables.
var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = '';
var myDef = '';

function reset() {
	$('#picRow').show();
	$('.eata').hide();
	$('.restart').hide();
	$('.attackButton').hide();
	$('.fightSection').hide();
	$('.defender').hide();
	$('.yourCharacter').hide();
	alert('Choose your fighter!');

	// reset myChar and myDef to equal nothing.
	var myChar = '';
	var myDef = '';
	// var YourCharacter;
	// var YourDefender;

	// reset health points.
	characters.Lonestar.healthPoints = 120;
	characters.PresSkroob.healthPoints = 100;
	characters.PizzatheHutt.healthPoints = 150;
	characters.DarkHelmet.healthPoints = 180;

	// reset attack power.
	characters.Lonestar.attackPower = 8;
	characters.PresSkroob.attackPower = 10;
	characters.PizzatheHutt.attackPower = 10;
	characters.DarkHelmet.attackPower = 12;

	// delete all in-game text.
	$('.youAttacked').empty();
	$('.attackedBack').empty();
	$('.youDefeated').empty();
	$('.youWon').empty();
	$('.youLose').empty();
	$('.noEnemy').empty();

	//writing each characters full name to the html so they show up on the page.
	$('.namel').html(characters.Lonestar.fullName);
	$('.nameps').html(characters.PresSkroob.fullName);
	$('.namepth').html(characters.PizzatheHutt.fullName);
	$('.namedh').html(characters.DarkHelmet.fullName);

	//adding the picture for each character so they show up on the page.
	$('#lone').appendTo('#picRow');
	$('#skroob').appendTo('#picRow');
	$('#pizza').appendTo('#picRow');
	$('#darkH').appendTo('#picRow');

	//writing each characters healthpoints to the html so they show up on the page.
	$('.lonestarhp').html(characters.Lonestar.healthPoints);
	$('.presskroobhp').html(characters.PresSkroob.healthPoints);
	$('.pizzathutthp').html(characters.PizzatheHutt.healthPoints);
	$('.darkhelmethp').html(characters.DarkHelmet.healthPoints);

	// reset border colors.
	$('.firstRow').css({
		'background-color' : 'white',
		'outline-color'    : 'limegreen',
		'border-width'     : '3px',
		'outline-style'    : 'solid',
		'border-color'     : 'white',
		'outline-width'    : '3px'
	});
}

// array to hold each characters/object stats.
var characters = {
	Lonestar     : {
		name               : 'Lonestar',
		visual             : 'assets/images/captain_lonestar.jpg',
		healthPoints       : 120,
		attackPower        : 8,
		fullName           : 'Captain Lonestar',
		counterAttackPower : 24
	},

	PresSkroob   : {
		name               : 'PresSkroob',
		visual             : 'assets/images/president_skroob.jpeg',
		healthPoints       : 100,
		attackPower        : 10,
		fullName           : 'President Skroob',
		counterAttackPower : 5
	},

	PizzatheHutt : {
		name               : 'PizzatheHutt',
		visual             : 'assets/images/Pizza_the_Hutt.jpg',
		healthPoints       : 150,
		attackPower        : 10,
		fullName           : 'Pizza the Hutt',
		counterAttackPower : 20
	},

	DarkHelmet   : {
		name               : 'DarkHelmet',
		visual             : 'assets/images/dark_helmet.jpg',
		healthPoints       : 180,
		attackPower        : 12,
		fullName           : 'The Evil Dark Helmet',
		counterAttackPower : 25
	}
};

$(document).ready(function() {
	reset();

	// When the player clicks on any of the characters, the game determines which one was clicked, moves the one clicked into
	// "Your Character" and moves the other three into "Enemies available to attach".
	$('.firstRow').click(function() {
		if (myChar == '') {
			// appends the chosen character to "Your Character"
			console.log(this);
			$(this).appendTo('#yourChar');
			myChar = $(this);
			YourCharacter = $(myChar).attr('value');
			$('.eata').show();
			$('.yourCharacter').show();
		}
		// if else statements that determine who is currently "Your Character" and assign
		// that person to the character array's properties.
		if (YourCharacter == characters.Lonestar.name) {
			attackerHP = characters.Lonestar.healthPoints;
			attackerAP = characters.Lonestar.attackPower;
			attackerCAP = characters.Lonestar.counterAttackPower;
			attackerFN = characters.Lonestar.fullName;
			attack = characters.Lonestar;
		} else if (YourCharacter == characters.PresSkroob.name) {
			attackerHP = characters.PresSkroob.healthPoints;
			attackerAP = characters.PresSkroob.attackPower;
			attackerCAP = characters.PresSkroob.counterAttackPower;
			attackerFN = characters.PresSkroob.fullName;
			attack = characters.PresSkroob;
		} else if (YourCharacter == characters.PizzatheHutt.name) {
			attackerHP = characters.PizzatheHutt.healthPoints;
			attackerAP = characters.PizzatheHutt.attackPower;
			attackerCAP = characters.PizzatheHutt.counterAttackPower;
			attackerFN = characters.PizzatheHutt.fullName;
			attack = characters.PizzatheHutt;
		} else if (YourCharacter == characters.DarkHelmet.name) {
			attackerHP = characters.DarkHelmet.healthPoints;
			attackerAP = characters.DarkHelmet.attackPower;
			attackerCAP = characters.DarkHelmet.counterAttackPower;
			attackerFN = characters.DarkHelmet.fullName;
			attack = characters.DarkHelmet;
		}

		// clones the three remaining characters to "Enemies available to attack" three separate divs.
		for (var i = 0; i < 4; i++) {
			$('._' + [ i ]).not(myChar).appendTo('#enemies' + [ i ]);

			// changing color
			$('._' + [ i ]).not(myChar).css({
				'background-color' : 'red',
				'outline-color'    : 'black',
				'border-width'     : '3px',
				'outline-style'    : 'solid',
				'border-color'     : 'black',
				'outline-width'    : '1px'
			});
		}

		// Clears the characters from the top.
		// $("#picRow").empty();
		$('#picRow').hide();
	});

	// When the player clicks on any of the characters in the "enemies available to attack" section, the game
	// determines which one was clicked and moves the one clicked into the "Defender" position. The other two
	// characters remain in "enemies available to attack" section.
	$('.move').click(function() {
		$('.attackButton').show();
		$('.fightSection').show();
		$('.defender').show();
		// if (myDef === "") {
		// clones the chosen character to "Defender"
		// moves that character to the "Defender" section on the page.
		$(this).appendTo('#defender');
		myDef = $(this);
		YourDefender = $(myDef).children().attr('value');
		$('.youDefeated').empty();

		// }
		// if else statements that determine who is currently "Defender" and assign
		// that person to the character array's properties.
		if (YourDefender == characters.Lonestar.name) {
			defenderHP = characters.Lonestar.healthPoints;
			defenderAP = characters.Lonestar.attackPower;
			defenderCAP = characters.Lonestar.counterAttackPower;
			defenderFN = characters.Lonestar.fullName;
			defend = characters.Lonestar;
		} else if (YourDefender == characters.PresSkroob.name) {
			defenderHP = characters.PresSkroob.healthPoints;
			defenderAP = characters.PresSkroob.attackPower;
			defenderCAP = characters.PresSkroob.counterAttackPower;
			defenderFN = characters.PresSkroob.fullName;
			defend = characters.PresSkroob;
		} else if (YourDefender == characters.PizzatheHutt.name) {
			defenderHP = characters.PizzatheHutt.healthPoints;
			defenderAP = characters.PizzatheHutt.attackPower;
			defenderCAP = characters.PizzatheHutt.counterAttackPower;
			defenderFN = characters.PizzatheHutt.fullName;
			defend = characters.PizzatheHutt;
		} else if (YourDefender == characters.DarkHelmet.name) {
			defenderHP = characters.DarkHelmet.healthPoints;
			defenderAP = characters.DarkHelmet.attackPower;
			defenderCAP = characters.DarkHelmet.counterAttackPower;
			defenderFN = characters.DarkHelmet.fullName;
			defend = characters.DarkHelmet;
		}
	});

	// when the user clicks attack, the player/Your Character's Health Points go down based on the counter attack
	// property of the "Defender".Their counter attack decreases your health.
	$('.attackButton').click(function() {
		// if player clicks attack button and no one is in the "defender" div, then
		// game says "no enemy here".
		if ($('#defender').children().length == 0) {
			$('.noEnemy').html('No enemy here.');
		}

		if (!(attackerHP < 1) || !(defenderHP < 1)) {
			// when button is clicked (if both players healthpoints are not 0,
			// the game subtracks the defendersCAP from the attackers HP.)
			attackerHP = attackerHP - defenderCAP;

			// writing the attacker/Your Character's new healthpoints to the html.
			$('.' + YourCharacter).html(attackerHP);

			// writing the text "You attacked Character for 8 damage".
			$('.youAttacked').html('You attacked ' + defenderFN + ' for ' + attackerAP + ' damage.');

			// when button is clicked (if both players healthpoints are not 0,
			// the game subtracks the attackers AP points from the defenders HP.)
			defenderHP = defenderHP - attackerAP;

			// writing the text "Character attacked you back for 10 damage."
			$('.attackedBack').html(defenderFN + ' attacked you back for ' + defenderCAP + ' damage.');

			// write the defender's new healthpoints to the html.
			$('.' + YourDefender).html(defenderHP);
		}
		// if your character defeats the defender.
		if (defenderHP <= 0) {
			// clear text from the bottom and add defeated text.
			$('.youAttacked').empty();
			$('.attackedBack').empty();
			$('.youDefeated').html('You have defeated ' + defenderFN + ', you can choose to fight another enemy.');

			// remove defender from the page.
			$('#defender').empty();

			// Your Character's attack power goes up by 10.
			console.log(attackerAP);
			attackerAP = attackerAP + 10;

			// redefining "YourCharacter"'s attack power to equal the new value.
			attack.attackPower = attackerAP;
			console.log(attackerAP);
		}

		// if all enemies have been defeated and the attacker still has health, then the player wins
		if ($('.move').children().length == 0) {
			// clear out the other paragraphs and let user know they won.
			$('.youAttacked').empty();
			$('.attackedBack').empty();
			$('.youDefeated').empty();
			$('.noEnemy').empty();
			$('.youWon').html('You Won!!!! GAME OVER!!!');

			// show the restart button.
			$('.restart').show();

			// When you click "Restart" the game begins again.
			$('.restart').click(function() {
				location.reload(true);
			});
		}

		// if your characters hp = 0 then you lose.
		if (attackerHP <= 0) {
			// show the restart button.
			$('.restart').show();

			// hide the attack button.
			$('.attackButton').hide();

			// You lose.
			$('.youAttacked').empty();
			$('.attackedBack').empty();
			$('.youDefeated').empty();
			$('.youLose').html("You've been defeated...GAME OVER!!!");

			// When you click "Restart" the game begins again.
			$('.restart').click(function() {
				location.reload(true);
			});
		}
	});

	// The game remembers every time you attack and slowly increases your attack power.
});
