# -*- coding: utf-8 -*-
"""Géographie du Calvados : communes, régions naturelles, distances depuis Caen."""
import zlib, csv, html, json, math, os, re, shutil, unicodedata
from content import *

ROOT = os.path.dirname(os.path.abspath(__file__))
DIST = os.path.join(ROOT, "dist")
CAEN = (-0.372, 49.185)


def esc(s):
    return html.escape(s, quote=True)


def slugify(n):
    n = unicodedata.normalize("NFKD", n).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9]+", "-", n.lower()).strip("-")


def km(a, b):
    R = 6371
    la1, la2 = math.radians(a[1]), math.radians(b[1])
    dl, dp = math.radians(b[0] - a[0]), la2 - la1
    h = math.sin(dp / 2) ** 2 + math.cos(la1) * math.cos(la2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(h))


def direction(a, b):
    dx = (b[0] - a[0]) * math.cos(math.radians(a[1]))
    dy = b[1] - a[1]
    ang = (math.degrees(math.atan2(dx, dy)) + 360) % 360
    names = ["au nord", "au nord-est", "à l'est", "au sud-est", "au sud", "au sud-ouest", "à l'ouest", "au nord-ouest"]
    return names[int((ang + 22.5) // 45) % 8]


def fr(n):
    return f"{n:,}".replace(",", " ")


# ----------------------------------------------------------------- données
COASTAL = {"Ouistreham", "Colleville-Montgomery", "Hermanville-sur-Mer", "Lion-sur-Mer", "Luc-sur-Mer",
           "Langrune-sur-Mer", "Saint-Aubin-sur-Mer", "Bernières-sur-Mer", "Courseulles-sur-Mer",
           "Merville-Franceville-Plage", "Cabourg", "Dives-sur-Mer", "Houlgate", "Blonville-sur-Mer",
           "Villers-sur-Mer", "Deauville", "Trouville-sur-Mer", "Touques", "Honfleur", "Port-en-Bessin-Huppain",
           "Isigny-sur-Mer", "La Rivière-Saint-Sauveur", "Grandcamp-Maisy", "Ver-sur-Mer"}
AUGE = {"Lisieux", "Pont-l'Évêque", "Mézidon Vallée d'Auge", "Livarot-Pays-d'Auge", "Orbec", "Valorbiquet",
        "Saint-Pierre-en-Auge", "Dozulé", "Saint-Désir", "Équemauville"}
BOCAGE = {"Villers-Bocage", "Tilly-sur-Seulles", "Aurseulles", "Caumont-sur-Aure", "Le Molay-Littry",
          "Les Monts d'Aunay", "Souleuvre en Bocage", "Valdallière", "Noues de Sienne", "Vire Normandie",
          "Condé-en-Normandie", "Val d'Arry", "Creully sur Seulles", "Bayeux", "Saint-Vigor-le-Grand"}
SUD = {"Falaise", "Potigny", "Thury-Harcourt-le-Hom", "Bretteville-sur-Laize", "Laize-Clinchamps", "Valambray"}
URBAN = {"Caen", "Hérouville-Saint-Clair", "Mondeville", "Ifs", "Colombelles", "Fleury-sur-Orne",
         "Cormelles-le-Royal", "Giberville", "Louvigny", "Épron", "Blainville-sur-Orne", "Carpiquet",
         "Bretteville-sur-Odon", "Saint-Germain-la-Blanche-Herbe", "Biéville-Beuville", "Authie", "Saint-Contest"}


def region(n):
    if n in COASTAL: return "littoral"
    if n in AUGE: return "auge"
    if n in BOCAGE: return "bocage"
    if n in SUD: return "sud"
    if n in URBAN: return "ville"
    return "plaine"


communes = []
with open(os.path.join(ROOT, "data", "communes.csv"), encoding="utf-8") as f:
    seen = set()
    for row in csv.reader(f, delimiter="|"):
        n, cp, pop, lon, lat = row
        s = slugify(n)
        if s in seen: continue
        seen.add(s)
        c = dict(nom=n, slug=s, cp=cp, pop=int(pop), pos=(float(lon), float(lat)), reg=region(n))
        c["km"] = round(km(CAEN, c["pos"]))
        c["dir"] = direction(CAEN, c["pos"])
        communes.append(c)
BY = {c["slug"]: c for c in communes}
for c in communes:
    others = sorted((o for o in communes if o is not c), key=lambda o: km(c["pos"], o["pos"]))
    c["near"] = others[:5]


def de(n):
    """Particule : « de Caen », « d'Ifs », « des Monts d'Aunay »."""
    if n.startswith("Les "): return "des " + n[4:]
    if n.startswith("Le "): return "du " + n[3:]
    if n.startswith("La "): return "de La " + n[3:]
    return ("d'" if n[0] in "AEIOUÉÈH" else "de ") + n


def a_(n):
    """« à Caen », « au Castelet », « aux Monts d'Aunay »."""
    if n.startswith("Les "): return "aux " + n[4:]
    if n.startswith("Le "): return "au " + n[3:]
    return "à " + n


def service_url(svc, c):
    return f"/{svc}-{c['slug']}"




def pop_class(p):
    if p < 2500: return "petite commune"
    if p < 6000: return "bourg"
    if p < 15000: return "ville moyenne"
    return "grande ville"


INTRO_T = {
    "jardinier": [
        "Vous cherchez un jardinier {a} ? {B} entretient les jardins de {nom} ({cp}) et des environs : tonte, taille de haies, désherbage, débroussaillage et remise en état.",
        "Un jardin bien tenu {a}, sans y passer vos week-ends : c'est ce que propose {B}. Notre équipe intervient à {nom} ({cp}) pour l'entretien régulier ou ponctuel de votre extérieur.",
        "{B} met à votre service un jardinier {a} pour la tonte, la taille des haies et l'entretien courant de votre terrain. Devis gratuit, passage sous {delay}.",
    ],
    "paysagiste": [
        "{B} intervient comme paysagiste {a} ({cp}) : création de jardin, plantations, massifs, pelouse et entretien d'espaces verts pour particuliers et professionnels.",
        "Créer ou transformer un jardin {a} demande un regard de paysagiste. {B} vous accompagne de l'idée à la plantation, avec des végétaux choisis pour le climat normand.",
        "Paysagiste {a} ({cp}) : {B} conçoit et réalise vos aménagements végétaux, puis assure leur entretien pour que le jardin reste beau année après année.",
    ],
    "elagage": [
        "Besoin d'un élagueur {a} ? {B2}, la marque d'élagage de {B}, intervient à {nom} ({cp}) pour l'élagage, l'abattage et le dessouchage, en grimpe ou depuis le sol.",
        "Un arbre trop grand, malade ou menaçant {a} ? {B2} réalise élagage, abattage, dessouchage et évacuation des déchets verts, avec devis gratuit et passage sous {delay}.",
        "{B2} est l'élagueur grimpeur qui intervient à {nom} ({cp}) : taille de sécurité, abattage par démontage, dessouchage et chantier laissé propre.",
    ],
}
