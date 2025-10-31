import dados from "../models/dados.js";
const {pocoes} = dados;

const getAllPocoes = (req, res) => {

    let resultado = pocoes;

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });

}
const getPocaoById = (req, res) => {
    let id = req.params.id;
    id = parseInt(id);
    const pocaoid = pocoes.find(pocao => pocao.id === id);

    if(pocaoid){
        res.status(200).json(pocaoid);
    } else {
        res.status(404).json({
            erro: `A poção com o id ${id} não foi encontrada.`
        });
    }                           
}

export{getAllPocoes,getPocaoById}