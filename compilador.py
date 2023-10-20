import re

# Leitura do .char e separacao de linha
aux = ""

openChar = open("./charisma.char", "r")

char = openChar.readlines()

for linha in char:
    aux += linha
open("./intermediario.txt", 'w+')

charSplit = aux.replace("\n", "")
charSplit = re.split(r'[;:]', charSplit)

# transformar intermediario
for i in charSplit:
    if "show" in i:
        arg = i.split("(")[1].split(")")[0]
        if arg[0] == '"' and arg[- 1] == '"':
            ler = arg[1:-1]
            openTxt = open("./intermediario.txt", "a")
            openTxt.write('print "{}";'.format(ler))
        else:
            ler = arg
            openTxt = open("./intermediario.txt", "a")
            openTxt.write('print {};'.format(ler))
    elif "if" in i:
        arg = i.split("(")[1].split(")")[0]
        if arg[0] == '"' and arg[- 1] == '"':
            ler = arg[1:-1]
            openTxt = open("./intermediario.txt", "a")
            openTxt.write('if "{}";'.format(ler))
        else:
            ler = arg
            openTxt = open("./intermediario.txt", "a")
            openTxt.write('if {};'.format(ler))