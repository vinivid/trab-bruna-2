import Produto from "../models/Produto.js";

export const getAll = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(500).json({ message: "Error em buscar produtos.", error: error.message });
  }
};

export const create = async (req, res) => {
  const { nome, url_img, desc, val } = req.body;
  if (!nome) {
    return res.status(400).json({ message: "Campo 'nome' é necessário." });
  }

  try {
    const produto = await Produto.create({ nome, url_img, desc, val });
    return res.status(201).json(produto);
  } catch (error) {
    return res.status(500).json({ message: "Erro criando produto.", error: error.message });
  }
};

export const remove = async (req, res) => {
  const { nome } = req.params;

  try {
    const deleted = await Produto.destroy({ where: { nome } });
    console.log("Got here");
    if (!deleted) {
      return res.status(404).json({ message: "Produtot não encontrado." });
    }

    return res.status(200).json({ message: "Produto deletado com sucesso." });
  } catch (error) {
    return res.status(500).json({ message: "Erro deletando produto.", error: error.message });
  }
};
