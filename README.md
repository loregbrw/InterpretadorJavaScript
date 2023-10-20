Função show():

Descrição: A função show() é usada para imprimir mensagens na saída. Ela pode imprimir strings, expressões matemáticas ou valores.
Sintaxe:
show(mensagem) - Imprime a mensagem fornecida como argumento.
Exemplos:
'''
    show("Hello world"); - Imprime "Hello world" na saída.
    show(2 + 3 + 5); - Avalia a expressão 2 + 3 + 5 (resultando em 10) e imprime o valor 10 na saída.
'''

Instrução if:

Descrição: A instrução if é usada para controlar o fluxo do programa com base em uma condição. Se a condição fornecida for verdadeira, o bloco de código dentro do if será executado.
Sintaxe:
if (condição): - Inicia um bloco condicional com base na condição especificada.
Exemplo:
'''
    if (10 < 18):
        show("B");
'''
A condição 10 < 18 é verdadeira, então o bloco de código dentro do if é executado, e "B" é impresso na saída.
'''
    show("Hello world");  // Imprime "Hello world"

    show(2 + 3 + 5);     // Calcula 2 + 3 + 5 (resultando em 10) e imprime 10

    show("A");            // Imprime "A"
    show("B");            // Imprime "B"
    show("C");            // Imprime "C"
    show("A");            // Imprime "A"

    if (10 < 18):
        show("B");        // A condição é verdadeira, então "B" é impresso

    if (20 < 18):
        show("C");        // A condição é falsa, nada é impresso
'''