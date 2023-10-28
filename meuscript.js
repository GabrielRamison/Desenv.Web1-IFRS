$(document).ready(function(){
    /*alert("Olá Mundo!");
    if(confirm("Vai apertar no OK ou no Cancelar?")){
        alert("Apertou no OK");
    }else{
        alert("Apertou no cancelar!");
    }
    */
    $("#salvar").click(function(){
        //nome = $("#nome").val();
        //nasc = $("#nasc").val();
        //uf = $("#uf").val();
        //alert("O nome da pessoa é " + nome + "e a data de nascimento é " + nasc);
        //alert(uf);

        estado = $("#estado").val();
        sigla = $("#sigla").val();
        opcao = "<option value='"+sigla+"'>"+estado+"</option>";
        $("#uf").append(opcao);
    });

});
