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
    let id = req.params.id;
    id = parseInt(id);
    const bruxoid = bruxos.find(bruxo => bruxo.id === id);  

    if(bruxoid){
        res.status(200).json(bruxoid);  
    } else {
        res.status(404).json({erro: `O bruxo com o id ${id} não foi encontrado.`});
    }
}

export { getAllBruxos, getBruxoById };