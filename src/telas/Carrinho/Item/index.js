import React, { useState } from "react";

import { Text, View } from "react-native";

import estilos from "./estilos";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco * quantidadeInicial);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQantidade) => {
        setQuantidade(novaQantidade);
        calcularTotal(novaQantidade);
    }

    const calcularTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    return <>
        <View style={estilos.informacao} >
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.descricao}>{descricao}</Text>
            <Text style={estilos.preco}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(preco)
            }</Text>
        </View>

        <View style={estilos.carrinho}>
            <View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Quantidade:</Text>
                    <CampoInteiro estilos={estilos.quantidade} valor={quantidade} acao={atualizaQuantidadeTotal} />
                </View>
                <View style={estilos.valor}>
                    <Text style={estilos.descricao}>Total:</Text>
                    <Text style={estilos.preco}>{
                        Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(total)
                    }</Text>
                </View>
            </View>
            <Botao valor="Remover do carrinho" acao={() => { }} />
        </View>

        <View style={estilos.divisor} />
    </>
}