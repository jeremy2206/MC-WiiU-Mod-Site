
const pages = [
	//123
	{ title: "2018 Memes V1", content: "Ce Skin Pack crée par Nobledez comprends différents skins de memes de 2018.", url: "skin-pack/list/2018-memes-v1.html", image: "../IMG/skin-pack/2018-memes-v1.png" },
	{ title: "24/7 SMP", content: "Cette carte crée pour les membres du serveur discord Minecraft Legacy Edition est une survie qui est resté ouvert pendant plusieurs mois", url: "map/list/24-7-smp.html", image: "../IMG/map/24-7-smp.png" },
	{ title: "45625w-2019", content: " Ce Skin Pack comprends différents skins", url: "skin-pack/list/45625w-2019.html", image: "../IMG/skin-pack/45625w-2019.png" },
	//A
	{ title: "All Dream", content: "Ce Skin Pack crée par Azox comprends toutes les couleurs du skin dream. [Publié par Azox]", url: "skin-pack/list/all-dream.html", image: "../IMG/skin-pack/all-dream.png" },
	{ title: "Amethyst Pack", content: "Ce texture pack crée par Colbb et converti par jerem2206 est un texture pack pvp violet", url: "texture-pack/list/amethyst-pack.html", image: "../IMG/texture-pack/amethyst-pack.png" },
	{ title: "Among us Skin Pack", content: "Ce Skin Pack crée par Orika Hero comprends toutes les couleurs du crewmate de Among us. [Publié par Azox]", url: "skin-pack/list/among-us-skin-pack.html", image: "../IMG/skin-pack/among-us-skin-pack.png" },
	{ title: "All Dream", content: "Ce Skin Pack crée par Azox comprends toutes les couleurs du skin dream. [Publié par Azox]", url: "skin-pack/list/all-dream.html", image: "../IMG/skin-pack/all-dream.png" },
	{ title: "Apps Pack", content: "Ce Skin Pack crée par Nobledez comprends skin de logo d'applications.", url: "skin-pack/list/apps-pack.html", image: "../IMG/skin-pack/apps-pack.png" },
	{ title: "Arcane Practice", content: "Cette carte crée par Pengchan et modifié par Frutox est une carte PvP avec plusieurs cartes et différents kits [Publié par Frutox].", url: "map/list/arcane-practice.html", image: "../IMG/map/arcane-practice.png" },
	{ title: "Ascend", content: "Ce texture pack crée par Yuruze et converti par Jerem2206 est un texture pack pvp classique", url: "texture-pack/list/ascend.html", image: "../IMG/texture-pack/ascend.png" },
	{ title: "Astral", content: "Ce texture pack crée par NotronDan et converti par a4l est un texture pack pvp classique", url: "texture-pack/list/astral.html", image: "../IMG/texture-pack/astral.png" },
	//B
	{ title: "Basic Lobby", content: "Juste le lobby actuel des mini jeux de minecraft console.", url: "lobby/list/basic-lobby.html", image: "../IMG/lobby/basic-lobby.png" },
    { title: "BasicArena MG02 FY V2", content: "Cette carte crée par Jerem2206 pour les membres de la Furysium qui contient une légère modification de la carte principale du mode culbute", url: "minigame-map/list/basicarena-mg02-fy-v2.html", image: "../IMG/minigame-map/basicarena-mg02-fy-v2.png" },
	{ title: "Binkman", content: "Ce logiciel permet de convertir des fichiers dans les 2 sens: Les fichiers .wav en .binka qui est utile pour modifier les musiques de minecraft WiiU.", url: "logiciel/list/binkman.html", image: "../IMG/logiciel/binkman.png" },
	{ title: "Block Skin Pack", content: "Ce Skin Pack créé par Nobledez rassemble quelques centaines de blocs de minecraft et de certains mods.", url: "skin-pack/list/block-skin-pack.html", image: "../IMG/skin-pack/block-skin-pack.png" },
    { title: "BlockBench", content: "Ce logiciel est un outil permettant de créer plus facilement ses Skin Custom.", url: "logiciel/list/blockbench.html", image: "../IMG/logiciel/blockbench.png" },
	{ title: "Blue & Red Fade", content: "Ce texture pack crée par Xenox et converti par jerem2206 est un texture pack pvp de couleur dégradé entre le rouge et le bleu .", url: "texture-pack/list/blue-&-red-fade.html", image: "../IMG/texture-pack/blue-&-red-fade.png" },
	{ title: "BO2 Boat", content: "Cette carte est une carte du jeu Call of Duty Black Ops 2 dans Minecraft.", url: "map/list/bo2-boat.html", image: "../IMG/map/bo2-boat.png" },
	{ title: "BrainFFA V2 FY", content: "Cette carte faites par Jerem2206 est une carte BrainFFA classique faites pour les membres de la furysium.", url: "map/list/brainffa-fy-v2.html", image: "../IMG/map/brainffa-fy-v2.png" },
	{ title: "Brendans Models Skin Pack V5", content: "Ce Skin Pack créé par Brendans rassemble quelques centaines de skins originaux.", url: "skin-pack/list/brendans-models-skin-pack-v5.html", image: "../IMG/skin-pack/brendans-models-skin-pack-v5.png" },
	{ title: "Brillant", content: "Ce texture pack crée par Brilliant-PVP et converti par jerem2206 est un texture pack très coloré un peu dans le style du pack plastic.", url: "texture-pack/list/brillant.html", image: "../IMG/texture-pack/brillant.png" },
	//C
	{ title: "Capture the flag", content: "Cette carte est une carte PvP qui consiste a capturer le drapeau [Publié par Frutox].", url: "map/list/capturetheflag.html", image: "../IMG/map/capturetheflag.png" },
    { title: "Cemu", content: "Ce logiciel permet de jouer a des jeux WiiU sur PC.", url: "logiciel/list/cemu.html", image: "../IMG/logiciel/cemu.png" },
	{ title: "Cereal Box Pack", content: "Ce Skin Pack créé par Nobledez est un pack de skin avec des boite de céréales.", url: "skin-pack/list/cereal-box-pack.html", image: "../IMG/skin-pack/cereal-box-pack.png" },
	{ title: "Chicken Skin Pack", content: "Ce Skin Pack rassemble comprends des skins de poulets.", url: "skin-pack/list/chicken-skin-pack.html", image: "../IMG/skin-pack/chicken-skin-pack.png" },
	{ title: "Commu Skin Pack", content: "Ce Skin Pack créé par Jerem2206 rassemble différents skins simple.", url: "skin-pack/list/commu-skin-pack.html", image: "../IMG/skin-pack/commu-skin-pack.png" },
	{ title: "Core War", content: "Cette cartes crée par Thepyrocrafteur & Uranium_49 sur Java refait par Jerem2206 contient une carte team contre team pour détruire le coeur adverse.", url: "map/list/core-war.html", image: "../IMG/map/core-war.png" },
	{ title: "Creeper Skin Pack", content: "Ce Skin Pack contient des creeper de différentes couleurs.", url: "skin-pack/list/creeper-skin-pack.html", image: "../IMG/nothing.png" },
	//D
	{ title: "Dandelion X", content: "Ce texture pack crée par Steelfeathers & Xerotrinity puis converti par jerem2206 est un texture pack ressemblant au pack médiéval.", url: "texture-pack/list/dandelion-x.html", image: "../IMG/texture-pack/dandelion-x.png" },
    { title: "DDLCSkins", content: "Ce Skin Pack créé par Nobledez rassemble comprends de l'univers de DDLC.", url: "skin-pack/list/ddlcskins.html", image: "../IMG/skin-pack/ddlcskins.png" },
	{ title: "Discord To Minecraft WiiU", content: "Ce logiciel permet de voir les messages Discord sur Minecraft WiiU.", url: "logiciel/list/discord-to-minecraft-wiiu.html", image: "../IMG/nothing.png" },
	{ title: "Dragon Fruit", content: "Ce texture pack crée par Colbb et converti par jerem2206 est un texture pack pvp de couleur rose/rouge.", url: "texture-pack/list/dragon-fruit.html", image: "../IMG/texture-pack/dragon-fruit.png" },
	{ title: "Dragon UnPACKer", content: "Ce logiciel permet d'ouvrir des fichiers impossible a ouvrir facilement (comme les .pck des mashup).", url: "logiciel/list/dragon-unpacker.html", image: "../IMG/logiciel/dragon-unpacker.png" },
	//E
	{ title: "Ester", content: "Ce Skin Pack contient des skins de la période de pâques.", url: "skin-pack/list/easter.html", image: "../IMG/skin-pack/easter.png" },
	{ title: "EggWars", content: "Cette carte par pengchan est une carte du mode de jeu d'eggwars [Publié par Frutox].", url: "map/list/eggwars.html", image: "../IMG/map/eggwars.png" },
	{ title: "ELR Elementary PvP", content: "Ce texture pack converti par el-robinator est simpliste et peut plaire aux joueurs PvP. [Publié par el-robinator]", url: "texture-pack/list/elr-elementary-pvp.html", image: "../IMG/texture-pack/elr-elementary-pvp.png" },
	{ title: "Empty World", content: "Cette carte est juste une carte vide.", url: "map/list/empty-world.html", image: "../IMG/nothing.png" },
	{ title: "Enderman Skin Pack", content: "Ce Skin Pack créé par Nobledez contient des Enderman de différentes couleurs.", url: "skin-pack/list/enderman-skin-pack.html", image: "../IMG/skin-pack/enderman-skin-pack.png" },
	//F
	{ title: "Fallen Kingdom", content: "Cette carte est une carte PvP ou différentes équipes s'affrontent [Publié par Frutox].", url: "map/list/fallen-kingdom.html", image: "../IMG/map/fallenkingdom.png" },
	{ title: "FallGuys Skin Pack", content: "Ce Skin Pack crée par Orika Hero comprends toutes les couleurs du personage de FallGuys. [Publié par Azox]", url: "skin-pack/list/fallguys-skin-pack.html", image: "../IMG/skin-pack/fallguys-skin-pack.png" },
	{ title: "FarmLand V3", content: "Cette carte crée par Jerem2206 et avec la participation de MisterV4 est un carte de type farm.", url: "map/list/farmland-v3.html", image: "../IMG/map/farmland-v3.png" },
	{ title: "FarmLand V4", content: "Cette carte crée par Jerem2206 avec MisterV4 est un carte de type farm.", url: "map/list/farmland-v4.html", image: "../IMG/map/farmland-v4.png" },
	{ title: "Five Nights at Freddys - Nobledez", content: "Ce Skin Pack créé par Nobledez rassemble différents skins sur le thème de Five Night At Freddy's.", url: "skin-pack/list/five-nights-at-freddys-nobledez.html", image: "../IMG/skin-pack/five-nights-at-freddys-nobledez.png" },
	{ title: "FNAF Skin Pack", content: "Ce Skin Pack créé par TheSecretPadlock rassemble différents skins custom sur le thème de Five Night At Freddy's.", url: "skin-pack/list/fnaf-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "FontForge", content: "Ce logiciel permet de modifier et de creer des polices d'écritures.", url: "logiciel/list/fontforge.html", image: "../IMG/logiciel/fontforge.png" },
	{ title: "Fortnite Modded", content: "Cette carte est une carte faisant référence au jeu Fortnite dans Minecraft [Publié par Sehou Game].", url: "map/list/fortnite-modded.html", image: "../IMG/map/fortnite-modded.png" },
	{ title: "FUI Editor", content: "Ce logiciel permet de changer les textures se trouvant dans les .fui .", url: "logiciel/list/fui-editor.html", image: "../IMG/logiciel/fui-editor.png" },
	{ title: "Furysium Skin Pack V2", content: "Ce Skin Pack comprends les skins des membres de la Furysium V2.", url: "skin-pack/list/furysium-skin-pack-v2.html", image: "../IMG/skin-pack/furysium-skin-pack-v2.png" },
	//G 
	{ title: "GameAllStar", content: "Ce Skin Pack créé par Nobledez contient différents skins originaux dans l'univers des jeux vidéo.", url: "skin-pack/list/gameallstar.html", image: "../IMG/skin-pack/game-all-star-skin-pack.png" },
	{ title: "Gazgoh Custom Models", content: " Ce Skin Pack crée par Gazgoh comprends différents skins originaux.", url: "skin-pack/list/gazgoh-custom-models.html", image: "../IMG/skin-pack/gazgoh-custom-model.png" },
	{ title: "GTAV In Minecraft", content: "Cette carte est une carte faisant référence au jeu GTAV dans Minecraft [Convertie par Jerem2206].", url: "map/list/gtav-in-minecraft.html", image: "../IMG/map/gtav-in-minecraft.png" },
	//H
	{ title: "Hacker Skin Pack", content: "Ce Skin Pack créé par Nobledez contient différents skins dans le thème hacker.", url: "skin-pack/list/hacker-skin-pack.html", image: "../IMG/skin-pack/hacker-skin-pack.png" },
	{ title: "Hafen", content: "Ce texture pack crée par nongko18 et converti par jerem2206 est un texture pack avec des couleurs très coloré et simpliste", url: "texture-pack/list/hafen.html", image: "../IMG/texture-pack/hafen.png" },
	{ title: "HD Portait Skin Pack", content: "Ce Skin Pack différents skin sous forme de portaits.", url: "skin-pack/list/hd-portrait-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "HTML Color Modifier", content: "Ce logiciel permet de modifier les .col (les couleurs de l'herbe,eau...).", url: "logiciel/list/html-color-modifier.html", image: "../IMG/logiciel/html-color-modifier.png" },
	{ title: "HxD", content: "Ce logiciel permet de modifier des fichiers hexadecimaux ou avec.", url: "logiciel/list/hxd.html", image: "../IMG/logiciel/hxd.png" },
	//I
	{ title: "Island Pack Adventure", content: "Ce pack de cartes contient différentes îles(3) pour faire ses aventures [Convertie par Jerem2206].", url: "map/list/island-pack-adventure.html", image: "../IMG/map/island-pack-adventure.png" },
	//J
	{ title: "Java to LCE Texture Pack Converter", content: "Ce logiciel permet de convertir les blocs et les items des textures packs de la version Java vers la version WiiU", url: "logiciel/list/java-to-lce-texture-pack-converter.html", image: "../IMG/logiciel/java-to-lce-texture-pack-converter.png" },
	{ title: "Jerem Event 2021 Map Pack", content: "Ce pack de cartes crée par Jerem2206 contient les cartes de l'évvènement organisé en 2021(2).", url: "map/list/jerem-event-2021-map-pack.html", image: "../IMG/map/jerem-event-2021-map-pack.png" },
	{ title: "Jerem Texture Pack", content: "Cette carte crée par Jerem2206 contient le nécéssaire pour tester son texture pack et pour PvP.", url: "map/list/jerem-texture-pack.html", image: "../IMG/map/jerem-texture-pack.png" },
	{ title: "Jerem UHC Map Pack", content: "Ce pack de cartes crée par Jerem2206 contient des cartes d'uhc divers custom(2).", url: "map/list/jerem-uhc-map-pack.html", image: "../IMG/map/jerem-uhc-map-pack.png" },
	{ title: "Jerem's Customs Models Skin Pack", content: "Ce Skin Pack comprends différents skins spéciaux crée par Jerem2206", url: "skin-pack/list/jerems-customs-models-skin-pack.html", image: "../IMG/skin-pack/jerems-customs-models-skin-pack.png" },
	{ title: "Jerem2206 Lobby V1", content: "Ce lobby crée par Jerem2206 qui contient un lobby moddé simple", url: "lobby/list/jerem2206-lobby-v1.html", image: "../IMG/lobby/jerem2206-lobby-v1.png" },
	{ title: "Jerem2206 Lobby V2", content: "Ce lobby crée par Jerem2206 qui contient un lobby moddé simple", url: "lobby/list/jerem2206-lobby-v2.html", image: "../IMG/lobby/jerem2206-lobby-v2.png" },
	{ title: "JSON To Box Converter", content: "Ce logiciel permet de convertir les skins de Blockbench vers PCK Studio", url: "logiciel/list/json-to-box-converter.html", image: "../IMG/logiciel/json-to-box-converter.png" },
	{ title: "Jurassic World Skin Pack", content: "Ce Skin Pack crée par Nobledez comprends différents skin sous forme d'images de dinosaures lié à Jurassic World.", url: "skin-pack/list/jurassic-world-skin-pack.html", image: "../IMG/skin-pack/jurassic-world-skin-pack.png" },
	//K 
	//L 
	{ title: "Lobby FY", content: "Ce lobby est le lobby de la Furysium", url: "lobby/list/lobby-fy.html", image: "../IMG/lobby/lobby-fy.png" },
	//M
	{ title: "Map aventure", content: "Cette carte faites par frifri vous propose une carte aventure.", url: "map/list/map-aventure.html", image: "../IMG/map/map-aventure.png" },
	{ title: "Map Jump", content: "Cette carte faites par frifri converti sur WiiU par Jerem2206 vous propose une carte de parcour.", url: "map/list/map-jump.html", image: "../IMG/map/map-jump.png" },
	{ title: "Map Pack 5", content: "Cette carte contient différentes maps pour le mode batailles", url: "minigame-map/list/map-pack-5.html", image: "../IMG/minigame-map/map-pack-5.png" },
	{ title: "Mass Effect: Extented", content: "Ce Skin Pack contient des skins suplémentaires que ceux du pack mashup.", url: "skin-pack/list/mass-effect-extented.html", image: "../IMG/skin-pack/mass-effect-extented.png" },
	{ title: "Mathox Red Pack", content: "Ce texture pack crée par Mathox et converti par jerem2206 est un texture pack pvp uhc rouge", url: "texture-pack/list/mathox-red-pack.html", image: "../IMG/texture-pack/mathox-red-pack.png" },
	{ title: "MC360 Skin Packs 1-6 Port", content: "Ce Skin Pack crée par Nobledez contient les skin packs de 1 à 6 de la version Xbox360.", url: "skin-pack/list/mc360-skin-packs-1-6-port.html", image: "../IMG/skin-pack/mc360-skin-packs-1-6-port.png" },
	{ title: "MCC Tool Chest", content: "Ce logiciel permet de modifier des cartes (map) comme universal minecraft editor et de les convertir. Également d'extraire les .arc .", url: "logiciel/list/mcc-tool-chest.html", image: "../IMG/logiciel/mcc-tool-chest.png" },
	{ title: "McEdit 2", content: "Ce logiciel permet de modifier des cartes (map) de façons approfondies.", url: "logiciel/list/mcedit-2.html", image: "../IMG/logiciel/mcedit-2.png" },
	{ title: "MCSE Editor", content: "Ce logiciel permet de modifier les fichiers de son mcse.", url: "logiciel/list/mcse-editor.html", image: "../IMG/logiciel/mcse-editor.png" },
	{ title: "MC WiiU ID Skin Checker", content: "Ce logiciel permet de vérifier l'id de son skin de son skin pack si il existe deja.", url: "logiciel/list/mc-wiiu-id-skin-checker.html", image: "../IMG/logiciel/mc-wiiu-id-skin-checker.png" },
	{ title: "Mega Mapa De Splatoon", content: "Cette carte rassemble des cartes de Splatoon.", url: "map/list/mega-mapa-de-splatoon.html", image: "../IMG/map/mega-mapa-de-splatoon.png" },
	{ title: "Mega Pack", content: "Ce Skin Pack crée par Nobledez comprends différents skins originaux qui utilise des skins connus.", url: "skin-pack/list/mega-pack.html", image: "../IMG/skin-pack/mega-pack.png" },
	{ title: "Minecraft Converter", content: "Ce logiciel permet de convertir cartes(map) PS3 XBOX 360 et PC entre elles.", url: "logiciel/list/minecraft-converter.html", image: "../IMG/logiciel/minecraft-converter.png" },
	{ title: "Minecraft Default x16", content: "Ce texture pack est juste le pack de base.", url: "texture-pack/list/minecraft-default-x16.html", image: "../IMG/nothing.png" },
	{ title: "Minecraft Dungeons", content: "Ce Skin Pack comprends les personnages de joueurs de minecraft dungeons", url: "skin-pack/list/minecraft-dungeons.html", image: "../IMG/skin-pack/minecraft-dungeons.png" },
	{ title: "Minecraft Version EShop", content: "Ce fichiers est Minecraft Version EShop prêt a être installé sur WiiU (version complète pour le modding).", url: "logiciel/list/minecraft-version-eshop.html", image: "../IMG/nothing.png" },
	{ title: "Mizuno's 16 Craft", content: "Ce texture pack crée par Mizuno et converti par jerem2206 est un texture pack proche des pack mythologie", url: "texture-pack/list/mizunos.html", image: "../IMG/texture-pack/mizunos.png" },
	{ title: "MN Skin Pack", content: "Ce Skin Pack comprend les skins de la MN.", url: "skin-pack/list/mn-skin-pack.html", image: "../IMG/skin-pack/mn-skin-pack.png" },
	{ title: "Morea", content: "Ce texture pack crée par juanteh et converti par jerem2206 est un texture pack pvp basic", url: "texture-pack/list/morea.html", image: "../IMG/texture-pack/morea.png" },
	{ title: "Mystic Maze", content: "Cette carte originaire de la version Java par Reddoz et adapté pour WiiU par Jerem2206", url: "map/list/mystic-maze.html", image: "../IMG/map/mystic-maze.png" },
	//N
	{ title: "NBT Tag Code Maker", content: "Ce logiciel permet de modifier l'inventaire créatif de Minecraft.", url: "logiciel/list/nbt-tag-code-maker.html", image: "../IMG/logiciel/nbt-tag-code-maker.png" },
	{ title: "Nebula", content: "Ce texture pack crée par looshy et converti par jerem2206 est un texture pack pvp basic", url: "texture-pack/list/nebula.html", image: "../IMG/texture-pack/nebula.png" },
	{ title: "NightRider Purple", content: "Ce texture pack crée par itsderp est un texture pack pvp violet basic", url: "texture-pack/list/nightrider-purple.html", image: "../IMG/texture-pack/nightrider-purple.png" },
	{ title: "Noob Skin Pack", content: "Ce Skin Pack crée par Spectroz comprends différents skins dans le thème noob.", url: "skin-pack/list/noob-skin-pack.html", image: "../IMG/skin-pack/noob-skin-pack.png" },
	//O 
	{ title: "Offensive Hearts V2", content: "Ce texture pack crée par Juanteh et converti par jerem2206 est un texture pack pvp rouge basic", url: "texture-pack/list/offensive-hearts-v2.html", image: "../IMG/texture-pack/offensive-hearts-v2.png" },
	{ title: "Old Lobby", content: "Juste l'ancien lobby des mini jeux de minecraft console.", url: "lobby/list/old-lobby.html", image: "../IMG/lobby/old-lobby.png" },
	//P
	{ title: "Pack De Mini Jeux Hack", content: "Ce lobby crée par Nt Games et sayZEN qui contient un lobby moddé ainsi que des paramètres pour les différents mini jeux.", url: "lobby/list/pack-de-mini-jeux-hack.html", image: "../IMG/lobby/pack-de-mini-jeux-hack.png" },
	{ title: "Pack Disney", content: "Ce Skin Pack crée par Spectroz comprends différents skins lié a l'univers de Disney.", url: "skin-pack/list/pack-disney.html", image: "../IMG/skin-pack/pack-disney.png" },
	{ title: "Pack map Bedwars", content: "Ce pack de cartes contient des cartes du mode de jeu bedwars(35)", url: "map/list/pack-map-bedwars.html", image: "../IMG/map/pack-map-bedwars.png" },
	{ title: "Pack map Hide N Seek", content: "Ce pack de cartes converti par Jerem2206 contient des cartes du mode de jeu cache cache(3).", url: "map/list/pack-map-hide-n-seek.html", image: "../IMG/map/pack-map-hide-n-seek.png" },
	{ title: "Pack map skywars", content: "Ce pack de cartes comporte 4 cartes convertit par Jerem2206 et une faites par Pengchan.", url: "map/list/pack-map-skywars.html", image: "../IMG/map/pack-map-skywars.png" },
	{ title: "Paint.net", content: "Ce logiciel permet de modifier et de créer des images.", url: "logiciel/list/paint.net.html", image: "../IMG/logiciel/paint.net.png" },
	{ title: "Paint Red", content: "Ce texture pack crée par AlwaysTwoClutch et converti par a4L est un texture pack pvp rouge", url: "texture-pack/list/paint-red.html", image: "../IMG/texture-pack/paint-red.png" },
	{ title: "PCK Studio", content: "Ce logiciel de faire des packs de skin et de crée des skins spéciaux tout en pouvant exporter les packs de skin vers sa console.", url: "logiciel/list/pck-studio.html", image: "../IMG/logiciel/pck-studio.png" },
	{ title: "Pixelorama", content: "Ce logiciel permet de créer des textures animées.", url: "logiciel/list/pixelorama.html", image: "../IMG/logiciel/pixelorama.png" },
	{ title: "Portrait Skin Pack", content: "Ce Skin Pack crée par Nobledez comprends différents skins dans le thème portrait.", url: "skin-pack/list/portrait-skin-pack.html", image: "../IMG/skin-pack/portrait-skin-pack.png" },
	{ title: "PowerFTP", content: "Ce logiciel permet de transférer des fichiers vers sa WiiU mais pour téléphone.", url: "logiciel/list/powerftp.html", image: "../IMG/logiciel/powerftp.png" },
	{ title: "PvP Skin Pack", content: "Ce Skin Pack crée par Jerem2206 comprends différents skins simple.", url: "skin-pack/list/pvp-skin-pack.html", image: "../IMG/skin-pack/pvp-skin-pack.png" },
	//Q 
	{ title: "Qu@ skin pack", content: "Ce Skin Pack crée par Niveau de Mario contient beaucoup de skin original", url: "skin-pack/list/Qu@-skin-pack.html", image: "../IMG/skin-pack/Qu@-skin-pack.png" },
	//R 
	{ title: "ReQuestPCK", content: "Ce Skin Pack crée par Nobledez comprends différents skins demandé par sa communautée.", url: "skin-pack/list/requestpck-nobledez.html", image: "../IMG/skin-pack/requestpck-nobledez.png" },
	{ title: "Rick & Morty", content: " Ce Skin Pack crée par Nobledez comprends différents skins de l'univers de Rick & Morty.", url: "skin-pack/list/rick-&-morty.html", image: "../IMG/skin-pack/rick-&-morty.png" },
	{ title: "Rush Furysium V2", content: "Cette carte faites par LG_PvP est une carte rush classique faites pour les membres de la furysium.", url: "map/list/rush-furysium-v2.html", image: "../IMG/map/rush-furysium-v2.png" },
	//S
	{ title: "SD Card", content: "L'ensemble des fichiers de Carte SD de Jerem2206 pour pouvoir modder.", url: "logiciel/list/carte-sd.html", image: "../IMG/nothing.png" },
	{ title: "Skin Pack of The LiviAxel", content: "Ce Skin Pack crée par TheSecretPadlock contient plus d'une centaine de skin original", url: "skin-pack/list/skin-pack-of-the-liviaxel.html", image: "../IMG/skin-pack/skin-pack-of-liviaxel.png" },
	{ title: "Sky Defender 8", content: "Cette carte faites par la team Andorah est une carte de Sky Defender.", url: "map/list/sky-defender-8.html", image: "../IMG/map/sky-defender-8.png" },
	{ title: "Skyblock", content: "Cette carte faites par DanRobzProbz est une carte skyblock complète.", url: "map/list/skyblock.html", image: "../IMG/map/skyblock.png" },
	{ title: "SMG4 Skin Pack", content: "Ce Skin Pack crée par Micheechri2 et Manu comprends différents skins de l'univers de SMG4.", url: "skin-pack/list/smg4-skin-pack.html", image: "../IMG/skin-pack/smg4-skin-pack.png" },
	{ title: "Speed UHC", content: "Cette carte est une carte UHC de la version rapide de l'UHC classique [Publié par Frutox].", url: "map/list/speed-uhc.html", image: "../IMG/map/speed-uhc.png" },
	{ title: "Spiral Parkour", content: "Cette carte parcour originaire de la version Java est adapté pour WiiU par Jerem2206", url: "map/list/spiral-parkour.html", image: "../IMG/map/spiral-parkour.png" },
	{ title: "SpriteCraft", content: "Ce logiciel permet de transformer des images en schematique.", url: "logiciel/list/spritecraft.html", image: "../IMG/nothing.png" },
	{ title: "SRG64 Mega SkinPack", content: "Ce Skin Pack crée par SRG64 comprends plus de 300 skins dans l'univers de mario principalement.", url: "skin-pack/list/srg64-mega-skinpack.html", image: "../IMG/skin-pack/srg64-mega-skinpack.png" },
	{ title: "Steven Universe Updated", content: "Ce Skin Pack crée par Nobledez comprends différents lié a steven universe.", url: "skin-pack/list/steven-universe-updated.html", image: "../IMG/skin-pack/steven-universe-updated.png" },
	{ title: "SubZero", content: "Ce texture pack crée par dreamCritting et converti par jerem2206 est un texture pack où tout est glacé", url: "texture-pack/list/subzero.html", image: "../IMG/texture-pack/subzero.png" },
	{ title: "Super Smash Bros Pack V2", content: "Ce Skin Pack comprends différents skins lié au thème super smash bros.", url: "skin-pack/list/super-smash-bros-pack-v2.html", image: "../IMG/nothing.png" },
	//T 
	{ title: "Tank Skin Pack", content: "Ce Skin Pack créé par Jerem2206 en utilisant le modèle du tank du pack brendans models skin pack et comprend différents skins de tank dans différentes couleurs.", url: "skin-pack/list/tank-skin-pack.html", image: "../IMG/skin-pack/tank-skin-pack.png" },
	{ title: "Terraria Skins V2", content: "Ce Skin Pack comprends différents skins de l'univers de Terraria.", url: "skin-pack/list/terraria-skins-v2.html", image: "../IMG/skin-pack/terraria-skins-v2.png" },
	{ title: "Textures 1.14", content: "Ce texture pack est un texture pack contenant les nouvelles textures de la 1.14.", url: "texture-pack/list/textures-1.14.html", image: "../IMG/texture-pack/textures-1.14.png" },
	{ title: "The Final Skin Pack", content: "Ce Skin Pack créé par Jerem2206 comprends différents skins.", url: "skin-pack/list/the-final-skin-pack.html", image: "../IMG/skin-pack/the-final-skin-pack.png" },
	{ title: "The Joy Of Creation Skin Pack", content: "Ce Skin Pack comprends différents skins lié au thème the joy of creation.", url: "skin-pack/list/the-joy-of-creation-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "The World Skin Pack", content: "Ce Skin Pack crée par TheSecretPadlock comprends différents skins spéciaux.", url: "skin-pack/list/the-world-skin-pack.html", image: "../IMG/skin-pack/the-world-skin-pack.png" },
	{ title: "TNT+ Modded", content: "Cette carte faites par NT Games vous propose différentes tnt modées.", url: "map/list/tnt+-modded.html", image: "../IMG/map/tnt+-modded.png" },
	{ title: "Tonic Pack", content: "Ce texture pack crée par JabaPacks et converti par jerem2206 est un texture pack pvp basic", url: "texture-pack/list/tonic-pack.html", image: "../IMG/texture-pack/tonic-pack.png" },
	{ title: "Trailer Texture Pack", content: "Ce texture pack crée par RobotPants et converti par jerem2206 est un texture reprennant les textures des trailers de minecraft des animations faites par Element Animation", url: "texture-pack/list/trailer-texture-pack.html", image: "../IMG/texture-pack/trailer-texture-pack.png" },
	{ title: "Troll Skin Pack", content: "Ce Skin Pack créé par Jerem2206 qui comprends différents skins simple dans le thème troll.", url: "skin-pack/list/troll-skin-pack.html", image: "../IMG/skin-pack/troll-skin-pack.png" },
	{ title: "Tropical Fade", content: "Ce texture pack crée par Colbb et converti par jerem2206 est un texture pack pvp de couleur vert/jaune pour bedwars/skywars.", url: "texture-pack/list/tropical-fade.html", image: "../IMG/texture-pack/tropical-fade.png" },
	//U
	{ title: "Undertale Skin Pack V1", content: "Ce Skin Pack créé par boxed_by_zem0ur est un skin pack d'Undertale avec des skins du jeu [publié par alpine42330].", url: "skin-pack/list/undertale-skin-pack.html", image: "../IMG/skin-pack/undertale-skin-pack.jpg" },
	{ title: "Universal Minecraft Editor", content: "Ce logiciel permet de modifier des cartes (map) ainsi que les .nbt .", url: "logiciel/list/universal-minecraft-editor.html", image: "../IMG/logiciel/universal-minecraft-editor.png" },
	{ title: "Universal Minecraft Tool", content: "Ce logiciel permet de modifier/convertir des cartes (map) ainsi que les .nbt. Mias pour accéder a toutes les fonctionalitées il faut payer.", url: "logiciel/list/universal-minecraft-tool.html", image: "../IMG/logiciel/universal-minecraft-tool.png" },
	{ title: "Ultra", content: "Ce texture pack crée par iSparkton pour xNestorio et converti par jerem2206 est un texture pack pvp de couleur or. ", url: "texture-pack/list/ultra.html", image: "../IMG/texture-pack/ultra.png" },
	{ title: "URuRu Lobby", content: "Ce lobby crée par URuRu qui contient un lobby moddé simple", url: "lobby/list/ururu-lobby.html", image: "../IMG/lobby/ururu-lobby.png" },
	{ title: "USB Helper", content: "Ce logiciel permet de télécharger des jeux wiiu pour soi et de les émuler ou les mettre sur sa console.", url: "logiciel/list/usb-helper.html", image: "../IMG/logiciel/usb-helper.png" },
	//V 
	{ title: "V48 Tutorial", content: "Simplement le tutoriel de la mise a jour v48 (d'après usb helper)", url: "tutoriel/list/v48-tutorial.html", image: "../IMG/tutoriel/v48-tutorial.png" },
	{ title: "V688 Tutorial", content: "Simplement le tutoriel de la mise a jour v688 (d'après usb helper)", url: "tutoriel/list/v688-tutorial.html", image: "../IMG/tutoriel/v688-tutoriel.png" },
	//W
	{ title: "WiiSportsRESORT", content: "Cette carte est une carte reprennant la carte de Wii Sport (WiiU).", url: "map/list/wiisportsresort.html", image: "../IMG/map/wiisportsresort.png" },
	{ title: "WiiU Map Manager", content: "Ce logiciel permet de transferer et de télécharger des cartes(map) de sa console vers son ordinateur et inversement.", url: "logiciel/list/wiiu-map-manager.html", image: "../IMG/logiciel/wiiu-map-manager.png" },
	{ title: "WiiU Title Boot Editor", content: "Ce logiciel permet de transferer et de télécharger des cartes(map) de sa console vers son ordinateur et inversement.", url: "logiciel/list/wiiu-title-boot-editor.html", image: "../IMG/logiciel/wiiu-title-boot-editor.png" },
	{ title: "WinRAR", content: "Ce logiciel permet d'extraire et de compresser des fichiers (.rar).", url: "logiciel/list/winrar.html", image: "../IMG/logiciel/winrar.png" },
	{ title: "WinSCP", content: "Ce logiciel permet de se connecter et de modifier des fichiers de sa console.", url: "logiciel/list/winscp.html", image: "../IMG/logiciel/winscp.png" },
	{ title: "World Machine", content: "Ce logiciel permet de faire des maps customisées de manière avancée.", url: "logiciel/list/world-machine.html", image: "../IMG/logiciel/world-machine.png" },
	{ title: "World Painter", content: "Ce logiciel permet de faire des maps customisées de manière simple.", url: "logiciel/list/world-painter.html", image: "../IMG/logiciel/world-painter.png" },
	//X 
	//Y 
	//Z 
	{ title: "Zombie Tower Defence", content: "Cette carte est une carte Tower Defence avec des zombie [Publié par Frutox].", url: "map/list/zombie-tower-defence.html", image: "../IMG/map/zombie-tower-defence.png" },
	
];

function search() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchResults = document.getElementById('searchResults');

    // Réinitialiser les résultats de recherche précédents
    searchResults.innerHTML = '';

        // Vérifier si le champ de recherche est vide
    if (searchTerm === '') {
        const li = document.createElement('li');
        li.textContent = "Veuillez saisir un terme de recherche.";
        li.style.padding = "1em";
        li.style.border = "1px solid #000";
        li.style.margin = "1em auto";
        li.style.backgroundColor = "#545454";
        li.style.color = "white";
        searchResults.appendChild(li);
        return; // Sortir de la fonction si le champ de recherche est vide
    }

    // Recherche dans la liste des pages
    const results = pages.filter(page => {
		return (page.title && page.title.toLowerCase().includes(searchTerm)) || (page.content && page.content.toLowerCase().includes(searchTerm));
	});

    // Affichage des résultats
    if (results.length > 0) {
        results.forEach(result => {
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = result.url;
            link.style.color = "white";
            link.style.textDecoration = "none";

            // Créer l'élément d'image avec l'effet d'arrondi
            const img = new Image();
            img.src = result.image;
            img.alt = result.title;
            img.style.borderRadius = "10%";
            img.style.backgroundColor = "white";
            img.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            img.style.verticalAlign = "middle";
            img.style.marginRight = "10px";
            img.style.width = "50px";
            img.style.height = "50px";
            img.style.border = "1px solid black";

            const content = document.createElement('span');
            content.innerHTML = `<b>${result.title}</b> : ${result.content}`;
    
            link.appendChild(img);
            link.appendChild(content);
    
            li.appendChild(link);
            li.style.padding = "1em";
            li.style.border = "1px solid #000";
            li.style.margin = "1em auto";
            li.style.backgroundColor = "#545454";
            li.style.color = "white";

            searchResults.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = "Aucun résultat trouvé.";
        li.style.padding = "1em";
        li.style.border = "1px solid #000";
        li.style.margin = "1em auto";
        li.style.backgroundColor = "#545454";
        li.style.color = "white";
        searchResults.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');

    searchButton.addEventListener('click', search);
    searchInput.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            search();
        }
    });
});
