var tbody = document.getElementById("tbody");

function CriarTr() {
    for (let index = 0; index < 15; index++) {
        var tr = document.createElement('tr');
        var tdProduto = MontaTD("Produto");
        var tdQuant = MontaTD(0);
        var tdValor = MontaTD(0);
        var tdTotal = MontaTD(0);
        

        tr.appendChild(tdProduto);
        tr.appendChild(tdQuant);
        tr.appendChild(tdValor);
        tr.appendChild(tdTotal);
        tbody.appendChild(tr);
    }
}

function MontaTD(dado) {
    var td = document.createElement("td");
    td.classList.add("tdTabela");
    td.textContent = dado;
    return td;
}