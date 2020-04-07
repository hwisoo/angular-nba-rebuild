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
    ppg: 110.4,
    oppg: 107.4,
    rpg: 44.3,
    apg: 26.5,
    players: [
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
    ppg: 107.2,
    oppg: 110.8,
    rpg: 41.7,
    apg: 24.1,
    players:  [
      "Blake Griffin",
    ]
  },
  {
    id: 9,
    img: 'GSW',
    city: 'Golden State',
    name: 'Warriors',
    ppg: 106.3,
    oppg: 115.0,
    rpg: 42.8,
    apg: 25.6,
    players: [
      "Stephen Curry",
      "Klay Thompson",
      "Draymond Green",
    ]
  },
  {
    id: 10,
    img: 'HOU',
    city: 'Houston',
    name: 'Rockets',
    ppg: 118.1,
    oppg: 114.4,
    rpg: 44.9,
    apg: 21.5,
    players: [
      "James Harden",
      "PJ Tucker",
      "Kenneth Faried",
    ]
  },
  {
    id: 11,
    img: 'IND',
    city: 'Indiana',
    name: 'Pacers',
    ppg: 109.3,
    oppg: 107.4,
    rpg: 42.8,
    apg: 25.9,
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
    ppg: 116.2,
    oppg: 109.7,
    rpg: 48,
    apg: 23.8,
    players: [
      "Patrick Beverly",
      "Lou Williams",
      "Montrezl Harrell",
    ]
  },
  {
    id: 13,
    img: 'LAL',
    city: 'Los Angeles',
    name: 'Lakers',
    ppg: 114.3,
    oppg: 106.9,
    rpg: 46.1,
    apg: 25.9,
    players: [
      "Kyle Kuzma",
      "Lebron James",
      "JaVale McGee"
    ]
  },
  {
    id: 14,
    img: 'MEM',
    city: 'Memphis',
    name: 'Grizzlies',
    ppg: 112.6,
    oppg: 113.7,
    rpg: 46.7,
    apg: 27,
    players: [
    ]
  },
  {
    id: 15,
    img: 'MIA',
    city: 'Miami',
    name: 'Heat',
    ppg: 112.8,
    oppg: 108.9,
    rpg: 44.5,
    apg: 26,
    players: [
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
    ppg: 118.6,
    oppg: 107.4,
    rpg: 51.7,
    apg: 25.9,
    players: [
      "Eic Bledsoe",
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
    ppg: 113.2,
    oppg: 117.5,
    rpg: 44.8,
    apg: 23.8,
    players: [
      "Karl-Anthony Towns"
    ]
  },
  {
    id: 18,
    img: 'NOP',
    city: 'New Orleans',
    name: 'Pelicans',
    ppg: 116.2,
    oppg: 117.0,
    rpg: 47,
    apg: 27.0,
    players: [
      "Jrue Holiday",
      "E'Twaun Moore",
      "Julius Randle",
      "Nikola Mirotic",
    ]
  },
  {
    id: 19,
    img: 'NYK',
    city: 'New York',
    name: 'Knicks',
    ppg: 105.8,
    oppg: 112.3,
    rpg: 46.5,
    apg: 22.1,
    players: [
    ]
  },
  {
    id: 20,
    img: 'OKC',
    city: 'Oklahoma City',
    name: 'Thunder',
    ppg: 110.8,
    oppg: 108.3,
    rpg: 42.7,
    apg: 21.9,
    players: [
      "Dennis Schroder",
      "Steven Adams"
    ]
  },
  {
    id: 21,
    img: 'ORL',
    city: 'Orlando',
    name: 'Magic',
    ppg: 106.4,
    oppg: 107.3,
    rpg: 44.5,
    apg: 24.0,
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
    ppg: 109.6,
    oppg: 107.4,
    rpg: 45.5,
    apg: 25.9,
    players: [
      "Ben Simmons",
      "Joel Embiid"
    ]
  },
  {
    id: 23,
    img: 'PHX',
    city: 'Phoenix',
    name: 'Suns',
    ppg: 112.6,
    oppg: 113.9,
    rpg: 43.1,
    apg: 27.2,
    players: [
      "Devin Booker",
      "Kelly Oubre Jr.",
      "Deandre Ayton"
    ]
  },
  {
    id: 24,
    img: 'POR',
    city: 'Portland',
    name: 'Trail Blazers',
    ppg: 113.6,
    oppg: 115.2,
    rpg: 45.5,
    apg: 20.2,
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
    ppg: 109.0,
    oppg: 110.9,
    rpg: 42.5,
    apg: 23.4,
    players: [
      "Kent Bazemore",
      "Alex Len",
      "De'Aaron Fox",
      "Harry Giles III",
    ]
  },
  {
    id: 26,
    img: 'SAS',
    city: 'San Antonio',
    name: 'Spurs',
    ppg: 113.2,
    oppg: 114.9,
    rpg: 44.4,
    apg: 24.5,
    players: [
      "DeMar DeRozan",
      "Patty Mills",
      "Rudy Gay",
      "LaMarcus Aldridge",
    ]
  },
  {
    id: 27,
    img: 'TOR',
    city: 'Toronto',
    name: 'Raptors',
    ppg: 113.0,
    oppg: 106.5,
    rpg: 45.2,
    apg: 25.4,
    players: [
      "Kyle Lowry",
      "Fred VanVleet",
      "CJ Miles",
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
