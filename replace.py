import os
import json
import re

# Charger le dictionnaire JSON
def load_translation_dict(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        return json.load(f)

# Trouver la clé correspondant à une valeur dans le JSON
def find_key_by_value(dictionary, value):
    """Cherche dans le JSON la clé correspondant au texte"""
    for key, val in dictionary.items():
        if val.strip().lower() == value.strip().lower():
            return key
    return None

# Traiter un fichier HTML
def process_file(file_path, translation_dict):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex améliorée pour trouver uniquement le texte après `data-translate="hhhhhhhhhhhhhhhhh"`
    pattern = r'data-translate="hhhhhhhhhhhhhhhhh">([^<]+)<'

    def replace_match(match):
        text_found = match.group(1).strip()
        translation_key = find_key_by_value(translation_dict, text_found)

        if translation_key:
            print(f"[SUCCESS] {file_path} : '{text_found}' remplacé par '{translation_key}'")
            return f'data-translate="{translation_key}"><'
        else:
            print(f"[WARN] {file_path} : Pas de clé trouvée pour '{text_found}'")
            return match.group(0)  # Ne change rien si pas trouvé

    new_content = re.sub(pattern, replace_match, content)

    # Réécriture uniquement si des changements ont été faits
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

# Parcourir un dossier et traiter tous les fichiers HTML
def process_directory(directory, json_path):
    translation_dict = load_translation_dict(json_path)
    
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                process_file(file_path, translation_dict)

# Exécution du script
if __name__ == "__main__":
    dossier_html = "categorie"  # Dossier contenant les fichiers HTML
    fichier_json = "src/script/lang/fr.json"  # Fichier JSON avec les traductions
    process_directory(dossier_html, fichier_json)
