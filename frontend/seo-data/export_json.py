import json, zlib, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import geo as B
import local
from geo import *
out={}
for c in B.communes:
    nom,slug=c["nom"],c["slug"]; ctx=B.CONTEXT[c["reg"]]
    for svc in B.SERVICES:
        S=B.SERVICES[svc]
        h=zlib.crc32((slug+svc+'i').encode())%3
        intro=B.INTRO_T[svc][h].format(a=a_(nom),nom=nom,cp=c["cp"],B=B.BRAND,B2=B.BRAND2,delay=B.DELAY)
        dist="Caen" if nom=="Caen" else f"à environ {c['km']} km {c['dir']} de Caen"
        if nom=="Caen":
            geo=("Caen est le point de départ de nos interventions : nous connaissons les quartiers, du centre-ville à Vaucelles, Venoix, Saint-Gilles, la Guérinière ou le Chemin Vert, et leurs contraintes d'accès.")
        else:
            geo=(f"{nom} ({c['cp']}), {B.pop_class(c['pop'])} de {B.fr(c['pop'])} habitants, se situe {dist}, dans le secteur {B.REGION_LABEL[c['reg']]}. Notre équipe est basée à Caen : le déplacement est simple à organiser et intégré au devis.")
        special=local.LOCAL.get(slug,"")
        k=zlib.crc32((slug+svc).encode()); its=S["items"]
        first=its[k%5]; second=its[(k+2)%5]
        fk="tree" if svc=="elagage" else "hedge"
        def pick(key,off=0):
            opts=[ctx[key],B.CONTEXT_ALT[c["reg"]][key]]; return opts[(k>>(5+off))&1]
        focus=(ctx[fk],B.CONTEXT_ALT[c["reg"]][fk])[(k>>8)&1]
        pn={"petite commune":f"À {nom}, les terrains sont souvent généreux : nous regroupons les travaux sur une même visite pour limiter le coût.",
            "bourg":f"Dans un bourg comme {nom}, les jardins sont variés, du pavillon aux anciennes longères. Nous adaptons le matériel à chaque accès.",
            "ville moyenne":f"{nom} compte de nombreux jardins de particuliers, mais aussi des copropriétés et des professionnels : nous réalisons aussi des contrats d'entretien réguliers.",
            "grande ville":f"Dans une ville de la taille de {nom}, la demande est forte et les contraintes (voisinage, stationnement, évacuation) sont à anticiper : nous planifions chaque chantier."}[B.pop_class(c["pop"])]
        rows=B.PRICES[svc]; sub=[rows[(k+i)%len(rows)] for i in range(min(4,len(rows)))]; sub.sort(key=lambda r:rows.index(r))
        minutes=max(5,round(c["km"]*1.35/55*60)) if nom!="Caen" else 0
        trip=(f"Depuis notre base de Caen, comptez environ {minutes} minutes de route pour rejoindre {nom}." if minutes else "Notre base est à Caen : aucun frais de déplacement n'est à prévoir sur la commune.")
        nbtxt=", ".join(f"{o['nom']} ({round(B.km(c['pos'],o['pos']))} km)" for o in c["near"][:4])
        how=(f"Appelez le {B.PHONE_DISPLAY} ou écrivez-nous : nous établissons un devis gratuit, puis nous intervenons sous {B.DELAY} une fois le devis accepté. {trip} Les déchets verts sont évacués et le chantier est laissé propre.")
        lq={"elagage":(f"Intervenez-vous {a_(nom)} pour un abattage d'arbre ?",f"Oui. {B.BRAND2} intervient {a_(nom)} ({c['cp']}) pour l'élagage, l'abattage et le dessouchage. Le déplacement depuis Caen est compris dans le devis et le délai d'intervention est de {B.DELAY}."),
            "jardinier":(f"Un jardinier peut-il passer {a_(nom)} rapidement ?",f"Oui. Après acceptation du devis, nous intervenons {a_(nom)} ({c['cp']}) sous {B.DELAY}. Pour un entretien régulier, nous fixons un rythme de passage adapté à votre terrain."),
            "paysagiste":(f"Créez-vous des jardins {a_(nom)} ?",f"Oui. Nous réalisons la conception, les plantations et l'entretien {a_(nom)} ({c['cp']}) et dans les communes voisines. Le premier échange et le devis sont gratuits.")}[svc]
        q2=(f"À quelle distance de Caen se trouve {nom} ?",("Caen est notre commune de départ." if nom=="Caen" else f"{nom} est à environ {c['km']} km de Caen, {c['dir']}, soit environ {minutes} minutes de route. Elle fait partie du secteur {B.REGION_LABEL[c['reg']]} que nous desservons régulièrement."))
        faq=[lq,q2,B.FAQ_COMMON[svc][k%3]]
        h1=f"{S['h']} {a_(nom)} ({c['cp']})"
        title=f"{h1} | {B.BRAND}"
        if len(title)>62: title=f"{S['h']} {a_(nom)} | {B.BRAND}"
        desc=f"{S['h']} {a_(nom)} ({c['cp']}) : {', '.join(t.lower() for t,_ in S['items'][:3])}. Devis gratuit, intervention sous {B.DELAY}."
        out[f"{svc}-{slug}"]=dict(svc=svc,slug=slug,nom=nom,cp=c["cp"],pop=c["pop"],km=c["km"],dir=c["dir"],region=B.REGION_LABEL[c["reg"]],
          title=title,desc=desc,h1=h1,intro=intro,geo=geo,special=special,popNote=pn,
          titles=", ".join(t.lower() for t,_ in its),items=[list(first),list(second)],
          garden=[pick('garden',0),focus,pick('soil',1)],tip=ctx["tip"],prices=[list(r) for r in sub],
          fiche=[["Commune",f"{nom} ({c['cp']})"],["Habitants",B.fr(c['pop'])],["Secteur",B.REGION_LABEL[c['reg']]],
                 ["Distance de Caen","0 km" if nom=="Caen" else f"{c['km']} km, {c['dir']}"],["Communes voisines",nbtxt],["Délai d'intervention",f"{B.DELAY} après acceptation du devis"]],
          how=how,faq=[list(x) for x in faq],near=[dict(slug=o["slug"],nom=o["nom"],cp=o["cp"],km=round(B.km(c["pos"],o["pos"]))) for o in c["near"]],
          label=S["h"])
OUT=sys.argv[1] if len(sys.argv)>1 else "."
json.dump(out,open(os.path.join(OUT,"communes_content.json"),"w",encoding="utf-8"),ensure_ascii=False)
print(len(out))

cities=[]
for c in sorted(B.communes,key=lambda c:(c["km"],c["nom"])):
    if c["slug"]=="caen": continue
    d=out[f"jardinier-{c['slug']}"]
    cities.append(dict(slug=c["slug"],name=c["nom"],code=c["cp"],distance=f"{c['km']} km de Caen",population=f"{B.fr(c['pop'])} habitants",sector=B.REGION_LABEL[c["reg"]],intro=d["geo"]))
json.dump(cities,open(os.path.join(OUT,"cities.json"),"w",encoding="utf-8"),ensure_ascii=False)
print(len(cities),"cities")
