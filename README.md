# Jest Demo

Projeto mínimo para demonstrar como usar o Jest para testes em Node.js.

Pré-requisitos:

- Node.js (inclui npm) instalado no sistema. Baixe em https://nodejs.org/

Instalação e execução (PowerShell / Windows):

```powershell
cd C:\Users\lucas\OneDrive\Documentos\code\jestTeste
npm install
npm test
```

Observação: tentei executar os testes no ambiente do assistente, mas o comando `npm` não foi encontrado (ambiente sem Node/npm). Rode os comandos acima no seu computador após instalar o Node.js.

Arquivos:
- `src/sum.js` - função simples para somar dois números
- `tests/sum.test.js` - testes que usam Jest

Limpeza antes de gravar a tela

Se você gerou relatórios de coverage antes e quer uma pasta limpa para a gravação, apague a pasta `coverage` localmente com:

```powershell
# no PowerShell ou cmd na pasta do projeto
rmdir /s /q coverage
```

Ou no PowerShell (com cmdlets):

```powershell
Remove-Item -Recurse -Force .\coverage
```

Roteiro rápido para a apresentação (vermelho -> verde):
1. Rodar `npm run test:demo` (vai mostrar falha vermelha)
2. Abrir `tests/failing.demo.test.js` e trocar o `5` por `4` no `expect` (ou editar `src/sum.js` para retornar 5)
3. Rodar `npm run test:demo` novamente e mostrar o teste passando (verde)

