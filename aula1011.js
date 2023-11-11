$(document).ready(function(){
    $('#salvar').click(function(){
        modelo = $("#modelo").val();
        marca = $("#marca").val();
        ano = $("#ano").val();
        preco = $("#preco").val();
        linha = "<tr><td>"+modelo+"</td><td>"+marca+"</td><td>"+ano+"</td><td>"+preco+"</td></tr>";
        $("#relatorio-veiculos tbody").append(linha);
    })

    $("#excluir-tudo").click(function(){
       // $("#relatorio-veiculos tbody").empty();
       $("#relatorio-veiculos tbody tr").remove();
    })
})
