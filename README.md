readme_content = """
# 🔐 Criptografia Personalizada com Base de Caracteres e MD5

Projeto experimental de criptografia criada por **Andre Luiz**, com foco em aprendizado e testes de manipulação de caracteres, geração de chaves e hashing.

---

## 🧪 Lógica Geral da Criptografia

Este projeto implementa um método de criptografia personalizada que segue as seguintes etapas principais:

### ✅ Etapas da Criptografia:

1. **Base de Caracteres (Tabela Personalizada):**  
   O sistema usa uma tabela de base de caracteres (`baseChar`) onde cada caractere tem um valor numérico único.

2. **Definição da Chave (Key):**  
   O usuário fornece uma chave (exemplo: `"abacate"`).  
   O código transforma cada caractere da chave no valor numérico correspondente da `baseChar`.

3. **Transformação da Senha (pulo k5):**  
   Para cada caractere da senha original (exemplo: `"abcd@123"`), o código aplica um deslocamento (pulo de +5 posições no array ordenado da `baseChar`), criando uma **nova versão da senha**.

4. **Multiplicação de Índices:**  
   Para cada caractere da nova senha transformada, ele pega o índice da `baseChar` correspondente e multiplica com o índice de cada caractere da chave.  
   O resultado final é um número muito maior, combinando cada caractere da senha com todos os da chave.

5. **Concatenação dos Resultados:**  
   Todos os resultados das multiplicações são transformados em uma string gigante (concatenada).

6. **Conversão em Base64:**  
   Como forma de codificação intermediária, o código converte a string resultante para Base64.

7. **Hash Final com MD5:**  
   Por fim, a string original (antes do Base64) também passa por um hashing com MD5, gerando um hash curto e fixo.

---

## 📌 Exemplo de Uso:

```javascript
const chave = "abacate";
const senha = "abcd@123";
const pulo = 5;

cript(baseChar, chave, senha, pulo);


⚠️ Importante:
Este projeto é apenas para fins de estudo, não é recomendado para uso em produção real, pois o MD5 sozinho já não é seguro atualmente.
Mas, a combinação de múltiplos passos como "salt + key + múltiplas transformações", torna a criptografia mais resistente a ataques simples do que o MD5 puro.
