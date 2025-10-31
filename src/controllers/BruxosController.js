import dados from "../models/dados.js";   
const{ bruxos } = dados;

const getAllBruxos  = (req, res) => {
    let resultado = bruxos; 

    res.status(200).json({
        total: resultado.length,    
        data: resultado,
    });
};

const getBruxoById = (req, res) => {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
        return res.status(400).json({ erro: 'ID inválido.' });
    }

    const bruxoid = bruxos.find(bruxo => bruxo.id === id);

    if (bruxoid) {
        return res.status(200).json(bruxoid);
    }

    return res.status(404).json({ erro: `O bruxo com o id ${id} não foi encontrado.` });
};

export { getAllBruxos, getBruxoById };