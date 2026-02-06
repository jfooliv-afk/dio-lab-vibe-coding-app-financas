# 💸 App de Finanças Pessoais de João Francisco com Vibe Coding

PRD refinado no Copilot Web

```markdown

Você é um assistente financeiro pessoal amigável e educativo chamado FinançasAI.

Seu objetivo é ajudar os usuários a:
1. Registrar gastos e receitas em linguagem natural
2. Entender melhor suas finanças
3. Receber dicas personalizadas de economia
4. Definir e acompanhar metas financeiras

INSTRUÇÕES IMPORTANTES:

1. REGISTRO DE TRANSAÇÕES:
- Quando o usuário mencionar um gasto (ex: "gastei 50 no almoço"), extraia:
  - Valor (number)
  - Descrição (string)
  - Categoria sugerida (alimentação, transporte, moradia, lazer, saúde, educação, compras, contas, outros)
  - Tipo: "expense" para gastos, "income" para receitas
- Responda confirmando o registro com detalhes claros

2. CATEGORIZAÇÃO AUTOMÁTICA:
- Alimentação: restaurantes, supermercado, lanches, delivery
- Transporte: uber, ônibus, metrô, gasolina, estacionamento
- Moradia: aluguel, condomínio, luz, água, internet, gás
- Lazer: cinema, streaming, jogos, viagens, festas
- Saúde: farmácia, médico, academia, plano de saúde
- Educação: cursos, livros, material escolar
- Compras: roupas, eletrônicos, presentes
- Contas: cartão de crédito, empréstimos, seguros

3. DICAS FINANCEIRAS:
- Sempre que apropriado, ofereça dicas práticas e educativas
- Seja encorajador e positivo
- Use linguagem simples e acessível
- Sugira pequenas mudanças que fazem diferença

4. FORMATO DE RESPOSTA:
- Seja conciso mas amigável
- Use emojis moderadamente para tornar a conversa agradável
- Sempre confirme entendimento antes de registrar
- Ofereça feedback positivo pelo esforço de controlar finanças

5. EXTRAÇÃO DE DADOS:
Quando identificar uma transação, inclua no final da resposta um bloco JSON:
```json
{
  "action": "create_transaction",
  "data": {
    "amount": 50.00,
    "description": "Almoço no restaurante",
    "category": "alimentação",
    "type": "expense"
  }
}

```

Interações com o Lovable

< crie um APP de finanças pessoais com base no seguinte PRD:(Product Requirements Document): {PRD}

< Corrija esses problemas (corrigir todos os erros de build).
 
< poderia criar um icone em despesas para poder fazer alteração de valor ou data?(Pronto! Adicionei um ícone de lápis (editar) em cada transação que abre um modal para alterar o valor e a data).

< tabela de despesa por dia ainda não está separando o valor gasto em cada dia, está sendo realizado uma soma total , favor separar cada dia sua despesa correspondenrte. ( Ajustei "Despesas por Dia" para separar por data (YYYY-MM-DD) e listar os últimos 7 dias (cada dia com seu valor), evitando somar todas as "segundas" juntas).



Resulado final no Lovable:https://chat-financas-ease.lovable.app/auth 


<img width="1887" height="912" alt="image" src="https://github.com/user-attachments/assets/bc37080a-6849-4dbc-9c7b-cb9aa7a55033" />



# FinançasAI  
Assistente financeiro pessoal com inteligência artificial

O **FinançasAI** ajuda você a organizar sua vida financeira usando linguagem natural. Basta conversar — o app entende, registra e orienta.

---




## Funcionalidades Principais

### Registro de transações em linguagem natural  
O usuário pode registrar gastos e receitas escrevendo frases como:  
- “gastei 50 no almoço”  
- “recebi 1200 do freelas”  

O app extrai automaticamente:  
- Valor  
- Descrição  
- Categoria sugerida  
- Tipo (gasto ou receita)

---

### Categorização automática  
O FinançasAI identifica a categoria mais provável com base no texto.

Categorias reconhecidas:  
- Alimentação  
- Transporte  
- Moradia  
- Lazer  
- Saúde  
- Educação  
- Compras  
- Contas  

---

### Metas financeiras  
- Defina objetivos como “economizar R$300 este mês”  
- Acompanhe o progresso automaticamente  
- Receba sugestões para manter o ritmo

---

### Relatórios simples e claros  
- Visão geral de gastos e receitas  
- Destaques por categoria  
- Acompanhamento de metas

---

### Dicas personalizadas  
O app oferece orientações práticas e educativas, como:  
- Pequenas mudanças de hábito  
- Sugestões de economia  
- Alertas sobre padrões de gasto  

Sempre com linguagem simples, positiva e acessível.

---

## Experiência do Usuário

- Tom amigável e educativo  
- Respostas curtas e claras  
- Emojis moderados para tornar a conversa leve  
- Confirmação antes de registrar qualquer transação

---

## Interface de Login  
A tela inicial do app inclui:  
- Campos de email e senha  
- Botão “Entrar”  
- Link “Criar conta”  
- Destaque das funcionalidades principais: chat natural, metas claras e relatórios


O ajuste feito junto ao Copilot foi de suma importãncia para ajustar antes de passar para o Lovable,  devido aos poucos créditos.

Devido à poucos créditos não foi possível interagir mais vom o Lovable.

Conversa com a IA transcorreu de forma quase natural.


//Teste de commit para validar workflow Sync with Lovable.
//Código sincronizado com Lovable. Deploy automático será disparado.



