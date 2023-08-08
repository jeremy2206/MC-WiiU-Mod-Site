
const pages = [
	//A
	{ title: "Arcane Practice", content: "This map created by Pengchan and modified by Frutox is a PvP map with several maps and different kits [Published by Frutox].", url: "map/list/arcane-practice.html", image: "../IMG/map/arcane-practice.png" },
	{ title: "All Dream", content: "This Skin Pack created by Azox includes all the colors of the skin dream. [Posted by Azox]", url: "skin-pack/list/all-dream.html", image: "../IMG/skin-pack/all-dream.png" },
	{ title: "Amethyst Pack", content: "This texture pack created by Colbb and converted by jerem2206 is a purple pvp texture pack", url: "texture-pack/list/amethyst-pack.html", image: "../IMG/texture-pack/amethyst-pack.png" },
	{ title: "Among us Skin Pack", content: "This Skin Pack created by Orika Hero includes all the colors of the Among us crewmate. [Posted by Azox]", url: "skin-pack/list/among-us-skin-pack.html", image: "../IMG/skin-pack/among-us-skin-pack.png" },
	//B
    { title: "Binkman", content: "This software allows you to convert files in 2 directions: .wav files in .binka which is useful for modifying minecraft WiiU music.", url: "logiciel/list/binkman.html", image: "../IMG/logiciel/binkman.png" },
	{ title: "Block Skin Pack", content: "This Skin Pack created by Nobledez brings together a few hundred blocks of minecraft and some mods.", url: "skin-pack/list/block-skin-pack.html", image: "../IMG/skin-pack/block-skin-pack.png" },
    { title: "BlockBench", content: "This software is a tool that makes it easier to create Custom Skins.", url: "logiciel/list/blockbench.html", image: "../IMG/logiciel/blockbench.png" },
	{ title: "BO2 Boat", content: "This map is a map of the game Call of Duty Black Ops 2 in Minecraft.", url: "map/list/bo2-boat.html", image: "../IMG/map/bo2-boat.png" },
	{ title: "Brendans Models Skin Pack V5", content: "This Skin Pack created by Brendans brings together a few hundred original skins.", url: "skin-pack/list/brendans-models-skin-pack-v5.html", image: "../IMG/skin-pack/brendans-models-skin-pack-v5.png" },
	//C
	{ title: "Capture the flag", content: "This map is a PvP map that consists of capturing the flag [Published by Frutox].", url: "map/list/capturetheflag.html", image: "../IMG/map/capturetheflag.png" },
    { title: "Cemu", content: "This software allows you to play WiiU games on PC.", url: "logiciel/list/cemu.html", image: "../IMG/logiciel/cemu.png" },
	{ title: "Commu Skin Pack", content: "This Skin Pack created by Jerem2206 brings together different simple skins.", url: "skin-pack/list/commu-skin-pack.html", image: "../IMG/skin-pack/commu-skin-pack.png" },
	{ title: "Core War", content: "This map created by Thepyrocrafteur & Uranium_49 on Java redone by Jerem2206 contains a team against team map to destroy the opposing heart.", url: "map/list/core-war.html", image: "../IMG/map/core-war.png" },
	{ title: "Creeper Skin Pack", content: "This Skin Pack contains creepers of different colors.", url: "skin-pack/list/creeper-skin-pack.html", image: "../IMG/nothing.png" },
	//D
    { title: "Discord To Minecraft WiiU", content: "This software allows you to view Discord messages on Minecraft WiiU.", url: "logiciel/list/discord-to-minecraft-wiiu.html", image: "../IMG/nothing.png" },
	{ title: "Dragon UnPACKer", content: "This software allows you to open files that are impossible to open easily (like .pck mashups).", url: "logiciel/list/dragon-unpacker.html", image: "../IMG/logiciel/dragon-unpacker.png" },
	//E
	{ title: "EggWars", content: "This map by pengchan is a map of eggwars game mode [Published by Frutox].", url: "map/list/eggwars.html", image: "../IMG/map/eggwars.png" },
	{ title: "ELR Elementary PvP", content: "This texture pack converted by el-robinator is simplistic and may appeal to PvP players. [Posted by el-robinator]", url: "map/texture-pack/elr-elementary-pvp.html", image: "../IMG/texture-pack/elr-elementary-pvp.png" },
	{ title: "Enderman Skin Pack", content: "This Skin Pack created by Nobledez contains Enderman of different colors.", url: "skin-pack/list/enderman-skin-pack.html", image: "../IMG/skin-pack/enderman-skin-pack.png" },
	//F
	{ title: "Fallen Kingdom", content: "This map is a PvP map where different teams compete [Published by Frutox].", url: "map/list/fallen-kingdom.html", image: "../IMG/map/fallenkingdom.png" },
	{ title: "FallGuys Skin Pack", content: "This Skin Pack created by Orika Hero includes all the colors of the FallGuys character. [Posted by Azox]", url: "skin-pack/list/fallguys-skin-pack.html", image: "../IMG/skin-pack/fallguys-skin-pack.png" },
	{ title: "FarmLand V3", content: "This map created by Jerem2206 and with the participation of MisterV4 is a farm type map.", url: "map/list/farmland-v3.html", image: "../IMG/map/farmland-v3.png" },
	{ title: "FontForge", content: "This software allows you to modify and create fonts.", url: "logiciel/list/fontforge.html", image: "../IMG/logiciel/fontforge.png" },
	{ title: "Fortnite Modded", content: "This map is a map referring to the game Fortnite in Minecraft [Published by Sehou Game].", url: "map/list/fortnite-modded.html", image: "../IMG/map/fortnite-modded.png" },
	{ title: "FUI Editor", content: "This software allows you to change the textures found in the .fui files.", url: "logiciel/list/fui-editor.html", image: "../IMG/logiciel/fui-editor.png" },
	//G 
	{ title: "GameAllStar", content: "This Skin Pack created by Nobledez contains different original skins in the universe of video games.", url: "skin-pack/list/gameallstar.html", image: "../IMG/skin-pack/game-all-star-skin-pack.png" },
	{ title: "GTAV In Minecraft", content: "This map is a map referencing the game GTAV in Minecraft [Converted by Jerem2206].", url: "map/list/gtav-in-minecraft.html", image: "../IMG/map/gtav-in-minecraft.png" },
	//H
	{ title: "Hacker Skin Pack", content: "This Skin Pack created by Nobledez contains different skins in hacker theme.", url: "skin-pack/list/hacker-skin-pack.html", image: "../IMG/skin-pack/hacker-skin-pack.png" },
	{ title: "Hafen", content: "This texture pack created by nongko18 and converted by jerem2206 is a texture pack with very colorful and simplistic colors", url: "map/texture-pack/hafen.html", image: "../IMG/texture-pack/hafen.png" },
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
	{ title: "Jurassic World Skin Pack", content: "This Skin Pack created by Nobledez includes different skins in the form of dinosaur images related to Jurassic World.", url: "skin-pack/list/jurassic-world-skin-pack.html", image: "../IMG/skin-pack/jurassic-world-skin-pack.png" },
	//K 
	//L 
	//M
	{ title: "Map aventure", content: "This map made by frifri offers you an adventure map.", url: "map/list/map-aventure.html", image: "../IMG/map/map-aventure.png" },
	{ title: "Map Jump", content: "This map made by frifri converted on WiiU by Jerem2206 offers you a parkour map.", url: "map/list/map-jump.html", image: "../IMG/map/map-jump.png" },
	{ title: "MCC Tool Chest", content: "This software allows you to modify maps (map) like universal minecraft editor and convert them. Also to extract .arc .", url: "logiciel/list/mcc-tool-chest.html", image: "../IMG/logiciel/mcc-tool-chest.png" },
	{ title: "McEdit 2", content: "This software allows you to modify maps (map) in depth.", url: "logiciel/list/mcedit-2.html", image: "../IMG/logiciel/mcedit-2.png" },
	{ title: "MCSE Editor", content: "This software allows you to modify the files of your mcse.", url: "logiciel/list/mcse-editor.html", image: "../IMG/logiciel/mcse-editor.png" },
	{ title: "MC WiiU ID Skin Checker", content: "This software allows you to check the id of your skin of your skin pack if it already exists.", url: "logiciel/list/mc-wiiu-id-skin-checker.html", image: "../IMG/logiciel/mc-wiiu-id-skin-checker.png" },
	{ title: "Mega Pack", content: "This Skin Pack created by Nobledez includes different original skins which uses known skins.", url: "skin-pack/list/mega-pack.html", image: "../IMG/skin-pack/mega-pack.png" },
	{ title: "Minecraft Converter", content: "This software allows you to convert maps (map) PS3 XBOX 360 and PC between them.", url: "logiciel/list/minecraft-converter.html", image: "../IMG/logiciel/minecraft-converter.png" },
	{ title: "Minecraft Version EShop", content: "This files is Minecraft EShop Version ready to be installed on WiiU (full version for modding).", url: "logiciel/list/minecraft-version-eshop.html", image: "../IMG/nothing.png" },
	{ title: "Mizuno's 16 Craft", content: "This texture pack created by Mizuno and converted by jerem2206 is a texture pack close to the mythology pack", url: "map/texture-pack/mizunos.html", image: "../IMG/texture-pack/mizunos.png" },
	{ title: "Morea", content: "This texture pack created by juanteh and converted by jerem2206 is a basic pvp texture pack", url: "map/texture-pack/morea.html", image: "../IMG/texture-pack/morea.png" },
	{ title: "Mystic Maze", content: "This map originated from the Java version by Reddoz and adapted for WiiU by Jerem2206", url: "map/list/mystic-maze.html", image: "../IMG/map/mystic-maze.png" },
	//N
	{ title: "NBT Tag Code Maker", content: "This software allows to modify the creative inventory of Minecraft.", url: "logiciel/list/nbt-tag-code-maker.html", image: "../IMG/logiciel/nbt-tag-code-maker.png" },
	{ title: "Nebula", content: "This texture pack created by looshy and converted by jerem2206 is a basic pvp texture pack", url: "map/texture-pack/nebula.html", image: "../IMG/texture-pack/nebula.png" },
	{ title: "Noob Skin Pack", content: "This Skin Pack created by Spectroz includes different skins in the noob theme.", url: "skin-pack/list/noob-skin-pack.html", image: "../IMG/skin-pack/noob-skin-pack.png" },
	//O 
	{ title: "Offensive Hearts V2", content: "This texture pack created by Juanteh and converted by jerem2206 is a basic red pvp texture pack", url: "map/texture-pack/offensive-hearts-v2.html", image: "../IMG/texture-pack/offensive-hearts-v2.png" },
	//P
	{ title: "Pack map Hide N Seek", content: "This map pack converted by Jerem2206 contains maps from the hide and seek(3) game mode.", url: "map/list/pack-map-hide-n-seek.html", image: "../IMG/map/pack-map-hide-n-seek.png" },
	{ title: "Pack map skywars", content: "This map pack includes 2 maps converted by Jerem2206 and one made by Pengchan [Published by Frutox].", url: "map/list/pack-map-skywars.html", image: "../IMG/map/pack-map-skywars.png" },
	{ title: "PCK Studio", content: "This software to make skin packs and create special skins while being able to export skin packs to its console.", url: "logiciel/list/pck-studio.html", image: "../IMG/logiciel/pck-studio.png" },
	{ title: "Portrait Skin Pack", content: "This Skin Pack created by Nobledez includes different skins in the portrait theme.", url: "skin-pack/list/portrait-skin-pack.html", image: "../IMG/skin-pack/portrait-skin-pack.png" },
	{ title: "PvP Skin Pack", content: "This Skin Pack created by Jerem2206 includes different simple skins.", url: "skin-pack/list/pvp-skin-pack.html", image: "../IMG/skin-pack/pvp-skin-pack.png" },
	//Q 
	{ title: "Qu@ skin pack", content: "This Skin Pack created by Mario Level contains a lot of original skin", url: "skin-pack/list/Qu@-skin-pack.html", image: "../IMG/skin-pack/Qu@-skin-pack.png" },
	//R 
	{ title: "ReQuestPCK", content: "This Skin Pack created by Nobledez includes different skins requested by his community.", url: "skin-pack/list/requestpck-nobledez.html", image: "../IMG/skin-pack/requestpck-nobledez.png" },
	//S
	{ title: "Skin Pack of The LiviAxel", content: "This Skin Pack created by TheSecretPadlock contains over a hundred original skins", url: "skin-pack/list/skin-pack-of-the-liviaxel.html", image: "../IMG/skin-pack/skin-pack-of-liviaxel.png" },
	{ title: "Skyblock", content: "This map made by DanRobzProbz is a complete skyblock map.", url: "map/list/skyblock.html", image: "../IMG/map/skyblock.png" },
	{ title: "Speed UHC", content: "This map is a UHC map of the fast version of the classic UHC [Published by Frutox].", url: "map/list/speed-uhc.html", image: "../IMG/map/speed-uhc.png" },
	{ title: "Spiral Parkour", content: "This parkour map originally from the Java version is adapted for WiiU by Jerem2206", url: "map/list/spiral-parkour.html", image: "../IMG/map/spiral-parkour.png" },
	{ title: "SpriteCraft", content: "This software allows you to transform images into schematics.", url: "logiciel/list/spritecraft.html", image: "../IMG/nothing.png" },
	{ title: "SRG64 Mega SkinPack", content: "This Skin Pack created by SRG64 includes more than 300 skins mainly in the mario universe.", url: "skin-pack/list/srg64-mega-skinpack.html", image: "../IMG/skin-pack/srg64-mega-skinpack.png" },
	{ title: "Steven Universe Updated", content: "This Skin Pack created by Nobledez includes different related to steven universe.", url: "skin-pack/list/steven-universe-updated.html", image: "../IMG/skin-pack/steven-universe-updated.png" },
	{ title: "SubZero", content: "This texture pack created by dreamCritting and converted by jerem2206 is a texture pack where everything is frozen", url: "map/texture-pack/subzero.html", image: "../IMG/texture-pack/subzero.png" },
	{ title: "Super Smash Bros Pack V2", content: "This Skin Pack includes different skins related to the super smash bros theme.", url: "skin-pack/list/super-smash-bros-pack-v2.html", image: "../IMG/nothing.png" },
	//T 
	{ title: "The Final Skin Pack", content: "This Skin Pack created by Jerem2206 includes different skins.", url: "skin-pack/list/the-final-skin-pack.html", image: "../IMG/skin-pack/the-final-skin-pack.png" },
	{ title: "The Joy Of Creation Skin Pack", content: "This Skin Pack includes different skins related to the joy of creation theme.", url: "skin-pack/list/the-joy-of-creation-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "The World Skin Pack", content: "This Skin Pack created by TheSecretPadlock includes different special skins.", url: "skin-pack/list/the-world-skin-pack.html", image: "../IMG/skin-pack/the-world-skin-pack.png" },
	{ title: "TNT+ Modded", content: "This map made by NT Games offers you different modded tnts.", url: "map/list/tnt+-modded.html", image: "../IMG/map/tnt+-modded.png" },
	{ title: "Tonic Pack", content: "This texture pack created by JabaPacks and converted by jerem2206 is a basic pvp texture pack", url: "map/texture-pack/tonic-pack.html", image: "../IMG/texture-pack/tonic-pack.png" },
	{ title: "Troll Skin Pack", content: "This Skin Pack created by Jerem2206 which includes different simple skins in troll theme.", url: "skin-pack/list/troll-skin-pack.html", image: "../IMG/skin-pack/troll-skin-pack.png" },
	//U
	{ title: "Universal Minecraft Editor", content: "This software allows you to modify maps (map) as well as .nbt files.", url: "logiciel/list/universal-minecraft-editor.html", image: "../IMG/logiciel/universal-minecraft-editor.png" },
	{ title: "USB Helper", content: "This software allows you to download wiiu games for yourself and emulate them or put them on your console.", url: "logiciel/list/usb-helper.html", image: "../IMG/logiciel/usb-helper.png" },
	//V 
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
	
	
	{ title: "basic", content: "basic", url: "map/texture-pack/basic.html", image: "../IMG/texture-pack/basic.png" },

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
        return page.title.toLowerCase().includes(searchTerm) || page.content.toLowerCase().includes(searchTerm);
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