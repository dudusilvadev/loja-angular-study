export interface Product{
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Blusa feminina',
    price: 59.99,
    descripption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 2,
    name: 'Short Feminino',
    price: 61.99,
    description: 'Quibusdam autem reiciendis porro voluptatum soluta nemo animi, commodi temporibus qui ipsa accusamus similique quasi, libero labore fuga iste. In, impedit sequi.'
  },
  {
    id: 3,
    name: 'Blusa Masculino',
    price: 39.99,
    descripption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    id: 4,
    name: 'Short Masculino',
    price: 52.99,
    description: 'Quibusdam autem reiciendis porro voluptatum soluta nemo animi, commodi temporibus qui ipsa accusamus similique quasi, libero labore fuga iste. In, impedit sequi.'
  }
];
