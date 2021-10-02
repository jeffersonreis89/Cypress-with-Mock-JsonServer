# Cypress-with-Mock-JsonServer

## Como rodar o projeto

Instale a dependência do json-server
```
npm install -f json-server
```

Instale o cypress

```
npm install -g cypress
```

Inicie o server mock
```
json-server --watch .\db.json
```

Rode o cypress
```
npm run cypress:open
```
