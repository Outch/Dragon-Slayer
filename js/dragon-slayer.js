'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/

var game_data = {
	dragon_life: 50,
	knight_life: 50,
	weapon: "",
	armor: "",
	lvl: 1
};

/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/

function getRandomArbitrary(min, max)
{
  return parseInt(Math.random() * (max + 1 - min) + min);
}

function lvl(i)
{
	game_data.lvl = i;
	if(i ==1)
	{
		game_data.dragon_life = 50;
		game_data.knight_life = 50;
	}

	else if (i == 2)
	{
		game_data.dragon_life = 75;
		game_data.knight_life = 40;
	}

	else if (i == 3)
	{
		game_data.dragon_life = 120;
		game_data.knight_life = 30;
	}
}

function armor(i)
{
	game_data.armor = i;
}

function weapon(i)
{
	game_data.weapon = i;
}

function hit_knight()
{
	var hit = getRandomArbitrary(5, 10);
	if (game_data.weapon == "1")
		hit += 1;
	else if (game_data.weapon == "2")
		hit += 3;
	else if (game_data.weapon == "3")
		hit += 5;
	game_data.dragon_life -= hit;
	console.log('Knight hit the Dragon for: ' + hit);

}

function hit_dragon()
{
	var hit = getRandomArbitrary(5, 8);
	if (game_data.armor == "1")
		hit -= 1;
	else if (game_data.armor == "2")
		hit -= 3;
	else if (game_data.armor == "3")
		hit -= 4;
	game_data.knight_life -= hit;
	console.log('Dragon hit the knight for: ' + hit);
}

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

function combat()
{
	lvl(game_data.lvl);
	while (true)
	{
		hit_knight();
		console.log('dragon life: ' + game_data.dragon_life);
		if (game_data.dragon_life <= 0)
		{
			console.log(game_data);
			return document.getElementById('imgWinner').src ="images/knight.jpg";
		}
		hit_dragon();
		console.log('knight life: ' + game_data.knight_life);
		if (game_data.knight_life <= 0)
		{
			console.log(game_data);
			return document.getElementById('imgWinner').src ="images/dragon.jpg";
		}
	}
}
