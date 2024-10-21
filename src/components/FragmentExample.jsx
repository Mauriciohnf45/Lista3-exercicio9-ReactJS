import React from 'react';

const FragmentExample = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <>
      <h2>Exemplo de Título</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <p>Este é um parágrafo de exemplo que acompanha a lista de itens.</p>
    </>
  );
};

export default FragmentExample;
