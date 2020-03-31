import { Team } from '../models/team.model';
import { PLAYERS } from './players';
import { Player } from '../models/player.model';

let allplayers = PLAYERS;


export const TEAMS: Team[] = [
  {
    id: 0,
    img: 'ATL',
    city: 'Atlanta',
    name: 'Hawks',
    ppg: 111.8,
    oppg: 119.7,
    rpg: 43.3,
    apg: 24.0,
    players: [
      "DeAndre' Bembry",
      "Charles Brown Jr.",
      "Clint Capela",
      "Vince Carter",
      "John Collins",
      "DeWayne Dedmon",
      "Bruno Fernando",
      "Brandon Goodwin",
      "Treveon Graham",
      "Kevin Huerter",
      "De'Andre Hunter",
      "Damian Jones",
      "Skal Labissiere",
      "Cam Reddish",
      "Jeff Teague",
      "Trae Young",
    ]
  },
  {
    id: 1,
    img: 'BOS',
    city: 'Boston',
    name: 'Celtics',
    ppg: 113.0,
    oppg: 106.8,
    rpg: 46.0,
    apg: 22.8,
    players: [
      "Jaylen Brown",
      "Jason Tatum",
      "Gordon Hayward",
    ]
  },
  {
    id: 2,
    img: 'BKN',
    city: 'Brooklyn',
    name: 'Nets',
    ppg: 110.8,
    oppg: 111.4,
    rpg: 48.5,
    apg: 24,
    players: [
      "DeMarre Carroll",
      "Rondae Hollis-Jefferson",
      "Jarrett Allen"
    ]
  },
  {
    id: 3,
    img: 'CHA',
    city: 'Charlotte',
    name: 'Hornets',
    ppg: 102.9,
    oppg: 109.6,
    rpg: 42.8,
    apg: 23.8,
    players: [
      "Jeremy Lamb",
      "Michael Kidd-Gilchrist",
      "Nicolas Batum",
      "Bismack Biyombo"
    ]
  },
  {
    id: 4,
    img: 'CHI',
    city: 'Chicago',
    name: 'Bulls',
    ppg: 101.1,
    oppg: 111.3,
    rpg: 41.6,
    apg: 21.6,
    players: [
      "Zach Lavine",
      "Kris Dunn",
      "Carmelo Anthony",
      "Jabari Parker",
      "Robin Lopez"
    ]
  },
  {
    id: 5,
    img: 'CLE',
    city: 'Cleveland',
    name: 'Cavaliers',
    ppg: 102.5,
    oppg: 113.9,
    rpg: 41.9,
    apg: 20.0,
    players: [
      "Collin Sexton",
      "Cedi Osman",
      "Tristan Thompson",
      "Ante Zizic"
    ]
  },
  {
    id: 6,
    img: 'DAL',
    city: 'Dallas',
    name: 'Mavericks',
    ppg: 116.4,
    oppg: 110.3,
    rpg: 47,
    apg: 24.5,
    players: [
      "J.J. Barea",
      "Luka Doncic",
    ]
  },
  {
    id: 7,
    img: 'DEN',
    city: 'Denver',
    name: 'Nuggets',
    ppg: 111.2,
    oppg: 106.4,
    rpg: 46.7,
    apg: 27.3,
    players: [
      "Isaiah Thomas",
      "Jamal Murray",
      "Paul Millsap",
      "Mason Plumlee",
      "Nikola Jokic"
    ]
  },
  {
    id: 8,
    img: 'DET',
    city: 'Detroit',
    name: 'Pistons',
    ppg: 106.0,
    oppg: 108.6,
    rpg: 45.6,
    apg: 22.0,
    players: [
      "Jose Calderon",
      "Reggie Jackson",
      "Blake Griffin",
      "Glen Robinson III",
      "Andre Drummond"
    ]
  },
  {
    id: 9,
    img: 'GSW',
    city: 'Golden State',
    name: 'Warriors',
    ppg: 118.9,
    oppg: 112.0,
    rpg: 46.6,
    apg: 29.2,
    players: [
      "Stephen Curry",
      "Klay Thompson",
      "Kevin Durant",
      "Draymond Green",
      "DeMarcus Cousins"
    ]
  },
  {
    id: 10,
    img: 'HOU',
    city: 'Houston',
    name: 'Rockets',
    ppg: 112.2,
    oppg: 110.7,
    rpg: 42.0,
    apg: 20.8,
    players: [
      "Chris Paul",
      "James Harden",
      "PJ Tucker",
      "Kenneth Faried",
      "Clint Capela"
    ]
  },
  {
    id: 11,
    img: 'IND',
    city: 'Indiana',
    name: 'Pacers',
    ppg: 109.0,
    oppg: 103.2,
    rpg: 43.9,
    apg: 26.0,
    players: [
      "Victor Oladipo",
      "Darren Collison",
      "Domantas Sabonis",
      "Myles Turner",
      "Kyle O'Quinn"
    ]
  },
  {
    id: 12,
    img: 'LAC',
    city: 'LA',
    name: 'Clippers',
    ppg: 114.1,
    oppg: 113.7,
    rpg: 45.3,
    apg: 22.7,
    players: [
      "Patrick Beverly",
      "Lou Williams",
      "Tobias Harris",
      "Montrezl Harrell",
      "Marcin Gortat"
    ]
  },
  {
    id: 13,
    img: 'LAL',
    city: 'Los Angeles',
    name: 'Lakers',
    ppg: 112.2,
    oppg: 111.9,
    rpg: 47.3,
    apg: 24.5,
    players: [
      "Lonzo Ball",
      "Kyle Kuzma",
      "Brandon Ingram",
      "Lebron James",
      "JaVale McGee"
    ]
  },
  {
    id: 14,
    img: 'MEM',
    city: 'Memphis',
    name: 'Grizzlies',
    ppg: 100.8,
    oppg: 104.2,
    rpg: 39.9,
    apg: 23.5,
    players: [
      "Mike Conley",
      "Shelvin Mack",
      "Chandler Parsons",
      "JaMychal Green",
      "Joakim Noah"
    ]
  },
  {
    id: 15,
    img: 'MIA',
    city: 'Miami',
    name: 'Heat',
    ppg: 105.8,
    oppg: 106.0,
    rpg: 46.6,
    apg: 23.8,
    players: [
      "Dwayne Wade",
      "Goran Dragic",
      "Udonis Haslem",
      "Kelly Olynik",
      "Hassan Whiteside"
    ]
  },
  {
    id: 16,
    img: 'MIL',
    city: 'Milwaukee',
    name: 'Bucks',
    ppg: 117.6,
    oppg: 107.6,
    rpg: 49.1,
    apg: 26.5,
    players: [
      "Eic Bledsoe",
      "Malcolm Brogdon",
      "Giannis Antetokounpo",
      "Khris Middleton",
      "Brook Lopez"
    ]
  },
  {
    id: 17,
    img: 'MIN',
    city: 'Minnesota',
    name: 'Timberwolves',
    ppg: 111.9,
    oppg: 111.4,
    rpg: 45.1,
    apg: 24.5,
    players: [
      "Derrick Rose",
      "Jeff Teague",
      "Andrew Wiggins",
      "Taj Gibson",
      "Karl-Anthony Towns"
    ]
  },
  {
    id: 18,
    img: 'NOP',
    city: 'New Orleans',
    name: 'Pelicans',
    ppg: 116.7,
    oppg: 114.9,
    rpg: 46.8,
    apg: 26.8,
    players: [
      "Jrue Holiday",
      "E'Twaun Moore",
      "Julius Randle",
      "Nikola Mirotic",
      "Anthony Davis"
    ]
  },
  {
    id: 19,
    img: 'NYK',
    city: 'New York',
    name: 'Knicks',
    ppg: 107.2,
    oppg: 115.7,
    rpg: 44.5,
    apg: 19.8,
    players: [
      "Tim Hardaway Jr.",
      "Emmanuel Mudiay",
      "Mario Hezonja",
      "Kristaps Porzingis",
      "Enes Kanter"
    ]
  },
  {
    id: 20,
    img: 'OKC',
    city: 'Oklahoma City',
    name: 'Thunder',
    ppg: 114.2,
    oppg: 109.2,
    rpg: 48.1,
    apg: 23.1,
    players: [
      "Russell Westbrook",
      "Dennis Schroder",
      "Paul George",
      "Jerami Grant",
      "Steven Adams"
    ]
  },
  {
    id: 21,
    img: 'ORL',
    city: 'Orlando',
    name: 'Magic',
    ppg: 104.4,
    oppg: 107.9,
    rpg: 43.0,
    apg: 24.5,
    players: [
      "Evan Fournier",
      "Terrence Ross",
      "Aaron Gordan",
      "Jonathon Simmons",
      "Mo Bamba"
    ]
  },
  {
    id: 22,
    img: 'PHI',
    city: 'Philadelphia',
    name: '76ers',
    ppg: 115.7,
    oppg: 111.9,
    rpg: 47.6,
    apg: 27.5,
    players: [
      "Ben Simmons",
      "Jimmy Butler",
      "Corey Brewer",
      "Winson Chandler",
      "Joel Embiid"
    ]
  },
  {
    id: 23,
    img: 'PHX',
    city: 'Phoenix',
    name: 'Suns',
    ppg: 106.0,
    oppg: 115.2,
    rpg: 40.1,
    apg: 23.8,
    players: [
      "Devin Booker",
      "Jamal Crawford",
      "Kelly Oubre Jr.",
      "Deandre Ayton"
    ]
  },
  {
    id: 24,
    img: 'POR',
    city: 'Portland',
    name: 'Trail Blazers',
    ppg: 112.6,
    oppg: 110.1,
    rpg: 48.2,
    apg: 22.5,
    players: [
      "Damian Lillard",
      "CJ McCollum",
      "Al-Farouq Aminu",
      "Evan Turner",
      "Jusuf Nurkic"
    ]
  },
  {
    id: 25,
    img: 'SAC',
    city: 'Sacramento',
    name: 'Kings',
    ppg: 113.4,
    oppg: 115.3,
    rpg: 44.4,
    apg: 25.9,
    players: [
      "Kent Bazemore",
      "Alex Len",
      "De'Aaron Fox",
      "Iman Shumpert",
      "Zach Randolph",
      "Harry Giles III",
      "Willie Cauley-Stein"
    ]
  },
  {
    id: 26,
    img: 'SAS',
    city: 'San Antonio',
    name: 'Spurs',
    ppg: 111.6,
    oppg: 109.5,
    rpg: 44.2,
    apg: 24.7,
    players: [
      "DeMar DeRozan",
      "Patty Mills",
      "Rudy Gay",
      "LaMarcus Aldridge",
      "Pau Gasol"
    ]
  },
  {
    id: 27,
    img: 'TOR',
    city: 'Toronto',
    name: 'Raptors',
    ppg: 113.8,
    oppg: 108.2,
    rpg: 45.0,
    apg: 24.4,
    players: [
      "Kyle Lowry",
      "Fred VanVleet",
      "CJ Miles",
      "Danny Green",
      "Jonas Valanciunas"
    ]
  },
  {
    id: 28,
    img: 'UTA',
    city: 'Utah',
    name: 'Jazz',
    ppg: 108.4,
    oppg: 105.1,
    rpg: 45.2,
    apg: 24.8,
    players: [
      "Donovan Mitchell",
      "Ricky Rubio",
      "Jae Crowder",
      "Derrick Favors",
      "Rudy Golbert"
    ]
  },
  {
    id: 29,
    img: 'WAS',
    city: 'Washington',
    name: 'Wizards',
    ppg: 113.1,
    oppg: 116.0,
    rpg: 41.1,
    apg: 25.5,
    players: [
      "John Wall",
      "Bradley Beal",
      "Trevor Ariza",
      "Markieff Morris",
      "Dwight Howard"
    ]
  },
]
