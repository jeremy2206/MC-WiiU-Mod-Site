
const pages = [
	//A
	{ title: "Arcane Practice", content: "Cette carte crée par Pengchan et modifié par Frutox est une carte PvP avec plusieurs cartes et différents kits [Publié par Frutox].", url: "map/list/arcane-practice.html", image: "../IMG/map/arcane-practice.png" },
	{ title: "All Dream", content: "Ce Skin Pack crée par Azox comprends toutes les couleurs du skin dream. [Publié par Azox]", url: "skin-pack/list/all-dream.html", image: "../IMG/skin-pack/all-dream.png" },
	{ title: "Amethyst Pack", content: "Ce texture pack crée par Colbb et converti par jerem2206 est un texture pack pvp violet", url: "texture-pack/list/amethyst-pack.html", image: "../IMG/texture-pack/amethyst-pack.png" },
	{ title: "Among us Skin Pack", content: "Ce Skin Pack crée par Orika Hero comprends toutes les couleurs du crewmate de Among us. [Publié par Azox]", url: "skin-pack/list/among-us-skin-pack.html", image: "../IMG/skin-pack/among-us-skin-pack.png" },
	//B
    { title: "Binkman", content: "Ce logiciel permet de convertir des fichiers dans les 2 sens: Les fichiers .wav en .binka qui est utile pour modifier les musiques de minecraft WiiU.", url: "logiciel/list/binkman.html", image: "../IMG/logiciel/binkman.png" },
	{ title: "Block Skin Pack", content: "Ce Skin Pack créé par Nobledez rassemble quelques centaines de blocs de minecraft et de certains mods.", url: "skin-pack/list/block-skin-pack.html", image: "../IMG/skin-pack/block-skin-pack.png" },
    { title: "BlockBench", content: "Ce logiciel est un outil permettant de créer plus facilement ses Skin Custom.", url: "logiciel/list/blockbench.html", image: "../IMG/logiciel/blockbench.png" },
	{ title: "BO2 Boat", content: "Cette carte est une carte du jeu Call of Duty Black Ops 2 dans Minecraft.", url: "map/list/bo2-boat.html", image: "../IMG/map/bo2-boat.png" },
	{ title: "Brendans Models Skin Pack V5", content: "Ce Skin Pack créé par Brendans rassemble quelques centaines de skins originaux.", url: "skin-pack/list/brendans-models-skin-pack-v5.html", image: "../IMG/skin-pack/brendans-models-skin-pack-v5.png" },
	{ title: "Brillant", content: "Ce texture pack crée par Brilliant-PVP et converti par jerem2206 est un texture pack très coloré un peu dans le style du pack plastic.", url: "texture-pack/list/brillant.html", image: "../IMG/texture-pack/brillant.png" },
	//C
	{ title: "Capture the flag", content: "Cette carte est une carte PvP qui consiste a capturer le drapeau [Publié par Frutox].", url: "map/list/capturetheflag.html", image: "../IMG/map/capturetheflag.png" },
    { title: "Cemu", content: "Ce logiciel permet de jouer a des jeux WiiU sur PC.", url: "logiciel/list/cemu.html", image: "../IMG/logiciel/cemu.png" },
	{ title: "Commu Skin Pack", content: "Ce Skin Pack créé par Jerem2206 rassemble différents skins simple.", url: "skin-pack/list/commu-skin-pack.html", image: "../IMG/skin-pack/commu-skin-pack.png" },
	{ title: "Core War", content: "Cette cartes crée par Thepyrocrafteur & Uranium_49 sur Java refait par Jerem2206 contient une carte team contre team pour détruire le coeur adverse.", url: "map/list/core-war.html", image: "../IMG/map/core-war.png" },
	{ title: "Creeper Skin Pack", content: "Ce Skin Pack contient des creeper de différentes couleurs.", url: "skin-pack/list/creeper-skin-pack.html", image: "../IMG/nothing.png" },
	//D
	{ title: "Dandelion X", content: "Ce texture pack crée par Steelfeathers & Xerotrinity puis converti par jerem2206 est un texture pack ressemblant au pack médiéval.", url: "texture-pack/list/dandelion-x.html", image: "../IMG/texture-pack/dandelion-x.png" },
    { title: "Discord To Minecraft WiiU", content: "Ce logiciel permet de voir les messages Discord sur Minecraft WiiU.", url: "logiciel/list/discord-to-minecraft-wiiu.html", image: "../IMG/nothing.png" },
	{ title: "Dragon UnPACKer", content: "Ce logiciel permet d'ouvrir des fichiers impossible a ouvrir facilement (comme les .pck des mashup).", url: "logiciel/list/dragon-unpacker.html", image: "../IMG/logiciel/dragon-unpacker.png" },
	//E
	{ title: "EggWars", content: "Cette carte par pengchan est une carte du mode de jeu d'eggwars [Publié par Frutox].", url: "map/list/eggwars.html", image: "../IMG/map/eggwars.png" },
	{ title: "ELR Elementary PvP", content: "Ce texture pack converti par el-robinator est simpliste et peut plaire aux joueurs PvP. [Publié par el-robinator]", url: "texture-pack/list/elr-elementary-pvp.html", image: "../IMG/texture-pack/elr-elementary-pvp.png" },
	{ title: "Empty World", content: "Cette carte est juste une carte vide.", url: "map/list/empty-world.html", image: "../IMG/nothing.png" },
	{ title: "Enderman Skin Pack", content: "Ce Skin Pack créé par Nobledez contient des Enderman de différentes couleurs.", url: "skin-pack/list/enderman-skin-pack.html", image: "../IMG/skin-pack/enderman-skin-pack.png" },
	//F
	{ title: "Fallen Kingdom", content: "Cette carte est une carte PvP ou différentes équipes s'affrontent [Publié par Frutox].", url: "map/list/fallen-kingdom.html", image: "../IMG/map/fallenkingdom.png" },
	{ title: "FallGuys Skin Pack", content: "Ce Skin Pack crée par Orika Hero comprends toutes les couleurs du personage de FallGuys. [Publié par Azox]", url: "skin-pack/list/fallguys-skin-pack.html", image: "../IMG/skin-pack/fallguys-skin-pack.png" },
	{ title: "FarmLand V3", content: "Cette carte crée par Jerem2206 et avec la participation de MisterV4 est un carte de type farm.", url: "map/list/farmland-v3.html", image: "../IMG/map/farmland-v3.png" },
	{ title: "FNAF Skin Pack", content: "Ce Skin Pack créé par TheSecretPadlock rassemble différents skins custom sur le thème de Five Night At Freddy's.", url: "skin-pack/list/fnaf-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "FontForge", content: "Ce logiciel permet de modifier et de creer des polices d'écritures.", url: "logiciel/list/fontforge.html", image: "../IMG/logiciel/fontforge.png" },
	{ title: "Fortnite Modded", content: "Cette carte est une carte faisant référence au jeu Fortnite dans Minecraft [Publié par Sehou Game].", url: "map/list/fortnite-modded.html", image: "../IMG/map/fortnite-modded.png" },
	{ title: "FUI Editor", content: "Ce logiciel permet de changer les textures se trouvant dans les .fui .", url: "logiciel/list/fui-editor.html", image: "../IMG/logiciel/fui-editor.png" },
	//G 
	{ title: "GameAllStar", content: "Ce Skin Pack créé par Nobledez contient différents skins originaux dans l'univers des jeux vidéo.", url: "skin-pack/list/gameallstar.html", image: "../IMG/skin-pack/game-all-star-skin-pack.png" },
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
	{ title: "Java to WiiU Texture Pack Converter", content: "Ce logiciel permet de convertir les blocs et les items des textures packs de la version Java vers la version WiiU", url: "logiciel/list/java-to-wiiu-texture-pack-converter.html", image: "../IMG/logiciel/java-to-wiiu-texture-pack-converter.png" },
	{ title: "Jerem Event 2021 Map Pack", content: "Ce pack de cartes crée par Jerem2206 contient les cartes de l'évvènement organisé en 2021(2).", url: "map/list/jerem-event-2021-map-pack.html", image: "../IMG/map/jerem-event-2021-map-pack.png" },
	{ title: "Jerem Texture Pack", content: "Cette carte crée par Jerem2206 contient le nécéssaire pour tester son texture pack et pour PvP.", url: "map/list/jerem-texture-pack.html", image: "../IMG/map/jerem-texture-pack.png" },
	{ title: "Jerem UHC Map Pack", content: "Ce pack de cartes crée par Jerem2206 contient des cartes d'uhc divers custom(2).", url: "map/list/jerem-uhc-map-pack.html", image: "../IMG/map/jerem-uhc-map-pack.png" },
	{ title: "Jurassic World Skin Pack", content: "Ce Skin Pack crée par Nobledez comprends différents skin sous forme d'images de dinosaures lié à Jurassic World.", url: "skin-pack/list/jurassic-world-skin-pack.html", image: "../IMG/skin-pack/jurassic-world-skin-pack.png" },
	//K 
	//L 
	//M
	{ title: "Map aventure", content: "Cette carte faites par frifri vous propose une carte aventure.", url: "map/list/map-aventure.html", image: "../IMG/map/map-aventure.png" },
	{ title: "Map Jump", content: "Cette carte faites par frifri converti sur WiiU par Jerem2206 vous propose une carte de parcour.", url: "map/list/map-jump.html", image: "../IMG/map/map-jump.png" },
	{ title: "MCC Tool Chest", content: "Ce logiciel permet de modifier des cartes (map) comme universal minecraft editor et de les convertir. Également d'extraire les .arc .", url: "logiciel/list/mcc-tool-chest.html", image: "../IMG/logiciel/mcc-tool-chest.png" },
	{ title: "McEdit 2", content: "Ce logiciel permet de modifier des cartes (map) de façons approfondies.", url: "logiciel/list/mcedit-2.html", image: "../IMG/logiciel/mcedit-2.png" },
	{ title: "MCSE Editor", content: "Ce logiciel permet de modifier les fichiers de son mcse.", url: "logiciel/list/mcse-editor.html", image: "../IMG/logiciel/mcse-editor.png" },
	{ title: "MC WiiU ID Skin Checker", content: "Ce logiciel permet de vérifier l'id de son skin de son skin pack si il existe deja.", url: "logiciel/list/mc-wiiu-id-skin-checker.html", image: "../IMG/logiciel/mc-wiiu-id-skin-checker.png" },
	{ title: "Mega Pack", content: "Ce Skin Pack crée par Nobledez comprends différents skins originaux qui utilise des skins connus.", url: "skin-pack/list/mega-pack.html", image: "../IMG/skin-pack/mega-pack.png" },
	{ title: "Minecraft Converter", content: "Ce logiciel permet de convertir cartes(map) PS3 XBOX 360 et PC entre elles.", url: "logiciel/list/minecraft-converter.html", image: "../IMG/logiciel/minecraft-converter.png" },
	{ title: "Minecraft Default x16", content: "Ce texture pack est juste le pack de base.", url: "texture-pack/list/minecraft-default-x16.html", image: "../IMG/nothing.png" },
	{ title: "Minecraft Version EShop", content: "Ce fichiers est Minecraft Version EShop prêt a être installé sur WiiU (version complète pour le modding).", url: "logiciel/list/minecraft-version-eshop.html", image: "../IMG/nothing.png" },
	{ title: "Mizuno's 16 Craft", content: "Ce texture pack crée par Mizuno et converti par jerem2206 est un texture pack proche des pack mythologie", url: "texture-pack/list/mizunos.html", image: "../IMG/texture-pack/mizunos.png" },
	{ title: "Morea", content: "Ce texture pack crée par juanteh et converti par jerem2206 est un texture pack pvp basic", url: "texture-pack/list/morea.html", image: "../IMG/texture-pack/morea.png" },
	{ title: "Mystic Maze", content: "Cette carte originaire de la version Java par Reddoz et adapté pour WiiU par Jerem2206", url: "map/list/mystic-maze.html", image: "../IMG/map/mystic-maze.png" },
	//N
	{ title: "NBT Tag Code Maker", content: "Ce logiciel permet de modifier l'inventaire créatif de Minecraft.", url: "logiciel/list/nbt-tag-code-maker.html", image: "../IMG/logiciel/nbt-tag-code-maker.png" },
	{ title: "Nebula", content: "Ce texture pack crée par looshy et converti par jerem2206 est un texture pack pvp basic", url: "texture-pack/list/nebula.html", image: "../IMG/texture-pack/nebula.png" },
	{ title: "Noob Skin Pack", content: "Ce Skin Pack crée par Spectroz comprends différents skins dans le thème noob.", url: "skin-pack/list/noob-skin-pack.html", image: "../IMG/skin-pack/noob-skin-pack.png" },
	//O 
	{ title: "Offensive Hearts V2", content: "Ce texture pack crée par Juanteh et converti par jerem2206 est un texture pack pvp rouge basic", url: "texture-pack/list/offensive-hearts-v2.html", image: "../IMG/texture-pack/offensive-hearts-v2.png" },
	//P
	{ title: "Pack map Hide N Seek", content: "Ce pack de cartes converti par Jerem2206 contient des cartes du mode de jeu cache cache(3).", url: "map/list/pack-map-hide-n-seek.html", image: "../IMG/map/pack-map-hide-n-seek.png" },
	{ title: "Pack map skywars", content: "Ce pack de carte comporte 2 cartes convertit par Jerem2206 et une faites par Pengchan [Publié par Frutox].", url: "map/list/pack-map-skywars.html", image: "../IMG/map/pack-map-skywars.png" },
	{ title: "Paint.net", content: "Ce logiciel permet de modifier et de créer des images.", url: "logiciel/list/paint.net.html", image: "../IMG/logiciel/paint.net.png" },
	{ title: "PCK Studio", content: "Ce logiciel de faire des packs de skin et de crée des skins spéciaux tout en pouvant exporter les packs de skin vers sa console.", url: "logiciel/list/pck-studio.html", image: "../IMG/logiciel/pck-studio.png" },
	{ title: "Pixelorama", content: "Ce logiciel permet de créer des textures animées.", url: "logiciel/list/pixelorama.html", image: "../IMG/logiciel/pixelorama.png" },
	{ title: "Portrait Skin Pack", content: "Ce Skin Pack crée par Nobledez comprends différents skins dans le thème portrait.", url: "skin-pack/list/portrait-skin-pack.html", image: "../IMG/skin-pack/portrait-skin-pack.png" },
	{ title: "PvP Skin Pack", content: "Ce Skin Pack crée par Jerem2206 comprends différents skins simple.", url: "skin-pack/list/pvp-skin-pack.html", image: "../IMG/skin-pack/pvp-skin-pack.png" },
	//Q 
	{ title: "Qu@ skin pack", content: "Ce Skin Pack crée par Niveau de Mario contient beaucoup de skin original", url: "skin-pack/list/Qu@-skin-pack.html", image: "../IMG/skin-pack/Qu@-skin-pack.png" },
	//R 
	{ title: "ReQuestPCK", content: "Ce Skin Pack crée par Nobledez comprends différents skins demandé par sa communautée.", url: "skin-pack/list/requestpck-nobledez.html", image: "../IMG/skin-pack/requestpck-nobledez.png" },
	//S
	{ title: "Skin Pack of The LiviAxel", content: "Ce Skin Pack crée par TheSecretPadlock contient plus d'une centaine de skin original", url: "skin-pack/list/skin-pack-of-the-liviaxel.html", image: "../IMG/skin-pack/skin-pack-of-liviaxel.png" },
	{ title: "Skyblock", content: "Cette carte faites par DanRobzProbz est une carte skyblock complète.", url: "map/list/skyblock.html", image: "../IMG/map/skyblock.png" },
	{ title: "Speed UHC", content: "Cette carte est une carte UHC de la version rapide de l'UHC classique [Publié par Frutox].", url: "map/list/speed-uhc.html", image: "../IMG/map/speed-uhc.png" },
	{ title: "Spiral Parkour", content: "Cette carte parcour originaire de la version Java est adapté pour WiiU par Jerem2206", url: "map/list/spiral-parkour.html", image: "../IMG/map/spiral-parkour.png" },
	{ title: "SpriteCraft", content: "Ce logiciel permet de transformer des images en schematique.", url: "logiciel/list/spritecraft.html", image: "../IMG/nothing.png" },
	{ title: "SRG64 Mega SkinPack", content: "Ce Skin Pack crée par SRG64 comprends plus de 300 skins dans l'univers de mario principalement.", url: "skin-pack/list/srg64-mega-skinpack.html", image: "../IMG/skin-pack/srg64-mega-skinpack.png" },
	{ title: "Steven Universe Updated", content: "Ce Skin Pack crée par Nobledez comprends différents lié a steven universe.", url: "skin-pack/list/steven-universe-updated.html", image: "../IMG/skin-pack/steven-universe-updated.png" },
	{ title: "SubZero", content: "Ce texture pack crée par dreamCritting et converti par jerem2206 est un texture pack où tout est glacé", url: "texture-pack/list/subzero.html", image: "../IMG/texture-pack/subzero.png" },
	{ title: "Super Smash Bros Pack V2", content: "Ce Skin Pack comprends différents skins lié au thème super smash bros.", url: "skin-pack/list/super-smash-bros-pack-v2.html", image: "../IMG/nothing.png" },
	//T 
	{ title: "The Final Skin Pack", content: "Ce Skin Pack créé par Jerem2206 comprends différents skins.", url: "skin-pack/list/the-final-skin-pack.html", image: "../IMG/skin-pack/the-final-skin-pack.png" },
	{ title: "The Joy Of Creation Skin Pack", content: "Ce Skin Pack comprends différents skins lié au thème the joy of creation.", url: "skin-pack/list/the-joy-of-creation-skin-pack.html", image: "../IMG/nothing.png" },
	{ title: "The World Skin Pack", content: "Ce Skin Pack crée par TheSecretPadlock comprends différents skins spéciaux.", url: "skin-pack/list/the-world-skin-pack.html", image: "../IMG/skin-pack/the-world-skin-pack.png" },
	{ title: "TNT+ Modded", content: "Cette carte faites par NT Games vous propose différentes tnt modées.", url: "map/list/tnt+-modded.html", image: "../IMG/map/tnt+-modded.png" },
	{ title: "Tonic Pack", content: "Ce texture pack crée par JabaPacks et converti par jerem2206 est un texture pack pvp basic", url: "texture-pack/list/tonic-pack.html", image: "../IMG/texture-pack/tonic-pack.png" },
	{ title: "Troll Skin Pack", content: "Ce Skin Pack créé par Jerem2206 qui comprends différents skins simple dans le thème troll.", url: "skin-pack/list/troll-skin-pack.html", image: "../IMG/skin-pack/troll-skin-pack.png" },
	//U
	{ title: "Universal Minecraft Editor", content: "Ce logiciel permet de modifier des cartes (map) ainsi que les .nbt .", url: "logiciel/list/universal-minecraft-editor.html", image: "../IMG/logiciel/universal-minecraft-editor.png" },
	{ title: "Ultra", content: "Ce texture pack crée par iSparkton pour xNestorio et converti par jerem2206 est un texture pack pvp de couleur or. ", url: "texture-pack/list/ultra.html", image: "../IMG/texture-pack/ultra.png" },
	{ title: "USB Helper", content: "Ce logiciel permet de télécharger des jeux wiiu pour soi et de les émuler ou les mettre sur sa console.", url: "logiciel/list/usb-helper.html", image: "../IMG/logiciel/usb-helper.png" },
	//V 
	//W
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
