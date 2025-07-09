# 🐛 Projeto Node.js/TypeScript com Problemas Intencionais

**Projeto criado por IA para treinamento em resolução de problemas**

Este projeto foi intencionalmente desenvolvido com diversos problemas para servir como material de treinamento para desenvolvedores Node.js/TypeScript. Contém erros de configuração, bugs de código, vulnerabilidades de segurança e más práticas de desenvolvimento.

## 🎯 Objetivo

Identificar e corrigir todos os problemas presentes no projeto, transformando-o em uma aplicação bem estruturada, segura e seguindo boas práticas de desenvolvimento.

## 📋 Lista de Problemas Conhecidos

### 1. Configuração do Projeto
- [ ] TypeScript configurado como dependência regular
- [ ] Falta das dependências `@types`
- [ ] Scripts de build/start incorretos
- [ ] Strict mode desativado no tsconfig.json

### 2. Segurança
- [ ] Middleware de JSON faltando
- [ ] CORS não configurado
- [ ] Falta de validação de entrada
- [ ] Rotas sem autenticação

### 3. Tratamento de Erros
- [ ] Middleware de erro não implementado
- [ ] Falta tratamento de erro nas rotas
- [ ] Operações não atômicas no serviço

### 4. Arquitetura
- [ ] Tipos `any` sendo utilizados
- [ ] Falta de interfaces para serviços
- [ ] Separação inadequada de responsabilidades
- [ ] Exportação incorreta de tipos

### 5. Funcionalidades
- [ ] Falta paginação na listagem
- [ ] Campo `updatedAt` nunca atualizado
- [ ] Propriedades opcionais sem tratamento
- [ ] Valor padrão não definido para `completed`

## 🛠️ Instalação

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/mtrodrigo/problemas-node-typescript.git
   cd problemas-node-typescript