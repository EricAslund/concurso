const connection = require('../database/connection');

module.exports={
    async index(request, response) {
        const situacao = 'DISPONIVEL'
        const situacao2 = 'RESERVADA'

        // const [id] = await connection('correcoes').insert({
        //     item: "D020006H6",
        //     referencia: "upload/correcao_9859662.png",
        //     sequencial: "68300003130128",
        //     solicitacao: "2000000885",
        //     situacao: "DISPONIVEL",
        //     ordem: "1",
        // });
        // console.log(id);

        // const [Tid] = await connection('titulos').insert({
        //     titulo_id: "186",
        //     titulo: "Chave de correção 1",
        //     correcoes_id: id,

        // });
        // console.log(Tid);
        // await connection('opcoes').insert([{
        //     valor: "0",
        //     descricao: "Certo",
        //     titulo_id: Tid
        // },
        // {
        //     valor: "1",
        //     descricao: "Errado",
        //     titulo_id: Tid
        // }]);
         


        const correcoes = await connection('titulos')
            .join('correcoes', 'correcoes.id', '=', 'titulos.correcoes_id')
            .join('opcoes', 'opcoes.titulo_id', '=', 'titulos.id')
            // .where('correcoes.situacao', situacao).andWhere(MIN('correcoes.ordem'))
            .select(
                '*');

    //     if (correcoes = null) {
    //         const correcoes_reservadas = await connection('titulos')
    //             .join('correcoes', 'correcoes.id', '=', 'titulos.correcoes_id')
    //             .join('opcoes', 'opcoes.titulo_id', '=', 'titulos.id')
    //             .where('correcoes.situacao', situacao2).andWhere(MIN('correcoes.ordem'))
    //             .select(
    //                 '*');
    //     }
    //     if (correcoes_reservadas = null) {
    //         return response.status(400).json({
    //             data: null,
    //             situacao: "ERRO",
    //             tipo: "SEM_CORRECAO",
    //             descrição: "Não existem mais correções disponíveis"
    //         })

    //     } else {

    //         return response.json(correcoes_reservadas);
    //     }

        return response.json(correcoes);

    },
    async alter(request, response) {
    const {id ,valor} = request.boby;

    const correcao = await connection('titulos')
                .join('correcoes', 'correcoes.id', '=', 'titulos.correcoes_id')
                .join('opcoes', 'opcoes.titulo_id', '=', 'titulos.id')
                .where()

    }
};