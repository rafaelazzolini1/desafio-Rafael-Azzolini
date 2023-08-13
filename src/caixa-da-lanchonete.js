class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens) {
        const CARDAPIO = {
            cafe: 3,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
        const nomes = [];
        const quantidades = [];
        let total = 0;

        if (metodoDePagamento !== 'dinheiro' && metodoDePagamento !== 'debito' && metodoDePagamento !== 'credito') return "Forma de pagamento inválida!";
        if (itens == '') return "Não há itens no carrinho de compra!";

        function validaMetodoPagamento(metodoDePagamento, total) {
            if (metodoDePagamento === 'credito') {
                total = total + (total * 0.03);

            } else if (metodoDePagamento === 'dinheiro') {
                total = total - (total * 0.05);
            }
            return total.toFixed(2).replace('.', ',');
        }

        itens.map(item => {
            const [nome, quantidade] = item.split(',');
            nomes.push(nome);
            quantidades.push(quantidade);
        });

        const validaCafe = nomes.includes('cafe');
        const validaChantily = nomes.includes('chantily');
        if (!validaCafe && validaChantily) return "Item extra não pode ser pedido sem o principal";

        const validaSanduiche = nomes.includes('sanduiche');
        const validaQueijo = nomes.includes('queijo');
        if (!validaSanduiche && validaQueijo) return "Item extra não pode ser pedido sem o principal";

        for (let i = 0; i < quantidades.length; i++) {
            if (quantidades[i] < 0) return 'Quantidade de item inválido!';

            switch (nomes[i]) {
                case 'cafe':
                    total += quantidades[i] * CARDAPIO.cafe;
                    break;

                case 'chantily':
                    total += quantidades[i] * CARDAPIO.chantily;
                    break;

                case 'suco':
                    total += quantidades[i] * CARDAPIO.suco;
                    break;

                case 'sanduiche':
                    total += quantidades[i] * CARDAPIO.sanduiche;
                    break;

                case 'queijo':
                    total += quantidades[i] * CARDAPIO.queijo;
                    break;

                case 'salgado':
                    total += quantidades[i] * CARDAPIO.salgado;
                    break;

                case 'combo1':
                    total += quantidades[i] * CARDAPIO.combo1;
                    break;

                case 'combo2':
                    total += quantidades[i] * CARDAPIO.combo2;
                    break;

                default:
                    return "Item inválido!";

            }

        }

        if (total == 0) return "Quantidade inválida!";
        return 'R$ ' + validaMetodoPagamento(metodoDePagamento, total);

    }

}

export { CaixaDaLanchonete };

