
const pages = [
	//123
	{ title: "24/7 SMP", content: "Cette carte crée pour les membres du serveur discord Minecraft Legacy Edition est une survie qui est resté ouvert pendant plusieurs mois", url: "map/list/24-7-smp.html", image: "../IMG/map/24-7-smp.png" },
	{ title: "45625w-2019", content: "This Skin Pack includes different skins.", url: "skin-pack/list/45625w-2019.html", image: "../IMG/skin-pack/45625w-2019.png" },
	//A
	{ title: "All Dream", content: "This Skin Pack created by Azox includes all the colors of the skin dream. [Posted by Azox]", url: "skin-pack/list/all-dream.html", image: "../IMG/skin-pack/all-dream.png" },
	{ title: "Amethyst Pack", content: "This texture pack created by Colbb and converted by jerem2206 is a purple pvp texture pack", url: "texture-pack/list/amethyst-pack.html", image: "../IMG/texture-pack/amethyst-pack.png" },
	{ title: "Among us Skin Pack", content: "This Skin Pack created by Orika Hero includes all the colors of the Among us crewmate. [Posted by Azox]", url: "skin-pack/list/among-us-skin-pack.html", image: "../IMG/skin-pack/among-us-skin-pack.png" },
	{ title: "Apps Pack", content: "This Skin Pack created by Nobledez includes application logo skin.", url: "texture-pack/list/apps-pack.html", image: "../IMG/texture-pack/apps-pack.png" },
	{ title: "Aqua", content: "This texture pack created by TeaPlays and converted by a4l is a classic pvp texture pack", url: "texture-pack/list/aqua.html", image: "../IMG/texture-pack/aqua.png" },
	{ title: "Arcane Practice", content: "This map created by Pengchan and modified by Frutox is a PvP map with several maps and different kits [Published by Frutox].", url: "map/list/arcane-practice.html", image: "../IMG/map/arcane-practice.png" },
	//B
	{ title: "Basic Lobby", content: "Just the current minecraft console mini games lobby.", url: "lobby/list/basic-lobby.html", image: "../IMG/lobby/basic-lobby.png" },
    { title: "BasicArena MG02 FY V2", content: "This map created by Jerem2206 for Furysium members which contains a slight modification of the main tumble mode map", url: "minigame-map/list/basicarena-mg02-fy-v2.html", image: "../IMG/minigame-map/basicarena-mg02-fy-v2.png" },
	{ title: "Binkman", content: "This software allows you to convert files in 2 directions: .wav files in .binka which is useful for modifying minecraft WiiU music.", url: "logiciel/list/binkman.html", image: "../IMG/logiciel/binkman.png" },
	{ title: "Block Skin Pack", content: "This Skin Pack created by Nobledez brings together a few hundred blocks of minecraft and some mods.", url: "skin-pack/list/block-skin-pack.html", image: "../IMG/skin-pack/block-skin-pack.png" },
    { title: "BlockBench", content: "This software is a tool that makes it easier to create Custom Skins.", url: "logiciel/list/blockbench.html", image: "../IMG/logiciel/blockbench.png" },
	{ title: "Blue & Red Fade", content: "This texture pack created by Xenox and converted by jerem2206 is a pvp texture pack with a gradient color between red and blue.", url: "texture-pack/list/blue-&-red-fade.html", image: "../IMG/texture-pack/blue-&-red-fade.png" },
	{ title: "BO2 Boat", content: "This map is a map of the game Call of Duty Black Ops 2 in Minecraft.", url: "map/list/bo2-boat.html", image: "../IMG/map/bo2-boat.png" },
	{ title: "BrainFFA V2 FY", content: "This map made by Jerem2206 is a classic BrainFFA map made for furysium members.", url: "map/list/brainffa-fy-v2.html", image: "../IMG/map/brainffa-v2-fy.png" },
	{ title: "Brendans Models Skin Pack V5", content: "This Skin Pack created by Brendans brings together a few hundred original skins.", url: "skin-pack/list/brendans-models-skin-pack-v5.html", image: "../IMG/skin-pack/brendans-models-skin-pack-v5.png" },
	{ title: "Brillant", content: "This texture pack created by Brilliant-PVP and converted by jerem2206 is a very colorful texture pack a bit in the style of the plastic pack.", url: "texture-pack/list/rillant.html", image: "../IMG/texture-pack/brillant.png" },
	//C
	{ title: "Capture the flag", content: "This map is a PvP map that consists of capturing the flag [Published by Frutox].", url: "map/list/capturetheflag.html", image: "../IMG/map/capturetheflag.png" },
    { title: "Cemu", content: "This software allows you to play WiiU games on PC.", url: "logiciel/list/cemu.html", image: "../IMG/logiciel/cemu.png" },
	{ title: "Cereal Box Pack", content: "This Skin Pack created by Nobledez is a skin pack with cereal boxes.", url: "skin-pack/list/cereal-box-pack.html", image: "../IMG/skin-pack/cereal-box-pack.png" },
	{ title: "Commu Skin Pack", content: "This Skin Pack created by Jerem2206 brings together different simple skins.", url: "skin-pack/list/commu-skin-pack.html", image: "../IMG/skin-pack/commu-skin-pack.png" },
	{ title: "Core War", content: "This map created by Thepyrocrafteur & Uranium_49 on Java redone by Jerem2206 contains a team against team map to destroy the opposing heart.", url: "map/list/core-war.html", image: "../IMG/map/core-war.png" },
	{ title: "Creeper Skin Pack", content: "This Skin Pack contains creepers of different colors.", url: "skin-pack/list/creeper-skin-pack.html", image: "../IMG/nothing.png" },
	//D
	{ title: "Dandelion X", content: "This texture pack created by Steelfeathers & Xerotrinity then converted by jerem2206 is a texture pack resembling the medieval pack.", url: "texture-pack/list/dandelion-x.html", image: "../IMG/texture-pack/dandelion-x.png" },
    { title: "Discord To Minecraft WiiU", content: "This software allows you to view Discord messages on Minecraft WiiU.", url: "logiciel/list/discord-to-minecraft-wiiu.html", image: "../IMG/nothing.png" },
	{ title: "Dragon Fruit", content: "This texture pack created by Colbb and converted by jerem2206 is a pink/red colored pvp texture pack.", url: "texture-pack/list/dragon-fruit.html", image: "../IMG/texture-pack/dragon-fruit.png" },
	{ title: "Dragon UnPACKer", content: "This software allows you to open files that are impossible to open easily (like .pck mashups).", url: "logiciel/list/dragon-unpacker.html", image: "../IMG/logiciel/dragon-unpacker.png" },
	//E
	{ title: "Ester", content: "This Skin Pack contains skins from the Easter period.", url: "skin-pack/list/easter.html", image: "../IMG/skin-pack/easter.png" },
	{ title: "EggWars", content: "This map by pengchan is a map of eggwars game mode [Published by Frutox].", url: "map/list/eggwars.html", image: "../IMG/map/eggwars.png" },
	{ title: "ELR Elementary PvP", content: "This texture pack converted by el-robinator is simplistic and may appeal to PvP players. [Posted by el-robinator]", url: "texture-pack/list/elr-elementary-pvp.html", image: "../IMG/texture-pack/elr-elementary-pvp.png" },
	{ title: "Empty World", content: "This map is just an empty map.", url: "map/list/empty-world.html", image: "../IMG/nothing.png" },
	{ title: "Enderman Skin Pack", content: "This Skin Pack created by Nobledez contains Enderman of different colors.", url: "skin-pack/list/enderman-skin-pack.html", image: "../IMG/skin-pack/enderman-skin-pack.png" },
	//F
	{ title: "Fallen Kingdom", content: "This map is a PvP map where different teams compete [Published by Frutox].", url: "map/list/fallen-kingdom.html", image: "../IMG/map/fallenkingdom.png" },
	{ title: "FallGuys Skin Pack", content: "This Skin Pack created by Orika Hero includes all the colors of the FallGuys character. [Posted by Azox]", url: "skin-pack/list/fallguys-skin-pack.html", image: "../IMG/skin-pack/fallguys-skin-pack.png" },
	{ title: "FarmLand V3", content: "This map created by Jerem2206 and with the participation of MisterV4 is a farm type map.", url: "map/list/farmland-v3.html", image: "../IMG/map/farmland-v3.png" },
	{ title: "FarmLand V4", content: "This map created by Jerem2206 with MisterV4 is a farming type map.", url: "map/list/farmland-v4.html", image: "../IMG/map/farmland-v4.png" },
	{ title: "FNAF Skin Pack", content: "This Skin Pack created by TheSecretPadlock brings together different personalized skins on the theme of Five Night At Freddy's.", url: "skin-pack/list/fnaf-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "FontForge", content: "This software allows you to modify and create fonts.", url: "logiciel/list/fontforge.html", image: "../IMG/logiciel/fontforge.png" },
	{ title: "Fortnite Modded", content: "This map is a map referring to the game Fortnite in Minecraft [Published by Sehou Game].", url: "map/list/fortnite-modded.html", image: "../IMG/map/fortnite-modded.png" },
	{ title: "FUI Editor", content: "This software allows you to change the textures found in the .fui files.", url: "logiciel/list/fui-editor.html", image: "../IMG/logiciel/fui-editor.png" },
	//G 
	{ title: "GameAllStar", content: "This Skin Pack created by Nobledez contains different original skins in the universe of video games.", url: "skin-pack/list/gameallstar.html", image: "../IMG/skin-pack/game-all-star-skin-pack.png" },
	{ title: "Gazgoh Custom Models", content: "This Skin Pack created by Gazgoh includes different original skins.", url: "skin-pack/list/gazgoh-custom-models.html", image: "../IMG/skin-pack/gazgoh-custom-model.png" },
	{ title: "GTAV In Minecraft", content: "This map is a map referencing the game GTAV in Minecraft [Converted by Jerem2206].", url: "map/list/gtav-in-minecraft.html", image: "../IMG/map/gtav-in-minecraft.png" },
	//H
	{ title: "Hacker Skin Pack", content: "This Skin Pack created by Nobledez contains different skins in hacker theme.", url: "skin-pack/list/hacker-skin-pack.html", image: "../IMG/skin-pack/hacker-skin-pack.png" },
	{ title: "Hafen", content: "This texture pack created by nongko18 and converted by jerem2206 is a texture pack with very colorful and simplistic colors", url: "texture-pack/list/hafen.html", image: "../IMG/texture-pack/hafen.png" },
	{ title: "HD Portait Skin Pack", content: "This Skin Pack different skin in the form of portraits.", url: "skin-pack/list/hd-portrait-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "HTML Color Modifier", content: "This software makes it possible to modify the .col (the colors of the grass, water...).", url: "logiciel/list/html-color-modifier.html", image: "../IMG/logiciel/html-color-modifier.png" },
	{ title: "HxD", content: "This software allows to modify hexadecimal files or with.", url: "logiciel/list/hxd.html", image: "../IMG/logiciel/hxd.png" },
	//I
	{ title: "Island Pack Adventure", content: "This pack of maps contains different islands (3) to make his adventures [Converted by Jerem2206].", url: "map/list/island-pack-adventure.html", image: "../IMG/map/island-pack-adventure.png" },
	//J
	{ title: "Java to WiiU Texture Pack Converter", content: "This software converts blocks(x16/x32) and items(x16) from texture packs from the Java version to the WiiU version", url: "logiciel/list/java-to-wiiu-texture-pack-converter.html", image: "../IMG/logiciel/java-to-wiiu-texture-pack-converter.png" },
	{ title: "Jerem Event 2021 Map Pack", content: "This map pack created by Jerem2206 contains the maps of the event organized in 2021(2).", url: "map/list/jerem-event-2021-map-pack.html", image: "../IMG/map/jerem-event-2021-map-pack.png" },
	{ title: "Jerem Texture Pack", content: "This map created by Jerem2206 contains the necessary to test his texture pack and for PvP.", url: "map/list/jerem-texture-pack.html", image: "../IMG/map/jerem-texture-pack.png" },
	{ title: "Jerem UHC Map Pack", content: "This map pack created by Jerem2206 contains various custom(2) uhc maps.", url: "map/list/jerem-uhc-map-pack.html", image: "../IMG/map/jerem-uhc-map-pack.png" },
	{ title: "Jerem's Customs Models Skin Pack", content: "This Skin Pack includes different special skins created by Jerem2206.", url: "skin-pack/list/jerems-customs-models-skin-pack.html", image: "../IMG/skin-pack/jerems-customs-models-skin-pack.png" },
	{ title: "Jerem2206 Lobby V1", content: "This lobby created by Jerem2206 which contains a simple modded lobby", url: "lobby/list/jerem2206-lobby-v1.html", image: "../IMG/lobby/jerem2206-lobby-v1.png" },
	{ title: "Jerem2206 Lobby V2", content: "This lobby created by Jerem2206 which contains a simple modded lobby", url: "lobby/list/jerem2206-lobby-v2.html", image: "../IMG/lobby/jerem2206-lobby-v2.png" },
	{ title: "JSON To Box Converter", content: "This software allows you to convert skins from Blockbench to PCK Studio", url: "logiciel/list/json-to-box-converter.html", image: "../IMG/logiciel/json-to-box-converter.png" },
	{ title: "Jurassic World Skin Pack", content: "This Skin Pack created by Nobledez includes different skins in the form of dinosaur images related to Jurassic World.", url: "skin-pack/list/jurassic-world-skin-pack.html", image: "../IMG/skin-pack/jurassic-world-skin-pack.png" },
	//K 
	//L 
	{ title: "Lobby FY", content: "This lobby is the Furysium lobby", url: "lobby/list/lobby-fy.html", image: "../IMG/lobby/lobby-fy.png" },
	//M
	{ title: "Map aventure", content: "This map made by frifri offers you an adventure map.", url: "map/list/map-aventure.html", image: "../IMG/map/map-aventure.png" },
	{ title: "Map Jump", content: "This map made by frifri converted on WiiU by Jerem2206 offers you a parkour map.", url: "map/list/map-jump.html", image: "../IMG/map/map-jump.png" },
	{ title: "Mass Effect: Extented", content: "This Skin Pack contains additional skins than those in the mashup pack.", url: "skin-pack/list/mass-effect-extented.html", image: "../IMG/skin-pack/mass-effect-extented.png" },
	{ title: "Mathox Red Pack", content: "This texture pack created by Mathox and converted by jerem2206 is a red uhc pvp texture pack", url: "texture-pack/list/mathox-red-pack.html", image: "../IMG/texture-pack/mathox-red-pack.png" },	
	{ title: "MC360 Skin Packs 1-6 Port", content: "This Skin Pack created by Nobledez contains skin packs 1 to 6 of the Xbox360 version.", url: "skin-pack/list/mc360-skin-packs-1-6-port.html", image: "../IMG/skin-pack/mc360-skin-packs-1-6-port.png" },
	{ title: "MCC Tool Chest", content: "This software allows you to modify maps (map) like universal minecraft editor and convert them. Also to extract .arc .", url: "logiciel/list/mcc-tool-chest.html", image: "../IMG/logiciel/mcc-tool-chest.png" },
	{ title: "McEdit 2", content: "This software allows you to modify maps (map) in depth.", url: "logiciel/list/mcedit-2.html", image: "../IMG/logiciel/mcedit-2.png" },
	{ title: "MCSE Editor", content: "This software allows you to modify the files of your mcse.", url: "logiciel/list/mcse-editor.html", image: "../IMG/logiciel/mcse-editor.png" },
	{ title: "MC WiiU ID Skin Checker", content: "This software allows you to check the id of your skin of your skin pack if it already exists.", url: "logiciel/list/mc-wiiu-id-skin-checker.html", image: "../IMG/logiciel/mc-wiiu-id-skin-checker.png" },
	{ title: "Mega Mapa De Splatoon", content: "This map brings together maps from Splatoon.", url: "map/list/mega-mapa-de-splatoon.html", image: "../IMG/map/mega-mapa-de-splatoon.png" },
	{ title: "Mega Pack", content: "This Skin Pack created by Nobledez includes different original skins which uses known skins.", url: "skin-pack/list/mega-pack.html", image: "../IMG/skin-pack/mega-pack.png" },
	{ title: "Minecraft Converter", content: "This software allows you to convert maps (map) PS3 XBOX 360 and PC between them.", url: "logiciel/list/minecraft-converter.html", image: "../IMG/logiciel/minecraft-converter.png" },
	{ title: "Minecraft Default x16", content: "This texture pack is just the basic pack.", url: "texture-pack/list/minecraft-default-x16.html", image: "../IMG/nothing.png" },
	{ title: "Minecraft Dungeons", content: "This Skin Pack includes minecraft dungeons player characters", url: "skin-pack/list/minecraft-dungeons.html", image: "../IMG/skin-pack/minecraft-dungeons.png" },
	{ title: "Minecraft Version EShop", content: "This files is Minecraft EShop Version ready to be installed on WiiU (full version for modding).", url: "logiciel/list/minecraft-version-eshop.html", image: "../IMG/nothing.png" },
	{ title: "Mizuno's 16 Craft", content: "This texture pack created by Mizuno and converted by jerem2206 is a texture pack close to the mythology pack", url: "texture-pack/list/mizunos.html", image: "../IMG/texture-pack/mizunos.png" },
	{ title: "MN Skin Pack", content: "This Skin Pack includes MN skins.", url: "skin-pack/list/mn-skin-pack.html", image: "../IMG/skin-pack/mn-skin-pack.png" },
	{ title: "Morea", content: "This texture pack created by juanteh and converted by jerem2206 is a basic pvp texture pack", url: "texture-pack/list/morea.html", image: "../IMG/texture-pack/morea.png" },
	{ title: "Mystic Maze", content: "This map originated from the Java version by Reddoz and adapted for WiiU by Jerem2206", url: "map/list/mystic-maze.html", image: "../IMG/map/mystic-maze.png" },
	//N
	{ title: "NBT Tag Code Maker", content: "This software allows to modify the creative inventory of Minecraft.", url: "logiciel/list/nbt-tag-code-maker.html", image: "../IMG/logiciel/nbt-tag-code-maker.png" },
	{ title: "Nebula", content: "This texture pack created by looshy and converted by jerem2206 is a basic pvp texture pack", url: "texture-pack/list/nebula.html", image: "../IMG/texture-pack/nebula.png" },
	{ title: "Noob Skin Pack", content: "This Skin Pack created by Spectroz includes different skins in the noob theme.", url: "skin-pack/list/noob-skin-pack.html", image: "../IMG/skin-pack/noob-skin-pack.png" },
	//O 
	{ title: "Offensive Hearts V2", content: "This texture pack created by Juanteh and converted by jerem2206 is a basic red pvp texture pack", url: "texture-pack/list/offensive-hearts-v2.html", image: "../IMG/texture-pack/offensive-hearts-v2.png" },
	{ title: "Old Lobby", content: "Just the old minecraft console mini games lobby.", url: "lobby/list/old-lobby.html", image: "../IMG/lobby/old-lobby.png" },
	//P
	{ title: "Pack De Mini Jeux Hack", content: "This lobby created by Nt Games and sayZEN which contains a modded lobby as well as settings for the different mini games.", url: "lobby/list/pack-de-mini-jeux-hack.html", image: "../IMG/lobby/pack-de-mini-jeux-hack.png" },
	{ title: "Pack map Bedwars", content: "This map pack contains maps from the bedwars game mode(35).", url: "map/list/pack-map-bedwars.html", image: "../IMG/map/pack-map-bedwars.png" },
	{ title: "Pack map Hide N Seek", content: "This map pack converted by Jerem2206 contains maps from the hide and seek(3) game mode.", url: "map/list/pack-map-hide-n-seek.html", image: "../IMG/map/pack-map-hide-n-seek.png" },
	{ title: "Pack map skywars", content: "This map pack includes 4 maps converted by Jerem2206 and one made by Pengchan.", url: "map/list/pack-map-skywars.html", image: "../IMG/map/pack-map-skywars.png" },
	{ title: "Paint.net", content: "This software allows you to edit and create images.", url: "logiciel/list/paint.net.html", image: "../IMG/logiciel/paint.net.png" },
	{ title: "Paint Red", content: "This texture pack created by AlwaysTwoClutch and converted by a4L is a red pvp texture pack", url: "texture-pack/list/paint-red.html", image: "../IMG/texture-pack/paint-red.png" },
	{ title: "PCK Studio", content: "This software to make skin packs and create special skins while being able to export skin packs to its console.", url: "logiciel/list/pck-studio.html", image: "../IMG/logiciel/pck-studio.png" },
	{ title: "Pixelorama", content: "This software allows you to create animated textures.", url: "logiciel/list/pixelorama.html", image: "../IMG/logiciel/pixelorama.png" },
	{ title: "Portrait Skin Pack", content: "This Skin Pack created by Nobledez includes different skins in the portrait theme.", url: "skin-pack/list/portrait-skin-pack.html", image: "../IMG/skin-pack/portrait-skin-pack.png" },
	{ title: "PowerFTP", content: "This software allows you to transfer files to your WiiU but for your phone.", url: "logiciel/list/powerftp.html", image: "../IMG/logiciel/ppowerftp.png" },
	{ title: "PvP Skin Pack", content: "This Skin Pack created by Jerem2206 includes different simple skins.", url: "skin-pack/list/pvp-skin-pack.html", image: "../IMG/skin-pack/pvp-skin-pack.png" },
	//Q 
	{ title: "Qu@ skin pack", content: "This Skin Pack created by Mario Level contains a lot of original skin", url: "skin-pack/list/Qu@-skin-pack.html", image: "../IMG/skin-pack/Qu@-skin-pack.png" },
	//R 
	{ title: "ReQuestPCK", content: "This Skin Pack created by Nobledez includes different skins requested by his community.", url: "skin-pack/list/requestpck-nobledez.html", image: "../IMG/skin-pack/requestpck-nobledez.png" },
	{ title: "Rick & Morty", content: " This Skin Pack created by Nobledez includes different skins from the Rick & Morty universe.", url: "skin-pack/list/rick-&-morty.html", image: "../IMG/skin-pack/rick-&-morty.png" },
	{ title: "Rush Furysium V2", content: "This map made by LG_PvP is a classic rush map made for furysium members.", url: "map/list/rush-furysium-v2.html", image: "../IMG/map/rush-furysium-v2.png" },
	//S
	{ title: "SD Card", content: "All of Jerem2206's SD Card files for modding.", url: "logiciel/list/carte-sd.html", image: "../IMG/nothing.png" },
	{ title: "Skin Pack of The LiviAxel", content: "This Skin Pack created by TheSecretPadlock contains over a hundred original skins", url: "skin-pack/list/skin-pack-of-the-liviaxel.html", image: "../IMG/skin-pack/skin-pack-of-liviaxel.png" },
	{ title: "Skyblock", content: "This map made by DanRobzProbz is a complete skyblock map.", url: "map/list/skyblock.html", image: "../IMG/map/skyblock.png" },
	{ title: "Speed UHC", content: "This map is a UHC map of the fast version of the classic UHC [Published by Frutox].", url: "map/list/speed-uhc.html", image: "../IMG/map/speed-uhc.png" },
	{ title: "Spiral Parkour", content: "This parkour map originally from the Java version is adapted for WiiU by Jerem2206", url: "map/list/spiral-parkour.html", image: "../IMG/map/spiral-parkour.png" },
	{ title: "SpriteCraft", content: "This software allows you to transform images into schematics.", url: "logiciel/list/spritecraft.html", image: "../IMG/nothing.png" },
	{ title: "SRG64 Mega SkinPack", content: "This Skin Pack created by SRG64 includes more than 300 skins mainly in the mario universe.", url: "skin-pack/list/srg64-mega-skinpack.html", image: "../IMG/skin-pack/srg64-mega-skinpack.png" },
	{ title: "Steven Universe Updated", content: "This Skin Pack created by Nobledez includes different related to steven universe.", url: "skin-pack/list/steven-universe-updated.html", image: "../IMG/skin-pack/steven-universe-updated.png" },
	{ title: "SubZero", content: "This texture pack created by dreamCritting and converted by jerem2206 is a texture pack where everything is frozen", url: "texture-pack/list/subzero.html", image: "../IMG/texture-pack/subzero.png" },
	{ title: "Super Smash Bros Pack V2", content: "This Skin Pack includes different skins related to the super smash bros theme.", url: "skin-pack/list/super-smash-bros-pack-v2.html", image: "../IMG/nothing.png" },
	//T 
	{ title: "Tank Skin Pack", content: "This Skin Pack created by Jerem2206 using the tank model from the brendans models skin pack and includes different tank skins in different colors.", url: "skin-pack/list/tank-skin-pack.html", image: "../IMG/skin-pack/tank-skin-pack.png" },-
	{ title: "Terraria Skins V2", content: "This Skin Pack includes different skins from the Terraria universe.", url: "skin-pack/list/terraria-skins-v2.html", image: "../IMG/skin-pack/terraria-skins-v2.png" },
	{ title: "The Final Skin Pack", content: "This Skin Pack created by Jerem2206 includes different skins.", url: "skin-pack/list/the-final-skin-pack.html", image: "../IMG/skin-pack/the-final-skin-pack.png" },
	{ title: "The Joy Of Creation Skin Pack", content: "This Skin Pack includes different skins related to the joy of creation theme.", url: "skin-pack/list/the-joy-of-creation-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "The World Skin Pack", content: "This Skin Pack created by TheSecretPadlock includes different special skins.", url: "skin-pack/list/the-world-skin-pack.html", image: "../IMG/skin-pack/the-world-skin-pack.png" },
	{ title: "TNT+ Modded", content: "This map made by NT Games offers you different modded tnts.", url: "map/list/tnt+-modded.html", image: "../IMG/map/tnt+-modded.png" },
	{ title: "Tonic Pack", content: "This texture pack created by JabaPacks and converted by jerem2206 is a basic pvp texture pack", url: "/texture-pack/list/tonic-pack.html", image: "../IMG/texture-pack/tonic-pack.png" },
	{ title: "Trailer Texture Pack", content: "This texture pack created by RobotPants and converted by jerem2206 is a texture pack using the textures from Minecraft trailers / animations made by Element Animation", url: "texture-pack/list/trailer-texture-pack.html", image: "../IMG/texture-pack/trailer-texture-pack.png" },
	{ title: "Troll Skin Pack", content: "This Skin Pack created by Jerem2206 which includes different simple skins in troll theme.", url: "skin-pack/list/troll-skin-pack.html", image: "../IMG/skin-pack/troll-skin-pack.png" },
	{ title: "Tropical Fade", content: "This texture pack created by Colbb and converted by jerem2206 is a green/yellow colored pvp texture pack for bedwars/skywars.", url: "texture-pack/list/tropical-fade.html", image: "../IMG/texture-pack/tropical-fade.png" },
	//U
	{ title: "Undertale Skin Pack V1", content: "This Skin Pack created by boxed_by_zem0ur is an Undertale skin pack with skins from the game [published by alpine42330].", url: "skin-pack/list/undertale-skin-pack.html", image: "../IMG/skin-pack/undertale-skin-pack.jpg" },
	{ title: "Universal Minecraft Editor", content: "This software allows you to modify maps (map) as well as .nbt files.", url: "logiciel/list/universal-minecraft-editor.html", image: "../IMG/logiciel/universal-minecraft-editor.png" },
	{ title: "Universal Minecraft Tool", content: "This software allows you to modify/convert maps as well as .nbt files. However, to access all the features you have to pay.", url: "logiciel/list/universal-minecraft-tool.html", image: "../IMG/logiciel/universal-minecraft-tool.png" },
	{ title: "Ultra", content: "This texture pack created by iSparkton for xNestorio and converted by jerem2206 is a gold colored pvp texture pack.", url: "texture-pack/list/ultra.html", image: "../IMG/texture-pack/ultra.png" },
	{ title: "USB Helper", content: "This software allows you to download wiiu games for yourself and emulate them or put them on your console.", url: "logiciel/list/usb-helper.html", image: "../IMG/logiciel/usb-helper.png" },
	//V 
	{ title: "V48 Tutorial", content: "Simply the v48 update tutorial (according to usb helper)", url: "tutoriel/list/v48-tutorial.html", image: "../IMG/tutorial/v48-tutoriel.png" },
	{ title: "V688 Tutorial", content: "Simply the v688 update tutorial (according to usb helper)", url: "tutoriel/list/v688-tutorial.html", image: "../IMG/tutorial/v688-tutoriel.png" },
	//W
	{ title: "WiiU Map Manager", content: "This software allows you to transfer and download maps from your console to your computer and vice versa.", url: "logiciel/list/wiiu-map-manager.html", image: "../IMG/logiciel/wiiu-map-manager.png" },
	{ title: "WiiU Title Boot Editor", content: "This software allows you to transfer and download maps from your console to your computer and vice versa.", url: "logiciel/list/wiiu-title-boot-editor.html", image: "../IMG/logiciel/wiiu-title-boot-editor.png" },
	{ title: "WinRAR", content: "This software can extract and compress files (.rar).", url: "logiciel/list/winrar.html", image: "../IMG/logiciel/winrar.png" },
	{ title: "WinSCP", content: "This software allows you to connect and modify files from your console.", url: "logiciel/list/winscp.html", image: "../IMG/logiciel/winscp.png" },
	{ title: "World Machine", content: "This software allows you to make custom maps in an advanced way.", url: "logiciel/list/world-machine.html", image: "../IMG/logiciel/world-machine.png" },
	{ title: "World Painter", content: "This software allows you to make custom maps in a simple way.", url: "logiciel/list/world-painter.html", image: "../IMG/logiciel/world-painter.png" },
	//X 
	//Y 
	//Z 
	{ title: "Zombie Tower Defence", content: "This map is a Tower Defense map with zombies [Published by Frutox].", url: "map/list/zombie-tower-defence.html", image: "../IMG/map/zombie-tower-defence.png" },

];

function search() {
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchResults = document.getElementById('searchResults');

    // Réinitialiser les résultats de recherche précédents
    searchResults.innerHTML = '';

        // Vérifier si le champ de recherche est vide
    if (searchTerm === '') {
        const li = document.createElement('li');
        li.textContent = "Please enter a search term.";
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
        li.textContent = "No result found.";
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
