
export function montarProva(p, q, id) {
  var questoes = [];
  q.map(
    i => {
      if(i.idProva == p.id){
        questoes.push(i);
      }
    }
  );


  var provaEnviada = {};
  provaEnviada.aluno_id = id;
  provaEnviada.prova_id = p.id;
  provaEnviada.questaoRespondidaDTOS = [];

  questoes.map(
    q => {
      provaEnviada.questaoRespondidaDTOS.push(
        {
          id_questao: q.id,
          alternativa_usuario: q.respostaUsuario
        }
      )
    }
  );

  return provaEnviada;
}