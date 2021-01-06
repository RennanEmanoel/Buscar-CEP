function iniciar(){
    Swal.fire('Digite seu CEP');
    $("#tabela").hide();
}
function buscar() {
    var cep = document.getElementById("numer").value;
    var local = "https://viacep.com.br/ws/"+ cep +"/json/";

    if(cep.length != 9 ){
        Swal.fire({
            icon: 'error',
            title: 'Erro',
            text: 'Tipo de CEP inválido!!',
            footer: 'Tente Novamente',
          })
    }

    $.ajax({
        type: "GET",
        url: local,
        success: function(response){
            document.getElementById("01").innerHTML = response.logradouro;
            document.getElementById("02").innerHTML = response.bairro;
            document.getElementById("03").innerHTML = response.localidade;
            document.getElementById("04").innerHTML = response.uf;
            document.getElementById("05").innerHTML = response.ddd; 
            $("#tabela").show();

        }
    })
}